// Battle Logic

import { stage } from "./stages.js";
import { choosePlayer } from "./characters.js";
import { progressToGameOverScreen, progressToNextScene } from "./stages.js";
/**
 * Battle.
 *
 */
export class Battle {
  constructor(player, enemy, attackBtn, defendBtn, specialBtn, progressBtn, playerHealthBarId, enemyHealthBarId, updateField) {
    this.player = player;
    this.enemy = enemy;
    this.attackBtn = attackBtn;
    this.defendBtn = defendBtn;
    this.specialBtn = specialBtn;
    this.progressBtn = progressBtn;
    this.playerHealthBarId = playerHealthBarId;
    this.enemyHealthBarId = enemyHealthBarId;
    this.updateField = document.getElementById(updateField);
  }
}

export function runBattle() {
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
    const enemy = stage[sessionStorage.stage].enemy;
    const attackValue = enemy.strength * Math.random();
    player.health -= attackValue;
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
  const player = choosePlayer(sessionStorage.character);
  const attackValue = player.strength;
  const randomiser = Math.ceil(Math.random() * 20);
  const finalAttackValue = attackValue + randomiser;
  enemy.health -= finalAttackValue;
  const enemyHealthBar = document.getElementById("enemy-health");
  enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
  removeBattleListeners();
  setTimeout(takeComputersTurn, 500);
}

function heal() {
  const player = choosePlayer(sessionStorage.character);
  player.health += 250;
  const playerHealthBar = document.getElementById("player-health");
  playerHealthBar.value = (player.health / player.maxHealth) * 100;
  removeBattleListeners();
  setTimeout(takeComputersTurn, 1000);
}

// Remove All Listeners To Await Computers Turn
function removeBattleListeners() {
  const attackButton = document.getElementById("attack");
  const healButton = document.getElementById("heal");
  attackButton.removeEventListener("click", attack);
  healButton.removeEventListener("click", heal);
}

// Add All Listeners To Await Players Turn
function addBattleListeners() {
  const attackButton = document.getElementById("attack");
  const healButton = document.getElementById("heal");
  attackButton.addEventListener("click", attack);
  healButton.addEventListener("click", heal);
}
