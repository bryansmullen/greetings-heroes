import { progressToNextScene, setRandomFirstEnemy, stage } from "./stages.js";
import { drawTitle, drawConfirmExit } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";
import { drawNarrative } from "./drawNarrative.js";
import { drawCharacter } from "./drawCharacter.js";
import { drawBattle } from "./drawBattle.js";

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
    drawCharacter(stageObj);
  } else if (stageObj.type === "battle") {
    drawBattle(stageObj);
    runBattle(stageObj);
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

function runBattle() {
  console.log("Battle!");
  takePlayerTurn();
}

function takePlayerTurn() {
  addBattleListeners();
}

function takeComputersTurn() {
  const stageObj = stage[sessionStorage.stage];
  if (stageObj.enemy.health <= 0) {
    progressToNextScene();
  } else {
    console.log("computer attacked");
    runBattle();
  }
}
// Possible Player Actions
function attack() {
  const enemy = stage[sessionStorage.stage].enemy;
  enemy.health -= 60;
  console.dir(enemy);
  removeBattleListeners();
  setTimeout(takeComputersTurn, 1000);
}
function defend() {
  console.log("player defended!");
  removeBattleListeners();
  setTimeout(takeComputersTurn, 1000);
}

function heal() {
  console.log("player healed!");
  removeBattleListeners();
  setTimeout(takeComputersTurn, 1000);
}

// Remove All Listeners To Await Computers Turn
function removeBattleListeners() {
  const attackButton = document.getElementById("attack");
  const defendButton = document.getElementById("defend");
  const healButton = document.getElementById("heal");
  attackButton.removeEventListener("click", attack);
  defendButton.removeEventListener("click", defend);
  healButton.removeEventListener("click", heal);
}

// Add All Listeners To Await Players Turn
function addBattleListeners() {
  const attackButton = document.getElementById("attack");
  const defendButton = document.getElementById("defend");
  const healButton = document.getElementById("heal");
  attackButton.addEventListener("click", attack);
  defendButton.addEventListener("click", defend);
  healButton.addEventListener("click", heal);
}
