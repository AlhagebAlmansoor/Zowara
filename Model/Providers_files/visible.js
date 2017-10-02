define(function(require, exports, module) {
    'use strict';

    module.exports = function(state, action) {
        if (!state) { state = false; }
        switch (action.type) {
            case 'SEARCH_QUERY_INPUT':
            case 'SEARCH_FOCUS':
                return true;
            case 'SEARCH_CLOSE':
                return false;
            default:
                return state;
        }
    };
});
