import { setRandomFirstEnemy, stage } from "./stages.js";
import { drawTitle, drawConfirmExit } from "./draw-title.js";
import { drawInstructions } from "./draw-instructions.js";
import { drawNarrative } from "./draw-narrative.js";
import { drawCharacter } from "./draw-character.js";
import { drawBattle } from "./draw-battle.js";
import { runBattle } from "./battle.js";
import { audio } from "./audio.js";

// Exit Game Event Listeners
const readyExitGameListener = function () {
  const exitGame = document.getElementById("exit");
  exitGame.style.visibility = "visible";
  exitGame.addEventListener("click", () => {
    drawConfirmExit();
  });
};

// Info Event Listener
const info = document.getElementById("info-button");
info.addEventListener("click", () => {
  drawInstructions();
});

// Update Audio If Required
function updateAudio() {
  const stageId = sessionStorage.getItem("stage");
  const stageObj = stage[stageId];
  const audioObj = document.querySelector("audio");
  if (!(audioObj && audioObj.classList.contains(stageObj.audio))) {
    audio(stageObj.audio);
  }
}

// Decides which type of stage requires rendering, and does so
export function renderStage() {
  const stageId = sessionStorage.getItem("stage");
  const stageObj = stage[stageId];
  if (stageObj.type === "story") {
    drawNarrative(stageObj);
    updateAudio()
  } else if (stageObj.type === "title") {
    drawTitle();
    updateAudio()
  } else if (stageObj.type === "character") {
    drawCharacter(stageObj);
    updateAudio()
  } else if (stageObj.type === "battle") {
    drawBattle(stageObj);
    runBattle(stageObj);
    updateAudio()
  }
}

// Sets initial session variables and renders first stage
export function startGame() {
  sessionStorage.setItem("gameIsRunning", true);
  setRandomFirstEnemy();
  sessionStorage.setItem("stage", "prelude");
  readyExitGameListener();
  renderStage();
}

drawTitle();
