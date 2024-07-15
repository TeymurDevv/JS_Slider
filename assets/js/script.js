const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const next = document.querySelector('.right-arrow');
const prev = document.querySelector('.left-arrow');
let index = 0;

function showSlide(n) {
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

showSlide(index);
