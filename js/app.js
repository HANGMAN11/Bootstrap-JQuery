$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
  var typed = new Typed(".element", {
    strings: ["Timothy Blake", "a Developer", "a Designer", "a Teacher"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });
  //progress bars
  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function (direction) {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:100%;transition: 1s all");
      p[1].setAttribute("style", "width:70%;transition:1.5s all");
      p[2].setAttribute("style", "width:81%;transition:1.6s all");
      p[3].setAttribute("style", "width:50%;transition:1.7s all");
    },
    offset: "90%",
  });
  $(".filter-container").imagesLoaded(function () {
    var filterizd = $(".filter-container").filterizr({
      animationDuration: 0.5,
    });
  });

  //Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
  });
});
