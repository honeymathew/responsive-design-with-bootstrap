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
/*
    $(document).ready(function(){
        $("#nanoGallery3").nanoGallery({
            thumbnailWidth: auto,
            thumbnailHeight: 200,
            thumbnailHoverEffect:'borderLighter,descriptionSlideUp'
        });

    });*/

    $(document).ready(function () {
        $("#nanoGallery").nanoGallery({

            thumbnailWidth: 'auto',
            thumbnailHeight: 250,

            userID: '111186676244625461692', kind:'picasa',
            album: '5911347863561293937',
            colorScheme: 'none',
            thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
            theme: 'light',
            thumbnailGutterWidth : 0,
            thumbnailGutterHeight : 0,
            i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
            thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
        });
    });
});
