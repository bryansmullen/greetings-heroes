import { stage } from "./stages.js";
import { choosePlayer } from "./characters.js";

export function drawBattle(stageObj) {
  // Set Up Container and Injector
  const injector = document.createElement("div");
  const container = document.createElement("div");
  container.classList.add("ui-element", "battle");

  const battleArena = document.createElement("div");
  battleArena.classList.add("battle-arena");

  // Draw Health Section
  const health = document.createElement("div");
  const playerStats = document.createElement("div");
  const playerHeading = document.createElement("p");
  const playerHealthBar = document.createElement("progress");
  const enemyStats = document.createElement("div");
  const enemyHeading = document.createElement("p");
  const enemyHealthBar = document.createElement("progress");

  // Configure Health Section
  health.classList.add("battle", "health");
  playerStats.classList.add("character-stats");
  playerHeading.innerText = "Player";
  playerHealthBar.id = "player-health";
  const player = choosePlayer(sessionStorage.character);
  const playerHealthPercentage = (player.health / player.maxHealth) * 100;
  playerHealthBar.value = playerHealthPercentage;

  playerHealthBar.max = 100;
  enemyStats.classList.add("character-stats");
  enemyHeading.innerText = "Enemy";
  enemyHealthBar.id = "enemy-health";
  enemyHealthBar.value = 100;
  enemyHealthBar.max = 100;

  // Append Health Section
  playerStats.append(playerHeading, playerHealthBar);
  enemyStats.append(enemyHeading, enemyHealthBar);
  health.append(playerStats, enemyStats);

  // Draw Status Section
  const status = document.createElement("div");
  const battleUpdate = document.createElement("p");

  // Configure Status Section
  status.classList.add("battle", "status");
  battleUpdate.innerText = `${stageObj.enemy.name} attacked!`;
  battleUpdate.id = "battle-update";

  // Append Status Section
  status.append(battleUpdate);

  // Draw Actions Section
  const actions = document.createElement("div");
  const attack = document.createElement("div");
  const special = document.createElement("div");

  // Configure Actions Section
  actions.classList.add("battle", "actions");
  attack.classList.add("battle-command", "attack");
  special.classList.add("battle-command", "heal");
  attack.id = "attack";
  special.id = "heal";
  const attackText = document.createElement("p");
  const specialText = document.createElement("p");
  attackText.innerText = "Attack";
  specialText.innerText = "Heal";

  // Append Actions Section
  attack.append(attackText);
  special.append(specialText);

  actions.append(attack, special);
  battleArena.append(health, status, actions);
  container.append(battleArena);
  injector.append(container);
  // Inject Content
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;
}
