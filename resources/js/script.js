// Smooth scroll to page sections
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("body,html").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $('[data-fancybox="invoice"]').fancybox({
    scrolling: "hidden",
    helpers: {
      overlay: {
        locked: false,
      },
    },
  });

  $('[data-fancybox="lis"]').fancybox({
    scrolling: "hidden",
    helpers: {
      overlay: {
        locked: false,
      },
    },
  });
});

// Loading Screen
setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 500);
}, 500);
