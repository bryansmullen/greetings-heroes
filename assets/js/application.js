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
function drawNarrative(stageToDraw) {
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
      console.log(choice.action);
    });
  });
  return stageToDraw;
}

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as a title screen
 */
function drawTitle(stageToDraw) {
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
    choiceElement.addEventListener("click", () => {});
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
      choice.action();
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
  console.dir(attack);
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

function drawCharacter() {
  const htmlString = `
  <div id="character-screen" class=" ui-element">
  <div class="character-screen">
    <h2 class="character-heading">Choose Your Hero</h2>
    <div class="character-selection">
      <div id="bjorna" class="character-card bjorna">
        <img src="assets/img/bjorna.png" alt="bjorna" />
        <div class="stats">
          <h3>Bjorna</h3>
          <p>Name: Bjorna</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <h2>Bjorna</h2>
      </div>
      <div id="jayna" class="character-card jayna">
        <img src="assets/img/jayna.png" alt="jayna" />
        <div class="stats">
          <h3>Jayna</h3>
          <p>Name: Jayna</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <h2>Lady Jayna</h2>
      </div>
      <div id="yolo" class="character-card yolo">
        <div class="stats">
          <h3>Yolo</h3>
          <p>Name: Yolo</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <img src="assets/img/yolo.png" alt="yolo" />
        <h2>Yolo</h2>
      </div>
      <div id="zazzerpan" class="character-card zazzerpan">
        <div class="stats">
          <h3>Zazzerpan</h3>
          <p>Name: Zazzerpan</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <img src="assets/img/zazzerpan.png" alt="zazzerpan" />
        <h2>Zazzerpan</h2>
      </div>
    </div>
  </div>
</div>
    `;
  document.getElementById("main-content").innerHTML = htmlString;
  const bjorna = document.getElementById("bjorna");
  const jayna = document.getElementById("jayna");
  const zazzerpan = document.getElementById("zazzerpan");
  const yolo = document.getElementById("yolo");
  bjorna.addEventListener("click", () => {
    chosenCharacter = new Player("Bjorna", 10, 10, 10, 100);
    stage["8"].next = "9b";
    stage["victory"].next = "11b";
    renderToScreen();
  });
  jayna.addEventListener("click", () => {
    chosenCharacter = new Player("Jayna", 10, 10, 10, 100);
    stage["8"].next = "9a";
    stage["victory"].next = "11a";
    renderToScreen();
  });
  zazzerpan.addEventListener("click", () => {
    chosenCharacter = new Player("Zazzerpan", 10, 10, 10, 100);
    stage["8"].next = "9c";
    stage["victory"].next = "11c";
    renderToScreen();
  });
  yolo.addEventListener("click", () => {
    chosenCharacter = new Player("Yolo", 10, 10, 10, 100);
    stage["8"].next = "9d";
    stage["victory"].next = "11d";
    renderToScreen();
  });
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
