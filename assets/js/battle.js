import { stage } from "./stages.js";
import { choosePlayer } from "./characters.js";
import { progressToGameOverScreen, progressToNextScene } from "./stages.js";
import { sfx } from "./audio.js"

/**
 * Battle class
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

// Await Players Choice. Triggers next function but left in to allow additional functionality
export function runBattle() {
  takePlayerTurn();
}

// Wire up event listeners for players choice
function takePlayerTurn() {
  addBattleListeners();
}

// Enemy attacks after short delay. Update health evaluate whether to progress, game over or loop
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

// Function for player to attack. Update health, remove listeners and trigger computers turn
function attack() {
  const enemy = stage[sessionStorage.stage].enemy;
  const player = choosePlayer(sessionStorage.character);
  const attackValue = player.strength;
  const randomiser = Math.ceil(Math.random() * 20);
  const finalAttackValue = attackValue + randomiser;
  enemy.health -= finalAttackValue;
  const enemyHealthBar = document.getElementById("enemy-health");
  enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
  sfx('attack')
  removeBattleListeners();
  setTimeout(takeComputersTurn, 500);
}

// Function for player to heal. Update health, remove listeners and trigger computers turn
function heal() {
  const player = choosePlayer(sessionStorage.character);
  const playerHealthDiff = player.maxHealth - player.health;
  if (playerHealthDiff >= 250) {
    player.health += 250;
  } else {
    player.health = player.maxHealth;
  }
  const playerHealthBar = document.getElementById("player-health");
  playerHealthBar.value = (player.health / player.maxHealth) * 100;
  sfx('heal')
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
