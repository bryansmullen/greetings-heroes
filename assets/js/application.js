import { stage } from "./stages.js";
import { drawTitle } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";
import { drawNarrative } from "./drawNarrative.js";
// Sound Event Listener
// const soundIcon = document.getElementById("toggle-sound");
// soundIcon.addEventListener("click", toggleSound);

// Exit Game Event Listeners
const exitGame = document.getElementById("exit");
exitGame.addEventListener("click", () => {
  drawTitle();
});

// Info Event Listener
const info = document.getElementById("info-button");
info.addEventListener("click", () => {
  drawInstructions();
});

export function renderStage() {
  const stageId = sessionStorage.getItem("stage");
  const stageObj = stage[stageId];
  if (stageObj.type === "story") {
    console.log("story screen");
    drawNarrative(stageObj);
    console.log(sessionStorage);
  } else if (stageObj.type === "title") {
    console.log("title screen");
    drawTitle();
    console.log(sessionStorage);
  } else {
    console.log("somethingelse");
  }
}

export function startGame() {
  sessionStorage.setItem("gameIsRunning", true);
  sessionStorage.setItem("randomiser", Math.ceil(Math.random() * 3));
  sessionStorage.setItem("stage", "prelude");
  console.log("startGame");
  renderStage();
}

drawTitle();
