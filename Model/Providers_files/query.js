define(function(require, exports, module) {
    'use strict';

    module.exports = function(state, action) {
        if (!state) { state = ''; }
        switch (action.type) {
            case 'SEARCH_CLEAR':
                return '';
            case 'SEARCH_QUERY_INPUT':
                return action.payload;
        }
        return state;
    };
});
