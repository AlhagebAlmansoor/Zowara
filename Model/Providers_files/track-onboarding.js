define([
    'jquery',
    'config'
], function($, config) {
    'use strict';

    var markAction = function(actionName) {
        $.ajax({
            type:        'post',
            dataType:    'json',
            cache:       false,
            contentType: 'application/json',
            url:         $u.url('/hoteladmin/extranet_ng/manage/json/mark_onboarding_process_finished.json'),
            data:        JSON.stringify({action: actionName})
        });
    };

    var markWatchTheVideo = function() {
        if (!config.watch_the_video) {
            $('.tour-video-custom-play-wrapper').on('click', function() {
                markAction('watch the video');
                $('#js-rto-guided-tour').find('.js-num').replaceWith('<span class="num step-completed"><i class="glyphicon glyphicon-ok"></i></span>');
            });
        }
    };

    var markConfirmRatesAndAvailability = function() {
        $('#js-calendar-up-to-date').on('click', function() {
            markAction('confirm rates and availability');
        });

        $('#js-alert--check-calendar').on('click', '.close', function() {
            markAction('confirm rates and availability');
        });
    };

    // npx_connect_rto_homepage_mark_calendar_step_as_done
    var markConfirmRatesAndAvailabilityInHomePage = function() {
        $('.js-calendar_step_cta').on('click', function() {
            markAction('confirm rates and availability');
        });
    };

    var page = config.page || '';

    // npx_connect_rto_homepage_mark_calendar_step_as_done
    if ($u.js_data.config.mark_calendar_step_as_done_when_clicked_exp) {
        switch (page) {
            case 'home':
                markWatchTheVideo();
                markConfirmRatesAndAvailabilityInHomePage();
                break;
            case 'availability_calendar':
            case 'calendar':
            case 'calendar_sup':
                markConfirmRatesAndAvailability();
                break;
        }
    } else {
        switch (page) {
            case 'home':
                markWatchTheVideo();
                break;
            case 'availability_calendar':
            case 'calendar':
            case 'calendar_sup':
                markConfirmRatesAndAvailability();
                break;
        }
    }
});
