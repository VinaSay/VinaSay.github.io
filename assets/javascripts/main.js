

$(document).ready(function($) {
    tl = new TimelineLite();

    tl.to(".logo", 2, {opacity: 1, scale: 1}, 0);
    tl.to(".logo", 1.5, {width: 100, top: 5, left: 5, x: "50%", y: "50%"}, 2.5);
    tl.to(".background_load", 1, {scaleY: 0}, 3);

    tl.from(".cloud-behind_1", 0.85, {x: "-100%"}, 4);
    tl.from(".cloud-behind_2", 0.85, {x: "100%"}, 4);
    tl.from(".image_earth", 1, {y: "100%"});
    tl.from(".cloud-fore > div:nth-child(1)", 0.7, {y: "100%"}, 4.5);
    tl.from(".cloud_left", 0.7, {x: "-100%"}, 5);
    tl.from(".cloud_right", 0.7, {x: "100%"}, 5);
    tl.from(".cloud_behind > section:nth-child(1)", 0.7, {x: "100%"}, 5.7);
    tl.from(".cloud_behind > section:nth-child(2)", 0.7, {x: "-100%"}, 5.7);
    

    tl.from(".user", 1, {scale: 0, ease: Back.easeOut.config(2)});
    tl.from(".cloud_animate", 0.7, {opacity: 0});

    tl.call(function() {
    //addClass, toggleClass, or your custom logic.  
        $('.text_title').addClass("go_animate");
    }, null, null);

});
