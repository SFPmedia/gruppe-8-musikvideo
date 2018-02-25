$(document).ready(() => {
/*
var video = document.getElementById("#introVideo");
var video = $(#introVideo)[0];


var video = $("#introVideo");
*/
var vid = document.getElementById("#UHvideo");


// Pause knap
$(".pause-knap").click(function(){
  $("#UHvideo").get(0).pause();
});
  $(".pause-knap").click(function(){
    $(this).hide();
  });
  $(".pause-knap").click(function(){
    $(".play-knap").fadeIn(1000);
  });

// Play knap
$(".play-knap").click(function(){
  $("#UHvideo").get(0).play();
});
$(".play-knap").click(function(){
  $(this).hide();
});
$(".play-knap").click(function(){
  $(".pause-knap").fadeIn(1000);
});


// Mute knap
$(".muted-knap").click(function(){
  $("#UHvideo").get(0).unmuted();
});
  $(".muted-knap").click(function(){
    $(this).hide();
  });
  $(".muted-knap").click(function(){
    $(".unmuted-knap").fadeIn(1000);
  });


// Unmute knap
$(".unmuted-knap").click(function(){
  $("#UHvideo").get(0).muted();
});
$(".unmuted-knap").click(function(){
  $(this).hide();
});
$(".unmuted-knap").click(function(){
  $(".muted-knap").fadeIn(1000);
});



// Skjul elementer
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


// Vis elementer
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


// Burger menu vis
  $(".burger-menu-toggle").click(function(){
    $(".burger-menu-udfoldet").show();
  });

// Burger menu skjul
  $(".luk-menu h3").click(function(){
    $(".burger-menu-udfoldet").hide();
  });




});
