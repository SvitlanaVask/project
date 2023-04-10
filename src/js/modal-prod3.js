(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod3-open]"),
    closeModalBtn: document.querySelector("[prod3-close]"),
    modal: document.querySelector(".backdrop-prod3"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
