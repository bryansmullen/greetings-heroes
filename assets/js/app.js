const mainContent = document.querySelector("#main-content");
const playGameButton = document.querySelector("#play-game-button");

playGameButton.addEventListener("click", () => {
  mainContent.innerHTML = `<h2 class="character-heading">Choose Your Hero</h2>
  <div class="character-selection">
    <div class="character-card">
      <img src="assets/img/bjorna.png" alt="bjorna" />
      <h2>Bjorna</h2>
    </div>
    <div class="character-card">
      <img src="assets/img/jayna.png" alt="jayna" />
      <h2>Lady Jayna</h2>
    </div>
    <div class="character-card">
      <img src="assets/img/yolo.png" alt="yolo" />
      <h2>Yolo</h2>
    </div>
    <div class="character-card">
      <img src="assets/img/zazzerpan.png" alt="zazzerpan" />
      <h2>Zazzerpan</h2>
    </div>
  </div>`;
});
