/**
 * Created by honeymathew on 20-May-17.
 */
$(function(){
    $(window).on("load resize", function(){
        $(".fill-screen").css("height",window.innerHeight);
    });

    // add bootstrap's scrollspy
    $('body').scrollspy({
        target:'.navbar',
        offset: 160
    });


    //smooth scrollig

    $('nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop:$($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //parallax scrolling with stellar.js

    // $(window).stellar();

    //initializing wow element for animation
    //new WOW().init();

    //initialize nano gallery

    $(document).ready(function(){
        $("#nanoGallery3").nanoGallery({
            thumbnailWidth: 120,
            thumbnailHeight: 80,
            thumbnailHoverEffect:'borderLighter,descriptionSlideUp'
        });

    });
});
