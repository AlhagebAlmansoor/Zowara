define([

    'jquery',
    'modules/dom.cache'

], function ($, dom) {

    var toggleButton,
        internalTags,
        areHidden;

    var init = function() {
        toggleButton = $('#js-toggle_internal_tags');
        internalTags = dom.$.body.find('.js-internal_tags');

        // If cookie does not exist, create it equal to false
        if ( !document.cookie.replace(/(?:(?:^|.*;\s*)areInternalTagsHidden\s*\=\s*([^;]*).*$)|^.*$/, "$1") ) {
            document.cookie = "areInternalTagsHidden=false";
        }

        areHidden = document.cookie.replace(/(?:(?:^|.*;\s*)areInternalTagsHidden\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "true" ? true : false;

        internalTags.toggleClass('hide', areHidden);

        toggleButton.on('click', toggleInternalTags);
    }

    function toggleInternalTags(hidden) {
        areHidden = !areHidden;
        internalTags.toggleClass('hide', areHidden);
        // store new state in cookie
        document.cookie = "areInternalTagsHidden=" + areHidden + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }

    init();

});
