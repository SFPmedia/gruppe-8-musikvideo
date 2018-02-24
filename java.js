$(document).ready(() => {

  $(".hide_show_knapper h4").click(function(){
    $(".ytikon").hide();
  });
  $(".hide_show_knapper h4").click(function(){
    $(".fbikon").hide();
  });
  $(".hide_show_knapper h4").click(function(){
    $(".intro h3").hide();
  });
  $(".hide_show_knapper h4").click(function(){
    $(".intro img").hide();
  });
  $(".hide_show_knapper h4").click(function(){
    $(this).hide();
  });
  $(".hide_show_knapper h4").click(function(){
    $(".hide_show_knapper h5").show();
  });



  $(".hide_show_knapper h5").click(function(){
    $(".fbikon").show();
  });
  $(".hide_show_knapper h5").click(function(){
    $(".ytikon").show();
  });
  $(".hide_show_knapper h5").click(function(){
    $(".intro img").show();
  });
  $(".hide_show_knapper h5").click(function(){
    $(".intro h3").show();
  });
  $(".hide_show_knapper h5").click(function(){
    $(this).hide();
  });
  $(".hide_show_knapper h5").click(function(){
    $(".hide_show_knapper h4").show();
  });
});
