const allMenu =document.querySelectorAll('li a');

allMenu.forEach((value) => {
    value.addEventListener('click',(e) => {
        e.preventDefault()
    })
})

const hamburgerBtn =document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.navigation-menu');

hamburgerBtn.addEventListener('click',() => {
    menu.style.display ='block';
    hamburgerBtn.style.display ='none';
    closeBtn.style.display ='block';
})
closeBtn.addEventListener('click',() => {
    menu.style.display ='none';
    hamburgerBtn.style.display ='block';
    closeBtn.style.display ='none';
})
window.addEventListener('resize',() => {   
    if (window.innerWidth>850) {
        hamburgerBtn.style.display = 'none';
        menu.style.display ='none';
        closeBtn.style.display ='none';       
    } else {
        hamburgerBtn.style.display ='block'; 
    }
})

const mainForm = document.querySelector('.main-form');
const emailInput = document.getElementById('email');
const errorMsg =document.querySelector('.error-text');

mainForm.addEventListener('submit',(event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailPattern=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
        errorMsg.textContent ='Please insert a valid email';
        emailInput.classList.add('error');   
    } else {
        errorMsg.textContent = ''; 
        emailInput.classList.remove('error');
        alert('Subscribed Successfully');
    }
    
    emailInput.addEventListener('input',() => {
        if (emailInput.value) {
            errorMsg.textContent = ''; 
            emailInput.classList.remove('error');
        }        
    })
})

const cards = document.querySelectorAll('.testimonials-card:not(.duplicate)');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let interval;

function showSlide (index){
    cards.forEach(card => card.classList.remove('active-card'));
    dots.forEach(dot => dot.classList.remove('active-dot'));

    cards[index].classList.add('active-card');
    dots[index].classList.add('active-dot');

    currentSlide = index;
}
function nextSlide(){
    const next = (currentSlide +1) % cards.length;
    showSlide(next);
}
function startAutoSlide(){
    interval = setInterval(nextSlide,5000);
}
function goToSlide(index){
    clearInterval(interval);
    showSlide(index);
    startAutoSlide();
}

showSlide(0);
startAutoSlide();

