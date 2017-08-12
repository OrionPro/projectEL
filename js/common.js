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
	//console.log($(window).scrollTop());
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

// Функция для определения, какая секция активная
function activeSection(section, startTop, startBotton) {
	if (typeof startTop === 'undefined') startTop = 0;
	if (typeof startBotton === 'undefined') startBotton = 0;
	section = '.' + section;
	if ($(section).offset() !== undefined) {
		var topPosition = $(section).offset().top - startTop,
			bottomPosition = $(section).offset().top + $(section).height() - startBotton;
		if (($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)) {
			return true;
		}
	}
}
// Функция для перехода на нужную секцию при переходе по url
function urlhash() {
	var url = window.location.hash;
	var reg = /\d/; // находим первую цифру после #

	var id = url.match(reg);
	if (id) {
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		var target_top = $('#' + id).offset().top;
		$('body, html').stop().animate({scrollTop: target_top}, 3000);
	}
}
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
var tl49 = new TimelineMax(); //  creating_a_corporate_identity_img
var tl50 = new TimelineMax(); //  already_created_a_corporate_identity_ul check img
var tl51 = new TimelineMax(); //  what_else_do_line form_style
var tl52 = new TimelineMax(); //  website_promotion_decor
var tl53 = new TimelineMax(); //  style_remains_img & style_remains
var tl54 = new TimelineMax(); //  form style_remains_item
var tl55 = new TimelineMax(); //  cost_of_online_store_bot_decor form_style
var tl56 = new TimelineMax(); //  portfolio portfolio_item
var tl57 = new TimelineMax(); //  why_seo_img you_end_up
var tl58 = new TimelineMax(); //  run_contextual_advertising
var tl59 = new TimelineMax(); //  get_everything_item run_contextual_advertising
var tl60 = new TimelineMax(); //  get_everything_item running_PPC_advertising
var tl61 = new TimelineMax(); //  website_promotion_decor run_contextual_advertising
var tl62 = new TimelineMax(); //  website_promotion_decor2
var tl63 = new TimelineMax(); //  cost_of_online_store_item run_contextual_advertising
var tl64 = new TimelineMax(); //  cost_of_online_store_bot_decor run_contextual_advertising
var tl65 = new TimelineMax(); //  seven_main_tasks what_else_do_item
var tl66 = new TimelineMax(); //  that_you_get_in_the_end
var tl67 = new TimelineMax(); //  book_now_city run_contextual_advertising
var tl68 = new TimelineMax(); //  creating_a_website img1
var tl69 = new TimelineMax(); //  creating_a_website img2
var tl70 = new TimelineMax(); //  creating_a_website img3
var tl71 = new TimelineMax(); //  three_types_sell_website_item
var tl72 = new TimelineMax(); //  our_achievements_top_decoration websites
var tl73 = new TimelineMax(); //  whats_next_item_img
var tl74 = new TimelineMax(); //  cost_of_online_store_bot_decor websites
var tl75 = new TimelineMax(); //  who_is_behind_all_this what_else_do_item
var tl76 = new TimelineMax(); //  portfolio we_are_constantly_developing
var tl77 = new TimelineMax(); //  websites get_everything_item run_contextual_advertisin
var tl78 = new TimelineMax(); //  book_now_city websites
var tl79 = new TimelineMax(); //  creating_a_website_item_img 1
var tl80 = new TimelineMax(); //  creating_a_website_item_img 2
var tl81 = new TimelineMax(); //  creating_a_website_item_img 3
var tl82 = new TimelineMax(); //  what_else_do_line texts
var tl83 = new TimelineMax(); //  .what_else_do.what_content_we_are_creating a
var tl84 = new TimelineMax(); //  portfolio portfolio_item texts
var tl85 = new TimelineMax(); //  .price_for_content .table
var tl86 = new TimelineMax(); //  website_promotion_decor texts
var tl87 = new TimelineMax(); //  cost_of_online_store_bot_decor texts
var tl88 = new TimelineMax(); //  get_everything_item running_PPC_advertising texts
var tl89 = new TimelineMax(); //  book_now_city texts
var tl90 = new TimelineMax(); //  correct_design_img
var tl91 = new TimelineMax(); //  our_achievements_top_decoration webdesign
var tl92 = new TimelineMax(); //  cost_of_online_store_bot_decor webdesign
var tl93 = new TimelineMax(); //  designer_cost_of_services
var tl94 = new TimelineMax(); //  like_creating_masterpiece_item_img
var tl95 = new TimelineMax(); //  book_now_city webdesign

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
	tl49.pause(); // creating_a_corporate_identity_img
	tl50.pause(); // already_created_a_corporate_identity_ul check img
	tl51.pause(); // what_else_do_line form_style
	tl52.pause(); // website_promotion_decor
	tl53.pause(); // style_remains_img & style_remains
	tl54.pause(); // form style_remains_item
	tl55.pause(); //  cost_of_online_store_bot_decor form_style
	tl56.pause(); //  portfolio portfolio_item
	tl57.pause(); //  why_seo_img you_end_up
	tl58.pause(); //  run_contextual_advertising
	tl59.pause(); //  get_everything_item run_contextual_advertising
	tl60.pause(); //  get_everything_item running_PPC_advertising
	tl61.pause(); //  website_promotion_decor run_contextual_advertising
	tl62.pause(); //  website_promotion_decor2
	tl63.pause(); //  cost_of_online_store_item run_contextual_advertising
	tl64.pause(); //  cost_of_online_store_bot_decor run_contextual_advertising
	tl65.pause(); //  seven_main_tasks what_else_do_item
	tl66.pause(); //  that_you_get_in_the_end
	tl67.pause(); //  book_now_city run_contextual_advertising
	tl68.pause(); //  creating_a_website img1
	tl69.pause(); //  creating_a_website img2
	tl70.pause(); //  creating_a_website img3
	tl71.pause(); //  three_types_sell_website_item
	tl72.pause(); //  three_types_sell_website_item
	tl73.pause(); //  our_achievements_top_decoration websites
	tl74.pause(); //  cost_of_online_store_bot_decor websites
	tl75.pause(); //  who_is_behind_all_this what_else_do_item
	tl76.pause(); //  portfolio we_are_constantly_developing
	tl77.pause(); //  websites get_everything_item run_contextual_advertisin
	tl78.pause(); //  book_now_city websites
	tl79.pause(); //  creating_a_website_item_img 1
	tl80.pause(); //  creating_a_website_item_img 2
	tl81.pause(); //  creating_a_website_item_img 3
	tl82.pause(); //  what_else_do_line texts
	tl83.pause(); //  .what_else_do.what_content_we_are_creating a
	tl84.pause(); //  portfolio portfolio_item texts
	tl85.pause(); //  .price_for_content .table
	tl86.pause(); //  website_promotion_decor texts
	tl87.pause(); //  cost_of_online_store_bot_decor texts
	tl88.pause(); //   get_everything_item running_PPC_advertising texts
	tl89.pause(); //   book_now_city texts
	tl90.pause(); //   correct_design_img
	tl91.pause(); //   our_achievements_top_decoration webdesign
	tl92.pause(); //   cost_of_online_store_bot_decor webdesign
	tl93.pause(); //   designer_cost_of_services
	tl94.pause(); //   like_creating_masterpiece_item_img
	tl95.pause(); //   book_now_city webdesign


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
		if ($(window).scrollTop() >= 1700 && $(window).scrollTop() <= 2200) {
			tl4.resume();
		}
		if ($(window).scrollTop() >= 2300 && $(window).scrollTop() <= 3200) {
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
			if (activeSection('book_now', 1200, 0)) {
				this.tl10.resume();
			}
		} else {
			if (activeSection('book_now', 500, 0)) {
				this.tl10.resume();
			}
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 0) {
				tl12.resume();
			}
		} else {
			if ($(window).scrollTop() > 10 && $(window).scrollTop() <= 1000) {
				tl12.resume();
			}
		}
		if ($(window).scrollTop() >= 1000 && $(window).scrollTop() <= 1700) {
			tl13.resume();
		}
		if ($(window).scrollTop() >= 3400 && $(window).scrollTop() <= 4200) {
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
			if (activeSection('what_tasks_are_performed', 1200, 0)) {
				this.tl29.resume();
			}
		} else {
			if (activeSection('what_tasks_are_performed', 500, 0)) {
				this.tl29.resume();
			}
		}
		if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 900) {
			tl30.resume();
		}
		if (activeSection('suitable_for_landing', 100, 0)) {
			tl31.resume();
		}
		if ($(window).scrollTop() >= 1900 && $(window).scrollTop() <= 2900) {
			tl32.resume();
		}
		if ($('body').hasClass('websites')) {
			if ($(window).scrollTop() >= 2600 && $(window).scrollTop() <= 3800) {
				tl33.resume();
			}
		} else {
			if ($(window).scrollTop() >= 2800 && $(window).scrollTop() <= 4500) {
				tl33.resume();
			}
		}
		if ($(window).scrollTop() >= 4400 && $(window).scrollTop() <= 4900) {
			tl34.resume();
		}
		if ($(window).scrollTop() >= 4800 && $(window).scrollTop() <= 5500) {
			tl35.resume();
		}
		if ($(window).scrollTop() >= 5700) {
			tl36.resume();
		}
		if ($(window).scrollTop() >= 6700) {
			tl37.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if (this.activeSection('what_tasks_are_performed', 1200, 0)) {
				this.tl38.resume();

			}
		} else {
			if (this.activeSection('what_tasks_are_performed', 500, 0)) {
				console.log($('this'));
				this.tl38.resume();
			}
		}
		if ($(window).scrollTop() >= 1500 && $(window).scrollTop() <= 2400) {
			tl39.resume();
		}
		if ($(window).scrollTop() >= 2100 && $(window).scrollTop() <= 2900) {
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
			if (this.activeSection('what_tasks_are_performed', 1200, 0)) {
				this.tl46.resume();
			}
		} else {
			if (this.activeSection('what_tasks_are_performed', 500, 0)) {
				this.tl46.resume();
			}
		}
		if ($(window).scrollTop() >= 5300 && $(window).scrollTop() <= 6000) {
			tl47.resume();
		}
		if ($(window).scrollTop() >= 1500 && $(window).scrollTop() <= 2200) {
			tl48.resume();
		}
		if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 700) {
			tl49.resume();
		}
		if ($(window).scrollTop() >= 700 && $(window).scrollTop() <= 1500) {
			tl50.resume();
		}
		if ($(window).scrollTop() >= 1400 && $(window).scrollTop() <= 2200) {
			tl51.resume();
		}
		if ($(window).scrollTop() >= 2300 && $(window).scrollTop() <= 2700) {
			tl52.resume();
		}
		if ($(window).scrollTop() >= 2600 && $(window).scrollTop() <= 3400) {
			tl53.resume();
		}
		if ($(window).scrollTop() >= 2900 && $(window).scrollTop() <= 3600) {
			tl54.resume();
		}
		if ($(window).scrollTop() >= 3100 && $(window).scrollTop() <= 3800) {
			tl55.resume();
		}
		if ($(window).scrollTop() >= 3600 && $(window).scrollTop() <= 4600) {
			tl56.resume();
		}
		if ($(window).scrollTop() >= 4700 && $(window).scrollTop() <= 5500) {
			tl57.resume();
		}
		if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 500) {
			tl58.resume();
		}
		if ($(window).scrollTop() >= 600 && $(window).scrollTop() <= 1200) {
			tl59.resume();
		}
		if ($(window).scrollTop() >= 5500 && $(window).scrollTop() <= 6500) {
			tl60.resume();
		}
		if ($(window).scrollTop() >= 2400 && $(window).scrollTop() <= 2800) {
			tl61.resume();
		}
		if ($(window).scrollTop() >= 4300 && $(window).scrollTop() <= 4800) {
			tl62.resume();
		}
		if ($(window).scrollTop() >= 4100 && $(window).scrollTop() <= 4900) {
			tl63.resume();
		}
		if ($(window).scrollTop() >= 3650 && $(window).scrollTop() <= 4200) {
			tl64.resume();
		}
		if ($(window).scrollTop() >= 1600 && $(window).scrollTop() <= 2600) {
			tl65.resume();
		}
		if ($(window).scrollTop() >= 6700 && $(window).scrollTop() <= 7200) {
			tl66.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 6500) {
				tl67.resume();
			}
		} else {
			if ($(window).scrollTop() >= 7200) {
				tl67.resume();
			}
		}
		if ($(window).scrollTop() >= 100 && $(window).scrollTop() <= 600) {
			tl68.resume();
		}
		if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 1000) {
			tl69.resume();
		}
		if ($(window).scrollTop() >= 900 && $(window).scrollTop() <= 1500) {
			tl70.resume();
		}
		if ($(window).scrollTop() >= 1300 && $(window).scrollTop() <= 2100) {
			tl71.resume();
		}
		if ($(window).scrollTop() >= 3400 && $(window).scrollTop() <= 4300) {
			tl72.resume();
		}
		if ($(window).scrollTop() >= 4200 && $(window).scrollTop() <= 4600) {
			tl73.resume();
		}
		if ($(window).scrollTop() >= 4500 && $(window).scrollTop() <= 5100) {
			tl74.resume();
		}
		if ($(window).scrollTop() >= 4800 && $(window).scrollTop() <= 5300) {
			tl75.resume();
		}
		if ($(window).scrollTop() >= 5400 && $(window).scrollTop() <= 5900) {
			tl76.resume();
		}
		if ($(window).scrollTop() >= 5900 && $(window).scrollTop() <= 7000) {
			tl77.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if (activeSection('book_now', 1200, 0)) {
				tl78.resume();
			}
		} else {
			if (activeSection('book_now', 500, 0)) {
				tl78.resume();
			}
		}
		if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 400) {
			tl79.resume();
		}
		if ($(window).scrollTop() >= 300 && $(window).scrollTop() <= 850) {
			tl80.resume();
		}
		if ($(window).scrollTop() >= 600 && $(window).scrollTop() <= 1200) {
			tl81.resume();
		}
		if ($(window).scrollTop() >= 1300 && $(window).scrollTop() <= 2100) {
			tl82.resume();
		}
		if ($(window).scrollTop() >= 1750 && $(window).scrollTop() <= 2300) {
			tl83.resume();
		}
		if ($(window).scrollTop() >= 2450 && $(window).scrollTop() <= 3200) {
			tl84.resume();
		}
		if ($(window).scrollTop() >= 3450 && $(window).scrollTop() <= 4500) {
			tl85.resume();
		}
		if ($(window).scrollTop() >= 3200 && $(window).scrollTop() <= 3700) {
			tl86.resume();
		}
		if ($(window).scrollTop() >= 4200 && $(window).scrollTop() <= 4700) {
			tl87.resume();
		}
		if ($(window).scrollTop() >= 4500 && $(window).scrollTop() <= 5300) {
			tl88.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if ($(window).scrollTop() >= 4300) {
				tl89.resume();
			}
		} else {
			if ($(window).scrollTop() >= 5300) {
				tl89.resume();
			}
		}
		if (activeSection('correct_design', 500, 0)) {
			tl90.resume();
		}
		if (activeSection('divine_design', 600, 1000)) {
			tl91.resume();
		}
		if (activeSection('divine_design', -500, 100)) {
			tl92.resume();
		}
		if (activeSection('designer_cost_of_services', 200, 200)) {
			tl93.resume();
		}
		if (activeSection('like_creating_masterpiece', 200, 200)) {
			tl94.resume();
		}
		if (window.matchMedia("(max-width: 1200px)").matches) {
			if (activeSection('book_now', 1200, 0)) {
				tl95.resume();
			}
		} else {
			if (activeSection('book_now', 500, 0)) {
				tl95.resume();
			}
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
	$(".what_else_do_item:not('.what_else_do.why_seo .what_else_do_item, .what_else_do.functions_landing .what_else_do_item, .what_else_do.you_end_up .what_else_do_item, .what_else_do.run_contextual_advertising .what_else_do_item')").hover(
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
	// services  selling_site_item
	$(".selling_site_item_img").hover(
		function () {
			TweenMax.to($(this).find(".selling_site_item_1"), 0.7, {fill: "#d45b3e"});
			TweenMax.to($(this).find(".selling_site_item_2"), 0.7, {fill: "#c45237"});
			TweenMax.to($(this).find(".selling_site_item_3"), 0.7, {fill: "#a2361f"});
		},
		function () {
			TweenMax.to($(this).find(".selling_site_item_1"), 0.7, {fill: "#177898"});
			TweenMax.to($(this).find(".selling_site_item_2"), 0.7, {fill: "#0f7289"});
			TweenMax.to($(this).find(".selling_site_item_3"), 0.7, {fill: "#0f4e5d"});
		}
	);
	// what_else_do_line
	tl3.from("#path4159", 0.5, {drawSVG: "0%"}, 0.4);
	tl3.from("#path4157", 3, {drawSVG: "0%"}, 0.4);
	tl3.from("#path4164", 2, {fill: "#031420", drawSVG: "0%"}, 3);
	tl3.from("#g4409", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 0.9);
	tl3.from("#g6391", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.1);
	tl3.from("#g6814", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.3);
	tl3.from("#g4995", 0.8, {opacity: 0, transformOrigin: "50% 50%", scale: 0}, 1.5);
	tl3.from((".what_else_do_item_p:not('.functions_landing, .you_end_up, .run_contextual_advertising, .seven_main_tasks')"), 0.7, {
		autoAlpha: 0,
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
		tl5.from("#path4202", 1, {drawSVG: "0%"}, 0.2);
		tl5.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.5);
		tl5.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl5.from("#path41782342423", 1.3, {drawSVG: "0%"}, 1.5);
		tl5.from("#path723523253", 1, {drawSVG: "0%"}, 2.8);
		tl5.from("#path_go", 0.8, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 1.6);
		tl5.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 1.7);
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
	tl8.from("#path5539", 1.5, {drawSVG: "0%"}, 1.8);
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
	tl9.from("#take_part_img_bot_decor", 1.2, {drawSVG: "0%"}, 1);
	tl9.from("#take_p", 1.2, {autoAlpha: 0}, 2.4);
	tl9.from("#g5500", 0.8, {autoAlpha: 0, scaleY: 100, ease: Power2.easeInOut}, 2.4);
	// book_now_city
	if ($('body').hasClass('index') || $('body').hasClass('form_style')) {
		book_now_city(tl10);
	}
	function book_now_city(tl) {
		tl.from("#g4445097807", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, 0.1);
		tl.from("#g5593", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
		tl.from("#g445278078034", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
		tl.from("#g43851241241241", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeInOut}, '-=0.5');
		tl.from("#g5005", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeOut}, '-=0.4');
		tl.from("#g4934124124", 0.6, {autoAlpha: 0, y: -250, ease: Back.easeOut}, '-=0.4');
		tl.from("#g5004", 0.5, {opacity: 0}, '+=0.3');
	}

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
	tl13.staggerFrom(".why_seo_img:not('.functions_landing, .you_end_up, .run_contextual_advertising, .seven_main_tasks')", 1, {
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
	tl18.from("#path5361", 0.5, {drawSVG: "0%"}, 0.2);
	tl18.from("#path5539124", 0.7, {drawSVG: "0%"}, 0.6);
	tl18.from("#path45231", 0.8, {drawSVG: "0%"}, 1.5);
	tl18.from("#path452", 0.8, {autoAlpha: 0, ease: Power2.easeInOut}, 1.5);
	tl18.from("#g55000", 0.8, {autoAlpha: 0, scaleY: 100, ease: Power2.easeInOut}, 1.5);
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
	tl20.staggerFrom(".selling_site_item_img_svg", 2, {
		autoAlpha: 0,
		y: 50,
		ease: Power2.easeInOut
	}, 0.7, 'selling_site_item_img').staggerFrom(".selling_site_item h3", 2, {
		autoAlpha: 0,
		x: 50,
		ease: Power2.easeInOut
	}, 0.7, 'selling_site_item_img').staggerFrom(".selling_site_item p", 2, {
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

	function website_promotion_decor2(tl) {
		tl.from("#website_promotion_decor2 #path42022323", 1, {drawSVG: "50% 50%"}, 0.5, 'website_promotion_decor').from("#website_promotion_decor2 #g41853453", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 0.9, 'website_promotion_decor')
			.from("#website_promotion_decor2 #path5235252253", 1, {
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

	if ($('body').hasClass('form_style')) {
		website_promotion_decor2(tl62);
	}
	if ($('body').hasClass('run_contextual_advertising')) {
		website_promotion_decor(tl61);
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
	tl24.from("#rect4136", 1, {drawSVG: "50% 50%"}, 1.2, 'online_store_img')
		.from("#g4231", 1, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 1.2, 'online_store_img')
		.from("#g42872352", 1, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 1.2, 'online_store_img');
	// does_the_sale_item_img_circle
	tl25.from(".does_the_sale_item_img_circle", 1, {
		rotation: 360,
		transformOrigin: "50% 50%",
		opacity: 0
	}, 0.5).from(".what_else_do.does_the_sale .does_the_sale_item__txt p", 1, {opacity: 0, x: 30}, 1);
	// cost_of_online_store_bot_decor
	function cost_of_online_store_bot_decor(tl) {
		tl.from("#cost_of_online_store_bot_decor_circle", 0.5, {drawSVG: "0%"}, 0.2);
		tl.from("#cost_of_online_store_bot_decor_line", 0.6, {drawSVG: "0%"}, 0.5);
		tl.from("#cost_of_online_store_bot_decor_all_line", 0.8, {drawSVG: "0%"}, 0.9);
		tl.from("#cost_of_online_store_bot_decor_all_bg", 0.8, {autoAlpha: 0, ease: Power2.easeInOut}, 1.5);
		tl.from("#cost_of_online_store_bot_decor_all_line_body", 0.8, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 1.5);
	}

	if ($('body').hasClass('online_store')) {
		cost_of_online_store_bot_decor(tl26);
	}
	if ($('body').hasClass('webdesign')) {
		cost_of_online_store_bot_decor(tl92);
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
		tl28.staggerFrom(".cost_of_online_store_item_wrap .table.active, .cost_of_online_store_item_wrap .table.active tr", 0.7, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.2);
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
	// why_seo_img what_else_do_line
	if ($('body').hasClass('landing_page')) {
		what_else_do_line(tl30);
	}
	if ($('body').hasClass('site_card')) {
		what_else_do_line(tl30);
	}
	if ($('body').hasClass('texts')) {
		what_else_do_line(tl82);
	}
	function what_else_do_line(tl) {
		tl.staggerFrom(".why_seo_img.functions_landing", 1, {
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
			.from("#functions_landing2", 3, {drawSVG: "0%"}, 0.4, 'functions_landing')
			.from("#functions_landing3", 2, {fill: "#031420", drawSVG: "0%"}, 5, 'functions_landing');
	}

	// cost_of_online_store_item
	tl31.staggerFrom(".suitable_for_landing_item", 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, 0.5);
	// our_achievements why_our_landing_sell
	if ($('body').hasClass('landing_page')) {
		tl32.from("#path4202", 1, {drawSVG: "0%"}, 0.2);
		tl32.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.5);
		tl32.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl32.from("#path41782342423", 1.3, {drawSVG: "0%"}, 1.5);
		tl32.from("#path723523253", 1, {drawSVG: "0%"}, 2.8);
		tl32.from("#path_go", 0.8, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 1.6);
		tl32.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 1.7);
	}
	// why_our_landing_sell_item_img
	if ($('body').hasClass('landing_page')) {
		why_our_landing_sell_item_img(tl33, '-=4.6');
	}
	if ($('body').hasClass('websites')) {
		why_our_landing_sell_item_img(tl33, '-=3.2');
	}
	function why_our_landing_sell_item_img(tl, time) {
		tl.add('why_our_landing_sell_item_img', '+=1')
			.staggerFrom(".why_our_landing_sell_item_img_circle", 1, {
				drawSVG: "0%",
				ease: Power2.easeInOut
			}, 0.5, 'why_our_landing_sell_item_img')
			.add('why_our_landing_sell_item_img', '-=3.5')
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
			.add('why_our_landing_sell_item_img', time)
			.staggerFrom(".our_achievements.why_our_landing_sell .row+.row .why_our_landing_sell_item_txt p", 1, {
				opacity: 0,
				y: 20,
				ease: Power2.easeInOut
			}, 0.5, 'why_our_landing_sell_item_img');
	}

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
		tl36.staggerFrom(".cost_of_online_store_item_wrap .table.active, .cost_of_online_store_item_wrap .table.active tr", 0.7, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.2);
	}
	// why_our_landing_sell2
	if ($('body').hasClass('landing_page')) {
		tl37.from("#cost_of_online_store_bot_decor_circle2", 0.5, {drawSVG: "0%"}, 0.2);
		tl37.from("#cost_of_online_store_bot_decor_line2", 0.6, {drawSVG: "0%"}, 0.5);
		tl37.from("#cost_of_online_store_bot_decor_all_line2", 0.8, {drawSVG: "0%"}, 0.9);
		tl37.from("#cost_of_online_store_bot_decor_all_bg2", 0.8, {autoAlpha: 0, ease: Power2.easeInOut}, 1.5);
		tl37.from("#cost_of_online_store_bot_decor_all_line_body2", 0.8, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 1.5);
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
		tl39.from("#path4202", 1, {drawSVG: "0%"}, 0.2);
		tl39.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.5);
		tl39.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl39.from("#path41782342423", 1.3, {drawSVG: "0%"}, 1.5);
		tl39.from("#path723523253", 1, {drawSVG: "0%"}, 2.8);
		tl39.from("#path_go", 0.8, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 1.6);
		tl39.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 1.7);
	}
	// cost_of_online_store_bot_decor site_card
	if ($('body').hasClass('site_card')) {
		cost_of_online_store_bot_decor1(tl40);
	}
	function cost_of_online_store_bot_decor1(tl) {
		tl.from("#site_card1 #cost_of_online_store_bot_decor_circle", 0.5, {drawSVG: "0%"}, 0.2);
		tl.from("#site_card1 #cost_of_online_store_bot_decor_line", 0.6, {drawSVG: "0%"}, 0.5);
		tl.from("#site_card1 #cost_of_online_store_bot_decor_all_line", 0.8, {drawSVG: "0%"}, 1.3);
		tl.from("#site_card1 #cost_of_online_store_bot_decor_all_bg", 0.8, {autoAlpha: 0, ease: Power2.easeInOut}, 1.5);
		tl.from("#site_card1 #cost_of_online_store_bot_decor_all_line_body", 0.8, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 1.5);
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
		tl44.staggerFrom(".cost_of_online_store_item_wrap .table.active, .cost_of_online_store_item_wrap .table.active tr", 0.7, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.2);
	}
	// cost_of_online_store_bot_decor site_card2
	if ($('body').hasClass('site_card')) {
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_circle", 0.5, {drawSVG: "0%"}, 0.2);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_line", 0.6, {drawSVG: "0%"}, 0.5);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_all_line", 0.8, {drawSVG: "0%"}, 1.3);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_all_bg", 0.8, {
			autoAlpha: 0,
			ease: Power2.easeInOut
		}, 1.8);
		tl45.from("#site_card2 #cost_of_online_store_bot_decor_all_line_body", 1, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 1.8);
		tl.from("#cost_of_online_store_bot_decor_circle", 0.5, {drawSVG: "0%"}, 0.2);
		tl.from("#cost_of_online_store_bot_decor_line", 0.6, {drawSVG: "0%"}, 0.5);
		tl.from("#cost_of_online_store_bot_decor_all_line", 0.8, {drawSVG: "0%"}, 0.9);
		tl.from("#cost_of_online_store_bot_decor_all_bg", 0.8, {autoAlpha: 0, ease: Power2.easeInOut}, 1.5);
		tl.from("#cost_of_online_store_bot_decor_all_line_body", 0.8, {
			autoAlpha: 0,
			scaleY: 100,
			ease: Power2.easeInOut
		}, 1.5);
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
	// creating_a_corporate_identity_img
	tl49.staggerFrom(".creating_a_corporate_identity_img_g1", 2, {
		autoAlpha: 0,
		x: 50,
		ease: Power2.easeInOut
	}, 0.1);
	// already_created_a_corporate_identity_ul check img
	tl50.from(".already_created_a_corporate_identity_ul", 1.5, {
		drawSVG: "0%",
		ease: Power2.easeInOut
	}, 0.4, "already_created")
		.from(".what_else_do.already_created_a_corporate_identity ul span", 1.5, {
			autoAlpha: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.4, "already_created");
	// why_seo_img what_else_do_line
	if ($('body').hasClass('form_style')) {
		what_else_do_line(tl51);
	}
	// website_promotion_decor
	if ($('body').hasClass('form_style')) {
		website_promotion_decor(tl52);
	}
	//	style_remains_img & style_remains
	tl53.from(".style_remains_img", 1, {
		autoAlpha: 0,
		x: 50,
		ease: Power2.easeInOut
	}, 0.4, "already_created")
		.add("already_created", '-=0.5')
		.staggerFrom(".style_remains .style_remains_txt p", 0.7, {
			autoAlpha: 0,
			x: -50,
			ease: Power2.easeInOut
		}, 0.2, "already_created");
	//	form style_remains_item
	tl54.add("style_remains_item", '0.5')
		.from(".style_remains form input[type='submit']", 0.7, {
			autoAlpha: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.9, "style_remains_item")
		.staggerFrom(".style_remains_item", 0.7, {
			autoAlpha: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.3, "style_remains_item");
	// cost_of_online_store_bot_decor form_style
	if ($('body').hasClass('form_style')) {
		cost_of_online_store_bot_decor(tl55);
	}
	// portfolio portfolio_item
	if ($('body').hasClass('form_style')) {
		portfolio_item(tl56);
	}

	function portfolio_item(tl) {
		tl.staggerFrom(".portfolio .portfolio_item", 2, {
			y: 30, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.2);
	}

	// why_seo_img you_end_up
	tl57.add("you_end_up", "+=0.7")
		.staggerFrom(".why_seo_img.you_end_up", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "you_end_up")
		.add("you_end_up", "-=2.2")
		.staggerFrom(".what_else_do.you_end_up .what_else_do_item p:not('.what_else_do.seven_main_tasks .what_else_do_item p')", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "you_end_up");
	// why_seo_img run_contextual_advertising
	tl58.add("run_contextual", "+=0.8")
		.staggerFrom(".run_contextual_advertising_target", 1.2, {
			rotation: 360,
			transformOrigin: "50% 50%",
			ease: Power1.easeInOut
		}, 0.6, "run_contextual")
		.staggerFrom(".why_seo_img.run_contextual_advertising:not('.why_seo_img.seven_main_tasks')", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "run_contextual")
		.add("run_contextual", "-=1.2")
		.staggerFrom(".what_else_do.run_contextual_advertising .what_else_do_item p", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "run_contextual");
	// get_everything_item run_contextual_advertising
	tl59.add("get_everything_item", "+=0.3")
		.staggerFrom(".what_else_do.get_everything .get_everything_item_img:not('.what_else_do.running_PPC_advertising .get_everything_item_img')", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "get_everything_item")
		.add("get_everything_item", "-=2.2")
		.staggerFrom(".what_else_do.get_everything .get_everything_item_txt:not('.what_else_do.running_PPC_advertising .get_everything_item_txt')", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "get_everything_item");
	// get_everything_item running_PPC_advertising
	if ($('body').hasClass('run_contextual_advertising')) {
		get_everything_item(tl60, "-=2.7");
	}
	function get_everything_item(tl, time) {
		tl.add("running_PPC", "+=0.3")
			.staggerFrom(".what_else_do.running_PPC_advertising .get_everything_item_img", 0.8, {
				y: 50, autoAlpha: 0,
				ease: Power2.easeInOut
			}, 0.3, "running_PPC")
			.add("running_PPC", time)
			.staggerFrom(".what_else_do.running_PPC_advertising .get_everything_item_txt", 0.8, {
				y: 50, autoAlpha: 0,
				ease: Power2.easeInOut
			}, 0.3, "running_PPC");
	}

	// cost_of_online_store_item run_contextual_advertising
	if ($('body').hasClass('run_contextual_advertising')) {
		tl63.staggerFrom(".cost_of_online_store_item_wrap .table.active, .cost_of_online_store_item_wrap .table.active tr", 0.7, {
			autoAlpha: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.2);
	}
	// cost_of_online_store_bot_decor run_contextual_advertising
	if ($('body').hasClass('run_contextual_advertising')) {
		cost_of_online_store_bot_decor(tl64);
	}
	// seven_main_tasks what_else_do_item
	if ($('body').hasClass('run_contextual_advertising')) {
		seven_main_tasks(tl65);
	}
	function seven_main_tasks(tl) {
		tl.add("seven_main_tasks", "+=0.3")
			.staggerFrom(".what_else_do.seven_main_tasks .what_else_do_item_img", 0.7, {
				y: 50, autoAlpha: 0,
				ease: Power2.easeInOut
			}, 0.3, "seven_main_tasks")
			.add("seven_main_tasks", "-=2.2")
			.staggerFrom(".what_else_do.seven_main_tasks .what_else_do_item_p", 0.7, {
				y: 50, autoAlpha: 0,
				ease: Power2.easeInOut
			}, 0.3, "seven_main_tasks");
	}

	//	that_you_get_in_the_end
	tl66.add("that_you_get_in_the_end", "+=0.3")
		.staggerFrom(".that_you_get_in_the_end_item svg", 0.8, {
			y: 50, autoAlpha: 0,
			ease: Power2.easeInOut
		}, 0.3, "that_you_get_in_the_end")
		.add("that_you_get_in_the_end", "-=1.2")
		.staggerFrom(".that_you_get_in_the_end_item .wanted_g", 1, {
			y: 50, autoAlpha: 0,
			ease: Bounce.easeOut
		}, 0.3, "that_you_get_in_the_end");
	// book_now_city run_contextual_advertising
	if ($('body').hasClass('run_contextual_advertising')) {
		book_now_city(tl67);
	}
	//	creating_a_website img1
	tl68.add("creating_a_website", "+=0.5")
		.staggerFrom(".creating_a_website_item_circle", 1, {drawSVG: "50% 50%"}, 0.3, 'creating_a_website')
		.staggerFrom(".creating_a_website_item_line", 1, {
			drawSVG: "100% 100%",
			ease: Power2.easeInOut
		}, 0.3, 'creating_a_website')
		.add("creating_a_website", "-=0.5")
		.staggerFrom(".creating_a_website_item_img_web", 1, {
			autoAlpha: 0,
			x: 10,
			ease: Power2.easeInOut
		}, 0.2, 'creating_a_website');
	//	creating_a_website img2
	tl69.add("creating_a_website_img2", "+=0.5")
		.from("#g42923463646", 1, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.3, 'creating_a_website_img2')
		.add("creating_a_website_img2", "-=0.5")
		.staggerFrom(".creating_a_website_item_img_online2", 1, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.2, 'creating_a_website_img2');
	//	creating_a_website img3
	tl70.add("creating_a_website_img3", "+=0.5")
		.from(".creating_a_website_img3", 1, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.3, 'creating_a_website_img3')
		.add("creating_a_website_img3", "+=0")
		.staggerFrom(".creating_a_website_item_img_online3", 1, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.2, 'creating_a_website_img3');
	//	three_types_sell_website_item
	tl71.add("three_types_sell_website_item", "+=0.5")
		.staggerFrom(".three_types_sell_website_img", 1, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.3, 'three_types_sell_website_item')
		.add("three_types_sell_website_item", "-=1.2")
		.staggerFrom(".three_types_sell_website_txt", 1, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.2, 'three_types_sell_website_item')
		.add("three_types_sell_website_item", "-=1")
		.staggerFrom(".three_types_sell_website_item a", 0.8, {
			autoAlpha: 0,
			x: 20,
			ease: Power2.easeInOut
		}, 0.2, 'three_types_sell_website_item');
	// our_achievements_top_decoration websites
	if ($('body').hasClass('websites')) {
		tl72.from("#path4202", 1, {drawSVG: "0%"}, 0.2);
		tl72.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.5);
		tl72.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl72.from("#path41782342423", 1.3, {drawSVG: "0%"}, 1.5);
		tl72.from("#path723523253", 1, {drawSVG: "0%"}, 2.8);
		tl72.from("#path_go", 0.8, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 1.6);
		tl72.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 1.7);
	}
	if ($('body').hasClass('webdesign')) {
		tl91.from("#path4202", 1, {drawSVG: "0%"}, 0.2);
		tl91.from("#g4185235425235", 0.2, {opacity: 0, y: -50}, 1.5);
		tl91.from("#path5234234", 0.5, {opacity: 0, y: -50}, 1.4);
		tl91.from("#path41782342423", 1.3, {drawSVG: "0%"}, 1.5);
		tl91.from("#path723523253", 1, {drawSVG: "0%"}, 2.8);
		tl91.from("#path_go", 0.8, {drawSVG: "100% 100%", ease: Power2.easeInOut}, 1.6);
		tl91.from("#text4221", 0.5, {opacity: 0, x: -50, ease: Power2.easeInOut}, 1.7);
	}
	// whats_next_item_img
	tl73.from("#g5004234234234", 0.7, {opacity: 0, y: 50, ease: Power2.easeInOut}, 0.5, "whats_next_item_img")
		.add("whats_next_item_img", "-=0.7")
		.staggerFrom(".whats_next_item_img_houses", 0.7, {
			opacity: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.3, "whats_next_item_img")
		.add("whats_next_item_img", "-=0.4")
		.staggerFrom(".whats_next_item_img_houses_txt", 0.7, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.2, "whats_next_item_img");
	// cost_of_online_store_bot_decor websites
	if ($('body').hasClass('websites')) {
		cost_of_online_store_bot_decor(tl74);
	}
	// who_is_behind_all_this what_else_do_item
	if ($('body').hasClass('websites')) {
		seven_main_tasks(tl75);
	}
	// portfolio we_are_constantly_developing
	if ($('body').hasClass('websites')) {
		portfolio_item(tl76);
	}
	// websites get_everything_item run_contextual_advertisin
	if ($('body').hasClass('websites')) {
		get_everything_item(tl77, "-=2.3");
	}
	// book_now_city websites
	if ($('body').hasClass('websites')) {
		book_now_city(tl78);
	}
	// book_now_city webdesign
	if ($('body').hasClass('webdesign')) {
		book_now_city(tl95);
	}
	//	creating_a_website_item_img 1
	tl79.from("#g52903efsf", 0.7, {opacity: 0, y: 50, ease: Power2.easeInOut}, 1.2, "creating_a_website_item_img_1")
		.from("#g4429asasfasf", 0.7, {
			opacity: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.7, "creating_a_website_item_img_1")
		.add("creating_a_website_item_img_1", "-=0.3")
		.staggerFrom(".creating_a_website_item_img_1_particles", 0.4, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.2, "creating_a_website_item_img_1")
		.add("creating_a_website_item_img_1", "-=2.7")
		.staggerFrom(".creating_a_website_item_img_1_particles2", 0.4, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.2, "creating_a_website_item_img_1");
	//	creating_a_website_item_img 2
	tl80.from("#g1672612312421", 0.7, {opacity: 0, y: 50, ease: Power2.easeInOut}, 0.5, "creating_a_website_item_img_2")
		.from("#g4429asasfasf", 0.7, {
			opacity: 0,
			y: 50,
			ease: Power2.easeInOut
		}, 0.7, "creating_a_website_item_img_2")
		.add("creating_a_website_item_img_2", "+=0.2")
		.staggerFrom(".creating_a_website_item_img_2_particles", 0.4, {
			opacity: 0,
			x: -50,
			ease: Power2.easeInOut
		}, 0.2, "creating_a_website_item_img_2")
		.add("creating_a_website_item_img_2", "-=2.7")
		.staggerFrom(".creating_a_website_item_img_2_particles2", 0.4, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.2, "creating_a_website_item_img_2");
	//	creating_a_website_item_img 3
	tl81.from("#g45292342342, #g533923wef", 0.7, {
		opacity: 0,
		y: 50,
		ease: Power2.easeInOut
	}, 0.5, "creating_a_website_item_img_3")
		.add("creating_a_website_item_img_3", "-=0.3")
		.staggerFrom(".creating_a_website_item_img_3_particles", 0.4, {
			opacity: 0,
			x: -50,
			ease: Power2.easeInOut
		}, 0.2, "creating_a_website_item_img_3")
		.add("creating_a_website_item_img_3", "-=0")
		.staggerFrom(".creating_a_website_item_img_3_particles2", 0.4, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.2, "creating_a_website_item_img_3")
		.from("#rect5430124124, #g542223453", 0.4, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 1.6, "creating_a_website_item_img_3");
	//	.what_else_do.what_content_we_are_creating a
	tl83.from(".what_else_do.what_content_we_are_creating a", 0.7, {opacity: 0, y: 50, ease: Power2.easeInOut}, 0.5);
	// portfolio portfolio_item texts
	if ($('body').hasClass('texts')) {
		portfolio_item(tl84);
	}
	// .price_for_content .table
	tl85.staggerFrom(".cost_of_online_store.price_for_content .table tr, .cost_of_online_store.price_for_content .table", 0.7, {
		autoAlpha: 0,
		y: 30,
		ease: Power2.easeInOut
	}, 0.2);
	// website_promotion_decor texts
	if ($('body').hasClass('texts')) {
		website_promotion_decor(tl86);
	}
	//cost_of_online_store_bot_decor  texts
	if ($('body').hasClass('texts')) {
		cost_of_online_store_bot_decor(tl87);
	}
	// get_everything_item running_PPC_advertising texts
	if ($('body').hasClass('texts')) {
		get_everything_item(tl88, "-=0.8");
	}
	// book_now_city texts
	if ($('body').hasClass('texts')) {
		book_now_city(tl89);
	}
	// correct_design_img
	tl90.from(".correct_design_img", 0.7, {
		autoAlpha: 0,
		x: 30,
		ease: Power2.easeInOut
	}, 0.5, "correct_design_img")
		.add("correct_design_img", "-=0.4")
		.staggerFrom(".correct_design_txt_item", 0.7, {
			autoAlpha: 0,
			y: 30,
			ease: Power2.easeInOut
		}, 0.2, "correct_design_img");
	// designer_cost_of_services
	tl93.staggerFrom(".designer_cost_of_services .table, .designer_cost_of_services .table tr", 0.7, {
		autoAlpha: 0,
		y: 30,
		ease: Power2.easeInOut
	}, 0.2);
	//	like_creating_masterpiece_item_img
	tl94.staggerFrom(".like_creating_masterpiece_item_img", 0.7, {
		autoAlpha: 0,
		rotation: 360,
		transformOrigin: "50% 50%",
		ease: Power2.easeInOut
	}, 0.2, "like_creating_masterpiece_item_img")
		.add("like_creating_masterpiece_item_img","-=0.4")
		.staggerFrom(".like_creating_masterpiece_item_txt", 0.7, {
		autoAlpha: 0,
		y: 50,
		ease: Power2.easeInOut
	}, 0.2, "like_creating_masterpiece_item_img");
}

//	Начало вывода табов с помощью ajax

//	Шаблон для portfolio_item
function elemTpl(imgSrc, link, idValue, i) {


	return "<div id=" + idValue + " data-item=" + i + " class='portfolio_item'> <a target='_blank' href=" + link + "> </a>  <div class='portfolio_item_img'> <img src=" + imgSrc + "> </div> <div class='portfolio_item_mask'> <i class='fa fa-search-plus'></i> </div> </div>";
}
//Функция которая срабатывает при нажатии на #portfolio_item_btn и выводит по три элемента
function filterBtn(arrMore) {
	var limit = 0,
		arr = [],
		i = 0, // для итерации id в шаблон
		//j = parseInt($($(".portfolio_item_wrap .portfolio_item")[$(".portfolio_item_wrap .portfolio_item").length - 1]).attr("data-item")); // версия Ильи
		j = $(".portfolio_item_wrap .portfolio_item").last().attr("data-item"); // проще в понимании версия
	//обнуляем id при клике если они есть
	$(".portfolio_item_wrap .portfolio_item").each(function () {
		var index = $(this).attr('id');
		if (index != "not-add") {
			$(this).attr('id', '');
		}
	});

	for (var g = 0; g < arrMore.length; g++) {
		if (j < g) {
			if (i < 3) {
				$(".portfolio_item_wrap").append(elemTpl(arrMore[g].img, arrMore[g].url, i, g));
			}
			i++;
		}
	}

	//делаем анимацию у тех элементов, которые добавялем на кнопку загрузить ещё
	$(".portfolio_item_wrap .portfolio_item").each(function () {

		var index = $(this).attr('id');
		if (index != 'not-add') {
			TweenMax.from("#" + index, 2, {y: 40, autoAlpha: 0}, 0.5);
		}
	});
	//Если не осталось в массиве итемов элементов убираем кнопку добавить ещё
	if (arrMore.length == $(".portfolio_item_wrap .portfolio_item").length) {
		$('.portfolio_item_btn').css('display', "none");
	}
}

// При загрузке функция выдаёт все portfolio_item из app\ajax\image.json
function readyPortfolioJSON() {
	var more = [],
		items = [];
	$.getJSON("http://elitestudio.pro/ajax/items.json", function (data) {
		var json = data;

		var j = 0;
		$('.portfolio_item_wrap .portfolio_item').each(function () {
			$(this).remove();
		});

		json.map(function (el) {
			more.push(el);

			if (j > 8) {
				$('.portfolio_item_btn').css('display', "block");
			} else {
				$('.portfolio_item_btn').css('display', "none");
				$(".portfolio_item_wrap").append(elemTpl(el.img, el.url, "not-add", j));
			}
			j++;
		});


	}).complete(function () {
		TweenMax.staggerFrom(".portfolio_item_wrap .portfolio_item", 2, {y: 30, autoAlpha: 0}, 0.2);
	});
	$(document).on('click', '#portfolio_item_btn', function () {
		console.log("ready");
		filterBtn(more);
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $("#" + anchor.data('scroll')).offset().top
		}, 1000);
	});

}
// Функция проверки и установки cookie
function getCookie(data) {
	var cookieArr = document.cookie.split(';');
	for (var i = 0; i < cookieArr.length; i++) {
		if (cookieArr[i].indexOf(data) >= 0) {
			return true;
		}
	}
}

function setCookie(data) {
	document.cookie = data;
}

// Табы  в тарифах
function tabs(parent) {
	parent.find(".tabs-item").on('click', function (event) { //ссылки которые будут переключать табы
		event.preventDefault();

		parent.find(".cost_of_online_store_links_item .tabs-item").removeClass('active_menu'); //убираем активные состояния у ссылок

		$(this).addClass('active_menu'); //Добавляем активное состояние у той что нажали

		var data = $(this).data('tab-tariff'); //создаём переменную с датой
		parent.find('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
		parent.find('.tabs-wrap[data-tab-tariff=' + data + ']').addClass('active'); //если таб соответствует тому, какой data

	});
}

$(document).ready(function () {

	urlhash();

	// Уменьшение кнопки в таблицах при изменении ширины
	if ($(".cost_of_online_store .cost_of_online_store_item_wrap .table thead tr th:first-of-type").innerWidth() >= 470) {
		$(".cost_of_online_store .cost_of_online_store_item_wrap .table tfoot tr button").css("width", "150");
	}
	// Инициализация таба
	tabs($('.cost_of_online_store_item_wrap'));
	// Определения браузера
	function get_name_browser() {
		// получаем данные userAgent
		var ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';
		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		$(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		$(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		$(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
		$(".what_else_do.form_style .examples_of_online_stores_decor").css("bottom", "-524px");
		$(".from_idea_to_results .from_idea_to_results_decor").css("bottom", "-144px");
	}

	// hover в header
	$('.header_nav ul li .drop, .header_nav .dropdown').hover(
		function () {
			$('.dropdown').show();
		},
		function () {
			$('.dropdown').hide();
		}
	);
	//вызов функции для появления .portfolio_item при загрузке страницы
	if ($('body').hasClass('portfolio_page')) {
		readyPortfolioJSON();
	}


	if (window.matchMedia("(min-width: 992px)").matches) {
		allAnim(); //вся наша анимация greensock
	}

	//Filter при нажатии на табы
	$('.portfolio_tabs a').click(function () {
		//убираем событие на клик у кнопки
		$(document).off("click", "#portfolio_item_btn");
		$(document).off("click", "#portfolio_item_btn2");
		$('#portfolio_item_btn').attr("id", "portfolio_item_btn2");
		// убирает активные у всех и делает актовной this
		$('.portfolio .portfolio_tabs a').removeClass("active");
		$(this).addClass("active");
		//часть getJSON
		var value = $(this).data("filter");
		var more = [];

		$.getJSON("http://elitestudio.pro/ajax/items.json", function (data) {
			var json = data;
			var j = 0;

			$('.portfolio_item_wrap .portfolio_item').each(function () {
				$(this).remove();
			});
			json.map(function (el) {

				if (el.category == value) {
					more.push(el);
					if (j > 8) {
						$('.portfolio_item_btn').css('display', "block");
					} else {
						$('.portfolio_item_btn').css('display', "none");
						$(".portfolio_item_wrap").append(elemTpl(el.img, el.url, "not-add", j));

					}
					j++;
				}
				else if (value == "all") {
					more.push(el);
					if (j > 8) {
						$('.portfolio_item_btn').css('display', "block");
					} else {
						$('.portfolio_item_btn').css('display', "none");
						$(".portfolio_item_wrap").append(elemTpl(el.img, el.url, "not-add", j));

					}
					j++;
				}
			});

			// for (var key in category) {
			//
			// 	if (key == value) {
			// 		var src = data.items[key];
			// 		more = src;
			// 		for (var i = 0; i < src.length; i++) {
			// 			j++;
			// 			if (j > 9) {
			// 				// imgSource.push(src[i].img);
			// 				// urlSource.push(src[i].url);
			// 				$('.portfolio_item_btn').css('display', "block");
			// 			} else {
			// 				$('.portfolio_item_btn').css('display', "none");
			// 				$(".portfolio_item_wrap").append(elemTpl(src[i].img, src[i].url, "not-add", i));
			//
			// 			}
			//
			// 		}
			// 	} else if (value == 'all') {
			// 		var src = data.items[key];
			//
			// 		for (var i = 0; i < src.length; i++) {
			// 			more.push(src[i]);
			// 			if (j > 8) {
			// 				$('.portfolio_item_btn').css('display', "block");
			// 			} else {
			// 				$('.portfolio_item_btn').css('display', "none");
			// 				$(".portfolio_item_wrap").append(elemTpl(src[i].img, src[i].url, "not-add", j));
			// 			}
			// 			j++;
			// 		}
			// 	}
			// }

		}).complete(function () {
			TweenMax.staggerFrom(".portfolio_item_wrap .portfolio_item", 2, {y: 30, autoAlpha: 0}, 0.2);
		});

		$(document).on("click", "#portfolio_item_btn2", function () {
			filterBtn(more);
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $("#" + anchor.data('scroll')).offset().top
			}, 1000);
		});

	});


	//header_phone переключение телефона
	$(".header_phone .header_phone_country a").on('click', function (e) { //ссылки которые будут переключать табы
		e.preventDefault();
		$(".header_phone .header_phone_country a").removeClass('active'); //убираем активные состояния у ссылок
		$(this).addClass('active'); //Добавляем активное состояние у той что нажали
		var data = $(this).data('tab'); //создаём переменную с датой
		$(".header_phone a:not('.header_phone .header_phone_country a')").hide().removeClass('active'); //убираем активные состояния у табов
		$(".header_phone a:not('.header_phone .header_phone_country a')[data-tab=" + data + "]").show('fade', 200).addClass("active"); //если таб соответствует тому, какой data
		//атрибут в ссылке то делаем его активным
	});
	//footer_phone_mail переключение телефона
	$(".footer_phone_mail .header_phone_country a").on('click', function (e) { //ссылки которые будут переключать табы
		e.preventDefault();
		$(".footer_phone_mail .header_phone_country a").removeClass('active'); //убираем активные состояния у ссылок
		$(this).addClass('active'); //Добавляем активное состояние у той что нажали
		var data = $(this).data('tab'); //создаём переменную с датой
		$(".footer_phone_mail a:not('.footer_phone_mail .header_phone_country a,  .footer .footer_phone_mail a.mail')").hide().removeClass('active'); //убираем активные состояния у табов
		$(".footer_phone_mail a:not('.footer_phone_mail .header_phone_country a, .footer .footer_phone_mail a.mail')[data-tab=" + data + "]").show('fade', 200).addClass("active"); //если таб соответствует тому, какой data
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
	$(".scroll_to").on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $("#" + anchor.data('scroll')).offset().top
		}, 500);
		return false;
	});
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
	// Анимация плашки
	if (jQuery(".active_menu").length > 0) { // если есть активный пункт меню, то позиционируем двигающуюся плашку на нем
		var menuWidth = jQuery(".active_menu").outerWidth(); // определяем ширину активного пункта меню
		var menuLeft = jQuery(".active_menu").position().left; // определяем смещение активного пункта меню слева
		jQuery(".cost_of_online_store_links_chisel").stop().animate({ // анимируем движущуюся плашку
			left: menuLeft + 'px',
			width: menuWidth + 'px'
		}, 1000, 'easeOutExpo');
	}
	jQuery(".cost_of_online_store_links a").mouseover(function () { // поведение движущейся плашки при наведении на любой пункт меню. Все тоже самое, что и при наличии активного пункта, только позиция плашки определяется относительно пункта, на который произошло наведение курсора мыши
		var menuWidth = jQuery(this).outerWidth();
		var menuLeft = jQuery(this).position().left;
		jQuery(".cost_of_online_store_links_chisel").stop().animate({
			left: menuLeft + 'px',
			width: menuWidth + 'px'
		}, 700, 'easeOutCirc');
	});
	jQuery(".cost_of_online_store_links").mouseleave(function () { // поведение плашки при окончании события наведения мыши на пункт меню (выход курсора мыши на пределы блока, в котором содержится меню)
		if (jQuery(".active_menu").length <= 0) { // если активного пункта нет, то перемещаем плашку за границу экрана
			jQuery(".cost_of_online_store_links_chisel").stop().animate({
				left: '-999px',
				width: '0px'
			}, 500, 'easeOutExpo');
		}
		else { // иначе, если есть активный пункт меню – возвращаем плашку на него
			var menuWidth = jQuery(".active_menu").outerWidth();
			var menuLeft = jQuery(".active_menu").position().left;
			jQuery(".cost_of_online_store_links_chisel").stop().animate({
				left: menuLeft + 'px',
				width: menuWidth + 'px'
			}, 500, 'easeOutExpo');
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
	// owl.on('mousewheel', '.owl-stage', function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger('next.owl');
	// 	} else {
	// 		owl.trigger('prev.owl');
	// 	}
	// 	e.preventDefault();
	// });
	//  Активация слайдера
	$(".owl-carousel2").owlCarousel({
		loop: true,
		items: 4,
		autoplay: true,
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
	// owl2.on('mousewheel', '.owl-stage', function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl2.trigger('next.owl');
	// 	} else {
	// 		owl2.trigger('prev.owl');
	// 	}
	// 	e.preventDefault();
	// });
	//  Активация слайдера
	$(".owl-carousel3").owlCarousel({
		loop: true,
		items: 1,
		dots: true
	});
	//  Активация слайдера
	$(".owl-carousel4").owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		dots: true,
		autoplayHoverPause: true,
		responsiveClass: false,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 4
			},
			// breakpoint from 320 up
			320: {
				items: 1

			},
			// breakpoint from 768 up
			768: {
				items: 1
			},
			// breakpoint from 992 up
			992: {
				items: 1
			},
			// breakpoint from up
			1100: {
				items: 1
			},
			// breakpoint from up
			1210: {
				items: 1
			}
		}
	});
	// Кастомные кнопки управления слайдером
	var owl4 = $('.owl-carousel4');
	owl4.owlCarousel();
	$('.customNextBtn4').click(function () {
		owl4.trigger('next.owl.carousel', [400]);
	});
	// Go to the previous item
	$('.customPrevBtn4').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl4.trigger('prev.owl.carousel', [400]);
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
		var title = $(this).data('title'); // для изменения title в модалке
		var img = $(this).data('img');
		$(".popup[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
		$(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
		$(".popup[data-modal=" + id + "] h2").html(title); // прописать в ссылку data-title="нужный title"
		$(".popup[data-modal=" + id + "] .modal_img img").attr('src', img);
		// $("body").css({ "overflow": "hidden", "padding-right": "17px" });

	});
	$(".overlay").click(function () {
		$(this).parent().toggle("fade", 500);
		// $("body").css({ "overflow": "inherit", "padding-right": "0" });
	});
	// закрываем модальное окно
	$(".popup .close").click(function (e) {
		e.preventDefault();
		$(this).parents('.popup').hide("fade", 500);

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
				center: posMark,
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
				$(this).siblings(".modal_input_error").hide("fade", 500);
			});

		});
		form.find('.modal_form_phone').each(function () { // пробежим по каждому полю в форме
			var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
			if ($(this).val() == '') { // если пустое
				$(this).siblings(".modal_input_error").show("fade", 500);
				error.push(true); // ошибка
				if ($(this).siblings().hasClass('input_error_phone')) {
					$(this).siblings(".modal_input_error").removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
				}
			} else if ($(this).val() !== '') {
				if ($(this).val().match(pattern)) {
					$(this).siblings(".modal_input_error").hide("fade", 500);
					error.push(false); // нет ошибок
				} else {
					$(this).siblings(".modal_input_error").show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
					error.push(true); // ошибка
				}
			}
			$(this).focus(function () {
				$(this).siblings(".modal_input_error").hide("fade", 500);
			});

		});
		form.find('.modal_form_email').each(function () { // пробежим по каждому полю в форме
			var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
			if ($(this).val() == '') { // если пустое
				$(this).siblings().show("fade", 500);
				error.push(true); // ошибка
				if ($(this).siblings().hasClass('input_error_email')) {
					$(this).siblings(".modal_input_error").removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
				}

			} else if ($(this).val() !== '') {
				if ($(this).val().match(pattern)) {
					$(this).siblings(".modal_input_error").hide("fade", 500).removeClass('input_error_email');
					error.push(false); // нет ошибок
				} else {
					$(this).siblings(".modal_input_error").show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
					error.push(true); // ошибка
				}
			}
			$(this).focus(function () {
				$(this).siblings(".modal_input_error").hide("fade", 500);
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
				url: '/mail.php', // путь до обработчика, у нас он лежит в той же папке
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
								$('.dm-modal .sucess_mail').addClass('active');
								$(".popup .close").trigger('click');
								$('.popup .close').show();
							}
						);
						if (data['form'] == "form") { //Проверяем какая форма, если в форме есть <input type="hidden" name="id_form" value="form_2"> то выполняем код что ниже
							$('.dm-modal .sucess_mail').show('fade', 500);
							$('.pop2 .close').hide();
							$('.pop2').show().delay(2000).fadeOut(
								function () {
									$('.pop2').hide('fade');
									form.trigger('reset');
									$('.dm-modal .sucess_mail').addClass('active');
									$(".pop2 .close").trigger('click');
									$('.pop2 .close').show();
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

// if(getCookie('loader')){
// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(10).fadeOut("fast");
// }else{
// 	setCookie('loader');
// 	setTimeout(function () {
// 		$(".loader_inner").fadeOut();
// 		$(".loader").delay(10).fadeOut("100");
// 	}, 2000);
// }
setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("fast");
}, 1200);

