// для IE вызов по скроллу в ready (загруженном документе)
    $(window).scroll(function() {

         readyTimeLineGo();   

    });
    // активация тайм линий при загрузке с измерением скролла
    function readyTimeLineGo() {
        if ($(window).scrollTop() > 10) {
            tl.play();
            if (window.matchMedia("(max-width: 992px)").matches) {

            }
        }
        // if ($(window).scrollTop() <= 300) {
        //     tl.reverse();
        // }
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




