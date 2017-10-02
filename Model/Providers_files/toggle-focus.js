define(function(require, exports, module) {
    'use strict';

    module.exports = {
        focus: function() {
            return {
                type: 'SEARCH_FOCUS'
            };
        },
        close: function() {
            return {
                type: 'SEARCH_CLOSE'
            };
        }
    };
});
