$(window).scroll(function() {

    readyTimeLineGo();

});
// активация тайм линий при загрузке с измерением скролла
function readyTimeLineGo() {
    if ($(window).scrollTop() > 10) {
        tl.play();
        if (window.matchMedia("(max-width: 992px)").matches) {
            // if ($(window).scrollTop() <= 300) {
            //     tl.reverse();
        }
        if ($(window).scrollTop() > 300) {
            tl2.play();
        }
        if ($(window).scrollTop() <= 700) {
            tl2.reverse();
        }
        if ($(window).scrollTop() >= 750) {
            tl3.play();
        }
        if ($(window).scrollTop() >= 1300) {
            tl4.play();
        }
        if ($(window).scrollTop() >= 2300) {
            tl5.play();
        }
    }
}
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
