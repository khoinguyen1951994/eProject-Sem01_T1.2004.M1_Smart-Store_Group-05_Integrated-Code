$(document).ready(function () {

    /*Change navbar when scroll page*/
    $(document).scroll(function () {
        let positionNav = $(".navbar");
        if(positionNav.offset().top >= 100){
            positionNav.addClass("navChange");
        }else{
            positionNav.removeClass("navChange");
        }
    });

    /* Change li navbar when scroll at current position page */
    var posHome = 0;
    var posProducts = 0;
    var posLocations = 0;
    var posAboutUs = 0;
    var posContact = 0;
    var posFeedbacks = 0;
    $(document).scroll(function(){ /* đặt trong event scroll do phần product có height thay đổi được => biến vị trí thay đổi liên tục*/
        posHome = 0;
        posProducts = $("#Products").offset().top -250;
        posLocations = $("#Locations").offset().top -250;
        posAboutUs = $("#About_Us").offset().top -250;
        posContact = $("#Contact").offset().top -250;
        posFeedbacks = $("#Feedbacks").offset().top -250;
        $(".nav-item").removeClass("navLiChange");
        // add again class first, remove class second
        $(".nav-link:not(.title)").addClass("nav-after"); 
        $(".nav-link").removeClass("nav-afterChange"); 
        if( $(document).scrollTop() < posProducts) {
            $("#liHome").addClass("navLiChange");
            // remove class first, add class second - border line in the botton li.navbar
            $("#liHome").children().removeClass("nav-after");
            $("#liHome").children().addClass("nav-afterChange");
        } else if(  $(document).scrollTop() < posLocations){
            $("#liProducts").addClass("navLiChange");
            // remove class first, add class second - border line in the botton li.navbar
            $("#liProducts").children().removeClass("nav-after");
            $("#liProducts").children().addClass("nav-afterChange");
        } else if(  $(document).scrollTop() < posAboutUs){
            $("#liLocations").addClass("navLiChange");
            // remove class first, add class second - border line in the botton li.navbar
            $("#liLocations").children().removeClass("nav-after");
            $("#liLocations").children().addClass("nav-afterChange");
        } else if(  $(document).scrollTop() < posContact){
            $("#liAboutUs").addClass("navLiChange");
            // remove class first, add class second - border line in the botton li.navbar
            $("#liAboutUs").children().removeClass("nav-after");
            $("#liAboutUs").children().addClass("nav-afterChange");
        } else if( $(document).scrollTop() < posFeedbacks ) {
            $("#liContact").addClass("navLiChange");
            // remove class first, add class second - border line in the botton li.navbar
            $("#liContact").children().removeClass("nav-after");
            $("#liContact").children().addClass("nav-afterChange");
        } else {
            $("#liFeedbacks").addClass("navLiChange");
            // remove class first, add class second - border line in the botton li.navbar
            $("#liFeedbacks").children().removeClass("nav-after");
            $("#liFeedbacks").children().addClass("nav-afterChange");
        }
    })
    
    /* Scroll page when click li-navbar */
    $("#liHome").click(function () {
        $("html,body").animate({
            scrollTop: 0
        },"slow");
    });
    $("#liProducts").click(function () { 
        $("html,body").animate({
            scrollTop: $("#Products").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liLocations").click(function () { 
        $("html,body").animate({
            scrollTop: $("#Locations").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liAboutUs").click(function () {
        $("html,body").animate({
            scrollTop: $("#About_Us").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liContact").click(function(){
        $("html,body").animate({
            scrollTop:  $("#Contact").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liFeedbacks").click(function(){
        $("html,body").animate({
            scrollTop:  $("#Feedbacks").offset().top - $(".navbar").outerHeight()
        },"slow")
    });

});