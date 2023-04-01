const swiper1 = new Swiper('.activities__swiper', {

  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

    // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1450: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  }
});