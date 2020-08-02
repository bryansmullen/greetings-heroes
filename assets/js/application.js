import { Battle } from "./battle.js";
import { stage } from "./story.js";
import { Player, Enemy } from "./characters.js";
import { audio } from "./audio.js";
let currentStage;
let chosenCharacter;

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
      console.dir(character.action);
      character.action(stage[character.next]);
    });
  });
  return stageToDraw;
}

function drawBattle(stageToDraw) {
  const htmlString = `
  <div class="battle ui-element">
        <div class="battle-arena">
          <div class="battle health">
            <div class="character-stats">
              <p>Player</p>
              <progress class="player-health" value="100" max="100"></progress>
            </div>
            <div class="character-stats">
              <p>Enemy</p>
              <progress id="enemy-health" value="100" max="100"></progress>
            </div>
          </div>
          <div class="battle status">
            <p>${stageToDraw.enemy} attacked!</p>
          </div>
          <div class="battle actions">
            <div class="battle-command attack" id="attack">
              <p>Attack</p>
            </div>
            <div class="battle-command defend" id="defend">
              <p>Defend</p>
            </div>
            <div class="battle-command special" id="special">
              <p>Special</p>
            </div>
          </div>
        </div>
        <div class="button button-text hidden" id="progress">
          Next Scene
        </div>
      </div>
  `;
  document.getElementById("main-content").innerHTML = htmlString;
  const attack = document.getElementById("attack");
  const defend = document.getElementById("defend");
  const special = document.getElementById("special");
  let battle = new Battle(
    new Enemy(stageToDraw.enemy, stageToDraw.enemyStrengh, stageToDraw.enemyDefence, stageToDraw.enemyMagicDefence, stageToDraw.enemyHealth),
    attack,
    defend,
    special,
    "progress",
    "enemy-health"
  );
  battle.run();
  const progress = document.getElementById("progress");
  progress.addEventListener("click", renderToScreen);
}

function renderToScreen(currentStage) {
  // Logic To Render Appropriate Screen Type
  if (currentStage.type == "character") {
    drawCharacter();
    currentStage = stage[currentStage.next];
  } else if (currentStage.type == "story") {
    drawNarrative(currentStage);
    currentStage = stage[currentStage.next];
  } else if (currentStage.type == "battle") {
    drawBattle(currentStage);
    currentStage = stage[currentStage.next];
  } else {
    drawTitle();
    return;
  }
}

const toggleSoundIcon = () => {
  const soundIcon = document.getElementById("toggle-sound");
  if (soundIcon.classList.contains("fa-volume-mute")) {
    soundIcon.classList.remove("fa-volume-mute");
    soundIcon.classList.add("fa-volume-up");
  } else {
    soundIcon.classList.remove("fa-volume-up");
    soundIcon.classList.add("fa-volume-mute");
  }
};
const toggleAudio = () => {
  const audioElement = document.querySelector("audio");
  if (audioElement.muted) {
    audioElement.muted = false;
  } else {
    audioElement.muted = true;
  }
  toggleSoundIcon();
};

export function startGame() {
  // Set Up Game Variables
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
  currentStage = stage["1"];
  renderToScreen(currentStage);
  audio("1m01");
  toggleSoundIcon();
}

const playGame = document.getElementById("play-game");
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
