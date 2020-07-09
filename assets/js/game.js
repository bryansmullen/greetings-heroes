// GLOBAL CONSTANTS
const mainContent = document.querySelector("#main-content");

var myAudio = document.createElement("audio");
myAudio.src = "assets/audio/temp-score.mp3";

async function toggle() {
  if (myAudio.paused) {
    await myAudio.play();
    document.getElementById("toggle-sound").innerText = "volume_up";
  } else {
    await myAudio.pause();
    document.getElementById("toggle-sound").innerText = "volume_off";
  }
}

// GLOBAL FUNCTIONS
startGame = (character) => {
  console.log(character);
};

// GAME OBJECT
const game = {
  // TITLE SCREEN METHOD - RESETS GAME TO TITLE SCREEN
  titleScreen() {
    mainContent.innerHTML = `
    <div id="play-game-button" class="button">Play Game</div>
    <div id="instructions-button" class="button">Instructions</div>
    `;
    document
      .querySelector("#play-game-button")
      .addEventListener("click", game.chooseCharacter);

    // THESE INITIALISE HEADER UI
    document
      .getElementById("instructions-button")
      .addEventListener("click", game.information);
    document.getElementById("info").addEventListener("click", game.information);

    document
      .getElementById("exit-game")
      .addEventListener("click", game.titleScreen);

    document.getElementById("toggle-sound").addEventListener("click", toggle);
  },

  // INFORMATION METHOD - DISPLAYS INSTRUCTIONS
  information() {
    mainContent.innerHTML = `
    <h2>Instructions</h2>
      <p>
        The game is played using only the mouse.
      </p>

      <p>
        To begin, click on the "Start Game" button on the main menu. You will be
        brought to the character selection screen
      </p>
      <p>
        You may inspect the attributes of each of the characters by hovering
        over each of them in turn, and when you have decided which character you
        would like to play as, simply click on them to select, and confirm your
        choice.
      </p>
      <p>
        The game will begin, and you may advance through the story by clicking
        the "next" button in the story window. When battles commence you may
        choose from a list of commands - attack, magic, and item.
      </p>
      <p>
        Once you make your selection your character will take their turn, after
        which the computer gets a chance to retaliate. Both the player and the
        computer take it in turns to use a command of their choice until one
        person wins.
      </p>
      <p>
        If the player wins, you will progress through the story until you defeat
        the final enemy.
      </p>
      <div id="return-to-title" class="button">Return To Title Screen</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },

  // CHOOSE CHARACTER - ALLOWS GAME TO BE STARTED WITH CHOICE OF CHARACTER
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

  // STORY METHOD - DISPLAYS NARRATIVE TO SCREEN
  story() {},

  // BATTLE METHOD - DISPLAYS BATTLE UI
  battle() {},
};

game.titleScreen();
