const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');


// Events
openBtn.addEventListener('click', ()=>{
    nav.forEach(nav_element => nav_element.classList.add('visible'))
})

closeBtn.addEventListener('click', ()=>{
    nav.forEach(nav_element => nav_element.classList.remove('visible'))
});





const sliderContainer = document.querySelector('.slide-container'), 
slideRight = document.querySelector('.right-slide'),
slideLeft = document.querySelector('.left-slide'),
upBtn = document.querySelector('.up'),
downBtn = document.querySelector('.down'),
slidesLength = slideRight.querySelectorAll('div').length;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) =>{
   let sliderHeight = sliderContainer.clientHeight
   if(direction === 'up')
   {
    activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1)
        {
            activeSlideIndex = 0;
        }
   } else if(direction === 'down')
   {
        activeSlideIndex--;

        if(activeSlideIndex > slidesLength - 0)
        {
            activeSlideIndex = slidesLength = 1;
        }
   }

    //Transitions the images
   slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`; 
   slideLeft.style.transform = `translateY(+${activeSlideIndex * sliderHeight}px)`; 
}





let activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh` // gets the last index