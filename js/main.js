$('.menu-btn').on('click', function () {
    $('.nav').toggleClass('is-active');
});

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({

        responsive:{
            0:{
                items:2
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});