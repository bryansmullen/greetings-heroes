import { Battle } from "./battle.js";
import { stage } from "./story.js";
import { Player, Enemy } from "./characters.js";
import { audio, toggleSound } from "./audio.js";
let currentStage;
let chosenCharacter;
let audioPlaying;
let volumeOn = true;

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as a story screen
 */
export function drawNarrative(stageToDraw) {
  const injector = document.createElement("div");
  const container = document.createElement("div");
  container.classList.add("ui-element", "story");
  const text = document.createElement("p");
  text.id = "story";
  text.innerText = stageToDraw.text;
  const choices = stageToDraw.choices;

  container.appendChild(text);
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("button", "button-text");
    choiceElement.innerText = choice.text;
    main.firstChild.appendChild(choiceElement);
    choiceElement.addEventListener("click", () => {
      choice.action(stage[choice.next]);
    });
  });
  if (audioPlaying != stageToDraw.audio && volumeOn) {
    audio(stageToDraw.audio);
    audioPlaying = stageToDraw.audio;
    // toggleSoundIcon();
  }
  return stageToDraw;
}

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as a title screen
 */
export function drawTitle(stageToDraw = "title") {
  const injector = document.createElement("div");
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  heading.innerText = stageToDraw.text;
  container.classList.add("ui-element", "title");

  const choices = stageToDraw.choices;
  container.appendChild(heading);
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("button", "button-text");
    choiceElement.innerText = choice.text;
    main.firstChild.appendChild(choiceElement);
    choiceElement.addEventListener("click", () => {
      choice.action(stage[choice.next]);
    });
  });

  return stageToDraw;
}

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an instructionsT screen
 */
export function drawInstructions(stageToDraw = stage["instructions"]) {
  const injector = document.createElement("div");
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  heading.innerText = stageToDraw.text;
  container.classList.add("ui-element", "instructions");
  container.appendChild(heading);

  const paragraphs = stageToDraw.paragraphs;
  paragraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = paragraph;
    container.appendChild(paragraphElement);
  });

  const choices = stageToDraw.choices;
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("button", "button-text");
    choiceElement.innerText = choice.text;
    main.firstChild.appendChild(choiceElement);
    choiceElement.addEventListener("click", () => {
      choice.action(stage[choice.next]);
    });
  });
  return stageToDraw;
}

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an character screen
 */
export function drawCharacter(stageToDraw = stage["character"]) {
  const injector = document.createElement("div");
  let container = document.createElement("div");
  container.classList.add("ui-element", "character");
  const heading = document.createElement("h2");
  heading.classList.add("character-heading");
  heading.innerText = stageToDraw.text;
  container.appendChild(heading);

  const characterContainer = document.createElement("div");
  characterContainer.classList.add("character-selection");

  const characters = stageToDraw.characters;
  container.append(characterContainer);
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");
    const characterHeading = document.createElement("h3");
    characterHeading.innerText = character.name;
    const characterImage = document.createElement("img");
    characterImage.src = character.imagePath;
    characterCard.append(characterHeading);
    characterCard.append(characterImage);
    characterContainer.append(characterCard);
    let container = document.querySelector(".character-selection");
    container.appendChild(characterCard);
    characterCard.addEventListener("click", () => {
      character.action(stage[character.next]);
      chosenCharacter = new Player(character.name, 10, 10, 10, 100);
    });
  });
  setGameVariables();
  return stageToDraw;
}

export function drawBattle(stageToDraw, enemy) {
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
  playerHealthBar.value = 100;
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
  battleUpdate.innerText = `${stageToDraw.enemy} attacked!`;
  battleUpdate.id = "battle-update";

  // Append Status Section
  status.append(battleUpdate);

  // Draw Actions Section
  const actions = document.createElement("div");
  const attack = document.createElement("div");
  const defend = document.createElement("div");
  const special = document.createElement("div");

  // Configure Actions Section
  actions.classList.add("battle", "actions");
  attack.classList.add("battle-command", "attack");
  defend.classList.add("battle-command", "defend");
  special.classList.add("battle-command", "special");
  attack.id = "attack";
  defend.id = "defend";
  special.id = "special";
  const attackText = document.createElement("p");
  const defendText = document.createElement("p");
  const specialText = document.createElement("p");
  attackText.innerText = "Attack";
  defendText.innerText = "Defend";
  specialText.innerText = "Special";

  // Append Actions Section
  attack.append(attackText);
  defend.append(defendText);
  special.append(specialText);

  actions.append(attack, defend, special);
  battleArena.append(health, status, actions);
  container.append(battleArena);
  injector.append(container);
  // Inject Content
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  // Set Up Progress Button
  const choices = stageToDraw["choices"];
  choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("button", "button-text", "hidden");
    choiceElement.id = choice.id;
    choiceElement.innerText = choice.text;
    main.firstChild.appendChild(choiceElement);
    choiceElement.addEventListener("click", () => {
      choice.action(stage[choice.next]);
    });
  });

  // Grab Screen Controls
  const attackBtn = document.getElementById("attack");
  const defendBtn = document.getElementById("defend");
  const specialBtn = document.getElementById("special");

  // Set Up Battle
  let battle = new Battle(
    chosenCharacter,
    new Enemy(stageToDraw.enemy, stageToDraw.enemyStrengh, stageToDraw.enemyDefence, stageToDraw.enemyMagicDefence, stageToDraw.enemyHealth),
    attackBtn,
    defendBtn,
    specialBtn,
    "progress",
    "player-health",
    "enemy-health",
    "battle-update"
  );

  battle.run();
  if (audioPlaying != stageToDraw.audio) {
    audio(stageToDraw.audio);
    audioPlaying = stageToDraw.audio;
  }
  return stageToDraw;
}

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
