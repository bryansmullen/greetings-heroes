import { updateUi } from "./ui.js";

updateUi(document.getElementById('character-screen'))
// const controls = {
//   instructionsBtn: document.getElementById('instructions'),
//   showInstructions() {
//     updateUi(document.getElementById('information-screen'))
//   }
// }


audio.isOn = false;
const audio = {
  play(cue) {
    let currentlyPlaying = document.querySelector('audio');
    if (currentlyPlaying) {
      currentlyPlaying.remove();
    }
    let newTrack = document.createElement("audio");
    newTrack.loop = true;
    newTrack.src = `assets/audio/${cue}.mp3`;
    newTrack.play()
    document.body.appendChild(newTrack)
  },
  track1() {
    audio.play('1m01')
  },
  track2() {
    audio.play('1m02')
  },
  track3() {
    audio.play('1m03')
  },
  track4() {
    audio.play('1m04')
  },
}

// GLOBAL FUNCTIONS
startGame = (character) => {
  let chosenCharacter = character;
  story.sceneOne();
};

// GAME OBJECT
const game = {
  // TITLE SCREEN METHOD - RESETS GAME TO TITLE SCREEN
  titleScreen() {
    let currentlyPlaying = document.querySelector('audio');
    if (currentlyPlaying) {
      currentlyPlaying.remove();
    }
    mainContent.innerHTML = `
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

  },

  // INFORMATION METHOD - DISPLAYS INSTRUCTIONS
  information(instructions) {
    mainContent.innerHTML = `
    
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },

  // CHOOSE CHARACTER - ALLOWS GAME TO BE STARTED WITH CHOICE OF CHARACTER
  chooseCharacter() {
    audio.track1();
    mainContent.innerHTML = `
    
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
};

// BATTLE OBJECT - DISPLAYS BATTLE UI
battle = {
  firstEnemy() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneFour);
  },
  secondEnemy() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneEight);
  },
  thirdEnemy() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.finalScene);
  },
};

// STORY OBJECT - DISPLAYS NARRATIVE TO SCREEN
const story = {
  sceneOne() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneTwo);
  },
  sceneTwo() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneThree);
  },
  sceneThree() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", battle.firstEnemy);
  },
  sceneFour() {
    audio.track2();
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneFive);
  },
  sceneFive() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneSix);
  },
  sceneSix() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", battle.secondEnemy);
  },
  sceneSeven() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneFour);
  },
  sceneEight() {
    audio.track3();
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneNine);
  },
  sceneNine() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneTen);
  },
  sceneTen() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneEleven);
  },
  sceneEleven() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneTwelve);
  },
  sceneTwelve() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", battle.thirdEnemy);
  },
  finalScene() {
    audio.track4();
    mainContent.innerHTML = `
    `;
    document
      .getElementById("victory")
      .addEventListener("click", story.victoryOne);
    document
      .getElementById("game-over")
      .addEventListener("click", story.gameOverOne);
  },
  gameOverOne() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.gameOverTwo);
  },
  gameOverTwo() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.gameOverThree);
  },
  gameOverThree() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.gameOverFour);
  },
  gameOverFour() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },
  victoryOne() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.victoryTwo);
  },
  victoryTwo() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.victoryThree);
  },
  victoryThree() {
    mainContent.innerHTML = `
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },
};

game.titleScreen();
