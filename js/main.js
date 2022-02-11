$(document).ready(function () {
  $('.hero__slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  $('.history__slick').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="custom__slick-prev slick__arrow"><img src="/image/arrow__slide-prev.svg" alt="Стрелка назад" ></button> ',
    nextArrow: '<button type="button" class="custom__slick-next slick__arrow"><img src="/image/arrow__slide-next.svg" alt="Стрелка вперед" ></button> ',
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


});