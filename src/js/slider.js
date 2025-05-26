const slider = document.querySelector('.slider-project');
const sliderImg = document.querySelectorAll('.img-item');
const sliderLine = document.querySelector('.img-project');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

function nexSlide() {
    sliderCount++;

    if (sliderCount >= sliderImg.length) {
        sliderCount = 0;
    }

    rollSlider()
}

function prevSlide() {
    sliderCount--;

    if (sliderCount < 0) {
        sliderCount = sliderImg.length -1;
    }

    rollSlider()
}

function rollSlider () {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

btn1.addEventListener('click', prevSlide)
btn2.addEventListener('click', nexSlide)