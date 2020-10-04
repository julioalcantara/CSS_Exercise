const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');

//console.dir(backdrop)

for (let i = 0; i < selectPlanButtons.length; i++){ 
    selectPlanButtons[i].addEventListener('click', function(){
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);


function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}
