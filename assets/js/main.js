jQuery(".testimonials-slider").owlCarousel({
  autoplay: true,
  // rewind: true, /* use rewind if you don't want loop */
  loop: true,
  margin: 30,
  center: true,
  // animateOut: 'fadeOut',
  // animateIn: 'fadeIn',

  responsiveClass: true,
  autoplayTimeout: 5000,
  smartSpeed: 800,
  touchDrag  : true,
  // mouseDrag  : false,
  nav: false,
  dots:true,
  responsive: {
    0: {
      items: 1.2,
      margin: 10,
    },

    600: {
      items: 2.1
    },

    1024: {
      items: 2.8
    },

    1366: {
      items: 3.4
    }
  }
});