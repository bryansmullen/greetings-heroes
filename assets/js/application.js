import { Battle } from "./battle.js";
import { stage } from "./story.js";
import { Player, Enemy } from "./characters.js";
import { audio, toggleSound } from "./audio.js";
import { drawTitle } from "./drawScreens.js";
let currentStage;
let chosenCharacter;
let audioPlaying;
let volumeOn = true;

//   // Grab Screen Controls
//   const attackBtn = document.getElementById("attack");
//   const defendBtn = document.getElementById("defend");
//   const specialBtn = document.getElementById("special");

//   // Set Up Battle
//   let battle = new Battle(
//     chosenCharacter,
//     new Enemy(stageToDraw.enemy, stageToDraw.enemyStrengh, stageToDraw.enemyDefence, stageToDraw.enemyMagicDefence, stageToDraw.enemyHealth),
//     attackBtn,
//     defendBtn,
//     specialBtn,
//     "progress",
//     "player-health",
//     "enemy-health",
//     "battle-update"
//   );

//   battle.run();
//   if (audioPlaying != stageToDraw.audio) {
//     audio(stageToDraw.audio);
//     audioPlaying = stageToDraw.audio;
//   }
//   return stageToDraw;
// }

const soundIcon = document.getElementById("toggle-sound");
soundIcon.addEventListener("click", toggleSound);

const setGameVariables = function () {
  const randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      stage[1].next = "2a";
      break;
    case 2:
      stage[1].next = "2b";
      break;
    case 3:
      stage[1].next = "2c";
      break;
  }
};

// Header Event Listeners
const info = document.getElementById("info-button");
const exitGame = document.getElementById("exit");
exitGame.addEventListener("click", () => {
  drawTitle(stage["title"]);
  return;
});
info.addEventListener("click", () => {
  drawInstructions();
});

drawTitle(stage["title"]);
