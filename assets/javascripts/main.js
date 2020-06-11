$(document).ready(function() {
    $('.home_slide_header > div').slick({
        dots: true,
        prevArrow: $('.next_prev_home_slide_header > article:nth-child(1)'),
        nextArrow: $('.next_prev_home_slide_header > article:nth-child(2)'),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.show_trang_menu').click(function(event) {
        $('.menu_support_right').toggleClass('show_menu_support_right');
    });
    $('.background_black_menu').click(function(event) {
        $(".main-menu").removeClass('show_menu_mobile');
        $('.menu_support_right').removeClass('show_menu_support_right');
    });



    

});

function parallax() {
        var scrollPos = $(window).scrollTop(),
                speed = 0.2;
        $(".search").css("top", (0 - (scrollPos * speed)) + 'px');
}

let heightMenu = $('.main-menu').outerHeight(true);
    $(".heigth_menu").css("height", heightMenu + 'px');

$(".button_menu_mobile").click(function(event) {
    $(".main-menu").toggleClass('show_menu_mobile');
    $('.menu_support_right').removeClass('show_menu_support_right');
});


// init controller
var controller = new ScrollMagic.Controller();

// // build tween
// var tweenab = new TimelineMax()
// .add([
//     TweenMax.to('.menu_support', 0.5, {height: 0}),
//     ]);
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
//     .setTween(tweenab)
//     .addTo(controller);



document.addEventListener("DOMContentLoaded",function(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".menu_support").style.height = "auto";
      } else {
        document.querySelector(".menu_support").style.height = "0px";
      }
      prevScrollpos = currentScrollPos;
    }

},false);