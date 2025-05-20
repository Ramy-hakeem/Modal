'use strict';
const modalEle = document.querySelector('.modal');
const overlayEle = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlayEle.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, function (e) {
  e.key === 'Escape' && !modalEle.classList.contains('hidden') && closeModal();
});

function closeModal() {
  modalEle.classList.add('hidden');
  overlayEle.classList.add('hidden');
}
function openModal() {
  modalEle.classList.remove('hidden');
  overlayEle.classList.remove('hidden');
}
