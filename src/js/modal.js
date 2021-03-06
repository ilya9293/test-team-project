(() => {
   const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalButton: document.querySelector('[data-modal-opn]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
   };

   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.openModalButton.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);

   function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
   }
})();