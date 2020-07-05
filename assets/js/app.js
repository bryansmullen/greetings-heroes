const mainContent = document.querySelector("#main-content");
const playGameButton = document.querySelector("#play-game-button");

playGameButton.addEventListener("click", () => {
  mainContent.innerHTML = `<h2>Choose Your Hero</h2>
  <img src="assets/img/bjorna.png" alt="Bjorna" />
  <img src="assets/img/jayna.png" alt="Jayna" />
  <img src="assets/img/yolo.png" alt="Yolo" />
  <img src="assets/img/zazzerpan.png" alt="Zazzerpan" />`;
});
