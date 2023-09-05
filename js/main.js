window.onresize = function () { //반응형 슬라이드를 위한 자동 새로고침
  let width = $(window).width();
  console.log(width);
  if(width > 767){
    document.location.reload();
  }
  else{}
};

$(document).ready(function () {
  /***** main_visual swiper 슬라이드 적용 *****/
  var mainVisiualSwiper = new Swiper(".main_visual", {
    slidesPreView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  if (matchMedia("screen and (max-width: 767px)").matches) { //화면 너비가 767px 이하일 경우 (=모바일)
    /***** main_visual swiper 모바일 슬라이드에 링크 추가 *****/
    let goToPage1 = document.getElementsByClassName('main_slide slide01');
    let goToPage2 = document.getElementsByClassName('main_slide slide02');
    let goToPage3 = document.getElementsByClassName('main_slide slide03');
    $(goToPage1).click(function(){
      $(location).attr("href", "sub_page(lesson)/lesson1.html")
    });
    $(goToPage2).click(function(){
      $(location).attr("href", "sub_page(lesson)/lesson2.html")
    });
    $(goToPage3).click(function(){
      $(location).attr("href", "sub_page(lesson)/lesson2.html")
    });
    
    /***** 섹션4 주요기관 swiper 슬라이드 개수 4개로 감소 *****/
    var swiper = new Swiper(".OtherService", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 4,
      spaceBetween: 0,
    });

    /***** 섹션2 추천서비스 swiper 제거 *****/
    recSwiper.destroy();
    recSwiper = undefined;
      $('.recommend_wrapper').removeAttr('style');
      $('.rec_slide').removeAttr('style');
  } 
  
  else { //화면 너비가 768px 이상일 경우 (=데스크탑)
    /***** 섹션2 추천서비스 swiper 슬라이드 적용 *****/
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

    /***** 섹션4 주요기관 swiper 슬라이드 적용 *****/
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