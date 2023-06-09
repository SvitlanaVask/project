(() => {
  const refs = {
    openModalBtn: document.querySelector("[loc-modal-open]"),
    closeModalBtn: document.querySelector("[close-locations"),
    modal: document.querySelector(".backdrop-our-locations"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
