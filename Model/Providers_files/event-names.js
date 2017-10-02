(function(define) {
    'use strict';

    var setupComponent = function() {
        var eventNames = {
            /**
             * @var {String}
             */
            _transitionEnd: null,

            /**
             * @var {String}
             */
            _animationEnd: null,

            /**
             * Get a name of a browser event.
             * e.g. animationend
             *
             * @param {Object} eventNameMap
             * @return {String}
             */
            getEventName: function(eventNameMap) {
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
            },

            getTransitionEnd: function() {
                if (this._transitionEnd === null) {
                    this._transitionEnd = this.getEventName({
                        'transition': 'transitionend'
                    });
                }

                return this._transitionEnd;
            },

            getAnimationEnd: function() {
                if (this._animationEnd === null) {
                    this._animationEnd = this.getEventName({
                        'animation': 'animationend'
                    });
                }

                return this._animationEnd;
            }
        };

        return eventNames;
    };

    if (typeof define === 'function' && define.amd) {
        define([], setupComponent);
    } else {
        if (!window.ExtApp) {
            window.ExtApp = {};
        }

        ExtApp.eventNames = setupComponent();
    }
})(window.define);
