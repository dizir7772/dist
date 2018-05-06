$(document).ready(function () {
    var $dropdowns = $('.dropdown');
    $dropdowns.click(function() {
        if ( $(this).hasClass('active') ){
            $(this).toggleClass('active');
        } else {
            $dropdowns.removeClass('active');
            $(this).toggleClass('active');
        }
    });

    //slider
    $('.fade').slick({
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });

});