define(function(require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var squeak = require('modules/squeak');
    var translate = require('modules/translate');
    var zendeskAPI = require('modules/zendesk-api');
    var GA = require('modules/gastats');

    var XHR_PENDING_STATE = 'pending';
    var XHR_ABORTED_STATUS = 'abort';

    // TODO: this makes it impossible to reuse the comp multiple times
    // on a page. should move to app
    var pendingRequest;
    module.exports = {
        search: function(options, expHash, placement, articlePreview) {
            return function(dispatch, getState) {
                dispatch({
                    type: 'SEARCH_START'
                });
                if (pendingRequest && pendingRequest.state() === XHR_PENDING_STATE) {
                    pendingRequest.abort();
                }

                pendingRequest = zendeskAPI.search(options).done(function(data) {
                    // only dispatch results for query matching current
                    if (options.query === getState().query) {
                        dispatch({
                            type: 'SEARCH_RESULTS',
                            payload: $.extend(
                                    {
                                        query: options.query,
                                        expHash: expHash,
                                        placement: placement,
                                        articlePreview: articlePreview
                                    }, data)
                        });
                    } else {
                        // to kill the load indicator
                        // this happens when going from minimum search term length
                        // to below minimum length of three to do search
                        dispatch({
                            type: 'SEARCH_DONE'
                        });
                    }
                }).fail(function(xhr, textStatus) {
                    if (options.query === getState().query) {
                        alert(translate('sb_technical_error'));
                        dispatch({
                            type: 'SEARCH_DONE'
                        });
                        // log errors
                        GA('trackAjaxError', xhr.status || 'Unknown', 'zendesk search');
                        squeak('PHC search failed with HTTP status: ' + xhr.status || 'Unknown');
                    }
                });
            };
        },
        clear: function() {
            return {
                type: 'SEARCH_CLEAR'
            };
        },
        input: function(query) {
            return {
                type: 'SEARCH_QUERY_INPUT',
                payload: query
            };
        }
    };
});
