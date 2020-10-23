const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");

//console.dir(backdrop)

for (let i = 0; i < selectPlanButtons.length; i++){ 
    selectPlanButtons[i].addEventListener('click', function(){
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}


toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

function closeModal(){
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
}

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
  })
  
  ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation ended', event);
  })
  
  ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration', event);
  })