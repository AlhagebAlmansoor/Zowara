define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery');

    module.exports = function(state, action) {
        if (typeof state === 'undefined') { state = false; }
        switch (action.type) {
            case 'SET_IS_MOBILE':
                return action.payload;
            default:
                return state;
        }
    };
});
