(() => {
  const refs = {
    openModalBtn: document.querySelector("[fran-modal-open]"),
    closeModalBtn: document.querySelector("[close-franshise]"),
    modal: document.querySelector("[franshise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
