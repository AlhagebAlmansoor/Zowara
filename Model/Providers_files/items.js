define(function(require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var zendeskAPI = require('modules/zendesk-api');
    var et = require('et');
    var squeak = require('modules/squeak');
    var ext_asis_phc_search_article_preview = 'BCCFeYVdYLQJfbLLXCSYcVT';

    var HASH_URL_REGEXP = /^#/;
    var URL_WITH_SLASH_REGEXP = /^\//;
    var HTTP_URL_REGEXP = /^http/;

    // Process the HTML for the articles returned from PHC
    // This is to make them look cleaner
    var processArticleHTML = function(articleHTML, articleName) {
        var $elem = $('<div>' + articleHTML + '</div>');
        // we don't want these in the small space we have for the preview
        $elem.find('img,video,object,picture,iframe,style,script').remove();
        // In Unicode, [the non-breaking space] is encoded
        // as U+00A0 (HTML: &#160; &nbsp;)
        $elem.find(':contains("\u00a0")').filter(function(index, item) {
            return $.trim($(item).text()) === '';
        }).remove();
        // headings look way too big, replace with strong
        $elem.find('h1,h2,h3,h4,h5,h6').each(function(index, item) {
            var $item = $(item);
            // preserve the IDs, to make sure #id links still work
            var itemIdAttr = $item.attr('id') ? ' id="' + $item.attr('id') + '"' : '';
            $(item).replaceWith('<p' + itemIdAttr + '><strong>' + $(item).html() + '</strong></p>');
        });
        // remove all attributes except href and id
        $elem.find('*').each(function(index, item) {
            var attributes = item.attributes;
            var attribute;
            var attributeName;
            if (attributes && attributes.length) {
                for (var i = attributes.length; i--;) {
                    attribute = attributes[i];
                    attributeName = attribute.nodeName;
                    if (attributeName !== 'href' && attributeName !== 'id') {
                        $(item).attr(attribute.nodeName, '');
                    }
                }
            }
        });
        // fixing some links, relative links should point to PHC
        $elem.find('a').attr('target', '_blank')
            .each(function(index, item) {
                // item.href would return absolute urls
                var href = $(item).attr('href');
                if (URL_WITH_SLASH_REGEXP.test(href)) {
                    $(item).attr('href', zendeskAPI.toAbsoluteURL(href));
                } else if (HASH_URL_REGEXP.test(href)) {
                    $(item).attr('target', '');
                } else if (!HTTP_URL_REGEXP.test(href)) {
                    squeak('PHC article preview: relative URL in content "' + articleName + '"');
                }
            });
        return $elem.html();
    };

    var highlightReplaceFunction = function(kw) {
        return '<mark class="faq-search-result-text--highlight">' + kw + '</mark>';
    };

    var highlightKeywords = function(text, keyword) {
        var keywords = $.trim(keyword).split(' ').sort(function(k1, k2) {
            // sort by length, longer first to highlight the longest words
            return k2.length - k1.length;
        });
        var regexp = new RegExp(keywords.join('|'), 'ig');
        return text.replace(regexp, highlightReplaceFunction);
    };

    var processResults = function(data) {
        var show = _.map(data.results, function(item, index) {
            return {
                name: highlightKeywords(item.name, data.query),
                href: zendeskAPI.campaignUrl(item.html_url, 'search-result'),
                index: index,
                body: data.articlePreview ? processArticleHTML(item.body, item.name) : undefined,
                active: index === 0
            };
        });
        var noResults = show.length === 0;
        if (data.expHash) {
            et.customGoal(data.expHash, 1);
        }
        if (noResults && data.expHash) {
            et.customGoal(data.expHash, 2);
        }
        if (data.placement === 'header') {
            et.goalWithValue('js_header_faq_search_done', 1);
        }
        if (noResults && data.placement === 'header') {
            et.goalWithValue('js_header_faq_search_no_results', 1);
        }
        if (!noResults && data.placement === 'header') {
            et.goalWithValue('js_header_faq_search_with_results', 1);
        }
        et.goalWithValue('js_asis_phc_search_done', 1);
        if (noResults) {
            et.goalWithValue('js_asis_phc_search_no_results', 1);
        } else {
            et.goalWithValue('js_asis_phc_search_with_results', 1);
            et.stage(ext_asis_phc_search_article_preview, 1);
        }
        return { show: show, activeIndex: 0, no_results: noResults };
    };
    var setActiveSelection = function(state, index) {
        if (!state.show || state.show.length <= 1) { return state; }
        var newIndex = index % state.show.length; // to wrap from last to first
        if (newIndex < 0) { newIndex = state.show.length - 1; }
        if (newIndex === state.activeIndex) { return state; }
        return $.extend({}, state, {
            show: _.map(state.show, function(item, index) {
                if (!item.active && index === newIndex) {
                    return $.extend({}, item, {active: true});
                } else if (item.active && index !== newIndex) {
                    return $.extend({}, item, {active: false});
                }
                return item;
            }),
            activeIndex: newIndex
        });
    };
    var moveActiveSelection = function(state, change) {
        return setActiveSelection(state, state.activeIndex + change);
    };
    var togglePreview = function(state, toggleIndex) {
        return $.extend({}, state, {
            show: _.map(state.show, function(item, index) {
                if (index === toggleIndex) {
                    return $.extend({}, item, {expanded: !item.expanded});
                }
                return item;
            })
        });
    };

    module.exports = function(state, action) {
        if (!state) { state = {}; }
        switch (action.type) {
            case 'SEARCH_QUERY_INPUT':
                return $.extend({}, state, {show: null, no_results: false});
            case 'SEARCH_CLEAR':
                return {};
            case 'SEARCH_RESULTS':
                return processResults(action.payload);
            case 'SEARCH_MOVE_UP':
                return moveActiveSelection(state, -1);
            case 'SEARCH_MOVE_DOWN':
                return moveActiveSelection(state, 1);
            case 'SEARCH_MOVE_TO':
                return setActiveSelection(state, action.payload);
            case 'TOGGLE_PREVIEW':
                return togglePreview(state, action.payload);
        }
        return state;
    };
});
