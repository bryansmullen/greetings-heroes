import { Game } from "./game.js";
import { Player, Enemy, Battle } from "./battle.js";
import { stage } from "./story.js";
let currentStage;
let chosenCharacter;

function drawNarrative(stageToDraw) {
  if (stageToDraw.choices) {
    const htmlString = `
    <div class="ui-element story">
    <p id="story">${stageToDraw.text}</p>
    <div id="choice1" class="button button-text">
    ${stageToDraw.choices[0].text}
    </div><div id="choice2" class="button button-text">
    ${stageToDraw.choices[1].text}
    </div><div id="choice3" class="button button-text">
    ${stageToDraw.choices[2].text}
    </div>
    </div>;
    `;
    document.getElementById("main-content").innerHTML = htmlString;
    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");
    const choice3 = document.getElementById("choice3");
    choice1.addEventListener("click", () => {
      currentStage = stage[stageToDraw.choices[0].action];
      stage["battle2"].next = "7a";
      renderToScreen();
    });
    choice2.addEventListener("click", () => {
      currentStage = stage[stageToDraw.choices[1].action];
      stage["battle2"].next = "7b";
      renderToScreen();
    });
    choice3.addEventListener("click", () => {
      currentStage = stage[stageToDraw.choices[2].action];
      stage["battle2"].next = "7c";
      renderToScreen();
    });
  } else {
    const htmlString = `
    <div class="ui-element story">
    <p id="story">${stageToDraw.text}</p>
    <div id="progress" class="button button-text">
    Progress To Next Scene
    </div>
    </div>;
    `;
    document.getElementById("main-content").innerHTML = htmlString;
    const progress = document.getElementById("progress");
    progress.addEventListener("click", renderToScreen);
  }
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

function drawTitle() {
  const htmlString = `
  <div id="title-screen" class="ui-element">
  <h2>Greetings Heroes</h2>
  <div id="play-game" class="button button-text">Play Game</div>
  <div id="instructions-button" class="button button-text">
    Instructions
  </div>
</div>
  `;
  document.getElementById("main-content").innerHTML = htmlString;
  const playGame = document.getElementById("play-game");

  playGame.addEventListener("click", startGame);
}

function renderToScreen() {
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

function startGame() {
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
  currentStage = stage["character"];
  renderToScreen();
}
const playGame = document.getElementById("play-game");

playGame.addEventListener("click", startGame);
