$(document).ready(function () {
  $(".sub_menu").hide();
  $(".main_menu").hover(function () {
    $(".sub_menu", this).stop().fadeToggle(200);
  });
});
