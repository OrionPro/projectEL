 //  Активация слайдера
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        responsiveClass: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 4
            },
            // breakpoint from 320 up
            320: {
                items: 4

            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 992 up
            992: {
                items: 4
            },
            // breakpoint from up
            1100: {
                items: 4
            },
            // breakpoint from up
            1210: {
                items: 5
            }
        }
    });



