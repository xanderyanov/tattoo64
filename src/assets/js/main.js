// $(window).on("load", function () {

// });

$(function () {
  $(".go_to1").on("click", function () {
    var scroll_el = $(".go_adr1");
    headerHeight = $(".header__area").height();
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top - headerHeight }, 1000);
    }
    return false;
  });

  if ($(".carousel__container").length) {
    var carousel = new Swiper(".carousel__container", {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".carousel__btnNext",
        prevEl: ".carousel__btnPrev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        920: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        // 480: {
        //   slidesPerView: 2,
        //   spaceBetween: 5,
        // },
        321: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
    });
  }

  if ($(".headerPaddingArea").length) {
    var headerPaddingAreaHeight = $(".header__area").outerHeight();
    $(".headerPaddingArea").css({ height: headerPaddingAreaHeight });
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
      $(".aMenu_js").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".aMenu_js").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".adaptiveMenu__close").on("click", function () {
    $(".menuButton").removeClass("open");
    $(".aMenu_js").slideUp(200);
    $("body").removeClass("stop");
  });
});
