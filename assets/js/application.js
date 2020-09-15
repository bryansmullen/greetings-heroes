import { setRandomFirstEnemy, stage } from "./stages.js";
import { drawTitle, drawConfirmExit } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";
import { drawNarrative } from "./drawNarrative.js";
import { drawCharacter } from "./drawCharacter.js";
import { drawBattle } from "./drawBattle.js";
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

export function startGame() {
  sessionStorage.setItem("gameIsRunning", true);
  setRandomFirstEnemy();
  sessionStorage.setItem("stage", "prelude");
  readyExitGameListener();
  renderStage();
}

drawTitle();
