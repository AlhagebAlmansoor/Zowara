/*******************************************************************************
* ATTENTION! This module runs both in Extranet Classic and Extranet Lite/Plus  *
********************************************************************************/

(function(glob, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'modules/console'], factory);
    } else if (glob.jQuery) {
        factory(glob.jQuery);
    } else {
        throw new Error('Simple feedback js requires jQuery');
    }
}(this, function($, console) {
    'use strict';
    var $ratingPopover = $('.rating-widget-popover');
    var $ratingPopoverClose = $ratingPopover.children('.close');
    var $submitFeedbackButton = $('.rating-widget-popover .feedback-btn');
    var $rating_id;

    $('body').on('click', function() {
        $ratingPopover.hide();
    });

    $('.rating-widget')
        .on('click.rating-widget', '.thumbs-up', function(e) { handleRatingButtonClicked(this, e, 1); })
        .on('click.rating-widget', '.thumbs-down', function(e) { handleRatingButtonClicked(this, e, 0); });

    function responseErrorHandler(jXHR) {
        if (console) {
            console.error(
                'Error submitting feedback: '
                    + (jXHR.responseText || jXHR.statusText || '<unknown error>')
            );
        }
    }

    function handleRatingButtonClicked(button, e, isThumbsUp) {
        e.preventDefault();
        e.stopPropagation();

        var $button = $(button);
        var $widget = $button.closest('.rating-widget');
        var $buttonLabel      = $button.children('.rating-widget-btn-label');
        var $otherButton      = $button.siblings();
        var $ratingOuterLabel = $widget.find('.rating-widget-outer-label');
        var $ratingPopover    = $widget.find('.rating-widget-popover');
        var moduleID          = $widget.data('module-id');
        var moduleName        = $widget.data('module-name');
        var ratingSubmitted   = $widget.data('rating-submitted');

        ratingSubmitted = ratingSubmitted && parseInt(ratingSubmitted, 10);

        $buttonLabel.show();
        $otherButton.hide();
        $ratingOuterLabel.hide();
        $ratingPopover.show();

        if (!ratingSubmitted) {
            $widget.attr('data-rating-submitted', 1);
            $.ajax({
                type: 'POST',
                dataType: 'JSON',
                url: isThumbsUp
                    ? $u.url('/hoteladmin/json/pagefeedback/thumbsup.json')
                    : $u.url('/hoteladmin/json/pagefeedback/thumbsdown.json'),
                data: {
                    module_id   : moduleID,
                    module_name : moduleName
                },
                success: function(response) {
                    $rating_id = response.rating_id;
                    // $('.rating-widget').off('click.rating-widget');
                    // $button.on('click.rating-widget', function(e) {
                    //     e.stopPropagation();
                    //     $ratingPopover.show();
                    // });
                    // $button.attr('disabled', true);
                    $widget.attr('data-rating-id', $rating_id);
                },
                error: function() {
                    responseErrorHandler();
                    $widget.attr('data-rating-submitted', 0);
                    $buttonLabel.hide();
                    $otherButton.show();
                    $ratingOuterLabel.show();
                    $ratingPopover.hide();
                }
            });
        }

    }

    $ratingPopover.on('click', function(e) {
        e.stopPropagation();
    });

    $ratingPopoverClose.on('click', function(e) {
        $(this).closest('.rating-widget-popover').hide();
        e.stopPropagation();
    });

    $submitFeedbackButton.click(function(e) {
        e.preventDefault();
        var $button = $(this);
        var $widget = $button.closest('.rating-widget');
        var $feedback_text = $widget.find('.rating-widget-msg');
        var $rating_buttons = $widget.find('.thumbs-up, .thumbs-down');
        var $rating_id = $widget.data('rating-id');
        var module_url = $widget.data('module-url');
        var module_name = $button.data('module-name');

        if (!$rating_id) {
            return;
        }

        $ratingPopover = $widget.find('.rating-widget-popover');
        $ratingPopover.hide();
        $rating_buttons.attr('disabled', true).addClass('rating-widget-btn-voted');

        if ($.ajax) {
            $.ajax({
                type: 'POST',
                dataType: 'JSON',
                url: $u.url('/hoteladmin/json/pagefeedback/sendcomments.json'),
                data: {
                    'source_url': module_url ? module_url : $u.js_data.request_uri,
                    'rating_id':  $rating_id,
                    'text':       $feedback_text.val(),
                    'module_name' : module_name
                },
                success: function() {
                    $ratingPopover.remove();
                },
                error: function(e) {
                    responseErrorHandler(e);
                    $rating_buttons.attr('disabled', false).removeClass('rating-widget-btn-voted');
                }
            });
        }

    });

    $(document.body).on('focus keyup change blur','textarea.rating-widget-msg', function() {
        var $this = $(this);
        var len = $this.val().length;

        $this.parent().find('.feedback-count').text(1000 - (len - 0));
    });
}));
