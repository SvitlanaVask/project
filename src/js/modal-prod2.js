(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod2-open]"),
    closeModalBtn: document.querySelector("[prod2-close]"),
    modal: document.querySelector(".backdrop-prod2"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
