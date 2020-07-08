const mainContent = document.querySelector("#main-content");
startGame = (character) => {
  console.log(character);
};
const game = {
  titleScreen() {
    mainContent.innerHTML = `
    <div id="play-game-button" class="button">Play Game</div>
    <div id="instructions-button" class="button">Instructions</div>
    `;
    const playGameButton = document.querySelector("#play-game-button");
    playGameButton.addEventListener("click", this.chooseCharacter);
  },
  information() {},
  toggleSound() {},
  exitToTitle() {},
  chooseCharacter() {
    mainContent.innerHTML = `
    <h2 class="character-heading">Choose Your Hero</h2>
    <div class="character-selection">
      <div class="character-card bjorna">
        <img src="assets/img/bjorna.png" alt="bjorna" />
        <div class="stats">
        <h3>Bjorna</h3>
          <p>Name: Bjorna</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <h2>Bjorna</h2>
      </div>
      <div class="character-card jayna">
        <img src="assets/img/jayna.png" alt="jayna" />
        <div class="stats">
        <h3>Jayna</h3>
          <p>Name: Jayna</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <h2>Lady Jayna</h2>
      </div>
      <div class="character-card yolo">
      <div class="stats">
          <h3>Yolo</h3>
          <p>Name: Yolo</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <img src="assets/img/yolo.png" alt="yolo" />
        <h2>Yolo</h2>
      </div>
      <div class="character-card zazzerpan">
      <div class="stats">
          <h3>Zazzerpan</h3>
          <p>Name: Zazzerpan</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <img src="assets/img/zazzerpan.png" alt="zazzerpan" />
        <h2>Zazzerpan</h2>
      </div>
    </div>
    `;
    const bjorna = document.querySelector(".character-card.bjorna");
    const jayna = document.querySelector(".character-card.jayna");
    const yolo = document.querySelector(".character-card.yolo");
    const zazzerpan = document.querySelector(".character-card.zazzerpan");
    bjorna.addEventListener("click", startGame.bind(null, bjorna));
    jayna.addEventListener("click", startGame.bind(null, bjorna));
    yolo.addEventListener("click", startGame.bind(null, bjorna));
    zazzerpan.addEventListener("click", startGame.bind(null, bjorna));
  },
  story() {},
  battle() {},
};

game.titleScreen();
