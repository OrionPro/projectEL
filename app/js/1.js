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
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#0f4e5d" });
            TweenMax.to($(this).find("p"), 0.7, { color: "#fff" });
        }
    );


