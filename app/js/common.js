$(function() {

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 10 && $(window).scrollTop() <= 199) {
        // tl.reverse();
    }
    if ($(window).scrollTop() >= 200 && $(window).scrollTop() <= 450) {
        tl.play();
    }
    if ($(window).scrollTop() >= 350 && $(window).scrollTop() <= 550) {
        tl2.reverse();
    }
    if ($(window).scrollTop() >= 550 && $(window).scrollTop() <= 700) {
        tl2.play();
    }
    if ($(window).scrollTop() >= 650 && $(window).scrollTop() <= 800) {
        tl3.play();
    }
    if ($(window).scrollTop() >= 1400 && $(window).scrollTop() <= 1600) {
        tl4.play();
    }
});
var tl = new TimelineMax({ useFrames: false });
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
$(document).ready(function() {
    // Основные анимации

    tl.pause();
    tl2.pause();
    tl3.pause();
    tl4.pause();
    // цели
    TweenMax.from("#g4378", 1.5, { rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut });
    TweenMax.from("#g4950", 1.5, { rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut });
    TweenMax.from("#g4219", 1.5, { rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut });
    TweenMax.from("#path5-circle1", 1.5, { drawSVG: "100% 100%", delay: 0.5 });
    TweenMax.from("#path5-circle2", 1.5, { drawSVG: "100% 100%", delay: 0.5 });
    TweenMax.from("#path5-circle3", 1.5, { drawSVG: "100% 100%", delay: 0.5 });



    // скалы и дома вверху
    tl.from("#g4445", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, 0.1);
    tl.from("#g4452", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, '-=0.5');
    tl.from("#g4583", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, '-=0.5');
    tl.from("#g5908", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, '-=0.5');
    tl.from("#g5725", 0.6, { opacity: 0, y: -250, ease: Back.easeOut }, '-=0.4');
    tl.from("#g5837", 0.6, { opacity: 0, y: -250, ease: Back.easeOut }, '-=0.4');
    tl.from("#path4449", 0.6, { opacity: 0, y: 300, ease: Power2.easeInOut }, '-=0.4');
    // облака
    tl.from("#g4280", 0.6, { opacity: 0, x: -400, ease: Back.easeOut }, 0.5);
    tl.from("#g4299", 0.6, { opacity: 0, x: 400, ease: Back.easeOut }, 0.5);

    //  ковбой
    tl2.from("#g4315", 0.6, { opacity: 0, x: 80, ease: Power2.easeInOut }, 0.1);
    tl2.from("#rect4448", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#rect4450", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#g4321", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#g4510", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#rect4443", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#g4479", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut, }, 0.4);

    // what_else_do
    $(".what_else_do_item").hover(
        function() {
            TweenMax.to($(this).find(".path4213-item"), 0.7, { fill: "#d45b3e"});
            TweenMax.to($(this).find(".path4278"), 0.7, { fill: "#c45237"});
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#a2361f"});
            TweenMax.to($(this).find("p"), 0.7, { color: "#a2361f"});
        },
        function() {
            TweenMax.to($(this).find(".path4213-item"), 0.7, { fill: "#177898"});           
            TweenMax.to($(this).find(".path4278"), 0.7, { fill: "#0f7289"});          
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#0f4e5d"});
            TweenMax.to($(this).find("p"), 0.7, { color: "#fff"});         
        }
    );
    // what_else_do_line
    tl3.from("#path4159", 0.5, { drawSVG: "0%"}, 0.4);
    tl3.from("#path4157", 5.5, { drawSVG: "0%"}, 0.4);
    tl3.from("#path4164", 2, { fill: "#031420", drawSVG: "0%"}, 5);
    tl3.from("#g4409", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0}, 0.9);
    tl3.from("#g6391", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.1);
    tl3.from("#g6814", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.3);
    tl3.from("#g4995", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.5);
    tl3.from((".what_else_do_item_p"), 0.7, { opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1);
    tl3.from("#g42911111", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.7);

    // Наше порфтолио
    tl4.from("#g4388", 0.8, { opacity: 0, x: 100, ease: Power2.easeInOut, }, 0.3);
    tl4.from("#g4474", 0.8, { opacity: 0, y: -100, ease: Power2.easeInOut, }, 0.4);
    tl4.from("#g4420", 0.8, { opacity: 0, y: -100, ease: Power2.easeInOut, }, 0.5);
    tl4.from("#g4504", 0.8, { opacity: 0, x: -100, ease: Power2.easeInOut, }, 0.6);
    tl4.from("#rect4286", 0.8, { opacity: 0, x: -100, ease: Power2.easeInOut, }, 0.7);
    
     


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
    // для инициализации tooltips
    // $( document ).tooltip({
    //   track: true
    // });  
    // скролл по ссылке с атрибутом href 
    // $(".header_nav a[href*='#']").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 500);
    //     return false;
    // });
    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    // $(".scroll_to").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $("#" + anchor.data('scroll')).offset().top
    //     }, 500);
    //     return false;
    // });
    //  Активация слайдера
    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     items: 1,
    //     dots: true
    // });

    // Select в модальном окне
    $(document).click(function() {
        $('.slct').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");
    });
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        //  закрываем все открытые
        $('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            $(this).siblings(".slct_arrow").addClass('active');


            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {

                /* Заносим в переменную HTML код элемента 
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него 
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая 
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
                $(".slct_arrow").removeClass('active');

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            $(".slct_arrow").removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
    // Открываем модальное окно  
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        $(".popup[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name").val(txt);
        // $("body").css({ "overflow": "hidden", "padding-right": "17px" });

    });
    $(".overlay").click(function() {
        $(this).parent().toggle("fade", 500);
        // $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    // закрываем модальное окно
    $("#win .close").click(function(e) {
        e.preventDefault();
        $(".popup").hide("fade", 500);
        // $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });

    //  Отправка форм
    $("form:not('#form3')").submit(function() { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = [];
        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        var erorr_finish = 0;
        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            };
            console.log(error[i]);
        }
        console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function(data) { // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок
                        $('.dm-modal form').hide(); // пишем что все ок                
                        $('.dm-modal .sucess_mail').show('fade', 500);
                        $('.popup .close').hide();
                        $('.popup').delay(2000).fadeOut(
                            function() {
                                $('.popup').hide('fade');
                                form.trigger('reset');
                                $('.dm-modal .sucess_mail').hide();
                                $("#win .close").trigger('click');
                                $('.popup .close').show();
                            }
                        );
                        if (data['form'] == "form_2") { //Проверяем какая форма, если в форме есть <input type="hidden" name="id_form" value="form_2"> то выполняем код что ниже
                            $('.dm-modal .sucess_mail').show('fade', 500);
                            $('.popup2 .close').hide();
                            $('.popup2').show().delay(2000).fadeOut(
                                function() {
                                    $('.popup2').hide('fade');
                                    form.trigger('reset');
                                    $('.dm-modal .sucess_mail').addClass('active');
                                    $("#win2 .close").trigger('click');
                                    $('.popup2 .close').show();
                                }
                            );
                        }
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });
    var files;
    $('input[type=file]').change(function() {
        files = this.files;
        //alert(files);
    });

    //  Отправка форм с файлом
    $("#form3").on('submit', function(e) { // перехватываем все при событии отправки
        e.preventDefault();
        var $data = new FormData();
        var form = $(this);
        var error = [];
        $.each(files, function(key, value) {
            if (!this.type.match(/(.png)|(.jpeg)|(.jpg)|(.gif)$/i) || (this.size / 1024).toFixed(0) > 1524) {
                alert("Неправильный формат графического файла. Или слишком большой размер. Размер не должен превышать 1 мегабайт!");
                return false;
            } else {

            }
            $data.append(key, value);
        });

        $inputs = $("#form3").find('input[type=hidden]');
        $textarea = $("#form3").find('textarea');
        $.each($inputs, function(key, value) {
            $data.append($(this).attr('name'), $(this).val());
        });

        $data.append($textarea.attr('name'), $textarea.val());

        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });

        var erorr_finish = 0;

        if (files === undefined) {
            $('.fileLoad input').val('Файл не выбран!');
            $('.file-load-block input[type=text]').css('border', '1px solid red');
            error.push(true); // ошибка  
        }

        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            }

            console.log(error[i]);
        }
        console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) {
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                contentType: false,
                processData: false,
                dataType: 'json',
                data: $data,
                beforeSend: function(loading) {
                    $('.fileLoad input').val('Файл загружается');
                },
                success: function(data) {
                    $('.dm-modal .sucess_mail').show('fade', 500);
                    $('.popup2 .close').hide();
                    $('.fileLoad input').val('Файл загружен!');
                    $('.file-load-block input[type=text]').css('color', '#b2d04e');
                    $('.popup2').show().delay(2000).fadeOut(
                        function() {
                            $('.popup2').removeClass('active');
                            form.trigger('reset');
                            $('.dm-modal .sucess_mail').addClass('active');
                            $("#win2 .close").trigger('click');
                            $('.popup2 .close').show();
                            $('.fileLoad input').val('Выберите файл');
                            files = undefined;
                            $('.file-load-block input[type=text]').css('color', '#fff)');
                            $('.file-load-block input[type=text]').css('border', '1px solid #fff');
                        }
                    );



                }
            });
        }
    });

});

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
