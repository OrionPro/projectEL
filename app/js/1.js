
 // what_else_do
    $(".what_else_do_item").hover(
        function() {
            TweenMax.to($(this).find(".path4213-item"), 0.7, { fill: "#d45b3e" });
            TweenMax.to($(this).find(".path4278"), 0.7, { fill: "#c45237" });
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#a2361f" });
            TweenMax.to($(this).find("p"), 0.7, { color: "#a2361f" });
        },
        function() {
            TweenMax.to($(this).find(".path4213-item"), 0.7, { fill: "#177898" });
            TweenMax.to($(this).find(".path4278"), 0.7, { fill: "#0f7289" });
            TweenMax.to($(this).find("p"), 0.7, { color: "#fff" });
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#0f4e5d" });
           
        }
    );

//  ковбой
    tl2.from("#g4315", 0.6, { opacity: 0, x: 80, ease: Power2.easeInOut }, 0.1);
    tl2.from("#rect4448", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#rect4450", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
     tl2.from("#g4510", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#g4321", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);   
    tl2.from("#rect4443", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut }, 0.4);
    tl2.from("#g4479", 0.5, { opacity: 0, y: 80, ease: Power2.easeInOut, }, 0.4);




