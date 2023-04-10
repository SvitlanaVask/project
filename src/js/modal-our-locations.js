(() => {
  const refs = {
    openModalBtn: document.querySelector("[loc-modal-open]"),
    closeModalBtn: document.querySelector("[locations-close]"),
    modal: document.querySelector("[locations]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
