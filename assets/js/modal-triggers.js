const confirmButton = document.querySelector("#instructions-button");
const modal = document.querySelector("custom-modal");

modal.addEventListener("confirm", () => {
  console.log("Confirming Modal...");
});

modal.addEventListener("cancel", () => {
  console.log("Cancelling Modal...");
});

confirmButton.addEventListener("click", () => {
  if (!modal.isOpen) {
    modal.open();
    console.log("Opening Modal...");
  }
});
