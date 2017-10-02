define(['jquery', 'et', 'modules/throttle', 'config'], function($, et, throttle, config) {
    var $hw = $('.js-helpdesk-widget');

    if ($hw.length !== 1) {
        return;
    }

    var $win = $(window);
    var $doc = $(document);
    var $overlay = $hw.children('.js-helpdesk-widget__overlay');
    var OPEN_CLASS = 'helpdesk-widget--open';

    var checkFooterAccommodation = function() {
        var scrollTotal = $doc.height() - $win.innerHeight();
        var scrollBalance = scrollTotal - $doc.scrollTop();
        if (scrollBalance < 50 && !$hw.hasClass(OPEN_CLASS)) {
            $hw.fadeOut();
        } else {
            $hw.fadeIn();
        }
    };
    var trackCustomGoal = function(stage) {
        if (config && config.zendesk_fixedEntry_exp_hash) {
            et.customGoal(config.zendesk_fixedEntry_exp_hash, stage);
        }
    };

    $hw.children('.js-helpdesk-widget__entry').on('click', function() {
        if ($hw.hasClass(OPEN_CLASS)) {
            trackCustomGoal(3);
        } else {
            trackCustomGoal(1);
        }
        $overlay.toggle({
                    effect: 'drop',
                    duration: 200
                });
        $hw.toggleClass(OPEN_CLASS);
        checkFooterAccommodation();
    });

    $overlay.on('click', function(){
        trackCustomGoal(2);
    });

    $win.scroll(throttle(checkFooterAccommodation));
    checkFooterAccommodation();
});
