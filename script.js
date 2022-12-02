let swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  variableWidth: true,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: true,
  autoplaySpeed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    720: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 6,
    },
  },
});
