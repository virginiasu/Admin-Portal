/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("header").load("header.html").addClass("clearfix");
    $("nav").load("nav.html").addClass("left");
    $("#search").load("search.html");
    $("footer").load("footer.html");
    $("section.content").prepend('<span id="navIcon"></span>');

//    accordion
    initBlock();

//    tabs
    initGroup();

//    hide nav into an icon
    initNav();
});

function initBlock() {
    $("div.block").each(function () {
        var $block = $(this),
                $header = $(".block_header", $block),
                $content = $(".block_content", $block),
                $minimize = $(".minimize", $block),
                $expand = $(".expand", $block);

        $minimize.click(function () {
            if ($block.hasClass("block_expanded")) {
                $content.slideUp(function () {
                    $block.removeClass("block_expanded");
                });
            }
        });
        $expand.click(function () {
            if (!$block.hasClass("block_expanded")) {
                $content.slideDown();
                $block.addClass("block_expanded");
            }
        });
    });
}

function initGroup() {
    var $inittag = $("a.group_trigger.active").data("group"),
            $initgroup = $(".group_container." + $inittag);
    $initgroup.show();
    $("a.group_trigger").click(function () {
        $(".group_trigger").removeClass("active");
        $(".group_container").hide();
        $(this).addClass("active");
        var $this = $(this),
                $tag = $(this).data("group"),
                $group = $(".group_container." + $tag),
                $outer = $group.parent();
        $group.fadeIn();

    });
}

function initNav() {
    if ($("section.content").hasClass("push")) {
        $("section.content").css({"left": "40px"});
    }

    $("#navIcon").click(function () {
        if ($("section.content").hasClass("push")) {
            $("section.content").removeClass("push").animate({
                left: "242px"
            }, 300);
        } else {
            $("section.content").addClass("push").animate({
                left: "38px"
            }, 300);
        }
    });
}

//Modal = function () {
//    var _this = this;
////    default
//    _this.options = {
//        id: "TemplateModal",
//        title: "Template Modal",
//        body: "<div>Modal Body</div>"
//    };
//    
//    _this.create = function (options) {
//        var $temp = $('#' + options.id);
//
//        if ($temp.length === 0) {
//            var bg = '<div class="modal-bg"></div>', $container = $('<div class="modal-container"></div>'), $header = '<div class="header"><h1>'
//                    + options.title
//                    + '</h1>'
//                    + (options.noClose ? '<a class="close"></a>'
//                            : '<a href="" class="close dismiss-trigger"></a>')
//                    + '</div>', $body = $('<div class="body">' + options.body
//                            + '</div>');
//
//            $temp = $('<section class="modal'
//                    + '" id="' + options.id + '"></section>');
//            $temp.append(bg);
//
//            $container.append($header);
//            $container.append($body);
//
//            $temp.append($container);
//
//            $('body').append($temp);
//
//            $temp.on('click', '.dismiss-trigger', function (e) {
//                e.preventDefault();
//                if (typeof options.cancel === 'function') {
//                    options.cancel(e);
//                }
//                if (options.preventClose !== true) {
//                    if ($("a.help.show-tooltip").length) {
//                        $("a.help.show-tooltip").trigger("click");
//                    }
//                    Modal.hide(options.id);
//                    unlockPage();
//                }
//            });
//
//            $temp.on('click', '.modal-bg', function (e) {
//                e.preventDefault();
//                if ($("a.help.show-tooltip").length) {
//                    $("a.help.show-tooltip").trigger("click");
//                }
//                if ($temp.hasClass("video-modal")) {
//                    Modal.destroy(options.id);
//                } else if ($("body").hasClass("my-profile") || options.id === "changeStatusModal") {
//                    $("a.continue", $temp).trigger("click");
//                } else {
//                    Modal.hide(options.id);
//                }
//                unlockPage();
//            });
//        }
//
//        _this.show(options.id, options.openSetup);
//        if (typeof options.init === 'function') {
//            options.init($temp);
//        }
//
//        return $temp;
//    };
//
//    _this.destroy = function (id) {
//        $('#' + id).remove();
//        unlockPage();
//        $(window).off('resize.modal');
//    };
//
//    _this.hide = function (id) {
//        $('#' + id).removeClass('show');
//        unlockPage();
//        $(window).off('resize.modal');
//    };
//
//    _this.show = function (id, openSetup) {
//        var $modal = $('#' + id);
//        if (typeof openSetup === 'function') {
//            openSetup($modal);
//        }
//
//        lockPage();
//        _this.resize(id);
//        $modal.find('.body').scrollTop(0);
//        $(window).bind(
//                'orientationchange resize',
//                function (id) {
//                    var $modal = (typeof id === 'string' ? $('#' + id
//                            + ' .modal-container')
//                            : $('.modal:visible .modal-container')), wh = $(
//                            window).height(), $modalH = 0.9 * wh,
//                            hh = $modal.children('.header').outerHeight() > $modal.children('header').outerHeight() ? $modal.children('.header').outerHeight() : $modal.children('header').outerHeight();
//                    $modal.css('max-height', $modalH + 'px');
//                    $modal.children('.body').css('max-height',
//                            $modalH - hh + 'px');
//                });
//    };
//
//    // NOTE: This method should be called if/when the content in a modal is
//    // changed (b/c of the height change)
//    _this.resize = function (id) {
//        var $modal = (typeof id === 'string' ? $('#' + id + ' .modal-container')
//                : $('.modal:visible .modal-container')),
//                wh = $(window).height(),
//                $modalH = 0.9 * wh,
//                hh = $modal.children('.header').outerHeight() > $modal.children('header').outerHeight() ? $modal.children('.header').outerHeight() : $modal.children('header').outerHeight();
//        $modal.parent().addClass('pre-show');
//        $modal.removeClass('oversize fulloversize long').css('max-height',
//                $modalH + 'px');
//        $modal.children('.body').css('max-height', $modalH - hh + 'px');
//
//        $modal.parent().removeClass('pre-show').addClass('show');
//    };
//
//};
//
//console.log(Modal.create);