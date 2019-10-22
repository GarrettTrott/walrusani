$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $("#darkmode").click(function() {
    $("body").toggleClass("background-color-regular");
    $("body").toggleClass("background-color-dark");
  });
});
