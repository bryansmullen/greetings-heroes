// GLOBAL CONSTANTS
const mainContent = document.querySelector("#main-content");

var myAudio = document.createElement("audio");
myAudio.src = "assets/audio/temp-score.mp3";

async function toggle() {
  if (myAudio.paused) {
    await myAudio.play();
    document.getElementById("toggle-sound").innerText = "volume_up";
  } else {
    await myAudio.pause();
    document.getElementById("toggle-sound").innerText = "volume_off";
  }
}

// GLOBAL FUNCTIONS
startGame = (character) => {
  let chosenCharacter = character;
  story.sceneOne();
};

// GAME OBJECT
const game = {
  // TITLE SCREEN METHOD - RESETS GAME TO TITLE SCREEN
  titleScreen() {
    mainContent.innerHTML = `
    <div id="play-game-button" class="button">Play Game</div>
    <div id="instructions-button" class="button">Instructions</div>
    `;
    document
      .querySelector("#play-game-button")
      .addEventListener("click", game.chooseCharacter);

    // THESE INITIALISE HEADER UI
    document
      .getElementById("instructions-button")
      .addEventListener("click", game.information);
    document.getElementById("info").addEventListener("click", game.information);

    document
      .getElementById("exit-game")
      .addEventListener("click", game.titleScreen);

    document.getElementById("toggle-sound").addEventListener("click", toggle);
  },

  // INFORMATION METHOD - DISPLAYS INSTRUCTIONS
  information() {
    mainContent.innerHTML = `
    <h2>Instructions</h2>
      <p>
        The game is played using only the mouse.
      </p>

      <p>
        To begin, click on the "Start Game" button on the main menu. You will be
        brought to the character selection screen
      </p>
      <p>
        You may inspect the attributes of each of the characters by hovering
        over each of them in turn, and when you have decided which character you
        would like to play as, simply click on them to select, and confirm your
        choice.
      </p>
      <p>
        The game will begin, and you may advance through the story by clicking
        the "next" button in the story window. When battles commence you may
        choose from a list of commands - attack, magic, and item.
      </p>
      <p>
        Once you make your selection your character will take their turn, after
        which the computer gets a chance to retaliate. Both the player and the
        computer take it in turns to use a command of their choice until one
        person wins.
      </p>
      <p>
        If the player wins, you will progress through the story until you defeat
        the final enemy.
      </p>
      <div id="return-to-title" class="button">Return To Title Screen</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },

  // CHOOSE CHARACTER - ALLOWS GAME TO BE STARTED WITH CHOICE OF CHARACTER
  chooseCharacter() {
    mainContent.innerHTML = `
    <h2 class="character-heading">Choose Your Hero</h2>
    <div class="character-selection">
      <div class="character-card bjorna">
        <img src="assets/img/bjorna.png" alt="bjorna" />
        <div class="stats">
        <h3>Bjorna</h3>
          <p>Name: Bjorna</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <h2>Bjorna</h2>
      </div>
      <div class="character-card jayna">
        <img src="assets/img/jayna.png" alt="jayna" />
        <div class="stats">
        <h3>Jayna</h3>
          <p>Name: Jayna</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <h2>Lady Jayna</h2>
      </div>
      <div class="character-card yolo">
      <div class="stats">
          <h3>Yolo</h3>
          <p>Name: Yolo</p>
          <p>Strength: 100</p>
          <p>Health: 200</p>
        </div>
        <img src="assets/img/yolo.png" alt="yolo" />
        <h2>Yolo</h2>
      </div>
      <div class="character-card zazzerpan">
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
    `;
    const bjorna = document.querySelector(".character-card.bjorna");
    const jayna = document.querySelector(".character-card.jayna");
    const yolo = document.querySelector(".character-card.yolo");
    const zazzerpan = document.querySelector(".character-card.zazzerpan");
    bjorna.addEventListener("click", startGame.bind(null, bjorna));
    jayna.addEventListener("click", startGame.bind(null, bjorna));
    yolo.addEventListener("click", startGame.bind(null, bjorna));
    zazzerpan.addEventListener("click", startGame.bind(null, bjorna));
  },
};

// BATTLE OBJECT - DISPLAYS BATTLE UI
battle = {
  firstEnemy() {
    mainContent.innerHTML = `<h2>This will be the battle screen with enemy 1</h2>
    <div>The UI Will Go Here</div>
    <div id="next-scene" class="button">Next Scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneFour);
  },
  secondEnemy() {
    mainContent.innerHTML = `<h2>This will be the battle screen with enemy 2</h2>
    <div>The UI Will Go Here</div>
    <div id="next-scene" class="button">Next Scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneEight);
  },
  thirdEnemy() {
    mainContent.innerHTML = `<h2>This will be the battle screen with enemy 3</h2>
    <div>The UI Will Go Here</div>
    <div id="next-scene" class="button">Next Scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.finalScene);
  },
};

// STORY OBJECT - DISPLAYS NARRATIVE TO SCREEN
const story = {
  sceneOne() {
    mainContent.innerHTML = `<p class="story">A dread shadow stalks the land! Arch-Wizard Valderak, freed from his timeless prison, has come to wreak vengeance on the people of The Four Kingdoms.
    </p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneTwo);
  },
  sceneTwo() {
    mainContent.innerHTML = `<p class="story">
    From his tower deep in the Forest of Poison, he plots a terrible revenge.
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneThree);
  },
  sceneThree() {
    mainContent.innerHTML = `<p class="story">
    Four heroes, the greatest from each of the Kingdoms, have been sent to thwart the schemes of the Arch-Wizard and restore peace to the land.</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", battle.firstEnemy);
  },
  sceneFour() {
    mainContent.innerHTML = `<p class="story">You and your party make your through the Forest of Poison, through foul waters and rotting trees. 
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneFive);
  },
  sceneFive() {
    mainContent.innerHTML = `<p class="story">Before you, rising like a thorn from the putrid mire, stands the dark tower of Valderak, its arched windows filled with the green fire of his baleful magics.
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneSix);
  },
  sceneSix() {
    mainContent.innerHTML = `<p class="story">You step inside the echoing tower and encounter the first of line of Valderak's defenses - the people of the forest, now corrupted by Valderak.
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", battle.secondEnemy);
  },
  sceneSeven() {
    mainContent.innerHTML = `<p class="story">Defeating the forest folk, you are able to free them from the influence of Valderak. Before fleeing the terrible tower they give you the key to the upper floors. Ascending the winding stairs your ears pick up a harsh, clanking sound. There is smoke on the air. Opening a door to an upper chamber, you encounter Valderak's lieutenant, an Engine of Chaos.
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneFour);
  },
  sceneEight() {
    mainContent.innerHTML = `<p class="story">The Engine of Chaos is destroyed and from its wreckage you pluck the source of its power, a Gem of Annihilation.
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneNine);
  },
  sceneNine() {
    mainContent.innerHTML = `<p class="story">Using it you dispel the wards and magics protecting the inner sanctum of Valderak, allowing you to enter the lair of the Arch-Wizard. 
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneTen);
  },
  sceneTen() {
    mainContent.innerHTML = `<p class="story">You find him, hunched and wizened over his scrying table. 
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneEleven);
  },
  sceneEleven() {
    mainContent.innerHTML = `<p class="story">With a screech of disgust he conjures his Poison Blade, and with one final curse on the Four Kingdoms, launches himself at you.
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", story.sceneTwelve);
  },
  sceneTwelve() {
    mainContent.innerHTML = `<p class="story">Battle is joined.
</p>
    <div id="next-scene" class="button">Progress to next scene</div>
    `;
    document
      .getElementById("next-scene")
      .addEventListener("click", battle.thirdEnemy);
  },
  finalScene() {
    mainContent.innerHTML = `<h2>This is the Final Scene</h2> 
    <div id="victory" class="button">Victory</div>
    <div id="game-over" class="button">Game Over</div>
    `;
    document
      .getElementById("victory")
      .addEventListener("click", story.victoryOne);
    document
      .getElementById("game-over")
      .addEventListener("click", story.gameOverOne);
  },
  gameOverOne() {
    mainContent.innerHTML = `<h2>Game Over</h2> 
    <p class="story">All your valour, all your bravery, was for naught.
</p>
    <div id="return-to-title" class="button">Progress To Next Scene</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.gameOverTwo);
  },
  gameOverTwo() {
    mainContent.innerHTML = `<h2>Game Over</h2> 
    <p class="story">You have been vanquished.
</p>
    <div id="return-to-title" class="button">Progress To Next Scene</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.gameOverThree);
  },
  gameOverThree() {
    mainContent.innerHTML = `<h2>Game Over</h2> 
    <p class="story">It is a dark day for the Four Kingdoms as its greatest champions lie defeated, but there will be many dark days ahead, for now nothing stands in the way of Valderak's final victory.
</p>
    <div id="return-to-title" class="button">Progress To Next Scene</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.gameOverFour);
  },
  gameOverFour() {
    mainContent.innerHTML = `<h2>Game Over</h2> 
    <p class="story">All is lost.
</p>
    <div id="return-to-title" class="button">Return To Title Screen</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },
  victoryOne() {
    mainContent.innerHTML = `<h2>You Won!</h2> 
    <p class="story">With a blood-curdling scream, the magics holding the Arch-Wizard together are sundered for good- in a great rush of cold green fire, the body falls, nothing more than a few rags and bones. The dark tower begins to shudder beneath your feet - without Valderak to maintain it, it is beginning to sink into the swamp.
</p>
    <div id="return-to-title" class="button">Progress To Next Scene</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.victoryTwo);
  },
  victoryTwo() {
    mainContent.innerHTML = `<h2>You Won!</h2> 
    <p class="story">You fly for the exit, escaping just in time to see the sharp roof sink beneath the waters. 
</p>
    <div id="return-to-title" class="button">Progress To Next Scene</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", story.victoryThree);
  },
  victoryThree() {
    mainContent.innerHTML = `<h2>You Won!</h2> 
    <p class="story">The stain on the landscape, the blight on the Four Kingdoms, Valderak the Arch-Wizard is no more.
</p>
    <div id="return-to-title" class="button">Return To Title Screen</div>
    `;
    document
      .getElementById("return-to-title")
      .addEventListener("click", game.titleScreen);
  },
};

game.titleScreen();
