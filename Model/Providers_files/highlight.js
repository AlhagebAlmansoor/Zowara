define(function(require, exports, module) {
    'use strict';

    module.exports = {
        moveTo: function(index) {
            return {
                type: 'SEARCH_MOVE_TO',
                payload: index
            };
        },
        moveUp: function() {
            return {
                type: 'SEARCH_MOVE_UP'
            };
        },
        moveDown: function() {
            return {
                type: 'SEARCH_MOVE_DOWN'
            };
        },
        toggleArticlePreview: function(index) {
            return {
                type: 'TOGGLE_PREVIEW',
                payload: index
            }
        }
    };
});
