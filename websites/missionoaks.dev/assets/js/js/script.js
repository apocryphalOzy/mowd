function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width")
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

$(document).ready(function () {

  // Counter Up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


});
