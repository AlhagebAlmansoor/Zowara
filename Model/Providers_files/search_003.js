define(function(require, exports, module) {
    'use strict';

    var Component = require('component/base');
    var $ = require('jquery');
    var morphdom = require('lib/morphdom.1.1.2');
    var createStore = require('./stores/search');
    var throttle = require('modules/throttle');
    var et = require('et');
    var jstmpl = require('jstmpl');
    var GA = require('modules/gastats');
    require('es5-shim');

    // actions
    var highlightActions = require('./actions/highlight');
    var searchActions = require('./actions/search');
    var toggleActions = require('./actions/toggle-focus');
    var mobileActions = require('./actions/mobile');

    // constants for keyboard move direction
    var DOWN = 'down';
    var UP = 'up';
    var SELECTORS = {
        JS_SEARCH_INPUT: '.js-faq-search-input',
        JS_SEARCH_SHOW: '.js-faq-search-show',
        JS_SEARCH_CANCEL: '.js-faq-search-cancel',
        JS_SEARCH_CLEAR: '.js-faq-search-clear',
        JS_SEARCH_SEARCH: '.js-faq-search-search',
        JS_INBOX_HELP_LINK: '.js-inbox-help-section-link',
        JS_SEARCH_QUESTION: '.js-faq-search-question',
        SEARCH_QUESTION: '.faq-search-question-container',
        SEARCH_ACTIVE_QUESTION: '.faq-search-question-container--active',
        JS_TOGGLE_ARTICLE_PREVIEW: '.js-faq-search-preview-toggle'
    };
    var MINIMUM_QUERY_LENGTH = 3;
    var ext_asis_phc_search_article_preview = 'BCCFeYVdYLQJfbLLXCSYcVT',
        exp_bhpe_ext_need_help_copy = 'NVNUdOKRFYUVAReJZMO',
        exp_bhpe_dashboard_help_center = 'NVNUdKTVeBKeYEGHbKeVTUNKe';

    var getCloneNode = function(el, html) {
        var element = el.cloneNode();
        element.innerHTML = $.trim(html);
        return element;
    };

    module.exports = Component.extend({
        init: function() {
            this.template = jstmpl(this.$el.data('template'));
            this.zendeskUrl = this.$el.data('zendesk-url');
            this.expPlacement = this.$el.data('exp-placement');
            this.unsupportedLanguage = this.$el.data('unsupported-language');
            this.articlePreview = !!this.$el.data('article-preview');
            this.expHash = this.$el.data('exp-hash');
            this.isIE8 = $(document.body).hasClass('ua-internet_explorer-8');
            this.store = createStore();
            this.initListeners();
            this.store.subscribe($.proxy(this.render, this));
            this.updateIsMobile();
            this.render();
        },

        initListeners: function() {
            var that = this;
            this.$el.on('focus', SELECTORS.JS_SEARCH_INPUT, this.focusSearch.bind(this));
            this.$el.on('click', SELECTORS.JS_SEARCH_SHOW, this.openSearch.bind(this));
            this.$el.on('click', SELECTORS.JS_SEARCH_CANCEL, this.closeSearch.bind(this));
            this.$el.on('click', SELECTORS.JS_SEARCH_CLEAR, this.clearSearch.bind(this));
            this.$el.on('click', SELECTORS.JS_SEARCH_SEARCH, this.submit.bind(this));
            this.$el.on('click', SELECTORS.JS_TOGGLE_ARTICLE_PREVIEW, this.toggleArticlePreview.bind(this));
            this.$el.on('mouseenter', SELECTORS.SEARCH_QUESTION, function(evt) {
                this.store.dispatch(
                    highlightActions.moveTo(
                        $(evt.target).closest('[data-index]').data('index')
                    )
                );
            }.bind(this));
            this.$el.on('submit', 'form', this.submit.bind(this));
            this.$el.on('input', SELECTORS.JS_SEARCH_INPUT, function(evt) {
                var query = $(evt.target).val();
                this.handleInput(query);
            }.bind(this));
            this.$el.on('click', SELECTORS.SEARCH_ACTIVE_QUESTION + ' a', function() {
                if (that.expHash && that.expPlacement !== 'header') {
                    et.customGoal(that.expHash, 3);
                }
            });
            this.$el.on('keyup', SELECTORS.JS_SEARCH_INPUT, this.handleKeypress.bind(this));
            $(window).on('resize', throttle(this.updateIsMobile, 250, this));
            // close when clicking on body (sorry for reaching outside component)
            $(document.body).on('click', function(evt) {
                if (!this.isMobile() && !$.contains(this.el, evt.target)) {
                    this.closeSearch();
                }
            }.bind(this));

            // for experiment ext_asis_phc_search_article_preview
            if (this.articlePreview) {
                this.$el.on('click', SELECTORS.JS_SEARCH_QUESTION, function(evt) {
                    et.customGoal(ext_asis_phc_search_article_preview, 1);
                    et.customGoal(exp_bhpe_ext_need_help_copy, 1);
                    et.customGoal(exp_bhpe_dashboard_help_center, 1);
                    this.toggleArticlePreview(evt);
                }.bind(this));
            } else {
                this.$el.one('click', SELECTORS.JS_SEARCH_QUESTION, function() {
                    et.customGoal(ext_asis_phc_search_article_preview, 1);
                    et.customGoal(exp_bhpe_ext_need_help_copy, 1);
                    et.customGoal(exp_bhpe_dashboard_help_center, 1);
                }.bind(this));
            }
            this.$el.one('click', '.faq-search-question-preview .js-fmq-trigger', function() {
                et.customGoal(ext_asis_phc_search_article_preview, 2);
            });
            // end for exp ext_asis_phc_search_article_preview
        },

        handleKeypress: function(evt) {
            switch (evt.which) {
                case 27: // escape
                    this.store.dispatch(searchActions.clear());
                    break;
                case 40: //down arrow
                    this.store.dispatch(highlightActions.moveDown());
                    this.scrollToActive(DOWN);
                    break;
                case 38: //up arrow
                    this.store.dispatch(highlightActions.moveUp());
                    this.scrollToActive(UP);
                    break;
                case 13: //enter
                    this.submit(evt, true);
                    break;
            }
        },

        handleInput: function(query) {
            this.store.dispatch(searchActions.input(query));
            this.maybeDoSearch(query);
        },

        maybeDoSearch: function(query) {
            var that = this;
            if (query.length >= MINIMUM_QUERY_LENGTH) {
                if (this.searchTimeout) {
                    clearTimeout(this.searchTimeout);
                }
                this.searchTimeout = setTimeout(function() {
                    that.dispatchSearch(query);
                }, 900);
            } else if (query.length === 0) {
                this.clearSearch();
            }
        },

        dispatchSearch: function(query) {
            this.store.dispatch(searchActions.search({ query: query },
                this.expHash,
                this.expPlacement,
                this.articlePreview
            ));
            if (/[0-9\. \t]{9,}/.test(query)) {
                GA('zendeskSearch', 'Reservation ID like query', 'search');
            }
        },

        updateIsMobile: function() {
            var state = this.store.getState();
            var isNowMobile = this.isMobile();
            var isSearchVisible = state.visible;

            if (isNowMobile !== state.isMobile) {
                this.store.dispatch(mobileActions.setIsMobile(isNowMobile));

                if (isNowMobile) {
                    $(SELECTORS.JS_INBOX_HELP_LINK).show();
                    if (isSearchVisible) {
                        this.hideOverflow();
                    }
                } else {
                    $(SELECTORS.JS_INBOX_HELP_LINK).hide();
                    if (isSearchVisible) {
                        this.restoreOverflow();
                    }
                }
            }
        },

        isMobile: function() {
            return $(window).width() < 992;
        },

        submit: function(evt, openLink) {
            evt.preventDefault();
            var query = this.$el.find(SELECTORS.JS_SEARCH_INPUT).val();
            var state = this.store.getState();
            if (this.isIE8 && query !== state.query) {
                // the input event won't work in IE8, so let's search on submit
                this.store.dispatch(searchActions.input(query));
                this.maybeDoSearch(query);
            } else if (openLink) {
                if (this.articlePreview) {
                    var $elem = this.$el.find(SELECTORS.SEARCH_ACTIVE_QUESTION + ' .js-faq-search-preview-toggle')
                    if ($elem.length) {
                        $elem.trigger('click');
                    }
                } else {
                    // open the currently active link on enter otherwise
                    var $elem = this.$el.find(SELECTORS.SEARCH_ACTIVE_QUESTION + ' .js-fmq-trigger');
                    if ($elem.length) {
                        $elem.trigger('click');
                    }
                }
            }
        },

        render: function() {
            var el = this.el;
            var state = this.store.getState();
            var renderContext = $.extend({
                                    zendeskUrl: this.zendeskUrl,
                                    unsupportedLanguage: this.unsupportedLanguage,
                                    articlePreview: this.articlePreview
                                }, state);
            morphdom(el, getCloneNode(el, this.template.render(renderContext)));
        },

        focusSearch: function(evt) {
            evt.preventDefault();
            if (this.isMobile() && !this.store.getState().visible) {
                this.hideOverflow();
            }
            this.store.dispatch(toggleActions.focus());
        },

        openSearch: function(evt) {
            evt.stopPropagation();
            this.focusSearch(evt);
            this.$el.find(SELECTORS.JS_SEARCH_INPUT).focus();
        },

        closeSearch: function(evt) {
            this.store.dispatch(toggleActions.close());
            this.restoreOverflow();
        },

        clearSearch: function(evt) {
            if (evt) {
                evt.preventDefault();
                evt.stopPropagation();
            }
            this.store.dispatch(searchActions.clear());
        },

        toggleArticlePreview: function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.store.dispatch(highlightActions.toggleArticlePreview(
                $(evt.target).closest('[data-index]').data('index')
            ));
        },

        // in mobile view, we want to ensure the body doesn't scroll
        // again, apologies for reaching outside the component
        hideOverflow: function() {
            this.oldOverflow = $(document.body).css('overflow');
            $(document.body).css('overflow', 'hidden');
        },

        restoreOverflow: function() {
            $(document.body).css('overflow', this.oldOverflow);
        },

        scrollToActive: function(direction) {
            var state = this.store.getState();
            // if nothing to scroll to, return
            if (!state.show || state.show.length <= 1) { return; }

            var indexTo = state.items.activeIndex;
            var $resultElement = this.$el.find('.faq-search-results');

            if (indexTo === 0) { // moving to first item
                $resultElement.scrollTop(0);
            } else if (indexTo === state.items.show.length - 1) { // last item
                $resultElement.scrollTop($resultElement.prop('scrollHeight'));
            } else {
                var scrollTop = $resultElement.scrollTop();
                var $active = this.$el.find(SELECTORS.SEARCH_ACTIVE_QUESTION);
                var resultTop;
                var delta;

                if (direction === DOWN) { // moving down
                    var resultHeight = $active.outerHeight();
                    var resultsHeight = $resultElement.height();
                    resultTop = $active.position().top;
                    delta = resultsHeight - resultTop - resultHeight;

                    if (delta < 0) {
                        $resultElement.scrollTop(scrollTop + Math.abs(delta));
                    }
                } else { // moving up
                    // Get position including scroll.
                    resultTop = $active.position().top + scrollTop;
                    delta = resultTop - scrollTop;

                    if (delta < 0) {
                        $resultElement.scrollTop(scrollTop - Math.abs(delta));
                    }
                }
            }
        }
    });
});
