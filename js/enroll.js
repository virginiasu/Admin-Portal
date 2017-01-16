/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $("select").on("change", function(){
        var $couponContainer = $(this).next(".couponContainer");
        $couponContainer.fadeIn();
    });
    
    $(".starlink_enroll_plan a.item_link.primary").click(function(){
        var $block = $(this).parentsUntil(".block").parent(),
            $header = $(".starlink_enroll_header", $block),
            $minimize = $(".minimize", $block),
            $container = $(this).parent();
            $text = $("h3", $container).first().text() + " - " + $("select", $container).first().val() + " - Final Cost: $00.00";

        $minimize.trigger("click");
        $header.text($text);
    });
    
    $(".submitPreference").click(function(){
        var $block = $(this).parentsUntil(".block").parent(),
            $header = $(".block_header .starlink_enroll_header", $block),
            $minimize = $(".minimize", $block);
        
        $minimize.trigger("click");
        $header.text("Karina -- kbro@subaru.com -- (000)000-0000");
    });
    
    $("span.billing_addr_check").click(function(){
        $(this).toggleClass("checked");
        $(".billing_addr_manual").toggle();
    });
    
    $(".submitPayment").click(function(){
        $("#review").show(function(){
            $("#review").click(function(){
                $("#review").hide();
            });
        });
    });
});