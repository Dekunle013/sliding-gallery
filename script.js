"use strict";

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = "scale(0.5) translateX(-800px)";

//Function
const createDots = () => {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dots__dot' data-slide='${i}'></button>`,
    );
  });
};

const activateDot = function (slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// Next Slide
const nextSlide = () => {
  currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;

  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const prevSlide = () => {
  currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;

  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

// Event Handlers
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    currentSlide = Number(slide);
    goToSlide(slide);
    activateDot(slide);
  }
});
