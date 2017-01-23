$(function () {

	//SVG Fallback
	// if(!Modernizr.svg) {
	//  $("img[src*='svg']").attr("src", function() {
	//      return $(this).attr("src").replace(".svg", ".png");
	//  });
	// };
});
$(window).resize(function () {
	//Ваш код
});
$(window).scroll(function () {
	console.log($(window).scrollTop());
	if ($(window).scrollTop() >= 10 && $(window).scrollTop() <= 199) {
		// tl.reverse();
	}
	if ($(window).scrollTop() >= 200 && $(window).scrollTop() <= 450) {
		tl.resume();
	}
	if ($(window).scrollTop() >= 350 && $(window).scrollTop() <= 550) {
		tl2.reverse();
	}


});
var tl = new TimelineMax(); // скалы и дома вверху
var tl2 = new TimelineMax(); //  ковбой
var tl3 = new TimelineMax(); // what_else_do_line
var tl4 = new TimelineMax(); // Наше порфтолио
var tl5 = new TimelineMax(); // our_achievements
var tl6 = new TimelineMax({repeat: -1, yoyo: true}); //анимация стрелок
var tl7 = new TimelineMax(); // our_achievements_item 
var tl8 = new TimelineMax(); // take_part_img 
var tl9 = new TimelineMax(); // take_part_img_bot_decor 
var tl10 = new TimelineMax(); // book_now_city 
var tl11 = new TimelineMax({repeat: -1}); // monitor blink
var tl12 = new TimelineMax(); // monitor 
var tl13 = new TimelineMax(); // why_seo item
var tl14 = new TimelineMax(); //  from_what_is_seo item
var tl15 = new TimelineMax(); //  stages_of_advancement item
var tl16 = new TimelineMax(); //  cost_optimization item
var tl17 = new TimelineMax(); //  our_work_item
var tl18 = new TimelineMax(); //  from_what_is_seo_bot_decor
var tl19 = new TimelineMax(); //  contact
var tl20 = new TimelineMax(); //  selling_site_item_img circle
var tl21 = new TimelineMax(); //  from_idea_to_results_item 
var tl22 = new TimelineMax(); //  website_promotion_decor 
var tl23 = new TimelineMax(); //  from_idea_to_results_decor
var tl24 = new TimelineMax(); //  online_store_img
var tl25 = new TimelineMax(); //  does_the_sale_item_img_circle
var tl26 = new TimelineMax(); //  cost_of_online_store_bot_decor
var tl27 = new TimelineMax(); //  examples_of_online_stores
var tl28 = new TimelineMax(); //  cost_of_online_store_item
var tl29 = new TimelineMax(); //  what_tasks_are_performed_img online_store
var tl30 = new TimelineMax(); //  functions_landing img
var tl31 = new TimelineMax(); //  suitable_for_landing_item img
var tl32 = new TimelineMax(); //  why_our_landing_sell
var tl33 = new TimelineMax(); //  why_our_landing_sell_item_img
var tl34 = new TimelineMax(); //  why_our_landing_sell decor bottom
var tl35 = new TimelineMax(); //  landing_page our_work examples_of_online_stores
var tl36 = new TimelineMax(); //  landing_page cost_of_online_store_item
var tl37 = new TimelineMax(); //  why_our_landing_sell2
var tl38 = new TimelineMax(); //  what_tasks_are_performed_img landing_page
var tl39 = new TimelineMax(); //  our_achievements site_card
var tl40 = new TimelineMax(); //  cost_of_online_store_bot_decor site_card
var tl41 = new TimelineMax(); //  why_site_card_items
var tl42 = new TimelineMax(); //  examples_of_online_stores site_card
var tl43 = new TimelineMax(); //  website_promotion_decor site_card
var tl44 = new TimelineMax(); //  cost_of_online_store_item site_card
var tl45 = new TimelineMax(); //  cost_of_online_store_bot_decor site_card2
var tl46 = new TimelineMax(); //  from_what_is_seo item site_card
var tl47 = new TimelineMax(); //  website_promotion_decor landing_page
var tl48 = new TimelineMax(); //  website_promotion_decor online_store

function allAnim() {
	// console.log($(window).scrollTop());
	// Основные анимации

	tl.pause(); // скалы и дома вверху
	tl2.pause(); //  ковбой
	tl3.pause(); // what_else_do_line
	tl4.pause(); // Наше порфтолио
	tl5.pause(); // our_achievements
	tl7.pause(); // our_achievements_item
	tl8.pause(); // take_part_img
	tl9.pause(); // take_part_img_bot_decor
	tl10.pause(); // book_now_city
	tl12.pause(); // monitor
	tl13.pause(); // why_seo item
	tl14.pause(); // from_what_is_seo item
	tl15.pause(); // stages_of_advancement item
	tl16.pause(); // cost_optimization item
	tl17.pause(); // our_work_item
	tl18.pause(); // our_work_itemfrom_what_is_seo_bot_decor
	tl21.pause(); // from_idea_to_results_item
	tl22.pause(); // website_promotion_decor
	tl23.pause(); // from_idea_to_results_decor
	tl25.pause(); // does_the_sale_item_img_circle
	tl26.pause(); // cost_of_online_store_bot_decor
	tl27.pause(); // examples_of_online_stores
	tl28.pause(); // cost_of_online_store_item
	tl29.pause(); // what_tasks_are_performed_img img online_store
	tl30.pause(); // functions_landing img
	tl31.pause(); // suitable_for_landing_item img
	tl32.pause(); // why_our_landing_sell img
	tl33.pause(); // why_our_landing_sell_item_img
	tl34.pause(); // why_our_landing_sell decor bottom
	tl35.pause(); // landing_page our_work examples_of_online_stores
	tl36.pause(); // landing_page cost_of_online_store_item
	tl37.pause(); // why_our_landing_sell2
	tl38.pause(); // what_tasks_are_performed_img landing_page
	tl39.pause(); // our_achievements site_card
	tl40.pause(); // cost_of_online_store_bot_decor site_card
	tl41.pause(); // why_site_card_items
	tl42.pause(); // examples_of_online_stores site_card
	tl43.pause(); // website_promotion_decor site_card
	tl44.pause(); // cost_of_online_store_item site_card
	tl45.pause(); // cost_of_online_store_bot_decor site_card2
	tl46.pause(); // from_what_is_seo item site_card
	tl47.pause(); // website_promotion_decor landing_page
	tl48.pause(); // website_promotion_decor online_store


	// активация тайм линий при загрузке с измерением скролла
	function readyTimeLineGo() {

		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 0) {
				tl.resume();
			}
		} else {
			if ($(window).scrollTop() > 10) {
				tl.resume();
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
		if ($(window).scrollTop() >= 750 && $(window).scrollTop() <= 1600) {
			tl3.resume();
		}
		if ($(window).scrollTop() >= 1300 && $(window).scrollTop() <= 2100) {
			tl4.resume();
		}
		if ($(window).scrollTop() >= 2300 && $(window).scrollTop() <= 2900) {
			tl5.resume();
		}
		if ($(window).scrollTop() >= 2900 && $(window).scrollTop() <= 3500) {
			tl7.resume();
		}
		if ($(window).scrollTop() >= 3300 && $(window).scrollTop() <= 4100) {
			tl8.resume();
		}
		if ($(window).scrollTop() >= 4200) {
			tl9.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 4800) {
				tl10.resume();
			}
		} else {
			if ($(window).scrollTop() >= 5900) {
				tl10.resume();
			}
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 0) {
				tl12.resume();
			}
		} else {
			if ($(window).scrollTop() > 200 && $(window).scrollTop() <= 1000) {
				tl12.resume();
			}
		}
		if ($(window).scrollTop() >= 1000 && $(window).scrollTop() <= 1700) {
			tl13.resume();
		}
		if ($(window).scrollTop() >= 3600 && $(window).scrollTop() <= 4200) {
			tl14.resume();
		}
		if ($(window).scrollTop() >= 4800 && $(window).scrollTop() <= 6000) {
			tl15.resume();
		}
		if ($(window).scrollTop() >= 6200) {
			tl16.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 7000) {
				tl17.resume();
			}

		} else {
			if ($(window).scrollTop() >= 7600) {
				tl17.resume();
			}
		}

		if ($(window).scrollTop() >= 4500) {
			tl18.resume();
		}
		if ($(window).scrollTop() >= 1800) {
			tl21.resume();
		}
		if ($(window).scrollTop() >= 1300 && $(window).scrollTop() <= 2100) {
			tl22.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 1600) {
				tl23.resume();
			}
		} else {
			if ($(window).scrollTop() >= 2800) {
				tl23.resume();
			}
		}
		if ($(window).scrollTop() >= 40 && $(window).scrollTop() <= 1000) {
			tl25.resume();
		}
		if ($(window).scrollTop() >= 3000 && $(window).scrollTop() <= 3500) {
			tl26.resume();
		}
		if ($(window).scrollTop() >= 1100 && $(window).scrollTop() <= 1800) {
			tl27.resume();
		}
		if ($(window).scrollTop() >= 2000 && $(window).scrollTop() <= 2900) {
			tl28.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 2500) {
				tl29.resume();
			}
		} else {
			if ($(window).scrollTop() >= 3300) {
				tl29.resume();
			}
		}
		if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 900) {
			tl30.resume();
		}
		if ($(window).scrollTop() >= 1200 && $(window).scrollTop() <= 1700) {
			tl31.resume();
		}
		if ($(window).scrollTop() >= 2000 && $(window).scrollTop() <= 2500) {
			tl32.resume();
		}
		if ($(window).scrollTop() >= 2800 && $(window).scrollTop() <= 4500) {
			tl33.resume();
		}
		if ($(window).scrollTop() >= 4400 && $(window).scrollTop() <= 4900) {
			tl34.resume();
		}
		if ($(window).scrollTop() >= 4800 && $(window).scrollTop() <= 5300) {
			tl35.resume();
		}
		if ($(window).scrollTop() >= 5700) {
			tl36.resume();
		}
		if ($(window).scrollTop() >= 6700) {
			tl37.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 6300) {
				tl38.resume();
			}
		} else {
			if ($(window).scrollTop() >= 6800) {
				tl38.resume();
			}
		}
		if ($(window).scrollTop() >= 1500 && $(window).scrollTop() <= 2100) {
			tl39.resume();
		}
		if ($(window).scrollTop() >= 2100 && $(window).scrollTop() <= 2500) {
			tl40.resume();
		}
		if ($(window).scrollTop() >= 1900 && $(window).scrollTop() <= 2500) {
			tl41.resume();
		}
		if ($(window).scrollTop() >= 2900 && $(window).scrollTop() <= 3500) {
			tl42.resume();
		}
		if ($(window).scrollTop() >= 3400 && $(window).scrollTop() <= 4100) {
			tl43.resume();
		}
		if ($(window).scrollTop() >= 3700 && $(window).scrollTop() <= 4700) {
			tl44.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 4300 && $(window).scrollTop() <= 4700) {
				tl45.resume();
			}
		} else {
			if ($(window).scrollTop() >= 4800 && $(window).scrollTop() <= 5500) {
				tl45.resume();
			}
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 4300) {
				tl46.resume();
			}
		} else {
			if ($(window).scrollTop() >= 5000) {
				tl46.resume();
			}
		}
		if ($(window).scrollTop() >= 5300 && $(window).scrollTop() <= 6000) {
			tl47.resume();
		}
		if ($(window).scrollTop() >= 1500 && $(window).scrollTop() <= 2200) {
			tl48.resume();
		}
	}


	readyTimeLineGo();
	// для IE вызов по скроллу в ready (загруженном документе)
	$(window).scroll(function () {
		readyTimeLineGo();
	});

	// цели
	TweenMax.from("#g4378", 1.5, {rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut});
	TweenMax.from("#g4950", 1.5, {rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut});
	TweenMax.from("#g4219", 1.5, {rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut});
	TweenMax.from("#path5-circle1", 1.5, {drawSVG: "100% 100%", delay: 0.5});
	TweenMax.from("#path5-circle2", 1.5, {drawSVG: "100% 100%", delay: 0.5});
	TweenMax.from("#path5-circle3", 1.5, {drawSVG: "100% 100%", delay: 0.5});

	// скалы и дома вверху
	tl.from("#g4445", 0.6, {opacity: 0, y: -250, ease: Back.easeInOut}, 0.1);
	tl.from("#g4452", 0.6, {opacity: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
	tl.from("#g4583", 0.6, {opacity: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
	tl.from("#g5908", 0.6, {opacity: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
	tl.from("#g5725", 0.6, {opacity: 0, y: -250, ease: Back.easeOut}, '-=0.4');
	tl.from("#g5837", 0.6, {opacity: 0, y: -250, ease: Back.easeOut}, '-=0.4');
	tl.from("#path4449", 0.6, {opacity: 0, y: 300, ease: Power2.easeInOut}, '-=0.4');
	// облака
	tl.from("#g4280", 0.6, {opacity: 0, x: -400, ease: Back.easeOut}, 0.5);
	tl.from("#g4299", 0.6, {opacity: 0, x: 400, ease: Back.easeOut}, 0.5);

	//  ковбой
	tl2.from("#g4315", 0.6, {opacity: 0, x: 80, ease: Power2.easeInOut}, 0.1);
	tl2.from("#rect4448", 0.5, {opacity: 0, y: 80, ease: Power2.easeInOut}, 0.4);
	tl2.from("#rect4450", 0.5, {opacity: 0, y: 80, ease: Power2.easeInOut}, 0.4);
	tl2.from("#g4321", 0.5, {opacity: 0, y: 80, ease: Power2.easeInOut}, 0.4);
	tl2.from("#g4510", 0.5, {opacity: 0, y: 80, ease: Power2.easeInOut}, 0.4);
	tl2.from("#rect4443", 0.5, {opacity: 0, y: 80, ease: Power2.easeInOut}, 0.4);
	tl2.from("#g4479", 0.5, {opacity: 0, y: 80, ease: Power2.easeInOut,}, 0.4);

	// what_else_do
	$(".what_else_do_item:not('.what_else_do.why_seo .what_else_do_item, .what_else_do.functions_landing .what_else_do_item')").hover(
		function () {
			TweenMax.to($(this).find(".path4213-item"), 0.7, {fill: "#d45b3e"});
			TweenMax.to($(this).find(".path4278"), 0.7, {fill: "#c45237"});
			TweenMax.to($(this).find(".path4393"), 0.7, {fill: "#a2361f"});
			TweenMax.to($(this).find("p"), 0.7, {color: "#a2361f"});
		},
		function () {
			TweenMax.to($(this).find(".path4213-item"), 0.7, {fill: "#177898"});
			TweenMax.to($(this).find(".path4278"), 0.7, {fill: "#0f7289"});
			TweenMax.to($(this).find(".path4393"), 0.7, {fill: "#0f4e5d"});
			TweenMax.to($(this).find("p"), 0.7, {color: "#fff"});
		}
	);
	// what_else_do_line
	tl3.from("#path4159", 0.5, {drawSVG: "0%"}, 0.4);
	tl3.from("#path4157", 5.5, {drawSVG: "0%"}, 0.4);
	tl3.from("#path4164", 2, {fill: "#031420", drawSVG: "0%"}, 5);
	tl3.from("#g4409", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 0.9);
	tl3.from("#g6391", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.1);
	tl3.from("#g6814", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.3);
	tl3.from("#g4995", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.5);
	tl3.from((".what_else_do_item_p:not('.functions_landing')"), 0.7, {
		opacity: 0,
		transformOrigin: "50% 50%",
		scale: 0
	}, 1);
	tl3.from("#g42911111", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.7);
	// Наше портфолио
	tl4.from("#g4388", 0.8, {opacity: 0, x: 100, ease: Power2.easeInOut,}, 0.3);
	tl4.from("#g4474", 0.8, {opacity: 0, y: -100, ease: Power2.easeInOut,}, 0.4);
	tl4.from("#g4420", 0.8, {opacity: 0, y: -100, ease: Power2.easeInOut,}, 0.5);
	tl4.from("#g4504", 0.8, {opacity: 0, x: -100, ease: Power2.easeInOut,}, 0.6);
	tl4.from("#rect4286", 0.8, {opacity: 0, x: -100, ease: Power2.easeInOut,}, 0.7);
	// our_achievements
	if ($('body').hasClass('index')) {
		tl5.from("#path4202", 1.5, {drawSVG: "0%"}, 0.2);
		tl5.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.8);
		tl5.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl5.from("#path41782342423", 3.5, {drawSVG: "0%"}, 1.9);
		tl5.from("#path723523253", 1.5, {drawSVG: "0%"}, 4.9);
		tl5.from("#path_go", 1.5, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 2.1);
		tl5.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 2.5);
	}
	// Анимация стрелок
	tl6.to(".customPrevBtn", 0.7, {x: -10, ease: Power2.easeInOut}, 0);
	tl6.to(".customPrevBtn", 0.7, {x: 0, ease: Power2.easeInOut}, 0.7);
	tl6.to(".customNextBtn", 0.7, {x: 10, ease: Power2.easeInOut}, 0);
	tl6.to(".customNextBtn", 0.7, {x: 0, ease: Power2.easeInOut}, 0.7);
	// our_achievements_item
	tl7.from("#path4297_item1", 1, {drawSVG: "100% 100%"}, 0);
	tl7.from("#path4297_item2", 1, {drawSVG: "100% 100%"}, 0.4);
	tl7.from("#path4297_item3", 1, {drawSVG: "100% 100%"}, 0.8);
	tl7.from("#path4297_item4", 1, {drawSVG: "100% 100%"}, 1.1);
	// our_achievements_item inner circle

	tl7.from("#g5164_item1", 1, {
		rotation: 360,
		transformOrigin: "50% 50%",
		opacity: 0,
		x: -100,
		y: -100,
		ease: Power2.easeInOut
	}, 0);
	tl7.from("#g5164_item2", 1, {
		rotation: 360,
		transformOrigin: "50% 50%",
		opacity: 0,
		x: -100,
		y: -100,
		ease: Power2.easeInOut
	}, 0.3);
	tl7.from("#g5164_item3", 1, {
		rotation: 360,
		transformOrigin: "50% 50%",
		opacity: 0,
		x: -100,
		y: -100,
		ease: Power2.easeInOut
	}, 0.6);
	tl7.from("#g5164_item4", 1, {
		rotation: 360,
		transformOrigin: "50% 50%",
		opacity: 0,
		x: -100,
		y: -100,
		ease: Power2.easeInOut
	}, 0.9);
	// внутренние иконки
	tl7.from("#path4341", 1, {opacity: 0, x: -150, y: 0, ease: Power2.easeInOut}, 0);
	tl7.from("#g4912", 1, {opacity: 0, x: -150, y: 0, ease: Power2.easeInOut}, 0.3);
	tl7.from("#text4263-3", 1, {opacity: 0, x: -150, y: 0, ease: Power2.easeInOut}, 0.6);
	tl7.from("#text4263-223", 1, {opacity: 0, x: -150, y: 0, ease: Power2.easeInOut}, 0.9);
	// тени
	tl7.from("#path4402", 1, {opacity: 0, ease: Power2.easeInOut}, 0.8); //
	tl7.from("#path4476", 1, {opacity: 0, ease: Power2.easeInOut}, 1.2);
	tl7.from("#path4562", 1, {opacity: 0, ease: Power2.easeInOut}, 1.7);
	tl7.from("#path4669", 1, {opacity: 0, ease: Power2.easeInOut}, 2);

	// анимация в take_part
	// circle
	tl8.from("#path4138", 2, {drawSVG: "100% 100%"}, "+=0.4");
	// нижняя линия
	tl8.from("#path5539", 2, {drawSVG: "0%"}, 2);
	// линии круглые
	tl8.from("#circle4603", 1, {drawSVG: "100% 100%"}, 0.4);
	tl8.from("#circle5186", 1, {drawSVG: "100% 100%"}, 0.7);
	tl8.from("#circle6608", 1, {drawSVG: "100% 100%"}, 1);
	tl8.from("#circle6496", 1, {drawSVG: "100% 100%"}, 1.3);
	tl8.from("#circle5871", 1, {drawSVG: "100% 100%"}, 1.6);
	//
	tl8.from("#g4620", 1, {transformOrigin: "50% 50%", scale: 0, ease: Power2.easeInOut}, 0.4);
	tl8.from("#g5330", 1, {transformOrigin: "50% 50%", scale: 0, ease: Power2.easeInOut}, 0.7);
	tl8.from("#g4625", 1, {transformOrigin: "50% 50%", scale: 0, ease: Power2.easeInOut}, 1);
	tl8.from("#g4697", 1, {transformOrigin: "50% 50%", scale: 0, ease: Power2.easeInOut}, 1.3);
	tl8.from("#g5873", 1, {transformOrigin: "50% 50%", scale: 0, ease: Power2.easeInOut}, 1.6);


	tl8.from("#g6610", 1, {autoAlpha: 0, x: 50, y: -50, ease: Power2.easeInOut}, 0.9);
	// инонки внутренние
	tl8.from("#g4423", 1, {autoAlpha: 0, x: -50, y: -50, ease: Power2.easeInOut}, 0.5);
	tl8.from("#g4353", 1, {autoAlpha: 0, x: -50, y: -50, ease: Power2.easeInOut}, 0.8);
	tl8.from("#g5326", 1, {autoAlpha: 0, x: -50, y: -50, ease: Power2.easeInOut}, 1.1);
	tl8.from("#g4403000", 1, {autoAlpha: 0, x: -50, y: -50, ease: Power2.easeInOut}, 1.4);
	tl8.from("#g4432", 1, {autoAlpha: 0, x: -50, y: -50, ease: Power2.easeInOut}, 1.7);
	//  тени иконок
	tl8.from("#path5488", 2, {opacity: 0, ease: Power2.easeInOut}, 0.8); //
	tl8.from("#path4925", 2, {opacity: 0, ease: Power2.easeInOut}, 1.2);
	tl8.from("#path4629", 2, {opacity: 0, ease: Power2.easeInOut}, 1.7);
	tl8.from("#path4701", 2, {opacity: 0, ease: Power2.easeInOut}, 2);
	tl8.from("#path4781", 2, {opacity: 0, ease: Power2.easeInOut}, 2);
	// текст
	tl8.from(".take_part_txt_item.item1", 1, {autoAlpha: 0, scaleY: 0, skewX: "110deg"}, 0.8);
	tl8.from(".take_part_txt_item.item2", 1, {autoAlpha: 0, scaleY: 0, skewX: "110deg"}, 1.1);
	tl8.from(".take_part_txt_item.item3", 1, {autoAlpha: 0, scaleY: 0, skewX: "110deg"}, 1.4);
	tl8.from(".take_part_txt_item.item4", 1, {autoAlpha: 0, scaleY: 0, skewX: "110deg"}, 1.7);
	tl8.from(".take_part_txt_item.item5", 1, {autoAlpha: 0, scaleY: 0, skewX: "110deg"}, 2);
	// кнопка связаться с командой
	tl8.from(".take_part_txt_item_links", 0.8, {autoAlpha: 0, scaleY: 0, skewX: "200deg", skewY: "50deg"}, 2.2);
	// hover on item  class="path4611"  class="circle4613"
	$(".g5504").hover(
		function () {
			TweenMax.to($(this).find(".path4611"), 0.7, {fill: "#eed350"});
			TweenMax.to($(this).find(".circle4613"), 0.7, {fill: "#e2c63b"});
			TweenMax.to($(this).find(".path4393"), 0.7, {fill: "#a2361f"});
		},
		function () {
			TweenMax.to($(this).find(".path4611"), 0.7, {fill: "#d45b3e"});
			TweenMax.to($(this).find(".circle4613"), 0.7, {fill: "#c45237"});
			TweenMax.to($(this).find(".path4393"), 0.7, {fill: "#B14731"});
		}
	);
	// take_part_img_bot_decor
	tl9.from("#take_part_img_bot_decor", 1.5, {drawSVG: "0%"}, 3.5);
	tl9.from("#take_p", 1.5, {autoAlpha: 0}, 4);
	tl9.from("#g5500", 1, {autoAlpha: 0, scaleY: 100, ease: Power2.easeInOut}, 4);
	// book_now_city
	tl10.from("#g4445097807", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, 0.1);
	tl10.from("#g5593", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
	tl10.from("#g445278078034", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
	tl10.from("#g43851241241241", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
	tl10.from("#g5005", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeOut}, '-=0.4');
	tl10.from("#g4934124124", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeOut}, '-=0.4');
	tl10.from("#g5004", 0.4, {autoAlpha: 0, y: 10, ease: Power2.easeInOut}, '-=0');
	// monitor blink
	tl11.to("#path4156", 0.7, {fill: "#fff", ease: Power2.easeInOut}, 0.7);
	// monitor border
	tl12.from("#path4156", 1.3, {autoAlpha: 0}, 0.5)
		.from("#monitor_border", 1.3, {drawSVG: "0%"}, 0.5)
		.from("#monitor_border2", 1.3, {drawSVG: "0%"}, 0.5)
		.from("#rect4146", 1.3, {drawSVG: "50% 50%"}, 0.5)
		.from("#monitor_border3", 1.3, {drawSVG: "50% 50%"}, 0.5)
		.from("#monitor_border4", 1.3, {drawSVG: "50% 50%"}, 0.5)
		.from(".owl-carousel3", 0.5, {
			autoAlpha: 0,
			transformOrigin: "50% 50%",
			scaleY: 0,
			ease: Power2.easeInOut
		}, 1);
	// why_seo_img
	tl13.staggerFrom(".why_seo_img:not('.functions_landing')", 1, {
		autoAlpha: 0,
		transformOrigin: "50% 50%",
		scale: 0
	}, 0.4);
	// from_what_is_seo item
	tl14.staggerFrom(".from_what_is_seo_items1", 1.2, {
		autoAlpha: 0,
		y: 10,
		ease: Power2.easeInOut
	}, 0.5, 'from_what_is_seo_items1').staggerFrom(".from_what_is_seo_items", 1.4, {drawSVG: "50% 50%"}, 0.6, 'from_what_is_seo_items1');
	// stages_of_advancement item
	tl15.staggerFrom(".stages_of_advancement .stages_of_advancement_item_img:not('.cost_optimization.stages_of_advancement .stages_of_advancement_item_img')", 1, {
		autoAlpha: 0,
		x: -40,
		ease: Power2.easeInOut
	}, 0.5, 'stages_of_advancement_item').add('stages_of_advancement_item_h3', '-=2.9').staggerFrom(".stages_of_advancement .stages_of_advancement_item h3:not('.cost_optimization.stages_of_advancement .stages_of_advancement_item h3')", 1, {
		autoAlpha: 0,
		y: 40,
		ease: Power2.easeInOut
	}, 0.5, 'stages_of_advancement_item_h3').staggerFrom(".stages_of_advancement .stages_of_advancement_item p:not('.cost_optimization.stages_of_advancement .stages_of_advancement_item p')", 1, {
		autoAlpha: 0,
		x: 40,
		ease: Power2.easeInOut
	}, 0.7, 'stages_of_advancement_item_h3');
	// .cost_optimization  item
	tl16.staggerFrom(".cost_optimization .stages_of_advancement_item_img", 1, {
		autoAlpha: 0,
		x: -40,
		ease: Power2.easeInOut
	}, 0.5, 'stages_of_advancement_item').add('cost_optimization_h3', '-=1.5').staggerFrom(".cost_optimization .stages_of_advancement_item h3", 1, {
		autoAlpha: 0,
		x: -40,
		ease: Power2.easeInOut
	}, 0.5, 'cost_optimization_h3').staggerFrom(".cost_optimization .stages_of_advancement_item p", 1, {
		autoAlpha: 0,
		x: 40,
		ease: Power2.easeInOut
	}, 0.7, 'cost_optimization_h3');

	// .cost_optimization  item
	tl17.staggerFrom(".our_work .our_work_item:not('.our_work.examples_of_online_stores .our_work_item')", 1, {
		autoAlpha: 0,
		scaleX: 0,
		skewX: 10,
		ease: Power2.easeInOut
	}, 0.5, 'stages_of_advancement_item').add('cost_optimization_h3', '-=1.5');
	// from_what_is_seo_bot_decor
	tl18.from("#path5361", 1, {drawSVG: "0%"}, 0.2);
	tl18.from("#path5539124", 1.3, {drawSVG: "0%"}, 1);
	tl18.from("#path45231", 1.3, {drawSVG: "0%"}, 2.7);
	tl18.from("#path452", 1, {autoAlpha: 0, ease: Power2.easeInOut}, 2.5);
	tl18.from("#g55000", 1, {autoAlpha: 0, scaleY: 100, ease: Power2.easeInOut}, 2);
	// contacts
	tl19.staggerFrom(".contacts_item_img ", 1, {
		autoAlpha: 0,
		scaleX: 0,
		skewX: 10,
		ease: Power2.easeInOut
	}, 0.5).staggerFrom(".contacts_item_txt ", 1, {
		autoAlpha: 0,
		x: -20,
		ease: Power2.easeInOut
	}, 0.5, '-=2').from("#bottom ", 2.5, {autoAlpha: 0, width: 100, ease: Power2.easeInOut}, '-=2.5');
	// selling_site_item_img circle
	tl20.staggerFrom(".selling_site_item_img_svg", 1, {
		autoAlpha: 0,
		y: 50,
		ease: Power2.easeInOut
	}, 0.7, 'selling_site_item_img').staggerFrom(".selling_site_item h3", 1, {
		autoAlpha: 0,
		x: 50,
		ease: Power2.easeInOut
	}, 0.7, 'selling_site_item_img').staggerFrom(".selling_site_item p", 1, {
		autoAlpha: 0,
		x: -50,
		ease: Power2.easeInOut
	}, 0.7, 'selling_site_item_img').staggerFrom(".path4271", 2, {drawSVG: "50% 50%"}, 0.5, 'selling_site_item_img').from("#path413612414", 3, {drawSVG: "0%"}, 0.5, 'selling_site_item_img').from("#path4186124124", 3, {drawSVG: "100% 100%"}, 3, 'selling_site_item_img');
	// from_idea_to_results_item
	tl21.staggerFrom(".g4202", 1, {
		autoAlpha: 0,
		y: 50,
		ease: Power2.easeInOut
	}, 0.6, 'from_idea').staggerFrom(".from_idea_to_results_item h3", 1, {
		autoAlpha: 0,
		x: 50,
		ease: Power2.easeInOut
	}, 0.6, 'from_idea').staggerFrom(".from_idea_to_results_txt p", 0.8, {
		autoAlpha: 0,
		x: -30,
		ease: Power2.easeInOut
	}, 0.4, 'from_idea').staggerFrom(".from_idea_circle", 2, {drawSVG: "50% 50%"}, 1, 'from_idea');
	// website_promotion_decor
	function website_promotion_decor(tl) {
		tl.from("#path42022323", 1, {drawSVG: "50% 50%"}, 0.5, 'website_promotion_decor').from("#g41853453", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 0.9, 'website_promotion_decor')
			.from("#path5235252253", 1, {
				autoAlpha: 0,
				y: -50,
				ease: Power2.easeInOut
			}, 0.5, 'website_promotion_decor');
	}

	if ($('body').hasClass('services')) {
		website_promotion_decor(tl22);
	}
	if ($('body').hasClass('landing_page')) {
		website_promotion_decor(tl47);
	}
	if ($('body').hasClass('online_store')) {
		website_promotion_decor(tl48);
	}
	// from_idea_to_results_decor
	tl23.from("#path5417235235", 1, {drawSVG: "50% 50%"}, 0.5, 'from_idea_to_results_decor')
		.from("#g550012341414", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 0.9, 'from_idea_to_results_decor')
		.from("#path4523525", 1, {
			autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.5, 'from_idea_to_results_decor');
	//online_store_img & landing_page
	tl24.from("#rect4136", 1, {drawSVG: "50% 50%"}, 0.5, 'online_store_img')
		.from("#g4231", 1, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.5, 'online_store_img')
		.from("#g42872352", 1, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.5, 'online_store_img');
	// does_the_sale_item_img_circle
	tl25.from(".does_the_sale_item_img_circle", 1, {
		rotation: 360,
		transformOrigin: "50% 50%",
		opacity: 0
	}, 0.5).from(".what_else_do.does_the_sale .does_the_sale_item__txt p", 1, {opacity: 0, x: 30}, 1);
	// cost_of_online_store_bot_decor
	function cost_of_online_store_bot_decor(tl) {
		tl.from("#cost_of_online_store_bot_decor_circle", 1, {drawSVG: "0%"}, 0.2);
		tl.from("#cost_of_online_store_bot_decor_line", 1.3, {drawSVG: "0%"}, 1);
		tl.from("#cost_of_online_store_bot_decor_all_line", 1.3, {drawSVG: "0%"}, 2.7);
		tl.from("#cost_of_online_store_bot_decor_all_bg", 1, {autoAlpha: 0, ease: Power2.easeInOut}, 2.5);
		tl.from("#cost_of_online_store_bot_decor_all_line_body", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 2);
	}

	if ($('body').hasClass('online_store')) {
		cost_of_online_store_bot_decor(tl26);
	}
	// examples_of_online_stores
	if ($('body').hasClass('online_store')) {
		tl27.staggerFrom(".our_work.examples_of_online_stores .our_work_item", 1, {
			autoAlpha: 0,
			scaleX: 0,
			skewX: 10,
			ease: Power2.easeInOut
		}, 0.5, 'stages_of_advancement_item').add('cost_optimization_h3', '-=1.5');
	}
	// cost_of_online_store_item
	if ($('body').hasClass('online_store')) {
		tl28.staggerFrom(".cost_of_online_store_item", 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, 0.5);
	}
	// from_what_is_seo item
	if ($('body').hasClass('online_store')) {
		tl29.staggerFrom(".what_tasks_are_performed_img", 1.2, {
			autoAlpha: 0,
			y: 10,
			ease: Power2.easeInOut
		}, 1, 'what_tasks_are_performed_img')
			.staggerFrom(".what_tasks_are_performed h3", 1.2, {
				autoAlpha: 0,
				x: 10,
				ease: Power2.easeInOut
			}, 1, 'what_tasks_are_performed_img')
			.staggerFrom(".what_tasks_are_performed_img_circle", 1.4, {drawSVG: "50% 50%"}, 1.1, 'what_tasks_are_performed_img');
	}
	// hover on item  class="path4611"  class="circle4613"
	$(".what_tasks_are_performed a").hover(
		function () {
			TweenMax.to($(this).find(".what_tasks_are_performed_c1"), 0.7, {fill: "#d45b3e"});
			TweenMax.to($(this).find(".what_tasks_are_performed_c2"), 0.7, {fill: "#c45237"});
			TweenMax.to($(this).find(".what_tasks_are_performed_c3"), 0.7, {fill: "#a2361f"});
			TweenMax.to($(this).find("h3"), 0.7, {color: "#eed350"});
		},
		function () {
			TweenMax.to($(this).find(".what_tasks_are_performed_c1"), 0.7, {fill: "#177898"});
			TweenMax.to($(this).find(".what_tasks_are_performed_c2"), 0.7, {fill: "#0f7289"});
			TweenMax.to($(this).find(".what_tasks_are_performed_c3"), 0.7, {fill: "#0f6378"});
			TweenMax.to($(this).find("h3"), 0.7, {color: "#ffffff"});
		}
	);
	// why_seo_img
	tl30.staggerFrom(".why_seo_img.functions_landing", 1, {
		autoAlpha: 0,
		transformOrigin: "50% 50%",
		scale: 0
	}, 0.4, 'functions_landing')
		.staggerFrom((".what_else_do_item_p.functions_landing"), 1, {
			opacity: 0,
			transformOrigin: "50% 50%",
			scale: 0
		}, 0.4, 'functions_landing')
		.from("#functions_landing1", 0.5, {drawSVG: "0%"}, 0.4, 'functions_landing')
		.from("#functions_landing2", 5.5, {drawSVG: "0%"}, 0.4, 'functions_landing')
		.from("#functions_landing3", 2, {fill: "#031420", drawSVG: "0%"}, 5, 'functions_landing');
	// cost_of_online_store_item
	tl31.staggerFrom(".suitable_for_landing_item", 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, 0.5);
	// our_achievements why_our_landing_sell
	if ($('body').hasClass('landing_page')) {
		tl32.from("#path4202", 1.5, {drawSVG: "0%"}, 0.2);
		tl32.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.8);
		tl32.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl32.from("#path41782342423", 3.5, {drawSVG: "0%"}, 1.9);
		tl32.from("#path723523253", 1.5, {drawSVG: "0%"}, 4.9);
		tl32.from("#path_go", 1.5, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 2.1);
		tl32.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 2.5);
	}
	// why_our_landing_sell_item_img
	tl33.staggerFrom(".why_our_landing_sell_item_img_circle", 1, {
		drawSVG: "0%",
		ease: Power2.easeInOut
	}, 0.5, 'why_our_landing_sell_item_img')
		.staggerFrom(".why_our_landing_sell_item_img_inner", 1, {
			opacity: 0,
			y: 20,
			ease: Power2.easeInOut
		}, 0.5, 'why_our_landing_sell_item_img')
		.staggerFrom(".why_our_landing_sell_item_img_shadow", 2, {
			opacity: 0,
			ease: Power2.easeInOut
		}, 0.5, 'why_our_landing_sell_item_img')
		.staggerFrom(".why_our_landing_sell_item_img_center", 1, {
			opacity: 0,
			y: 20,
			ease: Power2.easeInOut
		}, 0.5, 'why_our_landing_sell_item_img')
		.staggerFrom(".our_achievements.why_our_landing_sell .row+.row .why_our_landing_sell_item_txt h3", 1, {
			opacity: 0,
			y: 20,
			ease: Power2.easeInOut
		}, 0.5, 'why_our_landing_sell_item_img')
		.add('why_our_landing_sell_item_img', '-=4.6')
		.staggerFrom(".our_achievements.why_our_landing_sell .row+.row .why_our_landing_sell_item_txt p", 1, {
			opacity: 0,
			y: 20,
			ease: Power2.easeInOut
		}, 0.5, 'why_our_landing_sell_item_img');
	// why_our_landing_sell
	if ($('body').hasClass('landing_page')) {
		cost_of_online_store_bot_decor(tl34);
	}
	// examples_of_online_stores
	if ($('body').hasClass('landing_page')) {
		tl35.staggerFrom(".our_work.examples_of_online_stores .our_work_item", 1, {
			autoAlpha: 0,
			scaleX: 0,
			skewX: 10,
			ease: Power2.easeInOut
		}, 0.5, 'stages_of_advancement_item').add('cost_optimization_h3', '-=1.5');
	}
	// landing_page cost_of_online_store_item
	if ($('body').hasClass('landing_page')) {
		tl36.staggerFrom(".cost_of_online_store_item", 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, 0.5);
	}
	// why_our_landing_sell2
	if ($('body').hasClass('landing_page')) {
		tl37.from("#cost_of_online_store_bot_decor_circle2", 1, {drawSVG: "0%"}, 0.2);
		tl37.from("#cost_of_online_store_bot_decor_line2", 1.3, {drawSVG: "0%"}, 1);
		tl37.from("#cost_of_online_store_bot_decor_all_line2", 1.3, {drawSVG: "0%"}, 2.7);
		tl37.from("#cost_of_online_store_bot_decor_all_bg2", 1, {autoAlpha: 0, ease: Power2.easeInOut}, 2.5);
		tl37.from("#cost_of_online_store_bot_decor_all_line_body2", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 2);
	}
	// from_what_is_seo item landingpage
	if ($('body').hasClass('landing_page')) {
		tl38.staggerFrom(".what_tasks_are_performed_img", 1.2, {
			autoAlpha: 0,
			y: 10,
			ease: Power2.easeInOut
		}, 1, 'what_tasks_are_performed_img')
			.staggerFrom(".what_tasks_are_performed h3", 1.2, {
				autoAlpha: 0,
				x: 10,
				ease: Power2.easeInOut
			}, 1, 'what_tasks_are_performed_img')
			.staggerFrom(".what_tasks_are_performed_img_circle", 1.4, {drawSVG: "50% 50%"}, 1.1, 'what_tasks_are_performed_img');
	}
	// our_achievements site_card
	if ($('body').hasClass('site_card')) {
		tl39.from("#path4202", 1.5, {drawSVG: "0%"}, 0.2);
		tl39.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.8);
		tl39.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl39.from("#path41782342423", 3.5, {drawSVG: "0%"}, 1.9);
		tl39.from("#path723523253", 1.5, {drawSVG: "0%"}, 4.9);
		tl39.from("#path_go", 1.5, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 2.1);
		tl39.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 2.5);
	}
	// cost_of_online_store_bot_decor site_card
	if ($('body').hasClass('site_card')) {
		tl40.from("#site_card1 site_card1 #cost_of_online_store_bot_decor_circle", 1, {drawSVG: "0%"}, 0.2);
		tl40.from("#site_card1 #cost_of_online_store_bot_decor_line", 1.3, {drawSVG: "0%"}, 1);
		tl40.from("#site_card1 #cost_of_online_store_bot_decor_all_line", 1.3, {drawSVG: "0%"}, 2.7);
		tl40.from("#site_card1 #cost_of_online_store_bot_decor_all_bg", 1, {autoAlpha: 0, ease: Power2.easeInOut}, 2.5);
		tl40.from("#site_card1 #cost_of_online_store_bot_decor_all_line_body", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 2);
	}
	//Why_site_card_items
	tl41.staggerFrom(".why_site_card_items .why_site_card_item", 1, {
		autoAlpha: 0,
		x: 50,
		ease: Power2.easeInOut
	}, 0.3, "why_site_card_item")
		.add("why_site_card_item", '-=1.4')
		.staggerFrom(".why_site_card_items .why_site_card_item p", 1, {
			autoAlpha: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.3, "why_site_card_item");
	// examples_of_online_stores site_card
	if ($('body').hasClass('site_card')) {
		tl42.staggerFrom(".our_work.examples_of_online_stores .our_work_item", 1, {
			autoAlpha: 0,
			scaleX: 0,
			skewX: 10,
			ease: Power2.easeInOut
		}, 0.5, 'stages_of_advancement_item').add('cost_optimization_h3', '-=1.5');
	}
	// website_promotion_decor site_card
	if ($('body').hasClass('site_card')) {
		tl43.from("#path42022323", 1, {drawSVG: "50% 50%"}, 0.5, 'website_promotion_decor').from("#g41853453", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 0.9, 'website_promotion_decor')
			.from("#path5235252253", 1, {
				autoAlpha: 0,
				y: -50,
				ease: Power2.easeInOut
			}, 0.5, 'website_promotion_decor');
	}
	// cost_of_online_store_item site_card
	if ($('body').hasClass('site_card')) {
		tl44.staggerFrom(".cost_of_online_store_item", 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, 0.5);
	}
	// cost_of_online_store_bot_decor site_card2
	if ($('body').hasClass('site_card')) {
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_circle", 1, {drawSVG: "0%"}, 0.2);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_line", 1.3, {drawSVG: "0%"}, 1);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_all_line", 1.3, {drawSVG: "0%"}, 2.7);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_all_bg", 1, {autoAlpha: 0, ease: Power2.easeInOut}, 2.5);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_all_line_body", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 2);
	}
	// from_what_is_seo item site_card
	if ($('body').hasClass('site_card')) {
		tl46.staggerFrom(".what_tasks_are_performed_img", 1.2, {
			autoAlpha: 0,
			y: 10,
			ease: Power2.easeInOut
		}, 1, 'what_tasks_are_performed_img')
			.staggerFrom(".what_tasks_are_performed h3", 1.2, {
				autoAlpha: 0,
				x: 10,
				ease: Power2.easeInOut
			}, 1, 'what_tasks_are_performed_img')
			.staggerFrom(".what_tasks_are_performed_img_circle", 1.4, {drawSVG: "50% 50%"}, 1.1, 'what_tasks_are_performed_img');
	}


}

//	Начало вывода табов с помощью ajax
//	Шаблон для portfolio_item
function elemTpl(imgSrc, link, idValue) {


	return "<div id=" + idValue + " class='portfolio_item'> <a target='_blank' href=" + link + "> </a>  <div class='portfolio_item_img'> <img src=" + imgSrc + "> </div> <div class='portfolio_item_mask'> <i class='fa fa-search-plus'></i> </div> </div>";
}
//Функция которая срабатывает при нажатии на #portfolio_item_btn и выводит по три элемента
function filterBtn(arrImg, arrUrl) {
	var limit = 0,
		arr = [],
		i = 0; // для итерации id в шаблдон
	//обнуляем id при клике если они есть
	$(".portfolio_item_wrap .portfolio_item").each(function () {
		var index = $(this).attr('id');
		if (index != "not-add") {
			$(this).attr('id', '')
		}
	});

	for (var g = 0; g < arrImg.length; g++) {
		i++;
		if (limit < 3) {

			$(".portfolio_item_wrap").append(elemTpl(arrImg[g], arrUrl[g], i));

			arr.push(elemTpl(arrImg[g], arrUrl[g]));


			limit++;
		}
	}
	arrImg.splice(0, 3);
	//делаем анимацию у тех элементов, которые добавялем на кнопку загрузить ещё
	$(".portfolio_item_wrap .portfolio_item").each(function () {

		var index = $(this).attr('id');
		if (index != undefined) {
			TweenMax.staggerFrom("#" + index, 2, {y: 30, autoAlpha: 0}, 0.5);
		}


	});
	//Если не осталось в массиве итемов элементов убираем кнопку добавить ещё
	if (arrImg.length == 0) {
		$('#portfolio_item_btn').css('display', "none");
	}

}
// При загрузке функция выдаёт все portfolio_item из app\ajax\image.json
function readyPortfolioJSON() {
	var imgSource = [],  //массивы ключей (добавляем сюда новый массив, если добавляется новый ключ в json)
		urlSource = [];
	$.getJSON("../ajax/items.json", function (data) {
		var category = data.items;
		var j = 0;
		$('.portfolio_item_wrap .portfolio_item').each(function () {
			$(this).remove();
		});
		for (var key in category) {
			var src = data.items[key];

			for (var i = 0; i < src.length; i++) {
				j++;
				if (j > 9) {
					imgSource.push(src[i].img);
					urlSource.push(src[i].url);
					$('#portfolio_item_btn').css('display', "block");
				} else {
					$('#portfolio_item_btn').css('display', "none");
					$(".portfolio_item_wrap").append(elemTpl(src[i].img, src[i].url, "not-add"));
				}
			}
		}
	}).complete(function () {
		TweenMax.staggerFrom(".portfolio_item_wrap .portfolio_item", 2, {y: 30, autoAlpha: 0}, 0.2);
	});
	$('#portfolio_item_btn').click(function () {
		filterBtn(imgSource, urlSource);
	});

}


$(document).ready(function () {
	//вызов функции для появления .portfolio_item при загрузке страницы
	readyPortfolioJSON();


	if (window.matchMedia("(min-width: 992px)").matches) {
		allAnim(); //вся наша анимация greensock
	}
	
	//Filter при нажатии на табы
	$('.portfolio_tabs a').click(function () {
		//убираем событие на клик у кнопки
		$('#portfolio_item_btn').off();

		// убирает активные у всех и делает актовной this
		$('.portfolio .portfolio_tabs a').removeClass("active");
		$(this).addClass("active");
		//часть getJSON
		var value = $(this).data("filter");
		var imgSource = [], //массивы ключей (добавляем сюда новый массив, если добавляется новый ключ в json) 
			urlSource = [];
		$.getJSON("../ajax/items.json", function (data) {
			var category = data.items;
			var j = 0;


			$('.portfolio_item_wrap .portfolio_item').each(function () {
				$(this).remove();
			});
			for (var key in category) {

				if (key == value) {
					var src = data.items[key];
					for (var i = 0; i < src.length; i++) {
						j++;
						if (j > 9) {
							imgSource.push(src[i].img);
							urlSource.push(src[i].url);
							$('#portfolio_item_btn').css('display', "block");
						} else {
							$('#portfolio_item_btn').css('display', "none");
							$(".portfolio_item_wrap").append(elemTpl(src[i].img, src[i].url, "not-add"));

						}

					}
				} else if (value == 'all') {
					var src = data.items[key];
					for (var i = 0; i < src.length; i++) {
						j++;
						if (j > 9) {
							imgSource.push(src[i].img);
							urlSource.push(src[i].url);
							$('#portfolio_item_btn').css('display', "block");
						} else {
							$('#portfolio_item_btn').css('display', "none");
							$(".portfolio_item_wrap").append(elemTpl(src[i].img, src[i].url, "not-add"));
						}
					}
				}
			}

		}).complete(function () {
			TweenMax.staggerFrom(".portfolio_item_wrap .portfolio_item", 2, {y: 30, autoAlpha: 0}, 0.2);
		});

		$('#portfolio_item_btn').click(function () {
			filterBtn(imgSource, urlSource);
		});

	});


	//header_phone переключение телефона
	$(".header_phone .header_phone_country a").on('click', function (e) { //ссылки которые будут переключать табы
		e.preventDefault();
		$(".header_phone .header_phone_country a").removeClass('active'); //убираем активные состояния у ссылок
		$(this).addClass('active'); //Добавляем активное состояние у той что нажали
		var data = $(this).data('tab'); //создаём переменную с датой
		$(".header_phone a:not('.header_phone .header_phone_country a')").hide().removeClass('active'); //убираем активные состояния у табов
		$('.header_phone a:not(".header_phone .header_phone_country a")[data-tab=' + data + ']').show('fade', 200).addClass("active"); //если таб соответствует тому, какой data
		//атрибут в ссылке то делаем его активным
	});

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
	// активация label на странице contacts
	$('.contacts_form_wrap input, .contacts_form_wrap textarea').on('focus', function () {
		$(this).siblings('label').addClass("is_focused");
	});
	$(".contacts_form_wrap input, .contacts_form_wrap textarea").on('blur', function () {
		if ($(this).val() === "") {
			$(this).siblings("label").removeClass("is_focused");
		}
		else if ($(this).val() !== "") {
			$(this).siblings("label").addClass("is_focused");
		}

	});
	// запретить дефолтное событие на ссылку .slider_link
	$(".slider_link").on("click", function (e) {
		e.preventDefault();
	});
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
	// Кастомные кнопки управления слайдером
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	$('.customNextBtn').click(function () {
		owl.trigger('next.owl.carousel', [400]);
	});
	// Go to the previous item
	$('.customPrevBtn').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [400]);
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
	//  Активация слайдера
	$(".owl-carousel2").owlCarousel({
		loop: true,
		items: 4,
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
				items: 4
			}
		}
	});
	// Кастомные кнопки управления слайдером
	var owl2 = $('.owl-carousel2');
	owl2.owlCarousel();
	$('.customNextBtn.btn2').click(function () {
		owl2.trigger('next.owl.carousel', [400]);
	});
	// Go to the previous item
	$('.customPrevBtn.btn2').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl2.trigger('prev.owl.carousel', [400]);
	});
	owl2.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owl2.trigger('next.owl');
		} else {
			owl2.trigger('prev.owl');
		}
		e.preventDefault();
	});
	//  Активация слайдера
	$(".owl-carousel3").owlCarousel({
		loop: true,
		items: 1,
		dots: true
	});

	// Select в модальном окне
	$(document).click(function () {
		$('.slct').removeClass('active');
		$('.slct_arrow').removeClass('active');
		$('.slct').parent().find('.drop').slideUp("fast");

	});
	$('.slct').click(function () {
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
			$('.drop').find('li').click(function () {

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
	$(".modal").click(function (e) {
		e.preventDefault();
		var id = $(this).data('modal');
		var txt = $(this).data('info');
		$(".popup[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
		$(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
		// $("body").css({ "overflow": "hidden", "padding-right": "17px" });

	});
	$(".overlay").click(function () {
		$(this).parent().toggle("fade", 500);
		// $("body").css({ "overflow": "inherit", "padding-right": "0" });
	});
	// закрываем модальное окно
	$("#win .close").click(function (e) {
		e.preventDefault();
		$(".popup").hide("fade", 500);
		// $("body").css({ "overflow": "inherit", "padding-right": "0" });
	});
	if ($('section').hasClass("map")) {
		// Карта
		//  гугл карта
		// The latitude and longitude of your business / place
		var position = [58.5891483, 49.6592765];
		var posMark = new google.maps.LatLng(58.5891483, 49.6592765);

		function showGoogleMaps() {

			var latLng = new google.maps.LatLng(58.5887849, 49.6603119);

			var mapOptions = {
				zoom: 14, // initialize zoom level - the max value is 21
				streetViewControl: false, // hide the yellow Street View pegman
				scaleControl: true, // allow users to zoom the Google Map
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: latLng,
				scrollwheel: false
			};

			map = new google.maps.Map(document.getElementById('googlemaps'),
				mapOptions);

			// Show the default red marker at the location
			marker = new google.maps.Marker({
				position: posMark,
				map: map,
				draggable: false,
				animation: google.maps.Animation.DROP,
				icon: "img/marker_img.png"
			});
		}

		showGoogleMaps();
	}
	//  Отправка форм
	$("form:not('#form3')").submit(function () { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = [];
		form.find('.modal_form_input').each(function () { // пробежим по каждому полю в форме

			if ($(this).val() == '') { // если находим пустое
				$(this).siblings().show("fade", 500);
				error.push(true); // ошибка
			} else if ($(this).val() !== '') { // если находим не пустое
				$(this).siblings().hide("fade", 500);
				error.push(false); // нет ошибки
			}
			$(this).focus(function () {
				$(this).siblings().hide("fade", 500);
			});

		});
		form.find('.modal_form_phone').each(function () { // пробежим по каждому полю в форме
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
			$(this).focus(function () {
				$(this).siblings().hide("fade", 500);
			});

		});
		form.find('.modal_form_email').each(function () { // пробежим по каждому полю в форме
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
			$(this).focus(function () {
				$(this).siblings().hide("fade", 500);
			});

		});
		var erorr_finish = 0;
		for (var i = 0; i < error.length; i++) {
			if (error[i] == false) {
				erorr_finish = erorr_finish + 1;
			}
			;
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
				beforeSend: function (data) { // событие до отправки
					form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
				},
				success: function (data) { // событие после удачного обращения к серверу и получения ответа
					if (data['error']) { // если обработчик вернул ошибку
						alert(data['error']); // покажем её текст
					} else { // если все прошло ок
						$('.dm-modal form').hide(); // пишем что все ок
						$('.dm-modal .sucess_mail').show('fade', 500);
						$('.popup .close').hide();
						$('.popup').delay(2000).fadeOut(
							function () {
								$('.popup').hide('fade');
								form.trigger('reset');
								$('.dm-modal .sucess_mail').hide();
								$("#win .close").trigger('click');
								$('.popup .close').show();
							}
						);
						if (data['form'] == "form") { //Проверяем какая форма, если в форме есть <input type="hidden" name="id_form" value="form_2"> то выполняем код что ниже
							$('.dm-modal .sucess_mail').show('fade', 500);
							$('.popup2 .close').hide();
							$('.popup2').show().delay(2000).fadeOut(
								function () {
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
				error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
					alert(xhr.status); // покажем ответ сервера
					alert(thrownError); // и текст ошибки
				},
				complete: function (data) { // событие после любого исхода
					form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
				}

			});
		}
		return false; // вырубаем стандартную отправку формы
	});

});

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
