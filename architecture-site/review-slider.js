const arrowLeft = document.querySelector('.slider-nav__arrow-left');
const arrowRight = document.querySelector('.slider-nav__arrow-right');
const slides = document.querySelectorAll('.slider__slide-wrap');
const slidesNav = document.querySelector('.slider-nav__nav-marks');

let currentSlideIndex = 0;
const slidePagination = [];

function createPaginationBlock() {
    const div = document.createElement('div');
    div.className = 'slider-nav__mark';
    slidesNav.appendChild(div);
    slidePagination.push(div);
}

function addPagination() {
    slides.forEach(createPaginationBlock);
    slidePagination[0].classList.add('slider-mark-active');
    slidePagination.forEach((mark, index) => {
        mark.addEventListener('click', () => changeSlide(index))
    })
}

function addActiveClass() {
    slidePagination[currentSlideIndex].classList.add('slider-mark-active')
}

function removeActiveClass() {
    slidePagination[currentSlideIndex].classList.remove('slider-mark-active')
}

function showSlide() {
    slides[currentSlideIndex].classList.add('block');
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove('block')
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1){
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0){
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();

arrowLeft.addEventListener('click', previousSlide)
arrowRight.addEventListener('click', nextSlide)
