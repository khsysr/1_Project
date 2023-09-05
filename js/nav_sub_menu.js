$(document).ready(function () {
  /* 모바일 햄버거 메뉴 */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".Lnav2, .Lnav3").toggleClass("open");
  });

  if (matchMedia("screen and (max-width: 767px)").matches) { 
    //화면 너비가 767px 이하일 경우 (=모바일)
    $(".main_menu").click(function () { //main_menu 클릭 시
      $(this).find(".sub_menu").toggleClass('open'); //클릭한 요소의 자식요소 sub_menu를 찾아 open 토글클래스명을 추가한다.
      $('.sub_menu').not($(this).find('.sub_menu')).removeClass('open'); //선택한 sub_menu 이외의 모든 sub_menu 요소는 open 클래스명을 삭제한다. 
    });
  } 
  else { //화면 너비가 768px 이상일 경우 (=데스크탑)
    $(".main_menu").hover(function () {
      $(this).find(".sub_menu").toggleClass('open');
      //$(".sub_menu", this).stop().fadeToggle(200);
    });
  }
});
