define(function(require, exports, module) {
    'use strict';

    module.exports = {
        setIsMobile: function(isMobile) {
            return {
                type: 'SET_IS_MOBILE',
                payload: isMobile
            };
        }
    };
});
