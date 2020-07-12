import { updateUi } from "./ui.js";
import { audio } from "./audio.js";

audio.isOn = false;

class Game {
  constructor() {
    this.character = undefined;
  }
  toggleSoundIcon() {
    const soundIcon = document.getElementById('toggle-sound');
    if (soundIcon.classList.contains('fa-volume-mute')) {
      soundIcon.classList.remove('fa-volume-mute')
      soundIcon.classList.add('fa-volume-up')
    } else {
      soundIcon.classList.remove('fa-volume-up')
      soundIcon.classList.add('fa-volume-mute')
    }
  }
  toggleAudio() {
    const audio = document.querySelector('audio');
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    this.toggleSoundIcon()
  }
  titleScreen() {
    updateUi('title-screen')
    document.getElementById('play-game-button').addEventListener('click', () => {
      this.chooseCharacter();
    })
    document.getElementById('exit-game').addEventListener('click', () => {
      this.titleScreen()
    })
    document.getElementById('instructions-button').addEventListener('click', () => {
      this.instructionsScreen()
    })
    document.getElementById('info-button').addEventListener('click', () => {
      this.instructionsScreen()
    })
  }
  instructionsScreen() {
    updateUi('instructions-screen')
    document.getElementById('return-to-title').addEventListener('click', () => {
      this.titleScreen()
    })
  }
  chooseCharacter() {
    updateUi('character-screen')
    audio.play('1m01')
    this.toggleSoundIcon()
    document.getElementById('bjorna').addEventListener('click', () => {
      this.character = 'bjorna'

      this.stage1();
    })
    document.getElementById('jayna').addEventListener('click', () => {
      this.character = 'jayna'

      this.stage1();
    })
    document.getElementById('yolo').addEventListener('click', () => {
      this.character = 'yolo'

      this.stage1();
    })
    document.getElementById('zazzerpan').addEventListener('click', () => {
      this.character = 'zazzerpan'

      this.stage1();
    })
  }
  stage1() {
    updateUi('first-story')
    document.getElementById('scene-one-progress').addEventListener('click', () => {
      this.stage2();
    })
  }
  stage2() {
    updateUi('second-story')
    document.getElementById('scene-two-progress').addEventListener('click', () => {
      this.stage3();
    })
  }
  stage3() {
    updateUi('third-story')
    document.getElementById('scene-three-progress').addEventListener('click', () => {
      this.stage4();
    })
  }
  stage4() {
    updateUi('fourth-story')
    document.getElementById('scene-four-progress').addEventListener('click', () => {
      this.stage5();
    })
  }
  stage5() {
    updateUi('fifth-story')
    audio.play('1m02')
    document.getElementById('scene-five-progress').addEventListener('click', () => {
      this.stage6();
    })
  }
  stage6() {
    updateUi('sixth-story')
    document.getElementById('scene-six-progress').addEventListener('click', () => {
      this.stage7();
    })
  }
  stage7() {
    updateUi('seventh-story')
    document.getElementById('scene-seven-progress').addEventListener('click', () => {
      this.stage8();
    })
  }
  stage8() {
    updateUi('eighth-story')
    audio.play('1m03')
    document.getElementById('scene-eight-progress').addEventListener('click', () => {
      this.stage9();
    })
  }
  stage9() {
    updateUi('ninth-story')
    document.getElementById('scene-nine-progress').addEventListener('click', () => {
      this.stage10();
    })
  }
  stage10() {
    updateUi('tenth-story')
    document.getElementById('scene-ten-progress').addEventListener('click', () => {
      this.stage11();
    })
  }
  stage11() {
    updateUi('eleventh-story')
    document.getElementById('scene-eleven-progress').addEventListener('click', () => {
      this.stage12();
    })
  }
  stage12() {
    updateUi('twelfth-story')
    audio.play('1m04')
    document.getElementById('scene-twelve-progress').addEventListener('click', () => {
      this.finalStage();
    })
  }
  finalStage() {
    updateUi('final-scene')
    document.getElementById('victory').addEventListener('click', () => {
      this.victoryOne();
    })
    document.getElementById('game-over').addEventListener('click', () => {
      this.gameOverOne();
    })
  }
  victoryOne() {
    updateUi('victory-one')
    document.getElementById('victory-one-progress').addEventListener('click', () => {
      this.victoryTwo();
    })
  }

  victoryTwo() {
    updateUi('victory-two')
    document.getElementById('victory-two-progress').addEventListener('click', () => {
      this.victoryThree();
    })
  }
  victoryThree() {
    updateUi('victory-three')
    document.getElementById('victory-three-progress').addEventListener('click', () => {
      this.titleScreen();
    })
  }
  gameOverOne() {
    updateUi('game-over-one')
    document.getElementById('game-over-one-progress').addEventListener('click', () => {
      this.gameOverTwo();
    })
  }
  gameOverTwo() {
    updateUi('game-over-two')
    document.getElementById('game-over-two-progress').addEventListener('click', () => {
      this.gameOverThree();
    })
  }
  gameOverThree() {
    updateUi('game-over-three')
    document.getElementById('game-over-three-progress').addEventListener('click', () => {
      this.gameOverFour();
    })
  }
  gameOverFour() {
    updateUi('game-over-four')
    document.getElementById('game-over-four-progress').addEventListener('click', () => {
      this.titleScreen();
    })
  }
}


const myGame = new Game
document.getElementById('toggle-sound').addEventListener('click', () => {
  myGame.toggleAudio(

  )
})
myGame.titleScreen();

// const music = document.getElementById('toggle-sound')
// music.addEventListener('click', () => {
//   audio.play('1m02');
// })


// // GLOBAL FUNCTIONS
// const startGame = (character) => {
//   let chosenCharacter = character;
//   story.sceneOne();
// };

// // GAME OBJECT
// const game = {
//   // TITLE SCREEN METHOD - RESETS GAME TO TITLE SCREEN
//   titleScreen() {
//     let currentlyPlaying = document.querySelector('audio');
//     if (currentlyPlaying) {
//       currentlyPlaying.remove();
//     }
//     mainContent.innerHTML = `
//     `;
//     document
//       .querySelector("#play-game-button")
//       .addEventListener("click", game.chooseCharacter);

//     // THESE INITIALISE HEADER UI
//     document
//       .getElementById("instructions-button")
//       .addEventListener("click", game.information);
//     document.getElementById("info").addEventListener("click", game.information);

//     document
//       .getElementById("exit-game")
//       .addEventListener("click", game.titleScreen);

//   },

//   // INFORMATION METHOD - DISPLAYS INSTRUCTIONS
//   information(instructions) {
//     mainContent.innerHTML = `

//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", game.titleScreen);
//   },

//   // CHOOSE CHARACTER - ALLOWS GAME TO BE STARTED WITH CHOICE OF CHARACTER
//   chooseCharacter() {
//     audio.track1();
//     mainContent.innerHTML = `

//     `;
//     const bjorna = document.querySelector(".character-card.bjorna");
//     const jayna = document.querySelector(".character-card.jayna");
//     const yolo = document.querySelector(".character-card.yolo");
//     const zazzerpan = document.querySelector(".character-card.zazzerpan");
//     bjorna.addEventListener("click", startGame.bind(null, bjorna));
//     jayna.addEventListener("click", startGame.bind(null, bjorna));
//     yolo.addEventListener("click", startGame.bind(null, bjorna));
//     zazzerpan.addEventListener("click", startGame.bind(null, bjorna));
//   },
// };

// // BATTLE OBJECT - DISPLAYS BATTLE UI
// const battle = {
//   firstEnemy() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneFour);
//   },
//   secondEnemy() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneEight);
//   },
//   thirdEnemy() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.finalScene);
//   },
// };

// // STORY OBJECT - DISPLAYS NARRATIVE TO SCREEN
// const story = {
//   sceneOne() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneTwo);
//   },
//   sceneTwo() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneThree);
//   },
//   sceneThree() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", battle.firstEnemy);
//   },
//   sceneFour() {
//     audio.track2();
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneFive);
//   },
//   sceneFive() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneSix);
//   },
//   sceneSix() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", battle.secondEnemy);
//   },
//   sceneSeven() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneFour);
//   },
//   sceneEight() {
//     audio.track3();
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneNine);
//   },
//   sceneNine() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneTen);
//   },
//   sceneTen() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneEleven);
//   },
//   sceneEleven() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", story.sceneTwelve);
//   },
//   sceneTwelve() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("next-scene")
//       .addEventListener("click", battle.thirdEnemy);
//   },
//   finalScene() {
//     audio.track4();
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("victory")
//       .addEventListener("click", story.victoryOne);
//     document
//       .getElementById("game-over")
//       .addEventListener("click", story.gameOverOne);
//   },
//   gameOverOne() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", story.gameOverTwo);
//   },
//   gameOverTwo() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", story.gameOverThree);
//   },
//   gameOverThree() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", story.gameOverFour);
//   },
//   gameOverFour() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", game.titleScreen);
//   },
//   victoryOne() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", story.victoryTwo);
//   },
//   victoryTwo() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", story.victoryThree);
//   },
//   victoryThree() {
//     mainContent.innerHTML = `
//     `;
//     document
//       .getElementById("return-to-title")
//       .addEventListener("click", game.titleScreen);
//   },
// };

// game.titleScreen();
