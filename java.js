$(document).ready(() => {

  $(".intro img").click(function(){
    $(".ytikon").hide();
  });
  $(".intro img").click(function(){
    $(".fbikon").hide();
  });
  $(".intro img").click(function(){
    $(".intro h3").hide();
  });
  $(".intro img").click(function(){
    $(this).hide();
  });



  $(".merch h1").click(function(){
    $(".fbikon").show();
  });
  $(".merch h1").click(function(){
    $(".ytikon").show();
  });
  $(".merch h1").click(function(){
    $(".intro img").show();
  });
  $(".merch h1").click(function(){
    $(".intro h3").show();
  });



});
