
(function( win, doc ) {

    var errors     = [],
        errorCount = 0,
        canParse   = Function().toString && /bkg/.test( function() { bkg; } );

    var NOW,
        UNDEF;

    var LAST_CLIENT_EVENT;

    var SERVER_ASKED_TO_BLOCK = readCookie( 'error_catcher' ) === 'kill';

    var SHOULD_BLOCK = function( error ) {

        return SERVER_ASKED_TO_BLOCK || error.index > 2;

    };

    var ERROR_TRANSPORT = {

        URL: '/js_errors',
        METHOD: 'POST',
        MAX_STACK_LINES: 12,
        MAX_STACK_LENGTH: 900,
        MAX_FUNCTION_BODY_LENGTH: 150,
        STACK_TRUNCATED_TEXT: '(... truncated!)',

        SEND_ONLY_IF: function() {

            return !!doc.getElementById( 'req_info' );

        },

        IS_BOT: function( message ) {

            return getKey( '$u.b01' ) || getKey( 'booking_extra.bot' ) || /^Not implemented/.test( message );

        },

        THIRD_PARTY: {

            ADD_PREFIX: function( thirdPartyKey ) {

                return '3rd_' + thirdPartyKey + ': ';

            },

            SOURCE_MAPPING: {

                'http://cond01.etbxml.com/cond/common.js': 'cheapHotelFinder',
                'fls.doubleclick.net/activity': 'google_floodlight',
                'google-analytics.com/analytics.js': 'google_analytics_universal',
                'doubleclick.net/dc.js': 'google_analytics_classic',
                'gstatic': 'google_maps',
                'google': 'google',
                'clicktale': 'clicktale',
                'criteo': 'criteo',
                'usabilla': 'usabilla',
                'utag.js': 'teallium',
                'wac.edgecastcdn.net': 'whilokii',
                'wizebar': 'wizebar',
                'facebook': 'facebook',
                'superfish': 'superfish',
                'jollywallet': 'jollywallet',
                'blockpage': 'blockpage',
                'datafastguru': 'datafastguru',
                'griddy': 'griddy',
                'showpass': 'showpass',
                'mscimg': 'cdet',
                'triggit': 'triggit',
                'autotag': 'autotag',
                'conduit': 'conduit',
                'mzroute': 'mzroute',
                'twitter': 'twitter',
                'cloudfront.net/scripts/ld.js': 'cloudfront'

            },

            MESSAGE_MAPPING: {

                'npobject': 'GeckoPlugin',
                'dealply': 'DealPlyChromePlugin',
                'ns_error_xpc': 'GeckoPlugin',
                '_watcherready': 'IEPlugin',
                '__fCheck': 'MobilePlugin',
                '__iactive': 'MobilePlugin',
                '_watcherReady': 'AvastPlugin',
                'wit_OnDocumentLoad': 'WitmainFirefoxPlugin',
                'wit_OnBeforeDocumentLoad': 'WitmainFirefoxPlugin',
                'KasperskyLab': 'KasperskyPlugin',
                'SetReturnValue': 'FlashPlugin'

            },

            STACK_TRACE_MAPPING: {

                'chrome-extension://': 'ChromePlugin',
                'kw__injectedscriptmin': 'UnknownPlugin',
                'datafastguru': 'datafastguru',
                '__fCheck': 'MobilePlugin',
                '__iactive': 'MobilePlugin',
                '__dxutils': 'MobilePlugin',
                'npobject': 'GeckoPlugin',
                '_watcherReady': 'AvastPlugin',
                'wit_OnDocumentLoad': 'WitmainFirefoxPlugin',
                'wit_OnBeforeDocumentLoad': 'WitmainFirefoxPlugin',
                'KasperskyLab': 'KasperskyPlugin',
                'SetReturnValue': 'FlashPlugin',
                'FO_ADJUSTSCALE': 'GeckoPlugin',
                'determineyourroad': 'determineyourroad'

            }

        }

    };

    var ERROR_DATA_COLLECTION = {

        /*
         * If the property redefined via defineError is a function we're always passing as arguments: message, url, line, column and error.
         * Same arguments that get passed to the onerror handler.
         */

        invalidate_cache: function() {
            return +new Date;
        },

        error: function( message, url, line, column, error, caller ) {
            if(typeof(this._errorObj) === 'undefined' ) {
                this._errorObj = this.getErrorObj(message, url, line, column, error, caller);
            }
            return this._errorObj.asString;
        },

        error_type: function( message, url, line, column, error, caller ) {
            if(typeof(this._errorObj) === 'undefined' ) {
                this._errorObj = this.getErrorObj(message, url, line, column, error, caller);
            }
            return this._errorObj.type;
        },

        file_name: function( message, url, line, column, error, caller ) {
            if(typeof(this._errorObj) === 'undefined' ) {
                this._errorObj = this.getErrorObj(message, url, line, column, error, caller);
            }
            return this._errorObj.fileName;
        },

        function_name: function( message, url, line, column, error, caller ) {
            if(typeof(this._errorObj) === 'undefined' ) {
                this._errorObj = this.getErrorObj(message, url, line, column, error, caller);
            }
            return this._errorObj.functionName;
        },


        url: function( message, url, line, column, error ) {
            return this.getErrorSourceFromStack( error && error.stack ) || this.getErrorSource( message, url ) || win.document.location.href.split( '?' )[ 0 ];
        },

        lno: function( message, url, line, column, error ) {
            return Number( line ) ? line : this.getFileOffsetFromError( error ).line || this.UNDEF;
        },

        cno: function( message, url, line, column, error ) {
            return Number( column ) ? column : this.getFileOffsetFromError( error ).column || this.UNDEF;
        },

        pid: function() {

            return getKey( 'booking_extra.pageview_id' ) ||
                   getKey( 'booking.PAGEVIEW_ID' )       ||
                   getKey( 'BOOKING_PAGEVIEW_ID' )       ||
                   getKey( 'booking.env.pageview_id' )   ||
                   getKey( '$u.js_data.PAGEVIEW_ID' )    ||
                   '(unknown_page_id)';

        },

        stid: function() {
            return getKey( 'booking_extra.b_stid' );
        },

        ch: function() {
            return getKey( 'booking_extra.b_ch' );
        },

        ref_action: function() {
            return getKey( 'booking_extra.b_action' );
        },

        ref_hash: function() {
            return location.hash;
        },

        stype: function() {
            return getKey( 'booking_extra.b_site_type_id' );
        },

        aid: function() {
            return getKey( 'booking_extra.b_aid' );
        },

        lang: function() {
            return getKey( 'booking_extra.b_lang_for_url' );
        },

        last_client_event: function() {
            return LAST_CLIENT_EVENT;
        },

        scripts: function() {

            var page,
                pageData,
                str = '{',
                scripts = getKey( 'booking.env.scripts_tracking' ) || {};

            for ( page in scripts ) if ( scripts.hasOwnProperty( page ) ) {

                pageData = scripts[ page ];
                str += '"' + page + '":{"loaded":' + !!pageData.loaded + ',"run":' + !!pageData.run + '},';

            }

            str = str.slice( 0, -1 ) + '}';

            if ( str.length === 1 ) {
                return '';
            }

            return str;

        },

        since: function() {

            var timer = win.PageLoadTimer;

            return timer ? NOW - timer.start : UNDEF;

        },

        ready: function() {

            var timer = win.PageLoadTimer;

            if ( ! timer ) {
                return UNDEF;
            }

            return timer.document_ready - timer.start ? timer.document_ready - timer.start : 0;

        },

        loaded: function() {

            var timer = win.PageLoadTimer;

            if ( ! timer ) {
                return UNDEF;
            }

            return timer.window_load - timer.start ? timer.window_load - timer.start : 0;

        },

        info: function() {

            var info = doc.getElementById( 'req_info' );

            return info ? info.innerHTML : UNDEF;

        },

        errc: function() {
            return this.error.index + 1;
        },

        errp: function() {

            var currentIndex,
                previousIndex,
                previous;

            if ( ! this.error ) {
                return 0;
            }

            currentIndex  = this.error.index;
            previousIndex = currentIndex - 1;

            if ( currentIndex === 0 || previousIndex < 0 ) {
                return 0;
            }

            previous = this.errors[ previousIndex ];

            return previous ? previous.index + 1 : 0;

        },

        stack_trace: function( message, url, line, column, error, caller ) {

            return getErrorStackTrace( error );

        }

    };

    var E_ = win.E_ = function( error, fnc ) {

        onBookingError( error.message, '', 0, 0, error, fnc );

        E_.skip = true;
        throw error;

    };

    E_.a = function( args ) {
        return [].slice.apply( args );
    };

    var onBookingError = win.onBookingError = win.onerror = function() {

        if ( E_.skip === true ) {
            E_.skip = false;
            return;
        }

        if ( win.onBookingError.skip === true ) {
            win.onBookingError.skip = false;
            return;
        }

        var args = [].slice.apply( arguments ),
            ctxt = this,

            call = function() {

                onError.apply( ctxt, args );

            };

        args.push( getFunctionCaller( arguments ) );

        if ( ERROR_TRANSPORT.SEND_ONLY_IF() ) {

            call();

        } else {

            setTimeout( call, 100 );

        }

    };

    /*
     * Enabling plugins
     */

    win.onerror.plugins = true;

    win.onerror.defineError = function( ERROR_DATA_COLLECTION_PLUGIN ) {

        // We don't want to let random keys to be reported. We must control this.
        // That's why the extend function only allows key overwriting not addition.
        extend( ERROR_DATA_COLLECTION, ERROR_DATA_COLLECTION_PLUGIN );

    };

    win.onerror.defineTransport = function( ERROR_TRANSPORT_PLUGIN ) {

        extend( ERROR_TRANSPORT, ERROR_TRANSPORT_PLUGIN );

    };

    win.onerror.errorCollection = function() {

        return errors.slice();

    };

    win.onerror.report = function( message, group, path ) {

        var fnc = function() {};

        fnc.__bookingGroupName__ = group;

        win.onerror( message, path || '', 0, 0, {}, fnc );

    };


    /*
     * Error phases
     */

    function onError() {

        var error = { index: errorCount++ },
            args  = [].slice.apply( arguments );

        if ( SHOULD_BLOCK( error ) ) {
            return false;
        }

        errors.push( error );

        collectData( error, args );

        LAST_CLIENT_EVENT = UNDEF;

        send( error );

        return false;

    }

    function collectData( error, args ) {

        var context = {

                UNDEF:                    UNDEF,
                ERROR_TRANSPORT:          ERROR_TRANSPORT,

                errors:                   errors,
                error:                    error,

                getErrorStackTrace:       getErrorStackTrace,
                getFunctionCaller:        getFunctionCaller,
                getErrorSource:           getErrorSource,
                getErrorGroupObj:         getErrorGroupObj,
                getErrorObj:              getErrorObj,
                parseFunctionBody:        parseFunctionBody,
                parseFunctionName:        parseFunctionName,
                getFileOffsetFromError:   getFileOffsetFromError,
                getErrorSourceFromStack:  getErrorSourceFromStack,
                thirdPartyCheck:          thirdPartyCheck,
                thirdPartyBreakDownLabel: thirdPartyBreakDownLabel,
                languageBreakDownLabel:   languageBreakDownLabel,
                getErrorMessage:          getErrorMessage

            },

            key,
            value;

        NOW = +new Date;

        for ( key in ERROR_DATA_COLLECTION ) if ( ERROR_DATA_COLLECTION.hasOwnProperty( key ) ) {

            value = ERROR_DATA_COLLECTION[ key ];

            if ( typeof value === 'function' ) {
                value = value.apply( context, args );
            }

            if ( typeof value !== 'undefined' && value !== '' ) {
                error[ key ] =  value;
            }

        }

        error[ 'bm' ] = encodeURIComponent(args[0] || '');

    }

    function send( error ) {

        beacon({

            url:    ERROR_TRANSPORT.URL,
            method: ERROR_TRANSPORT.METHOD,
            error:  serialize( error )

        }, function( responseText, responseStatus ) {

            if ( +responseStatus === 503 || responseText === 'shut up' ) {
                SERVER_ASKED_TO_BLOCK = true;
                createCookie( 'error_catcher', 'kill', 30 );
            }

        });

    }

    

    /*
     * Init
     */

    initWrapping();

    function initWrapping() {

        function jQueryWrap( jQuery ) {

            // Making sure we wrap jQuery only once
            win.onerror.jQueryWrap = jQueryWrap = Function();

            try {

                var HANDLER_INDEX = '__booking__handler__index__';

                var handlers = {},
                    count    = 0;

                var onAvailable = typeof jQuery.fn.on !== 'undefined';

                var method = {
                    on:   onAvailable ? 'on'  : 'bind',
                    off:  onAvailable ? 'off' : 'unbind',
                    ajax: 'ajax'
                };

                function codeToSelectElement( evt ) {

                    var target    = evt.target,
                        elem      = jQuery( target ),

                        id        = elem.attr( 'id' ),
                        tagName   = ( target.tagName || '' ).toLowerCase(),

                        parentElem,
                        parentID,
                        parentIndex,

                        index,
                        code;

                    if ( id ) {

                        index = jQuery( '#' + id ).index( this );
                        code  = '$("#' + id + '").eq(' + index + ')';

                    } else {

                        parentElem  = elem.closest( '[id]' );

                        if ( ! parentElem.length ) {
                            return UNDEF;
                        }

                        parentID    = parentElem.attr( 'id' );
                        parentIndex = jQuery( '#' + parentID ).index( parentElem );
                        index       = parentElem.find( tagName ).index( target );
                        code        = '$("#' + parentID + '").eq(' + parentIndex+ ').find("' + tagName + '").eq(' + index + ')';

                    }

                    return code;

                }

                replaceMethod( jQuery.fn, method.on, function( args, index ) {

                    var arg = args[ index ],
                        wrapped;

                    if ( typeof arg !== 'function' ) {
                        return;
                    }

                    wrapped = wrapFunction( arg, function( evt ) {

                        var elementSelector;

                        if (

                            evt &&
                            evt.type

                        ) {

                            try {
                                elementSelector = codeToSelectElement( evt );
                            } catch ( e ) {}

                            if ( elementSelector ) {

                                LAST_CLIENT_EVENT = evt.type + ' on ' + elementSelector;
                                return;

                            }

                        }

                        LAST_CLIENT_EVENT = UNDEF;

                    });

                    handlers[ count ] = args[ index ] = wrapped;

                    arg[ HANDLER_INDEX ] = count;

                    count += 1;

                });

                replaceMethod( jQuery.fn, method.off, function( args, index ) {

                    var arg = args[ index ],
                        count;

                    if ( typeof arg !== 'function' ) {
                        return;
                    }

                    count = arg[ HANDLER_INDEX ];

                    args[ index ] = handlers[ count ] || arg;

                    delete handlers[ count ];

                });

                replaceMethod( jQuery, method.ajax,

                    function handleOptions( args, index ) {

                        var options = args[ index ];

                        if ( ({}).toString.apply( options ) === '[object Object]' ) {

                            forEachIn( 'success error complete beforeSend', function( callback ) {
                                options[ callback ] = wrapFunction( options[ callback ] );
                            });

                        }

                    },

                    function handlePromiseStates( promise ) {

                        forEachIn( 'done fail always then', replaceMethod, promise );

                    }

                );

            } catch ( e ) {}

        }

        try {

            var currentSetTimeout  = win.setTimeout,
                currentSetInterval = win.setInterval,
                start              = +new Date;

            if ( currentSetTimeout ) {
                win.setTimeout = function() {
                    var args = Array.prototype.slice.call(arguments);
                    args[0] = wrapFunction(args[0]);
                    if (currentSetTimeout.apply) {
                        return currentSetTimeout.apply(this, args);
                    } else { // because of IE8 and below
                        return currentSetTimeout(args[0], args[1]);
                    }
                };
            }

            if ( currentSetInterval ) {
                win.setInterval = function( fnc, delay ) {
                    var args = Array.prototype.slice.call(arguments);
                    args[0] = wrapFunction(args[0]);
                    if (currentSetInterval.apply) {
                        return currentSetInterval.apply(this, args);
                    } else { // because of IE8 and below
                        return currentSetInterval(args[0], args[1]);
                    }
                };
            }

            if ( ! win.console ) {
                win.console = { info: Function(), log: Function(), dir: Function() };
            }

            (function frontendReady() {

                if (

                     win.B &&
                     win.sNSStartup &&
                     win.B[ win.sNSStartup ] &&
                     win.B[ win.sNSStartup ].execute

                ) {

                    win.B[ win.sNSStartup ].execute = function( handler, config ) {
                        return wrapFunction( handler ).call( config );
                    };

                } else if ( win.document.readyState !== 'complete' && ( (+new Date - start) < (15 * 1000) ) ) {

                    setTimeout( frontendReady, 0 );

                }

            })();

            (function jQueryReady() {

                if ( 'jQuery' in win ) {

                    jQueryWrap( win.jQuery );

                } else if ( win.document.readyState !== 'complete' && ( (+new Date - start) < (15 * 1000) ) ) {

                    setTimeout( jQueryReady, 0 );

                }

            })();

        } catch( e ) {

            /* This shouldn't happen but there's
             * no problem if the wrappers are not applied
             * we'll simply have less info about the error
             */

        }

        // Publishing the wrapper to make it possible when AMD is used
        win.onerror.jQueryWrap = jQueryWrap;

    }

    /*
     * Wrapping helpers
     */

    function wrapFunction( fnc, doThisToo ) {

        var wrapper = typeof fnc === 'function' ? function() {

            var args = [].slice.apply( arguments ), result;

            try {

                 if ( typeof doThisToo === 'function' ) {
                    doThisToo.apply( this, args );
                 }

                 result = fnc.apply( this, args );

                 LAST_CLIENT_EVENT = UNDEF;

                 return result;

            } catch ( e ) {

                win.onerror( e.message, e.sourceURL, e.line, e.column, e, fnc );

                if ( 'console' in win ) {

                    console.log( getErrorStackTrace( e, fnc ) || 'Uncaught Error: ' + e.message );
                    if ( typeof console.trace === 'function' ) {
                        console.trace();
                    }

                }

            }

        } : fnc;

        return wrapper;

    }

    function forEachIn( items, callback, context ) {

        var i,
            len,
            params,
            list = items.split( ' ' );

        for ( i = 0, len = list.length; i < len; i += 1 ) {

            params = context ? [ context, list[ i ] ] : [ list[ i ] ];

            callback.apply( null, params );

        }

    }

    function replaceMethod( obj, name, handlerCallback, resultCallback ) {

        var original;

        if ( ! name || typeof obj[ name ] !== 'function' ) {
            return;
        }

        original = obj[ name ];

        obj[ name ] = function() {

            var args  = [].slice.apply( arguments ),
                index = args.length,
                arg,
                result;

            while ( index-- ) {

                arg = args[ index ];

                if ( arg ) {

                    if ( typeof handlerCallback === 'function' ) {
                        handlerCallback( args, index );
                    } else if ( typeof arg === 'function' ) {
                        args[ index ] = wrapFunction( arg );
                    }

                }

            }

            result = original.apply( this, args );

            if ( typeof resultCallback === 'function' ) {
                resultCallback( result );
            }

            return result;

        };

    }

    

    /*
     * Helpers
     */

    function thirdPartyBreakDownLabel( key ) {

        return '\n<j<s<' + key + '>s>j>';

    }

    function languageBreakDownLabel( language ) {

        return '\n<l<a<n<g<' + language + '>g>n>a>l>';

    }

    function thirdPartyCheck( message, stack, url ) {

        var source     = ( getErrorSource( message, url ) || '' ) + '',
            thirdParty = ERROR_TRANSPORT.THIRD_PARTY || {},
            pattern;

        if ( typeof source.toLowerCase === 'undefined' ) {
            source = '';
        } else {
            source = source.toLowerCase();
        }

        for ( pattern in thirdParty.SOURCE_MAPPING ) {

            if ( source.indexOf( pattern ) !== -1 ) {

                return {
                    is: true,
                    key: thirdParty.SOURCE_MAPPING[ pattern ]
                };

            }

        }

        for ( pattern in thirdParty.STACK_TRACE_MAPPING ) {

            if ( stack.indexOf( pattern ) !== -1 ) {

                return {
                    is: true,
                    key: thirdParty.STACK_TRACE_MAPPING[ pattern ]
                };

            }

        }

        message = message || '';
        message += '';
        message = message.toLowerCase();

        for ( pattern in thirdParty.MESSAGE_MAPPING ) {
            if ( message.indexOf( pattern ) !== -1 ) {
                return {
                    is: true,
                    key: thirdParty.MESSAGE_MAPPING[ pattern ]
                };
            }
        }
        if ( ! /(villas|booking|bstatic)\.com/i.test( source ) ) {
            return {
                is: true,
                key: 'External Source'
            }
        }

        return {
            is: false,
            key: ''
        };

    }

    function sanitizeStackLength( stackText ) {

        var stack,
            lines;

        if ( ! stackText ) {
            return '';
        }

        stack = stackText.split( '\n' );
        lines = stack.splice( 0, ERROR_TRANSPORT.MAX_STACK_LINES );

        return ( '\n' + lines.join( '\n' ) ).slice( 0, ERROR_TRANSPORT.MAX_STACK_LENGTH ) + ( stack.length ? ERROR_TRANSPORT.STACK_TRUNCATED_TEXT : '' );

    }

    function getErrorStackTrace( error, functionCaller, message ) {

        var stack,
            lines,
            file,
            name,
            fileOffset;

        if ( ! error ) {
            return '';
        }

        message = getErrorMessage( message, error );

        if ( functionCaller && message ) {

            lines = [];

            while ( functionCaller ) {

                name       = functionCaller.name || parseFunctionName( functionCaller ) || parseFunctionBody( functionCaller ) || 'anonymous';
                file       = getErrorSourceFromStack( error.stack ) || getErrorSource( message, extractUrlSearch( win.document.location.href ) );
                fileOffset = getFileOffsetFromError( error );

                lines.push( name + '@(' + file + ':' + fileOffset.line + ':' + fileOffset.column + ')' );

                try {
                    functionCaller = functionCaller.caller;
                } catch ( e ) { // Strict Mode Enabled
                    functionCaller = false;
                }

            }

            if ( lines.length ) {

                lines = [ '<Generated Stack>' ].concat( lines ).concat( [ '</Generated Stack>\n' ] );

                stack = lines.join( '\n' ) + ( error.stack || '' );

                return sanitizeStackLength( stack );

            }

        }

        return sanitizeStackLength( error.stack );

    }

    function getErrorGroupObj(stack, caller) {
        var callerName,
            callerSource;

        if ( typeof caller === 'function' ) {
            callerName   = caller.name || parseFunctionName( caller );
            callerSource = parseFunctionBody( caller );
        }

        var location           = win.document.location || {},
            host               = location.hostname || '',
            path               = location.pathname || '',
            fileName           = ( stack.match( /\/\/[^/]+(\/[^: ]+):(\d+):(\d+)/ ) || [ '', '' ] )[ 1 ].split( '?' )[ 0 ] || ( host + path ),
            functionName       = callerName || ( stack.match( /(?:at)?\s+([0-9a-zA-Z_]+)[\s@]+(?:\(?https?:)?\/\/[^/]+\/[^: ]+:\d+:\d+/ ) || [] )[ 1 ],
            functionSource     = callerSource || ( stack.match( /(function\([^\)]*\)\{[^@]+\})@(?:\(?https?:)?\/\/[^/]+\/[^: ]+:\d+:\d+/i ) || [] )[ 1 ],
            functionIdentifier = ( ! functionSource && ! /^(at|code|function)$/i.test( functionName ) && functionName ) || functionSource || 'anonymous';

        fileName.replace( /(\.v[a-zA-Z0-9]+v\.)js$/, '.js' );

        if ( typeof caller === 'function' && caller.__bookingGroupName__ ) {
            functionIdentifier = caller.__bookingGroupName__;
        }

        var groupName = 'FULL_STACK_' +fileName + '->' + functionIdentifier + '():';

        if (!functionName) {
            functionName = functionIdentifier;
        }
        return {
            "fileName":     fileName,
            "functionName": functionName,
            "asString":     groupName
        };


    }

    function getErrorGroup( stack, caller ) {

        var errGroupObj = getErrorGroupObj(stack, caller);
        return errGroupObj.name;
    }

    function getErrorObj( message, url, line, column, error, caller ) {

        var stack       = this.getErrorStackTrace( error, caller, message ) || '',

            source      = this.getErrorSourceFromStack( error && error.stack ) || this.getErrorSource( message, url ) || win.document.location.href.split( '?' )[ 0 ] || '',
            thirdParty,
            errorGroupObj,
            errorObj = { type: 'unkown', asString: 'unknown', message: message, stack: stack }
        ;

        /*
        * There are three type of errors: B0T, THIRD_PARTY, INTERNAL
        * Lets figure out what we have here
        */

        if ( ERROR_TRANSPORT.IS_BOT( message ) ) {
            errorObj.type= 'B0T',
            errorObj.asString = errorObj.type + ': ' + errorObj.message;
        }
        else {
            thirdParty = thirdPartyCheck( message, stack, source );
            if ( thirdParty.is ) {
                errorObj.type = 'THIRD_PARTY';
                errorObj.thirdPartyKey = thirdParty.key;

                errorObj.asString =   '3rd_Party_External_Script_Error'
                    + errorObj.thirdPartyKey
                    + thirdPartyBreakDownLabel( errorObj.thirdPartyKey )
                    + errorObj.stack;
            }
            else {
                errorGroupObj    = this.getErrorGroupObj( stack, caller );
                errorObj.type= 'INTERNAL';
                errorObj.fileName = errorGroupObj.fileName;
                errorObj.functionName = errorGroupObj.functionName;
                errorObj.message = getErrorMessage(message, error) || 'Script error';
                errorObj.asString = errorGroupObj.asString + errorObj.message + errorObj.stack;
            }
        }
        return errorObj;
    };

    function getKey( path ) {

        var keys    = path.split( /[. ]/ ),
            objName = keys[ 0 ],

            i, len,

            value = win[ objName ];

        for ( i = 1, len = keys.length; i < len; i += 1 ) {

            if (

                defined( value ) &&
                /^\[object (Object|Function|Array|global|HTMLDocument)\]$/.test( ({}).toString.apply( value ) )

            ) {

                value = value[ keys[ i ] ];

            } else {

                return defined( value ) ? value : UNDEF;

            }

        }

        return defined( value ) ? value : UNDEF;

    }

    function defined( variable ) {

        return typeof variable !== 'undefined';

    }

    function extend( source, extension ) {

        var attr;

        for ( attr in extension ) {

            if (
                source.hasOwnProperty( attr ) &&
                extension.hasOwnProperty( attr )
            ) {

                source[ attr ] = extension[ attr ];

            }

        }

    }

    function serialize( obj ) {

        var serialized = [],

            key,
            value;

        for ( key in obj ) if ( obj.hasOwnProperty( key ) ) {
            serialized.push( key + '=' + win.encodeURIComponent( obj[ key ] ) );
        }

        return serialized.join( '&' );

    }

    function beacon( config, onResponse ) {

        var request,
            url = config.url;

        try {
            request = new win.XMLHttpRequest();
        } catch( e ) {}

        if ( ! request ) {

            try {
                request = new win.ActiveXObject( 'Microsoft.XMLHTTP' );
            } catch( e ) {}

        }

        if ( config.method !== 'POST' ) {
            url += '?' + config.error;
        }

        request.open( config.method, url, true );
        request.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

        request.onreadystatechange = function () {
            if ( request.readyState === 4 ) {
                onResponse( request.responseText, request.status );
            }
        };

        request.send( config.error );

    }

    function extractUrlPath( url ) {

        var path = ( url.match( /\/\/[^/]+(\/[^?]+)/ ) || [] )[ 1 ];

        return path || url;

    }

    function extractUrlSearch( url ) {

        return ( url || '' ).split( '?' )[ 0 ];

    }

    function getErrorMessage( message, error ) {

        return message ? message : ( error ? error.message : '' );

    }

    function getErrorSource( message, url ) {

        return message && message.srcElement && message.srcElement.src && typeof message.srcElement.src === 'string' ? message.srcElement.src : url;

    }

    function getErrorSourceFromStack( stack ) {

        return ( ( stack || '' ).match( /((?:https?:)?\/\/[^/]+\/[^: ]+):(\d+):(\d+)/ ) || [ '', '' ] )[ 1 ].split( '?' )[ 0 ];

    }

    function getFileOffsetFromError( error ) {

        if ( ! error ) {
            return { line: 0, column: 0 };
        }

        var offset = ( error.stack || '' ).match( /:(\d+)(?::(\d+))?/ ) || [ 0, 0, 0 ],
            line   = Math.abs( error.number ? +error.number : 0 ) || offset[ 1 ] || 0,
            column = offset[ 2 ] || 0;

        return {
            line:   +line,
            column: +column
        };

    }

    function getFunctionCaller( args ) {

        var caller,
            undef;

        try {

            caller = args && args.callee && args.callee.caller ? args.callee.caller : undef;

        } catch ( e ) { /* Strict Mode Enabled */ }

        return caller;

    }

    function parseFunctionName( fnc ) {

        var source;

        if ( ! canParse || typeof fnc !== 'function' ) {
            return '';
        }

        source = fnc.toString();

        return ( source.match( /function\s+([a-zA-Z0-9_]+)\s*\(/ ) || [] )[ 1 ] || '';

    }

    function parseFunctionBody( fnc ) {

        var source;

        if ( ! canParse ) {
            return '';
        }

        source = fnc.toString()
                    .replace( /[\n\r\t\s@]+/g, '' )
                    .slice( 0, -1 )
                    .slice( 0, ERROR_TRANSPORT.MAX_FUNCTION_BODY_LENGTH ) + ' ... }';

        return source;

    }

    /* PPK's cookie scripts: http://www.quirksmode.org/js/cookies.html */
    function createCookie( name, value, days ) {

        var expires = '';

        if ( days ) {
            var date = new Date();
            date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );

            expires = '; expires=' + date.toGMTString();
        }

        doc.cookie = name + '=' + value + expires + '; path=/';

    }

    function readCookie( name ) {

        var cookies = doc.cookie.split( ';' ),
            cookie,

            i, len;

        name = name + '=';

        for( i = 0, len = cookies.length; i < len; i += 1 ) {

            cookie = cookies[ i ];

            while ( cookie.charAt( 0 ) === ' ' ) {
                cookie = cookie.substring( 1, cookie.length );
            }

            if ( cookie.indexOf( name ) === 0 ) {
                return cookie.substring( name.length, cookie.length );
            }

        }

        return null;

    }

})( this, this.document );



try {
    (function(){var e=false;var t=window.location.protocol.toLowerCase().substr(0,window.location.protocol.length-1);var n=window.location.host.toLowerCase();if(t!=="https")e=true;if(n.substr(n.length-12)!==".booking.com")e=true;if(e){var r="https://www.booking.com/_etnht"+"?cpr="+encodeURIComponent(t)+"&ch="+encodeURIComponent(n)+"&we=we"+"&cpa="+encodeURIComponent(window.location.pathname);if(window.$u!==undefined&&$u.application!==undefined){r+="&a="+encodeURIComponent($u.application.application);if($u.application.tag!==undefined)r+="&at="+encodeURIComponent($u.application.tag)}if(document.referrer!==undefined&&document.referrer!="")r+="&cr="+encodeURIComponent(document.referrer);document.createElement("img").setAttribute("src",r)}})();
} catch( e ) {}

