import { progressToNextScene, setRandomFirstEnemy, stage, progressToGameOverScreen } from "./stages.js";
import { drawTitle, drawConfirmExit } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";
import { drawNarrative } from "./drawNarrative.js";
import { drawCharacter } from "./drawCharacter.js";
import { drawBattle } from "./drawBattle.js";
import { choosePlayer } from "./characters.js";
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
  const player = choosePlayer(sessionStorage.character);
  if (stageObj.enemy.health <= 0) {
    progressToNextScene();
  } else {
    player.health -= 30;
    const playerHealthBar = document.getElementById("player-health");
    playerHealthBar.value = (player.health / player.maxHealth) * 100;
    if (player.health <= 0) {
      setTimeout(progressToGameOverScreen, 500);
    } else {
      runBattle();
    }
  }
}
// Possible Player Actions
function attack() {
  const enemy = stage[sessionStorage.stage].enemy;
  enemy.health -= 20;
  const enemyHealthBar = document.getElementById("enemy-health");
  enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
  removeBattleListeners();
  setTimeout(takeComputersTurn, 500);
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
