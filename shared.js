const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

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

