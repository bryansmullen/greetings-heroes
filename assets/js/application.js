import { setRandomFirstEnemy, stage } from "./stages.js";
import { drawTitle, drawConfirmExit } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";
import { drawNarrative } from "./drawNarrative.js";
import { drawCharacter } from "./drawCharacter.js";
// Sound Event Listener
// const soundIcon = document.getElementById("toggle-sound");
// soundIcon.addEventListener("click", toggleSound);

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

export function renderStage() {
  const stageId = sessionStorage.getItem("stage");
  const stageObj = stage[stageId];
  if (stageObj.type === "story") {
    drawNarrative(stageObj);
  } else if (stageObj.type === "title") {
    drawTitle();
  } else if (stageObj.type === "character") {
    console.dir(stageObj);
    drawCharacter(stageObj);
  } else {
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
