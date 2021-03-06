// // #1

setInterval (showTime, 1000);
function showTime() {
let time= new Date();
let hour= time.getHours();
let min= time.getMinutes();
let sec= time.getSeconds();
const ampm = hour >= 12 ? 'pm' : 'am';

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min + ":" + sec + ampm;
    document.getElementById("myclockdisplay")
            .innerHTML = currentTime;
}
showTime();

// #2
const sliderItems = document.querySelectorAll('.slider-item');
const nextSlideBtn = document.querySelector('#next-slide-btn');
const prevSlideBtn = document.querySelector('#prev-slide-btn');
const startAutoSliding = document.querySelector('#autoslide-btn');
const stopAutoSliding = document.querySelector('#autoslide-stop-btn');
let activeIndex = 0;
let timeoutId = null;

function initSlider(){
    nextSlideBtn.addEventListener('click', showNextSlide);
    prevSlideBtn.addEventListener('click', showPrevSlide);
    startAutoSliding.addEventListener('click', startAutoSlidingFn)
    stopAutoSliding.addEventListener('click', stopAutoSlidingFn);

    renderSlides();
}
initSlider();

function renderSlides() {
  sliderItems.forEach((slide, i) => {
    if(activeIndex === i){
      slide.classList.add('animating');
      setTimeout(() => {
        slide.classList.remove('animating');
        slide.classList.add('active');
      }, 0);
    } else {
      slide.classList.remove('active');
    }
  });
}

function showSlideOnIndex(event){
    
    activeIndex = event.target.value;
    renderSlides();
}

function showNextSlide(){
  if(activeIndex === sliderItems.length - 1){
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  renderSlides();
}

function showPrevSlide(){
  if(activeIndex === 0){
    activeIndex = sliderItems.length - 1;
  } else {
    activeIndex--;
  }
  renderSlides();
}

function startAutoSlidingFn() {
  timeoutId = setInterval(showNextSlide, 2000);
}

function stopAutoSlidingFn() {
    console.log('apa');
  if(timeoutId){
    clearInterval(timeoutId);
    timeoutId = null;
  }
}

document.querySelector('.slider-wrapper').addEventListener( 'mouseleave', startAutoSlidingFn);
document.querySelector('.slider-wrapper').addEventListener( 'mouseenter', stopAutoSlidingFn);

document.querySelectorAll('.dot-button').forEach( (button, i) => {
    button.addEventListener('click', showSlideOnIndex);
});

