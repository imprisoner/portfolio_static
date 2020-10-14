new WOW().init();

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.projects-pagination',
      clickable: true,
      bulletClass: 'projects-bullet',
      bulletActiveClass: 'projects-bullet-active'
    },
  });