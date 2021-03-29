const sliderContainerEl = document.querySelector(".slider-container");
const slidrEl = document.querySelectorAll(".slid");
const btnCurrentOneEl = document.querySelector(".current-one");
const btnCurrentTwoEl = document.querySelector(".current-two");
const btnCurrentTreeEl = document.querySelector(".current-three");
const btnNextEl = document.querySelector(".btn-next");
const btnBackEl = document.querySelector(".btn-back");

btnNextEl.addEventListener("click", nextSlide);
btnBackEl.addEventListener("click", backSlide);
btnCurrentOneEl.addEventListener("click", oneImages);
btnCurrentTwoEl.addEventListener("click", twoImages);
btnCurrentTreeEl.addEventListener("click", threeImages);

let index = 0;

function classCheck() {
  stopSlide();
  const newArrayImg = [...slidrEl];
  newArrayImg.find((img) => img.classList.remove("current"));
}

function nextSlide() {
  classCheck();
  if (index + 1 >= slidrEl.length) {
    index = 0;

    return slider(index);
  }

  index += 1;
  slider(index);
}
function backSlide() {
  classCheck();
  if (index - 1 < 0) {
    index = 2;
    return slider(index);
  }

  index -= 1;
  slider(index);
}

function oneImages() {
  classCheck();

  const currentImg = slidrEl[0];
  currentImg.classList.add("current");

  index = 0;
}
function twoImages() {
  classCheck();

  const currentImg = slidrEl[1];
  currentImg.classList.add("current");

  index = 1;
}
function threeImages() {
  classCheck();

  const currentImg = slidrEl[2];
  currentImg.classList.add("current");

  index = 2;
}

function slider(indexEl) {
  const activSlide = slidrEl[indexEl];

  activSlide.classList.add("current");
}

let intervalId = setInterval(() => nextSlide(), 5000);

function stopSlide() {
  clearInterval(intervalId);
  let timeoutId = setTimeout(
    (intervalId = setInterval(() => nextSlide(), 5000)),
    1000
  );
  clearTimeout(timeoutId);
}
