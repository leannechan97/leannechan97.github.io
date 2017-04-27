$(document).ready(function() {

  $(".piece").hover(function() {
    $(".pieceimg").css("background-color", red);
  })

  $("#seework").click(function() {
    $("#portfoliobody").css('display', 'none');
    $("#portfoliobody").fadeIn(1000);
  });

});
