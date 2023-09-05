$(document).ready(function () {
  /* 모바일 햄버거 메뉴 */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".Lnav2, .Lnav3").toggleClass("open");
  });

  /* main_visual 슬라이드 */
  var mainVisiualSwiper = new Swiper(".main_visual", {
    slidesPreView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  if (matchMedia("screen and (max-width: 768px)").matches) {
    /***** section_04 주요기관 슬라이드 *****/
    var swiper = new Swiper(".OtherService", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 4,
      spaceBetween: 0,
    });

    /***** section_02 이런 서비스는 어떠세요? 슬라이드 *****/
    /* swiper 슬라이드 실행 안함 */
    recSwiper.destroy();
    recSwiper = undefined;
      $('.recommend_wrapper').removeAttr('style');
      $('.rec_slide').removeAttr('style');
  } 
  
  else {
    /***** section_02 이런 서비스는 어떠세요? 슬라이드 *****/
    var recSwiper = new Swiper(".recommend_service", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true, //슬라이드 중앙 정렬
      initialSlide: 1, //화면에 가장 먼저 보여지는 슬라이드
      slidesPerView: "auto",
      slideToClickedSlide: true, //특정 슬라이드 클릭 시, 해당 슬라이드로 이동
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        //slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    /***** section_04 주요기관 슬라이드 *****/
    var swiperMobile = new Swiper(".OtherService", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 6,
      spaceBetween: 0,
    });
  }
});

window.onresize = function () {
  document.location.reload();
};
