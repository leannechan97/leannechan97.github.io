$(document).ready(function() {

  $("body").css('display', 'none');
  $("body").fadeIn(2000);

  $(".piece").hover(function() {
    $(this).parent().css("border-style", "dotted");
  });

  $("#hidethis").css('display', 'none');

  $("#emailme").click(function() {
    $(this).children().fadeIn(2000);
  });

});
