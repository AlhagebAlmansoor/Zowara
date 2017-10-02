define(function(require, exports, module) {
    'use strict';

    module.exports = function(state, action) {
        if (!state) { state = false; }
        switch (action.type) {
            case 'SEARCH_START':
                return true;
            case 'SEARCH_RESULTS':
            case 'SEARCH_DONE':
            case 'SEARCH_CLEAR':
                return false;
            default:
                return state;
        }
    };
});
