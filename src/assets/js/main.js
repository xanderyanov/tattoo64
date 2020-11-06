// $(window).on("load", function () {

// });

$(function () {
  $(".go_to1").on("click", function () {
    var scroll_el = $(".go_adr1");
    // headerHeight = $(".header__area").height();
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top /*- headerHeight*/ }, 1000);
    }
    return false;
  });

  $window = $(window);
  $('div[data-type="background"]').each(function () {
    var $bgobj = $(this);
    $(window).on("scroll", function () {
      var yPos = -($window.scrollTop() / $bgobj.data("speed"));
      var coords = "50% " + yPos + "px";
      $bgobj.css({ backgroundPosition: coords });
    });
  });

  if ($(".portfolioCarousel-container").length) {
    var swiper = new Swiper(".portfolioCarousel-container", {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 50,
      speed: 600,
      autoplay: {
        delay: 177000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".portfolioCarousel__right",
        prevEl: ".portfolioCarousel__left",
      },
      keyboard: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
      },
    });
  }

  $(".content table").wrap('<div class="table_outer"></div>');

  $("a[data-fancybox]").fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    backFocus: false, // убирает рассинхрон с swiper
    nextEffect: "elastic",
    prevEffect: "elastic",
    padding: 0,
    loop: true,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },
  });

  $(".toTop").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });

  $(".menuButton").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".topMenu__area").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".topMenu__area").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".adaptiveMenu__close").on("click", function () {
    $(".menuButton").removeClass("open");
    $(".topMenu__area").slideUp(200);
    $("body").removeClass("stop");
  });
});
