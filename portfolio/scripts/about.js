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