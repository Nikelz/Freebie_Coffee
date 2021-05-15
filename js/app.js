"use strict";

var coffeeSlider = document.querySelector('.coffee-slider');
var comboSlider = document.querySelector('.combo-slider');

if (coffeeSlider) {
  new Swiper('.coffee-slider', {
    navigation: {
      nextEl: '.coffee-slider-next'
    },
    loop: true,
    freeMode: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    simulateTouch: false,
    breakpoints: {
      320: {
        centeredSlides: true,
        slidesPerGroup: 1,
        slidesPerView: 1
      },
      600: {
        spaceBetween: 30
      }
    }
  });
}

;

if (comboSlider) {
  new Swiper('.combo-slider', {
    navigation: {
      nextEl: '.combo-slider-next'
    },
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        freeMode: false
      },
      700: {
        slidesPerView: 'auto'
      }
    }
  });
}

; // const tabTrigger = document.querySelector('.nav-toggle');

document.querySelectorAll('.tab-triggers__item').forEach(function (item) {
  return item.addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href').replace('#', '');
    document.querySelectorAll('.tab-triggers__item').forEach(function (child) {
      return child.classList.remove('tab-triggers__item--active');
    });
    document.querySelectorAll('.tab-content__item').forEach(function (child) {
      return child.classList.remove('tab-content__item--active');
    });
    item.classList.add('tab-triggers__item--active');
    document.getElementById(id).classList.add('tab-content__item--active');
  });
});
document.querySelector('.tab-triggers__item').click();
var navButton = document.querySelector('.menu__icon');

if (navButton) {
  var nav = document.querySelector('.nav');
  navButton.addEventListener("click", function (e) {
    navButton.classList.toggle('_active');

    if (!nav.classList.contains('nav--active')) {
      nav.classList.add('nav--active');
    } else {
      nav.classList.remove('nav--active');
    }
  });
}