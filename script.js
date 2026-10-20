"use strict";

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = "scale(0.5) translateX(-800px)";

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

// Next Slide
const nextSlide = () => {
  currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;

  goToSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;

  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
