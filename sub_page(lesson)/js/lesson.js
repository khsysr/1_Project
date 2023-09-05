window.onresize = function () { //반응형 슬라이드를 위한 자동 새로고침
  let width = $(window).width();
  if(width > 767){
    document.location.reload();
  }
  else{}
};


$(document).ready(function () {
  if (matchMedia("screen and (max-width: 767px)").matches) { 
    //화면 너비가 767px 이하일 경우 (=모바일)
    /************ 섹션01 .sub_info ************/
    $('.post_heading').after($('.info_visual')); //info_visual을 post_heading 다음으로 나열될 수 있도록 요소를 위치 이동시킨다.

    /************ 서브메뉴의 하위메뉴 토글 ************/
    $(".lesson_inner > ul > li").click(function(e){ 
      e.preventDefault(); //클릭 시 li의 a태그의 href 자동 연결 방지한다.
      $(this).find('.depth2').toggleClass('open'); //선택한 depth2 요소에 open 클래스명을 추가한다.
      $('.depth2').not($(this).find('.depth2')).removeClass('open'); //선택한 depth2 이외의 모든 depth2 요소는 open 클래스명을 삭제한다. 
    });
  } 
  else { //화면 너비가 768px 이상일 경우 (=데스크탑)
    /************ 서브메뉴의 하위메뉴 토글 :호버 ************/
    $(".lesson_inner > ul > li").hover(function(e){ 
      $(this).find('.depth2').toggleClass('open'); //mouseleave 시 depth2가 사라지도록 toggleClass 메소드를 사용한다.
    });
  }
});

