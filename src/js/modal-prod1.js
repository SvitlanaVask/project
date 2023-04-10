(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod1-open]"),
    closeModalBtn: document.querySelector("[prod1-close]"),
    modal: document.querySelector(".backdrop-prod1"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
