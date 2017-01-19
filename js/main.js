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
