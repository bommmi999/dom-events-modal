'use strict';
const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModalOverlay = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalOverlay = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModalOverlay);

modal.addEventListener('click', closeModalOverlay);

overlay.addEventListener('click', closeModalOverlay);

document.addEventListener('keydown', e => {
  console.log(e.key);

  // element with hidden class ==> modal is not visible
  // element with ! hidden class ==> modal  visible

  /*   if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalOverlay();
    }
  } */

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalOverlay;
  }
});
