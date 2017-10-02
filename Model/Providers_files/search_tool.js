define([
    'jquery',
    'config',
    'modules/gastats',
    'modules/translate',
    'et',
    'modules/tooltip'
],
function ($, config, GA, translate, et) {
    'use strict';

    /**
     * Get a name of a browser event
     * e.g. animationend
     *
     * @param {Object} eventNameMap
     * @return {String}
     */
    function getEventName(eventNameMap) {
        var el = document.createElement('someelement');
        var key;
        var eventName = '';

        for (key in eventNameMap) {
            if (el.style[key] !== undefined) {
                eventName = eventNameMap[key];
                break;
            }
        }

        return eventName;
    }

    /**
     * Get transition end event name.
     *
     * @return {String}
     */
    function getTransitionEndEventName() {
        var map = {
            'transition':       'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

        return getEventName(map);
    }

    /**
     * Call a function after a timeout,
     * if it was not called earlier.
     *
     * @param {function} callback
     * @param {number} time
     * @return {function} A new function.
     */
    function createFunctionWithTimeout(callback, time) {
        var func = function() {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
                callback();
            }
        };
        var timeout = setTimeout(func, time || 1500);

        return func;
    }

    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#47;'
    };
    var escapeRegex = /[&<>"'\/]/g;

    /**
     * Escape HTML.
     *
     * @param {String} input
     * @return {String}
     */
    var escHtml = function(input) {
        input = (input == null) ? '' : '' + input;

        return input.replace(escapeRegex, function(match) {
            return escapeMap[match];
        });
    };

    var MainNavSearch = {
        /**
         * Indexed menu items.
         *
         * @var {Array}
         */
        menuIndex: [],

        /**
         * Document body element.
         *
         * @var {jQuery}
         */
        bodyEl: null,

        /**
         * Search block container.
         *
         * @var {jQuery}
         */
        el: null,

        /**
         * Search results container.
         *
         * @var {jQuery}
         */
        resultsEl: null,

        /**
         * Search input element.
         *
         * @var {jQuery}
         */
        inputEl: null,

        /**
         * Navigation HTML element.
         *
         * @var {jQuery}
         */
        navEl: null,

        /**
         * Width breakpoint of the tablet in portrait mode.
         */
        tabletPortrait: 768,

        /**
         * Not found message html.
         *
         * @var {String}
         */
        notFoundMessage: $('#tpl-search-tool-not-found').html(),

        /**
         * Welcome banner html.
         *
         * @var {String}
         */
        welcomeBanner: $('#tpl-search-tool-welcome-banner').html(),

        /**
         * Transition end event name.
         *
         * @var {String}
         */
        transitionEnd: getTransitionEndEventName(),

        /**
         * Namespace for jQuery events.
         *
         * @var {String}
         */
        namespace: '.mainNavSearch',

        /**
         * Search timeout.
         *
         * @var {null|Number}
         */
        searchTimeout: null,

        /**
         * Search results request.
         *
         * @var {null|jqXHR}
         */
        searchResultsRequest: null,

        /**
         * Search results found.
         *
         * @var {Number}
         */
        numSearchResults: 0,

        /**
         * Current search string.
         *
         * @var {String}
         */
        searchStr: '',

        /**
         * The search string is splitted into words.
         * These words are highlighted in the results list.
         *
         * @var {Array}
         */
        searchWords: [],

        /**
         * Keep a list of results for logging.
         *
         * @var {Array}
         */
        resultsLog: [],

        /**
         * Is the search widget open?
         *
         * @var {Boolean}
         */
        isOpen: false,

        /**
         * Is the search results block open?
         *
         * @var {Boolean}
         */
        isResultsBlockShown: false,

        /**
         * HTML classes used by the widget.
         *
         * @var {Object}
         */
        classes: {
            input:          'js-st-input',
            btnClose:       'js-st-close',
            result:         'search-tool-result',
            results:        'search-tool-results',
            resultNoParent: 'search-tool-result--no-parent',
            resultActive:   'search-tool-result--active',
            searchOpen:     'search-tool--open',
            clearInput:     'js-st-clear-input',
            bodySearchOpen: 'search-tool-open',
            overlayVisible: 'search-overlay--visible'
        },

        /**
         * Ids used by the widget.
         *
         * @var {Object}
         */
        ids: {
            nav:     'js-main-nav',
            search:  'js-search-tool',
            btnOpen: 'js-st-open',
            overlay: 'js-st-overlay'
        },

        /**
         * Initialize.
         */
        init: function() {
            this.bodyEl = $('body');
            this.el = $('#' + this.ids.search);
            this.inputEl = this.el.find('.' + this.classes.input);
            this.resultsEl = $('<div class="' + this.classes.results + ' b-animated fade-in-down"></div>');
            this.bodyEl.append(this.resultsEl);
            this.navEl = $('#' + this.ids.nav);

            if (config.searchWidget.passed2fa) {
                this.setupIndex();
                this.setupEvents();
            } else {
                var tipElDesktop = $('#js-search-2fa-tip');
                var tipElMobile = tipElDesktop.clone().removeAttr('id');

                this.el.on('click', '.' + this.classes.clearInput, function(e) {e.preventDefault();});
                this.el.extTooltip({
                    tipEl: tipElDesktop,
                    direction: 'bottom',
                    trigger: 'hover',
                    offset: 15
                });

                $('#' + this.ids.btnOpen)
                    .on('click', function(e) {e.preventDefault();})
                    .extTooltip({
                        tipEl: tipElMobile,
                        direction: 'bottom',
                        trigger: 'hover',
                        offset: 10
                    });
            }
        },

        /**
         * Index menu items.
         */
        setupIndex: function() {
            var that = this;
            var internalNavTags = [
                'rates_policies_restrictions'
            ];
            /**
             * Get the name of an icon, given a link element.
             *
             * @param {jQuery} link
             * @return {String}
             */
            var getIconName = function(link) {
                var classes;
                var i;
                var icon = link.find('.glyphicon');

                if (icon.length) {
                    classes = icon.get(0).className.split(/\s/);

                    if (classes.length) {
                        for (i = 0; i < classes.length; i++) {
                            if (classes[i].indexOf('glyphicon-') === 0) {
                                return classes[i];
                            } else if (classes[i].indexOf('icon-') === 0) {
                                return classes[i];
                            }
                        }
                    }
                }

                return '';
            };
            /**
             * Index all menu items recursively.
             *
             * @param {jQuery} nav Menu items container.
             * @param {Number} parentId
             */
            var indexItems = function(nav, parentId) {
                var i, len, item, link, linkText, indexData, subnav, navTag, type;
                var items = nav.find('> li');

                if (typeof parentId === 'undefined') {
                    parentId = -1;
                }

                for (i = 0, len = items.length; i < len; i++) {
                    item = items.eq(i);
                    link = item.find('> a');
                    linkText = $.trim(link.contents().filter(function() {
                        var textNode = (typeof Node !== 'undefined') ? Node.TEXT_NODE : 3;
                        return (this.nodeType == textNode);
                    }).text());
                    subnav = item.find('> .subnav');
                    navTag = item.data('nav-tag');
                    type = (navTag && ((navTag + '').indexOf('internal') === 0 || $.inArray(navTag, internalNavTags) > -1))
                        ? 'menu_item_internal' : 'menu_item';
                    indexData = {
                        type:      type,
                        parentId:  parentId,
                        tag:       navTag,
                        href:      link.attr('href'),
                        text:      linkText,
                        searchStr: linkText.toLowerCase(),
                        iconName:  (type === 'menu_item_internal') ? 'glyphicon-cog' : getIconName(link),
                        isParent:  (subnav.length > 0)
                    };

                    that.menuIndex.push(indexData);

                    if (subnav.length) {
                        indexItems(subnav, that.menuIndex.length - 1);
                    }
                }
            };

            indexItems(this.navEl);
        },

        /**
         * Setup events.
         */
        setupEvents: function() {
            var that = this;

            this.el.on('keyup', '.' + this.classes.input, function(e) {
                switch (e.which) {
                    case 16://shift
                    case 39://right arrow
                    case 37://left arrow
                    case 40://down arrow
                    case 38://up arrow
                    case 13://enter
                        break;
                    default:
                        that.processSearchEvent();
                }
            });

            this.el.on('keydown', '.' + this.classes.input, function(e) {
                switch (e.which) {
                    case 40://down arrow
                        that.moveThroughResults('down');
                        e.preventDefault();
                        break;
                    case 38://up arrow
                        that.moveThroughResults('up');
                        e.preventDefault();
                        break;
                    case 13://enter
                        that.go();
                        e.preventDefault();
                        break;
                }
            });

            this.resultsEl.on('mouseenter', '.' + this.classes.result, function() {
                var previous = that.resultsEl.children('.' + that.classes.resultActive)
                var next = $(this);

                if (previous !== next) {
                    previous.removeClass(that.classes.resultActive);
                    next.addClass(that.classes.resultActive);
                }
            });

            this.resultsEl.on('click', '.' + this.classes.result, function(e) {
                var link = $(this);

                link.addClass('search-tool-result--tapped');
                that.logAndGo(link);

                e.preventDefault();
                e.stopPropagation();// Don't close when body is clicked.
            });

            // Open/close - mobile.
            $('#' + this.ids.btnOpen).on('click', function(e) {
                that.openSearch();

                GA('searchWidget', 'open', 'mobile header');

                e.preventDefault();
                e.stopPropagation();// Don't close when body is clicked.
            });

            this.el.on('click', '.' + this.classes.btnClose, function(e) {
                that.closeSearch();
                e.preventDefault();
            });

            if (this.bodyEl.hasClass('ua-android_webkit')) {
                this.resultsEl.on('touchstart', function() {
                    that.inputEl.blur();
                });
            }

            // Open/close - desktop.
            this.el.on('focusin', function(e) {
                // Don't open the input on 'focusin' if the search loupe was clicked,
                // because it will be opened by the event from the search icon's link.
                var loupeClicked = (e.relatedTarget || e.target).className.indexOf(that.classes.clearInput) > -1;

                if (!loupeClicked && !that.isOpen) {
                    that.openSearch();

                    GA('searchWidget', 'open', 'input focus');
                }
            });

            this.el.on('click', function(e) {
                // Don't propagate to body for the search to remain open.
                e.stopPropagation();
            });

            this.bodyEl.on('click' + this.namespace, function() {
                that.closeSearch();
            });

            $(document).on('keyup' + this.namespace, function(e) {
                if (e.which === 27) {//escape
                    that.closeSearch();
                }
            });

            // Process the loupe and clear button.
            this.el.on('click', '.' + this.classes.clearInput, function(e) {
                e.preventDefault();

                if (that.isOpen) {
                    if (that.getWinWidth() >= that.tabletPortrait && that.inputEl.val() === '') {
                        // tablet/desktop.
                        that.closeSearch();
                    } else {
                        // mobile.
                        that.clearInput();
                    }
                } else {
                    // Open search if it's closed.
                    that.openSearch();

                    GA('searchWidget', 'open', 'loupe click');
                }

                // Blur the loupe button, so the search can be opened again on input focus.
                $(this).blur();
            });

            $(window).on('resize', function() {
                if (that.isOpen) {
                    if (that.resizeTimeout) {
                        clearTimeout(that.resizeTimeout);
                    }

                    that.resizeTimeout = setTimeout(function() {
                        // Reposition/resize the search results
                        // block when window width changes.
                        that.positionResultsBlock();
                    }, 400);
                }
            });
        },

        /**
         * Open search.
         */
        openSearch: function() {
            var complete,
                that,
                winWidth;

            if (this.isOpen) {
                return;
            }

            this.isOpen = true;

            if (!this.inputEl.is(':focus')) {
                this.inputEl.focus();
            }

            if (this.resultsEl.html() === '') {
                this.resetResultsBlock();
            }

            this.showOverlay();

            winWidth = this.getWinWidth();

            if (this.transitionEnd && winWidth >= this.tabletPortrait) {
                that = this;
                this.inputEl.off(this.transitionEnd);
                this.inputEl.one(this.transitionEnd, function() {
                    that.showResultsBlock();
                });
                this.el.addClass(this.classes.searchOpen);
            } else {
                this.el.addClass(this.classes.searchOpen);
                this.showResultsBlock();
            }

            this.bodyEl.addClass(this.classes.bodySearchOpen);
        },

        /**
         * Close search.
         */
        closeSearch: function() {
            var that = this;

            if (!this.isOpen) {
                return;
            }

            this.isOpen = false;
            this.inputEl.off(this.transitionEnd);
            this.el.removeClass(this.classes.searchOpen);
            this.hideResultsBlock();
            this.hideOverlay();

            setTimeout(function() {
                that.bodyEl.removeClass(that.classes.bodySearchOpen);
            }, 275);
        },

        /**
         * Clear input.
         */
        clearInput: function() {
            this.stopSearching();
            this.inputEl.val('').focus();
            this.resetResultsBlock();
        },

        showOverlay: function() {
            var overlayEl = $('#' + this.ids.overlay);

            if (!overlayEl.length) {
                overlayEl = $('<div id="' + this.ids.overlay + '" class="search-overlay"></div>');
                this.bodyEl.append(overlayEl);
            }

            overlayEl.addClass(this.classes.overlayVisible);
        },

        hideOverlay: function() {
            $('#' + this.ids.overlay).removeClass(this.classes.overlayVisible);
        },

        /**
         * Is index (startIdx) located between the (before) and (after) characters.
         *
         * @param {String} str Full string to search in.
         * @param {Number} startIdx Start index of the character to be tested.
         * @param {String} before
         * @param {String} after
         * @return {Boolean}
         */
        charBetween: function(str, startIdx, before, after) {
            var beforeIdx, afterIdx;

            beforeIdx = str.substr(0, startIdx).lastIndexOf(before);

            if (beforeIdx > -1) {
                afterIdx = str.indexOf(after, beforeIdx);

                return (startIdx > beforeIdx && startIdx < afterIdx);
            }

            return false;
        },

        /**
         * Highlight a word in a string.
         *
         * @param {String} str
         * @param {String} needle
         * @return {String}
         */
        highlightWord: function(str, needle) {
            var startIdx = str.toLowerCase().indexOf(needle);

            if (startIdx > -1) {
                if (!this.charBetween(str, startIdx, '>', '<') && !this.charBetween(str, startIdx, '<', '>')) {
                    str = str.substr(0, startIdx) + '<i>' + str.substr(startIdx, needle.length) + '</i>' +
                        str.substr(startIdx + needle.length);
                }
            }

            return str;
        },

        /**
         * Highlight text.
         *
         * @param {String} str
         * @return {String}
         */
        highlight: function(str) {
            var i, len;

            for (i = 0, len = this.searchWords.length; i < len; i++) {
                str = this.highlightWord(str, this.searchWords[i]);
            }

            return str;
        },

        /**
         * Show loader.
         */
        showLoader: function() {
            this.resultsEl.prepend('<div class="search-tool-loader loading">' +
                 '<div class="search-tool-loader__inner-bar"></div></div>');
        },

        /**
         * Hide loader.
         */
        hideLoader: function() {
            this.resultsEl.find('.search-tool-loader').remove();
        },

        /**
         * Split the search input into words.
         *
         * @return {Array}
         */
        readSearchWords: function() {
            var i,
                numWords,
                maxWords = 10,
                words = [],
                allWords = this.searchStr.split(' ');

            numWords = allWords.length;

            if (numWords > maxWords) {
                numWords = maxWords;
            }

            for (i = 0; i < numWords; i++) {
                words.push(allWords[i]);
            }

            return words;
        },

        /**
         * Get window width.
         *
         * @return {Number}
         */
        getWinWidth: function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },

        /**
         * Position the results list block
         * under the search input.
         */
        positionResultsBlock: function() {
            var inputOffset,
                inputWidth,
                widthDiff,
                resultsLeft,
                resultsWidth,
                winWidth = this.getWinWidth();

            if (winWidth < this.tabletPortrait) {
                this.hideBodyOverflow();

                this.resultsEl.css({
                    height: window.innerHeight + 'px',
                    left: 0
                });
            } else {
                this.restoreBodyOverflow();

                inputOffset = this.inputEl.get(0).getBoundingClientRect();
                inputWidth = this.inputEl.outerWidth();
                resultsWidth = this.resultsEl.outerWidth();
                widthDiff = inputWidth - resultsWidth;
                resultsLeft = inputOffset.left + widthDiff / 2;

                this.resultsEl.css({
                    height: 'auto',
                    left: resultsLeft + 'px'
                });
            }
        },

        /**
         * Set body's overflow property to hidden,
         * and store its original value.
         */
        hideBodyOverflow: function() {
            if (!this.originalOverflow) {
                this.originalOverflow = this.bodyEl.css('overflow');
            }

            this.bodyEl.css('overflow', 'hidden');
        },

        /**
         * Restore body's overflow property
         * to its original value.
         */
        restoreBodyOverflow: function() {
            if (this.originalOverflow) {
                this.bodyEl.css('overflow', this.originalOverflow);
            }
        },

        /**
         * Display the results list block.
         */
        showResultsBlock: function() {
            var winWidth;

            if (this.isResultsBlockShown) {
                return;
            }

            this.isResultsBlockShown = true;

            this.positionResultsBlock();

            winWidth = this.getWinWidth();

            this.resultsEl.css('display', 'block');
        },

        /**
         * Remove the results list block.
         */
        hideResultsBlock: function() {
            if (!this.isResultsBlockShown) {
                return;
            }

            this.isResultsBlockShown = false;

            this.resultsEl.css('display', 'none');

            this.restoreBodyOverflow();
        },

        /**
         * Bring the results block to initial state.
         */
        resetResultsBlock: function() {
            this.resultsEl.html(this.welcomeBanner);
        },

        /**
         * Stop searching.
         * Clear the search timeout and abort the search request.
         */
        stopSearching: function() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            if (this.searchResultsRequest) {
                this.searchResultsRequest.abort();
            }
        },

        /**
         * Search the menu.
         *
         * @return {Array}
         */
        fetchMenuResults: function() {
            var itemsFound = [],
                itemsVisible = [],
                groupsFound = {},
                results = [],
                i,
                j,
                len,
                jLen,
                matched,
                item,
                itemId,
                childItems,
                childItem,
                childItemId,
                parentItem;

            for (i = 0, len = this.menuIndex.length; i < len; i++) {
                item = this.menuIndex[i];

                // Match the search string with a menu item.
                matched = (item.searchStr.indexOf(this.searchStr) > -1);

                if (matched) {
                    if (item.parentId > -1) {
                        // Group menu items that have the same parent.
                        if (groupsFound[item.parentId]) {
                            groupsFound[item.parentId].push(i);
                        } else {
                            groupsFound[item.parentId] = [i];
                        }
                    }

                    if (item.isParent || (!item.isParent && item.parentId === -1)) {
                        // It's a parent item or
                        // it's a level 1 item which has no child items.
                        itemsFound.push(i);
                    }
                }
            }

            // Grab grouped menu items first.
            for (itemId in groupsFound) {
                itemId *= 1;
                item = this.menuIndex[itemId];
                childItems = groupsFound[itemId];

                for (j = 0, jLen = childItems.length; j < jLen; j++) {
                    childItemId = childItems[j];
                    childItem = this.menuIndex[childItemId];

                    if (!childItem.isParent || childItem.href !== '') {
                        // It's not a parent item
                        // or its href is not empty.
                        results.push({
                            tag:          childItem.tag,
                            iconName:     item.iconName,
                            href:         childItem.href,
                            sectionTitle: item.text,
                            itemTitle:    childItem.text,
                            itemType:     item.type
                        });
                        itemsVisible.push(childItemId);
                    }
                }

                itemsVisible.push(itemId);
            }

            // Grab all other items.
            for (i = 0, len = itemsFound.length; i < len; i++) {
                itemId = itemsFound[i];
                item = this.menuIndex[itemId];

                if ($.inArray(itemId, itemsVisible) > -1) {
                    continue;
                }

                if (item.isParent) {
                    // If an item is parent, display its child items too.
                    for (j = 0, jLen = this.menuIndex.length; j < jLen; j++) {
                        childItem = this.menuIndex[j];

                        if (childItem.parentId == itemId && !childItem.isParent) {
                            results.push({
                                tag:          childItem.tag,
                                iconName:     item.iconName,
                                href:         childItem.href,
                                sectionTitle: item.text,
                                itemTitle:    childItem.text,
                                itemType:     item.type
                            });
                            itemsVisible.push(j);
                        }
                    }
                } else if (item.parentId > -1) {
                    // If an item has a parent, display its parent too.
                    parentItem = this.menuIndex[item.parentId];
                    results.push({
                        tag:          item.tag,
                        iconName:     item.iconName,
                        href:         item.href,
                        sectionTitle: parentItem.text,
                        itemTitle:    item.text,
                        itemType:     item.type
                    });
                } else {
                    // If an item has no parent and no child items, display just a link.
                    results.push({
                        tag:       item.tag,
                        classes:   [this.classes.resultNoParent],
                        iconName:  item.iconName,
                        href:      item.href,
                        itemTitle: item.text,
                        itemType:  item.type
                    });
                }

                itemsVisible.push(itemId);
            }

            return results;
        },

        /**
         * Fetch search results AJAX.
         *
         * @param {String} searchStr
         * @return {Array}
         */
        fetchSearchResults: function(searchStr) {
            var that = this;
            var settings = {
                type: 'get',
                cache: false,
                dataType: 'json',
                url: config.searchWidget.endpointUrl,
                data: {
                    query:  searchStr,
                    count:  10,
                    fields: 'rooms.guest_name,rooms.checkin,rooms.checkout,booker_firstname,booker_lastname'
                }
            };

            if ( $u.js_data.config.searchWidget.isGroupSearch ) {
                settings.type = 'post';

                $.extend(settings.data, {
                    account_id: $u.js_data.acc_id,
                    fields: 'rooms.guest_name,rooms.checkin,rooms.checkout,booker_firstname,booker_lastname,hotel_id'
                });
            }

            if( et.track('OUdAHFZSBYSBDNdJOOXWFaO') ) {
                settings.data.fields += ',aggregated_room_status';
            }

            this.searchResultsRequest = $.ajax(settings)
            .success(function(data) {
                var resultsHtml,
                    i;

                if (data.length) {
                    for (i = 0; i < data.length; i++) {
                        if ( $u.js_data.config.searchWidget.isGroupSearch ) {
                            var urlParams = { res_id: data[i].id, f_omni: 1, hotel_id: data[i].hotel_id };
                            data[i].href = $u.url("/hoteladmin/extranet_ng/manage/booking.html", urlParams);
                            data[i].hotel_name = $u.js_data.propertiesById[ data[i].hotel_id ].name;
                        } else {
                            data[i].href = $u.url('booking.html', {
                                res_id: data[i].id,
                                f_omni: 1
                            });
                        }

                        data[i].itemType = 'reservation';

                        that.resultsLog.push({
                            type: data[i].itemType,
                            id:   that.getResultId(data[i])
                        });
                    }

                    if (that.numSearchResults === 0) {
                        that.activateFirstResult(data);
                    }

                    resultsHtml = that.createSearchResultsHtml(data);

                    if (that.numSearchResults > 0) {
                        that.resultsEl.append(resultsHtml);
                    } else {
                        that.resultsEl.html(resultsHtml);
                    }

                    that.numSearchResults += data.length;
                } else if (that.numSearchResults === 0) {
                    that.resultsEl.html(that.notFoundMessage);
                }

                that.sendResultsLog();
                GA('searchWidget', 'search');
                et.goal('extranet_reservation_omnisearch_performed');
                et.stage('OUdAHFZSBYSBDNdJOOXWFaO', 1);
            })
            .always(function(data, status, jqXHR) {
                that.hideLoader();
            });
        },

        /**
         * Search.
         * Process search event.
         */
        processSearchEvent: function() {
            var menuResults;
            var html;
            var that = this;
            this.searchStr = $.trim(that.inputEl.val().toLowerCase());
            this.searchWords = this.readSearchWords();
            this.resultsLog = [];

            this.stopSearching();

            if (this.searchStr && this.searchStr.length >= 2) {
                // Render menu results first (without a delay),
                // because we don't need an AJAX request for these.
                menuResults = this.fetchMenuResults();
                this.numSearchResults = menuResults.length;

                if (menuResults.length) {
                    this.activateFirstResult(menuResults);
                    html = this.createSearchResultsHtml(menuResults);
                    this.resultsEl.html(html);
                }

                this.showResultsBlock();

                this.showLoader();

                this.searchTimeout = setTimeout(function() {
                    var i, len, menuResult;

                    // Add menu results to the log.
                    for (i = 0, len = menuResults.length; i < len; i++) {
                        menuResult = menuResults[i];
                        that.resultsLog.push({
                            type: menuResult.itemType,
                            id:   that.getResultId(menuResult)
                        });
                    }

                    that.fetchSearchResults(that.searchStr);
                }, 200);
            } else {
                this.numSearchResults = 0;
                this.resetResultsBlock();
            }
        },

        /**
         * Activate the first result in an array of results.
         *
         * @param {Array} results
         */
        activateFirstResult: function(results) {
            if (results[0].classes) {
                results[0].classes.push(this.classes.resultActive);
            } else {
                results[0].classes = [this.classes.resultActive];
            }
        },

        /**
         * Render search results.
         *
         * @param {Array} results
         * @return {String} Search results HTML.
         */
        createSearchResultsHtml: function(results) {
            var html = '';
            var i, len;

            for (i = 0, len = results.length; i < len; i++) {
                html += this.createSearchResultHtml(results[i]);
            }

            return html;
        },

        /**
         * Create HTML for a search result.
         *
         * @param {Object} data
         * return {String}
         */
        createSearchResultHtml: function(data) {
            var html = '';
            var classes = [
                this.classes.result,
                this.classes.result + '--' + data.itemType
            ];

            if (data.classes) {
                classes = classes.concat(data.classes);
            }

            html += '<a href="' + escHtml(data.href) + '" class="' + escHtml(classes.join(' ')) + '" data-type="' +
                escHtml(data.itemType) + '" data-id="' + escHtml(this.getResultId(data)) + '">';

            switch (data.itemType) {
                case 'reservation':
                    html += this.createReservationHtml(data);
                    break;
                case 'menu_item':
                case 'menu_item_internal':
                    html += this.createMenuItemHtml(data);
                    break;
            }

            html += '<svg class="search-tool-result__enter hidden-xs hidden-sm" width="27px" height="17px" viewBox="1374 89 27 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Group-3" opacity="0.795277531" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(1374.000000, 90.000000)"><polygon id="Triangle-1" fill="#BEC8D2" points="10.7142857 3.57142857 10.7142857 15.7142857 0.595238095 9.64285714"></polygon><polyline id="Line" stroke="#BEC8D2" stroke-width="3" stroke-linecap="square" points="8.48214286 9.82142857 24.5701006 9.82142857 24.5701006 0.710396546"></polyline></svg>';

            html += '</a>';

            return html;
        },

        /**
         * Create menu item search result html.
         *
         * @param {Object} data
         * @return string
         */
        createMenuItemHtml: function(data) {
            var html = '';

            if (data.iconName) {
                html += '<i class="glyphicon ' + escHtml(data.iconName) + '"></i>';
            }

            if (data.sectionTitle) {
                html += '<span class="search-tool-result__section">' + this.highlight(data.sectionTitle) + '</span>';
            }

            if (data.itemType === 'menu_item_internal') {
                html += '<span class="search-tool-result__label">inter</span>';
            }

            if (data.itemTitle) {
                html += '<h3 class="search-tool-result__title">' + this.highlight(data.itemTitle) + '</h3>';
            }

            return html;
        },

        /**
         * Create reservation search result html.
         *
         * @param {Object} data
         * @return string
         */
        createReservationHtml: function(data) {
            var dayNames,
                monthNamesShort,
                firstRoom,
                checkInDate,
                checkInDay,
                checkInMonthNum,
                checkInMonth,
                checkInYear,
                checkOutDate,
                checkOutDay,
                checkOutMonthNum,
                checkOutMonth,
                checkOutYear,
                bookerName,
                guestName,
                resStatus,
                html;

            dayNames = config.searchWidget.dayNames;
            monthNamesShort = config.searchWidget.monthNamesShort;

            firstRoom = $.isArray(data.rooms) && data.rooms.length ? data.rooms[0] : null;

            if (firstRoom) {
                if (firstRoom.checkin) {
                    checkInDate = new Date(firstRoom.checkin);
                    checkInDay = checkInDate.getUTCDate();
                    checkInMonthNum = checkInDate.getUTCMonth();
                    checkInMonth = monthNamesShort[checkInMonthNum];
                    checkInYear = checkInDate.getUTCFullYear();
                }

                if (firstRoom.checkout) {
                    checkOutDate = new Date(firstRoom.checkout);
                    checkOutDay = checkOutDate.getUTCDate();
                    checkOutMonthNum = checkOutDate.getUTCMonth();
                    checkOutMonth = monthNamesShort[checkOutMonthNum];
                    checkOutYear = checkOutDate.getUTCFullYear();
                }
            }

            bookerName = data.booker_firstname + ' ' + data.booker_lastname;
            guestName = firstRoom.guest_name || '';
            resStatus = data.aggregated_room_status || '';

            html = '<i class="glyphicon glyphicon-user"></i>';
            html += '<div class="search-tool-result__res-header-box">';
            html += '<div class="search-tool-result__res-header">';

            html += '<span class="search-tool-result__res-number">#' + this.highlight(escHtml(data.id)) + '</span>';
            if(resStatus && resStatus.cancelled_or_no_show) {
                var cl = "search-tool-result__res-status " + "res-status--" + resStatus.cancelled_or_no_show;
                html += '<span class=\"' + cl + '\">' + resStatus.copy + '</span>';
            }
            html += '<h3 class="search-tool-result__title">' + this.highlight(escHtml(guestName)) + '</h3>';
            html += '</div>';

            if (guestName !== bookerName) {
                html += '<div class="search-tool-result__booker">';
                html += '<span class="search-tool-result__booked-by">' + translate('ext_search_booked_by') + '</span>';
                html += '<span class="search-tool-result__booker-name">' + this.highlight(escHtml(bookerName)) + '</span>';
                html += '</div>';
            }

            if ( $u.js_data.config.searchWidget.isGroupSearch ) {
                html += '<div class="search-tool-result__property">' + data.hotel_name + '</div>';
            }

            html += '</div>';

            if (checkInDate) {
                html += '<div class="search-tool-result__res-dates">';
                html += '<div class="search-tool-result__checkin">';
                html += '<span class="search-tool-result__date">' + escHtml(checkInDay + ' ' + checkInMonth) + '</span>';
                html += '<span class="search-tool-result__day">' + escHtml(checkInYear) + '</span>';
                html += '</div>';
                html += '<i class="glyphicon glyphicon-arrow-right"></i>';
            }

            if (checkOutDate) {
                html += '<div class="search-tool-result__checkout">';
                html += '<span class="search-tool-result__date">' + escHtml(checkOutDay + ' ' + checkOutMonth) + '</span>';
                html += '<span class="search-tool-result__day">' + escHtml(checkOutYear) + '</span>';
                html += '</div>';
                html += '</div>';
            }
            return html;
        },

        /**
         * Get id of a result item.
         *
         * @param {Object} result
         * @return {String}
         */
        getResultId: function(result) {
            var id = '';

            switch (result.itemType) {
                case 'reservation':
                    id = result.id;
                    break;
                case 'menu_item':
                case 'menu_item_internal':
                    id = result.tag || result.itemTitle;
                    break;
            }

            return id;
        },

        /**
         * Send log request.
         *
         * @param {Object} data
         * @param {Function} callback
         */
        sendLogRequest: function(url, data, callback) {
            var ajaxConfig = {
                type:     'post',
                dataType: 'json',
                cache:    false,
                url:      url,
                data:     JSON.stringify(data)
            };

            if (typeof callback === 'function') {
                ajaxConfig.complete = function() {
                    callback();
                };
            }

            $.ajax(ajaxConfig);
        },

        /**
         * Log current search results.
         */
        sendResultsLog: function() {
            this.sendLogRequest(config.searchWidget.logSearchEndpointUrl, {
                query:   this.searchStr,
                results: this.resultsLog
            });
        },

        /**
         * Log result click.
         *
         * @param {Object} clickedItem
         * @param {Function} callback
         */
        sendResultClickLog: function(clickedItem, callback) {
            this.sendLogRequest(config.searchWidget.logClickEndpointUrl, {
                query:   this.searchStr,
                results: this.resultsLog,
                click:   clickedItem
            }, callback);
        },

        /**
         * Log clicked result and redirect to the result's href.
         *
         * @param {jQuery} link
         */
        logAndGo: function(link) {
            et.goal('extranet_reservation_omnisearch_selected');
            if ( $u.js_data.config.searchWidget.isGroupSearch ) {
                window.location = link.prop('href');
            } else {
                 var itemInfo = {
                    type: link.data('type'),
                    id:   link.data('id')
                };
                var loggedCallback = createFunctionWithTimeout(function() {
                    window.location = link.prop('href');
                }, 2000);

                this.sendResultClickLog(itemInfo, loggedCallback);
            }
        },

        /**
         * Move through the results list.
         *
         * @param {String} dir Direction, down or up.
         */
        moveThroughResults: function(dir) {
            var activeResult,
                nextResult,
                indexFrom,
                indexTo,
                resultTop,
                resultHeight,
                resultsHeight,
                delta,
                scrollTop,
                results = this.resultsEl.find('a');

            if (!results.length) {
                return;
            }

            activeResult = results.filter('.' + this.classes.resultActive);

            // Determine the result to highlight.
            if (activeResult.length) {
                indexFrom = results.index(activeResult);

                if (dir == 'down') {
                    indexTo = indexFrom + 1;

                    if (indexTo > results.length - 1) {
                        indexTo = 0;
                    }
                } else {
                    indexTo = indexFrom - 1;

                    if (indexTo < 0) {
                        indexTo = results.length - 1;
                    }
                }
            } else {
                indexTo = (dir == 'down') ? 0 : results.length - 1;
            }

            nextResult = results.eq(indexTo);

            // Scroll when user navigates.
            if (indexTo === 0) {
                this.resultsEl.scrollTop(0);
            } else if (indexTo === results.length - 1) {
                this.resultsEl.scrollTop(this.resultsEl.prop('scrollHeight'));
            } else {
                scrollTop = this.resultsEl.scrollTop();

                if (dir == 'down') {
                    resultTop = nextResult.position().top;
                    resultHeight = nextResult.outerHeight();
                    resultsHeight = this.resultsEl.height();
                    delta = resultsHeight - resultTop - resultHeight;

                    if (delta < 0) {
                        this.resultsEl.scrollTop(scrollTop + Math.abs(delta));
                    }
                } else {
                    // Get position including scroll.
                    resultTop = nextResult.position().top + scrollTop;
                    delta = resultTop - scrollTop;

                    if (delta < 0) {
                        this.resultsEl.scrollTop(scrollTop - Math.abs(delta));
                    }
                }
            }

            activeResult.removeClass(this.classes.resultActive);
            nextResult.addClass(this.classes.resultActive);
        },

        /**
         * Go to the selected result.
         */
        go: function() {
            var activeResult = this.resultsEl.find('.' + this.classes.resultActive);

            if (activeResult.length) {
                this.logAndGo(activeResult);
            }
        }
    };

    MainNavSearch.init();
});
