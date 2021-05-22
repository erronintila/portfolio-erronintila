$(document).ready(function () {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700,
    speedAsDuration: true,
  });

  $('[data-fancybox="invoice"]').fancybox({
    scrolling: 'hidden',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $('[data-fancybox="lis"]').fancybox({
    scrolling: 'hidden',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
});