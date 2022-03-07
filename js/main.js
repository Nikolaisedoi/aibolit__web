$(document).ready(function () {
  $('.hero__slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });



  //modal__city
  const location = document.querySelector('.location__city');
  const modalCity = document.querySelector('.modal__city');
  const close = document.querySelector('.modal__close');


  location.addEventListener('click', function () {
    modalCity.classList.toggle('is-open');
  });
  close.addEventListener('click', function () {
    modalCity.classList.toggle('is-open');
  });

  //modal__login
  const login = document.querySelector('.menu__list li a');
  const modalLogin = document.querySelector('.modal__login');
  const closeLogin = document.querySelector('.modal__login-close');

  login.addEventListener('click', function () {
    modalLogin.classList.toggle('is-open');
  });
  closeLogin.addEventListener('click', function () {
    modalLogin.classList.toggle('is-open');
  });

  //swiper
  const history = new Swiper('.history__slider', {
    slidesPerView: 6,
    autoHeight: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      prevEl: '.history__btn-prev',
      nextEl: '.history__btn-next',
    },
  });
  const courses = new Swiper('.courses__slider', {
    slidesPerView: 3,
    autoHeight: true,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.courses__item-btn',
    },
  });
  const services = new Swiper('.services__slider', {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.services__item-btn',
    },
  });
  const servicesAll = new Swiper('.services__all-slider', {
    slidesPerView: 4,
    autoHeight: true,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.services__all-btn',
    },
  });
  const reviews = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.reviews__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  const blogSlider = new Swiper('.blog__box-swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.blog__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  const news = new Swiper('.news__box-swiper', {
    slidesPerView: 1,
    // autoHeight: true,
    pagination: {
      el: '.news__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  const swiper = new Swiper('.services__price-slider', {
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.services__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

});
