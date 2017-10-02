/**
 * Tooltip component.
 */
(function() {
    'use strict';

    var setupComponent = function($, eventNames) {
        /**
         * Default options.
         */
        var defaults = {
            tipEl: '',
            direction: '',
            trigger: '',
            canMouseOver: true,
            offset: 5
        };

        /**
         * Tooltip constructor.
         *
         * @param {jQuery} el
         * @param {Object} options
         */
        function Tooltip(el, options) {
            this.el = el;
            this.options = $.extend({}, defaults, options);
            this.animationEnd = eventNames.getAnimationEnd();
            this.win = $(window);
            this.isRTL = ($('html').attr('dir') == 'rtl');

            this.touchEnabled = ('ontouchstart' in window || navigator.maxTouchPoints);

            this.collectOptions();

            if (typeof this.options.tipEl === 'string') {
                this.tipEl = $(this.options.tipEl);
            } else {
                this.tipEl = this.options.tipEl;
            }

            this.tipEl.appendTo('body');

            this.initEvents();
        }

        /**
         * Collect all possible options.
         */
        Tooltip.prototype.collectOptions = function() {
            var optionName;
            var dataValue;

            for (optionName in this.options) {
                dataValue = this.el.data(optionName.toLowerCase());

                if (dataValue !== undefined) {
                    this.options[optionName] = dataValue;
                }
            }
        };

        /**
         * Abort the timeout which shows the tooltip.
         * This timeout is created on the touchstart event.
         */
        Tooltip.prototype.abortOnTouchShow = function() {
            if (this.onTouchShowTimeout) {
                clearTimeout(this.onTouchShowTimeout);
                this.onTouchShowTimeout = null;
            }
        };

        /**
         * Init events.
         */
        Tooltip.prototype.initEvents = function() {
            var that = this;

            if (this.options.trigger === 'hover') {
                if (this.touchEnabled) {
                    this.el.on('touchstart', function() {
                        that.abortOnTouchShow();
                        that.onTouchShowTimeout = setTimeout(function() {
                            that.show();
                        }, 100);
                    });
                    this.tipEl.addClass('ext-tooltip--touch');
                    this.tipEl.append('<button type="button" class="ext-tooltip__close">&times;</button>');
                    this.tipEl.on('click', '.ext-tooltip__close', function() {
                        that.hide();
                    });
                }

                this.el.on('mouseenter', function() {
                    if (!that.onTouchShowTimeout) {
                        that.clearHideTimeout();// canMouseOver

                        if (!that.isVisible()) {
                            that.show();
                        }
                    }
                });

                this.el.on('mouseleave', function() {
                    if (that.options.canMouseOver) {
                        that.hideWithTimeout();
                    } else {
                        that.hide();
                    }
                });

                if (this.options.canMouseOver) {
                    this.tipEl.on('mouseenter', function() {
                        that.clearHideTimeout();
                    });

                    this.tipEl.on('mouseleave', function() {
                        // Android processes mouse events and touch events,
                        // so when tooltip is dismissed using "close" button,
                        // this tipEl's "mouseleave" event triggers after el's "touchstart".
                        // Therefore, we need to make sure that el's "touchstart" is
                        // not cancelled by tipEl's "mouseleave".
                        if (!that.onTouchShowTimeout) {
                            that.hideWithTimeout();
                        }
                    });
                }
            }
        };

        /**
         * Hide the tooltip with a timeout.
         */
        Tooltip.prototype.hideWithTimeout = function() {
            var that = this;

            this.clearHideTimeout();
            this.hideTimeout = setTimeout(function() {
                that.hide();
            }, 300);
        };

        /**
         * Cancel the timeout for hiding the tooltip.
         */
        Tooltip.prototype.clearHideTimeout = function() {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
            }
        };

        /**
         * Check if the tooltip is visible.
         *
         * @return {Boolean}
         */
        Tooltip.prototype.isVisible = function() {
            return this.tipEl.hasClass('ext-tooltip--visible');
        };

        /**
         * Get direction.
         *
         * @return {String}
         */
        Tooltip.prototype.getDirection = function() {
            var direction = this.options.direction;

            if (this.isRTL) {
                if (direction == 'right') {
                    direction = 'left';
                } else if (direction == 'left') {
                    direction = 'right';
                }
            }

            return direction;
        };

        /**
         * Set direction.
         *
         * @param {String} direction
         */
        Tooltip.prototype.setDirection = function(direction) {
            this.options.direction = direction;
        };

        /**
         * Show tooltip.
         */
        Tooltip.prototype.show = function() {
            var that = this;
            var elWidth;
            var elHeight;
            var tipWidth;
            var tipHeight;
            var tipLeft;
            var tipTop;
            var tipAnimationClass;
            var elOffset;
            var winWidth;
            var classesToRemove;
            var complete;
            var direction;
            var tipCSS = {};
            var offset = this.options.offset;

            this.tipEl.css({
                'display': 'block',
                'width':   'auto',
                'left':     0,
                'top':      0
            });

            this.el.trigger('ext.tooltip.show', [this]);

            direction = this.getDirection(); // Allow to override direction.

            classesToRemove = 'ext-tooltip--fade-out-right' +
                ' ext-tooltip--fade-out-left' +
                ' ext-tooltip--fade-out-up' +
                ' ext-tooltip--fade-out-down' +
                ' ext-tooltip--visible' +
                ' ext-tooltip--left' +
                ' ext-tooltip--right' +
                ' ext-tooltip--bottom' +
                ' ext-tooltip--top';

            this.tipEl.removeClass(classesToRemove);
            this.tipEl.addClass('ext-tooltip--' + direction);

            elOffset = this.el.offset();
            elWidth = this.el.outerWidth();
            elHeight = this.el.outerHeight();
            winWidth = document.body.clientWidth;

            if (direction === 'left' || direction === 'right') {
                tipWidth = this.tipEl.outerWidth();

                if (direction === 'left') {
                    tipLeft = elOffset.left - tipWidth - offset;

                    if (tipLeft < 0) {
                        tipWidth = elOffset.left - offset;
                        tipLeft = elOffset.left - tipWidth - offset;
                        this.tipEl.css('width', tipWidth);
                    }

                    tipAnimationClass = 'ext-tooltip--fade-in-right';
                } else { // right
                    tipLeft = elOffset.left + elWidth + offset;

                    if ((tipLeft + tipWidth) > winWidth) {
                        this.tipEl.css('width', winWidth - tipLeft);
                    }

                    tipAnimationClass = 'ext-tooltip--fade-in-left';
                }

                tipHeight = this.tipEl.outerHeight();
                tipTop = elOffset.top + (elHeight / 2) - (tipHeight / 2);

                tipCSS.left = tipLeft + 'px';
                tipCSS.top = tipTop + 'px';
            } else if (direction === 'top' || direction === 'bottom') {
                tipWidth = this.tipEl.outerWidth();
                tipLeft = elOffset.left + (elWidth / 2) - (tipWidth / 2);

                if (tipLeft + tipWidth > winWidth) {
                    var deltaX = tipLeft + tipWidth - winWidth;
                    tipLeft += Math.ceil(deltaX);
                    tipWidth -= Math.ceil(deltaX * 2);
                    this.tipEl.css('width', tipWidth);
                } else if (tipLeft < 0) {
                    tipWidth += tipLeft * 2;
                    tipLeft = 0;
                    this.tipEl.css('width', tipWidth);
                }

                tipHeight = this.tipEl.outerHeight();

                if (direction === 'top') {
                    tipCSS.top = (elOffset.top - tipHeight - offset) + 'px';
                    tipAnimationClass = 'ext-tooltip--fade-in-down';
                } else { // bottom
                    tipCSS.top = (elOffset.top + elHeight + offset) + 'px';
                    tipAnimationClass = 'ext-tooltip--fade-in-up';
                }

                tipCSS.left = tipLeft + 'px';
            }

            complete = function() {
                that.tipEl.addClass('ext-tooltip--visible');
                that.tipEl.removeClass(tipAnimationClass);
            };

            this.tipEl.css(tipCSS);

            if (this.animationEnd) {
                this.tipEl.off(this.animationEnd);
                this.tipEl.one(this.animationEnd, complete);
                this.tipEl.addClass(tipAnimationClass);
            } else {
                complete();
            }
        };

        /**
         * Hide tooltip.
         *
         * @param {String} how How to hide the tooltip ('silent' for no animation).
         */
        Tooltip.prototype.hide = function(how) {
            var that = this;
            var tipAnimationClass;
            var direction;
            var complete = function() {
                var classesToRemove = 'ext-tooltip--fade-out-right' +
                    ' ext-tooltip--fade-in-right' +
                    ' ext-tooltip--fade-out-left' +
                    ' ext-tooltip--fade-in-left' +
                    ' ext-tooltip--fade-out-up' +
                    ' ext-tooltip--fade-in-down' +
                    ' ext-tooltip--fade-in-up' +
                    ' ext-tooltip--visible';
                that.tipEl.removeClass(classesToRemove);
                that.tipEl.css('display', 'none');
            };

            if (how === 'silent') {
                if (this.animationEnd) {
                    this.tipEl.off(this.animationEnd);
                }

                complete();

                return;
            }

            direction = this.getDirection();

            if (direction == 'right') {
                tipAnimationClass = 'ext-tooltip--fade-out-right';
            } else if (direction == 'left') {
                tipAnimationClass = 'ext-tooltip--fade-out-left';
            } else if (direction == 'top') {
                tipAnimationClass = 'ext-tooltip--fade-out-up';
            } else if (direction == 'bottom') {
                tipAnimationClass = 'ext-tooltip--fade-out-down';
            }

            if (this.animationEnd) {
                this.tipEl.off(this.animationEnd);
                this.tipEl.one(this.animationEnd, complete);
                this.tipEl.addClass(tipAnimationClass);
            } else {
                complete();
            }
        };

        $.fn.extTooltip = function(options) {
            return this.each(function() {
                var el = $(this);
                var tooltip = el.data('extTooltip');

                if (!tooltip) {
                    tooltip = new Tooltip(el, options);
                    el.data('extTooltip', tooltip);
                }
            });
        };

        return Tooltip;
    };

    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'modules/event-names'], setupComponent);
    } else {
        if (!window.ExtApp) {
            window.ExtApp = {};
        }

        ExtApp.Tooltip = setupComponent(jQuery, ExtApp.eventNames);
    }
})();
