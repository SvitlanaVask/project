(() => {
  const refs = {
    openModalBtn: document.querySelector("[how-made-open]"),
    closeModalBtn: document.querySelector("[how-made-close]"),
    modal: document.querySelector(".backdrop-how-made"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
