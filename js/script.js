$(document).ready(function () {

    // wow 
    new WOW().init();

    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //slick
    $('.banner-part').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '.prev',
        nextArrow: '.next',
        arrows: true
    });


    // jquery-filterizr

    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    $('.filtr-container').filterizr();



  
var OfsetTop = $('.full-nav-bar').offset().top;
    
    //alert(OfsetTop);
    
    $(window).on('scroll',function(){
        var scroltop = $(window).scrollTop();
        
        if(scroltop > OfsetTop){
            $('.full-nav-bar').addClass('stck');
        }else{
             $('.full-nav-bar').removeClass('stck');
        }
        
    });


});