(function ($) {
  "use strict";

  $(window).on("load", function () {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Pre loader
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    $(".loader").addClass("completein", 700);
    setTimeout(function () {
      $(".preloader").addClass("complete");
    }, 10);
  });

  jQuery(document).ready(function ($) {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Scroll to top
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    function topFunction() {
      $(".scrolltop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
      });
    }
    topFunction();

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Menu
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    function checkWidth() {
      var windowsize = $(window).width();
      if (windowsize < 991) {
        // mega menu
        $(".nav-link").on("click", function () {
          setTimeout(function () {
            $("#main_menu").removeClass("show");
          }, 300);
        });
      }
    }
    checkWidth();
    $(window).resize(checkWidth);

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Testimonial Carousel
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var mySwiper = new Swiper(".testimonial_area .swiper-container", {
      direction: "horizontal",
      slidesPerView: 2,
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        320: {
          slidesPerView: 1,
          centeredSlides: false,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Blog Carousel
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var mySwiper = new Swiper(".blog_area .swiper-container", {
      direction: "horizontal",
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          centeredSlides: false,
        },
        767: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        320: {
          slidesPerView: 1,
          centeredSlides: false,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Portfolio  Carousel
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var galleryThumbs = new Swiper(".portfolio_area .gallery-thumbs", {
      slidesPerView: 4,
      freeMode: true,
      spaceBetween: 10,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".portfolio_area .gallery-top", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  });

  $(window).on("scroll", function () {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Sticky header
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      setTimeout(function () {
        $(".header_wrap, .header_wrap_2").addClass("is_stick");
      }, 300);
    } else {
      setTimeout(function () {
        $(".header_wrap, .header_wrap_2").removeClass("is_stick");
      }, 300);
    }

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Scroll to top 
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      setTimeout(function () {
        $(".scrolltop").addClass("is_scroll");
      }, 200);
    } else {
      setTimeout(function () {
        $(".scrolltop").removeClass("is_scroll");
      }, 200);
    }
  });
})(jQuery);
