import { audio } from "./audio.js";
import { updateUi, listen, updateAndListen } from "./utility.js";
import { Player, Enemy } from "./battle.js";

const attack = function (enemy) {
  enemy.health -= this.character.strength;
};

const updateEnemyHealth = function (enemy) {
  enemyHealth = document.getElementById(`${enemy}-health`);
  enemyHealth.value = (enemy.health / enemy.maxHealth) * 100;
};


// THIS SECTION IS WORK IN PROGRESS - ATTEMPTING TO ABSTRACT BATTLE 1A INTO REUSABLE CLASS =================================================
class Battle {
  constructor(attackBtn, defendBtn, specialBtn) {
    this.attackBtn = attackBtn;
    this.defendBtn = defendBtn;
    this.specialBtn = specialBtn;
  }
  updateHealth() {
    this.health -= 10;
  }
  initialiseBattleCommand(attackButton, defendButton, specialButton) {
    const attackBtn = document.getElementById(attackButton);
    const defendBtn = document.getElementById(defendButton);
    const specialBtn = document.getElementById(specialButton);
    attackBtn.addEventListener("click", () => {
      battle.playerMove(enemy1, "forest-people-health", "attack");
      checkHealth();
    });
    defendBtn.addEventListener("click", () => {
      battle.playerMove(enemy1, "forest-people-health", "attack");
      checkHealth();
    });
    specialBtn.addEventListener("click", () => {
      battle.playerMove(enemy1, "forest-people-health", "attack");
      checkHealth();
    });
  }
  playerMove = function (enemy, enemyHealthBar, choice) {
    switch (choice) {
      case "attack":
        enemy.health -= 10;
        console.dir(enemy1);
        enemyHealthBar = document.getElementById(enemyHealthBarId);
        enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
        break;
      case "defend":
        console.log("defend");
        break;
      case "special":
        console.log("special");
        break;
    }
  };
  checkHealth = function (stageToProceedToId) {
    if (enemy.health <= 0) {
      const stageToProceedTo = document.getElementById(stageToProceedToId);
      stageToProceedTo.classList.remove("hidden");
    }
  };
  battle.initialiseBattleCommand("battle-1a-attack", "battle-1a-defend", "battle-1a-special");

}




export class Game {
  constructor() {
    this.character = undefined;
  }
  // updateHealth() {
  //   this.health -= 10;
  // }
  // initialiseBattleCommand(attackButton, defendButton, specialButton) {
  //   const attackBtn = document.getElementById(attackButton);
  //   const defendBtn = document.getElementById(defendButton);
  //   const specialBtn = document.getElementById(specialButton);
  // }

  toggleSoundIcon() {
    const soundIcon = document.getElementById("toggle-sound");
    if (soundIcon.classList.contains("fa-volume-mute")) {
      soundIcon.classList.remove("fa-volume-mute");
      soundIcon.classList.add("fa-volume-up");
    } else {
      soundIcon.classList.remove("fa-volume-up");
      soundIcon.classList.add("fa-volume-mute");
    }
  }
  toggleAudio() {
    const audio = document.querySelector("audio");
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    this.toggleSoundIcon();
  }
  titleScreen() {
    updateUi("title-screen");
    listen("play-game-button", this.prelude.bind(this));
    listen("exit-game", this.titleScreen.bind(this));
    listen("instructions-button", this.instructionsScreen.bind(this));
    listen("info-button", this.instructionsScreen.bind(this));
  }
  instructionsScreen() {
    updateAndListen("instructions-screen", "return-to-title", this.titleScreen.bind(this));
  }

  chooseCharacter() {
    audio.play("1m01");
    this.toggleSoundIcon();
    updateUi("character-screen");
    listen("bjorna", this.bjorna.bind(this));
    listen("jayna", this.jayna.bind(this));
    listen("zazzerpan", this.zazzerpan.bind(this));
    listen("yolo", this.yolo.bind(this));
  }
  bjorna() {
    this.character = new Player("Bjorna", 20, 20, 20, 200);
    updateAndListen("choose-bjorna", "bjorna-progress", this.stage1.bind(this));
    console.log(this.character);
  }
  jayna() {
    this.character = new Player("Jayna", 20, 20, 20, 200);
    updateAndListen("choose-jayna", "jayna-progress", this.stage1.bind(this));
    console.log(this.character);
  }
  yolo() {
    this.character = new Player("Yolo", 20, 20, 20, 200);
    updateAndListen("choose-yolo", "yolo-progress", this.stage1.bind(this));
    console.log(this.character);
  }
  zazzerpan() {
    this.character = new Player("Zazzerpan", 20, 20, 20, 200);
    updateAndListen("choose-zazzerpan", "zazzerpan-progress", this.stage1.bind(this));
    console.log(this.character);
  }

  prelude() {
    updateAndListen("prelude", "prelude-progress", this.chooseCharacter.bind(this));
  }

  stage1() {
    const diceRoll = Math.ceil(Math.random() * 3);
    updateAndListen("first-story", "scene-one-progress", this.stage2.bind(this), diceRoll);
  }
  stage2(diceRoll) {
    switch (diceRoll) {
      case 1:
        updateAndListen("second-story-a", "scene-two-a-progress", this.battle1.bind(this), "forest-people");
        break;
      case 2:
        updateAndListen("second-story-b", "scene-two-b-progress", this.battle1.bind(this), "melwunt-tribe");
        break;
      default:
        updateAndListen("second-story-c", "scene-two-c-progress", this.battle1.bind(this), "wretched-dead");
        break;
    }
  }






// THIS SECTION IS WORK IN PROGRESS - ATTEMPTING TO ABSTRACT BATTLE 1A INTO REUSABLE CLASS =================================================
battle1(enemy) {
    let enemy1 = new Enemy(enemy, 10, 10, 10, 100);
    let battle = new Battle();
    this.character.health -= 10;
    console.dir(this.character);
    console.dir(this.character);

    let enemy1Health;
    let checkHealth;
    let playerMove;
    switch (enemy) {
      case "forest-people":
        let forestBattle = new Battle();
        forestBattle.run();
        // const attack1a = document.getElementById();
        // const defend1a = document.getElementById();
        // const special1a = document.getElementById();

        // playerMove = function (choice) {
        //   switch (choice) {
        //     case "attack":
        //       enemy1.health -= 10;
        //       console.dir(enemy1);
        //       enemy1Health = document.getElementById("forest-people-health");
        //       enemy1Health.value = (enemy1.health / enemy1.maxHealth) * 100;
        //       break;
        //     case "defend":
        //       console.log("defend");
        //       break;
        //     case "special":
        //       console.log("special");
        //       break;
        //   }
        // };
        // checkHealth = function () {
        //   if (enemy1.health <= 0) {
        //     const proceedToStage3 = document.getElementById("battle-one-progress-a");
        //     proceedToStage3.classList.remove("hidden");
        //   }
        // };

        updateAndListen("battle-forest", "battle-one-progress-a", this.stage3.bind(this), "a");

        break;


//  END SECTION BEING ABSTRACTED, BUT CONTINUES WITH SWITCH ========================================================================================================

      case "melwunt-tribe":
        console.log(enemy);
        this.initialiseBattleCommand("battle-1b-attack", "battle-1b-defend", "battle-1b-special");

        // const attack1b = document.getElementById("battle-1b-attack");
        // const defend1b = document.getElementById("battle-1b-defend");
        // const special1b = document.getElementById("battle-1b-special");
        checkHealth = function () {
          if (enemy1.health <= 0) {
            const proceedToStage3 = document.getElementById("battle-one-progress-b");
            proceedToStage3.classList.remove("hidden");
          }
        };
        playerMove = function (choice) {
          switch (choice) {
            case "attack":
              enemy1.health -= 10;
              console.dir(enemy1);
              enemy1Health = document.getElementById("melwunt-tribe-health");
              enemy1Health.value = (enemy1.health / enemy1.maxHealth) * 100;
              break;
            case "defend":
              console.log("defend");
              break;
            case "special":
              console.log("special");
              break;
          }
        };
        attack1b.addEventListener("click", () => {
          playerMove("attack");
          checkHealth();
        });
        defend1b.addEventListener("click", () => {
          playerMove("defend");
          checkHealth();
        });
        special1b.addEventListener("click", () => {
          playerMove("special");
          checkHealth();
        });
        updateAndListen("battle-melwunt", "battle-one-progress-b", this.stage3.bind(this), "b");

        break;
      case "wretched-dead":
        console.log(enemy);
        this.initialiseBattleCommand("battle-1c-attack", "battle-1c-defend", "battle-1c-special");

        // const attack1c = document.getElementById("battle-1c-attack");
        // const defend1c = document.getElementById("battle-1c-defend");
        // const special1c = document.getElementById("battle-1c-special");
        checkHealth = function () {
          if (enemy1.health <= 0) {
            const proceedToStage3 = document.getElementById("battle-one-progress-c");
            proceedToStage3.classList.remove("hidden");
          }
        };
        playerMove = function (choice) {
          switch (choice) {
            case "attack":
              enemy1.health -= 10;
              console.dir(enemy1);
              enemy1Health = document.getElementById("wretched-dead-health");
              enemy1Health.value = (enemy1.health / enemy1.maxHealth) * 100;
              break;
            case "defend":
              console.log("defend");
              break;
            case "special":
              console.log("special");
              break;
          }
        };
        attackBtn.addEventListener("click", () => {
          playerMove("attack");
          checkHealth();
        });
        defendBtn.addEventListener("click", () => {
          playerMove("defend");
          checkHealth();
        });
        specialBtn.addEventListener("click", () => {
          playerMove("special");
          checkHealth();
        });
        updateAndListen("battle-wretcheddead", "battle-one-progress-c", this.stage3.bind(this), "c");
        break;
    }
  }



  //  END SWITCH  ========================================================================================================

  stage3(enemyDefeated) {
    audio.play("1m02");

    const reward = Math.ceil(Math.random() * 3);
    switch (enemyDefeated) {
      case "a":
        updateAndListen("third-story-a", "scene-three-a-progress", this.stage4.bind(this), reward);
        break;
      case "b":
        updateAndListen("third-story-b", "scene-three-b-progress", this.stage4.bind(this), reward);
        break;
      case "c":
        updateAndListen("third-story-c", "scene-three-c-progress", this.stage4.bind(this), reward);
        break;
    }
  }
  stage4(reward) {
    switch (reward) {
      case 1:
        updateAndListen("fourth-story-a", "scene-four-progress-a", this.stage5.bind(this));
        break;
      case 2:
        updateAndListen("fourth-story-b", "scene-four-progress-b", this.stage5.bind(this));
        break;
      case 3:
        updateAndListen("fourth-story-c", "scene-four-progress-c", this.stage5.bind(this));
        break;
    }
  }
  stage5() {
    updateUi("fifth-story");
    document.getElementById("scene-five-progress-a").addEventListener("click", () => {
      this.stage6("ruby");
    });
    document.getElementById("scene-five-progress-b").addEventListener("click", () => {
      this.stage6("aquamarine");
    });
    document.getElementById("scene-five-progress-c").addEventListener("click", () => {
      this.stage6("topaz");
    });
  }
  stage6(doorChoice) {
    switch (doorChoice) {
      case "ruby":
        updateAndListen("sixth-story-a", "scene-six-progress-a", this.battle2.bind(this), "ruby");
        break;
      case "aquamarine":
        updateAndListen("sixth-story-b", "scene-six-progress-b", this.battle2.bind(this), "aquamarine");
        break;
      case "topaz":
        updateAndListen("sixth-story-c", "scene-six-progress-c", this.battle2.bind(this), "topaz");
        break;
    }
  }
  battle2(doorChoice) {
    updateUi("battle-two");

    let enemy2;
    switch (doorChoice) {
      case "ruby":
        enemy2 = new Enemy("The Engine Of Chaos - Fire", 10, 10, 10, 100);
        break;
      case "aquamarine":
        enemy2 = new Enemy("The Engine Of Chaos - Water", 10, 10, 10, 100);

        break;
      case "topaz":
        enemy2 = new Enemy("The Engine Of Chaos - Lightning", 10, 10, 10, 100);
        break;
    }
    let enemy2Health;
    let checkHealth;
    let playerMove;
    const attack2 = document.getElementById("battle-2-attack");
    const defend2 = document.getElementById("battle-2-defend");
    const special2 = document.getElementById("battle-2-special");
    checkHealth = function () {
      if (enemy2.health <= 0) {
        const proceedToStage7 = document.getElementById("battle-two-progress");
        proceedToStage7.classList.remove("hidden");
      }
    };
    playerMove = function (choice) {
      switch (choice) {
        case "attack":
          enemy2.health -= 10;
          console.dir(enemy2);
          enemy2Health = document.getElementById("engine-of-chaos-health");
          enemy2Health.value = (enemy2.health / enemy2.maxHealth) * 100;
          break;
        case "defend":
          console.log("defend");
          break;
        case "special":
          console.log("special");
          break;
      }
    };
    attack2.addEventListener("click", () => {
      playerMove("attack");
      checkHealth();
    });
    defend2.addEventListener("click", () => {
      playerMove("defend");
      checkHealth();
    });
    special2.addEventListener("click", () => {
      playerMove("special");
      checkHealth();
    });
  }
  stage7(doorChoice) {
    audio.play("1m04");
    switch (doorChoice) {
      case "ruby":
        updateAndListen("seventh-story-a", "scene-seven-progress-a", this.stage8.bind(this));
        break;
      case "aquamarine":
        updateAndListen("seventh-story-b", "scene-seven-progress-b", this.stage8.bind(this));
        break;
      case "topaz":
        updateAndListen("seventh-story-c", "scene-seven-progress-c", this.stage8.bind(this));
        break;
    }
  }
  stage8() {
    updateAndListen("eighth-story", "scene-eight-progress", this.stage9.bind(this));
  }
  stage9() {
    switch (this.character) {
      case "jayna":
        updateAndListen("ninth-story-a", "scene-nine-progress-a", this.stage10.bind(this));
        break;
      case "bjorna":
        updateAndListen("ninth-story-b", "scene-nine-progress-b", this.stage10.bind(this));
        break;
      case "zazzerpan":
        updateAndListen("ninth-story-c", "scene-nine-progress-c", this.stage10.bind(this));
        break;
      case "yolo":
        updateAndListen("ninth-story-d", "scene-nine-progress-d", this.stage10.bind(this));
        break;
    }
  }

  stage10() {
    updateAndListen("tenth-story", "scene-ten-progress", this.battle3.bind(this));
  }
  battle3() {
    updateUi("battle-three");
    let enemy3 = new Enemy("Valderak", 10, 10, 10, 100);
    console.log(enemy3);
    listen("result-victory", this.victory.bind(this));
    listen("result-game-over", this.gameOver.bind(this));
  }

  victory() {
    audio.play("1m03");
    switch (this.character) {
      case "bjorna":
        updateAndListen("victory", "victory-progress", this.epilogueBjorna.bind(this));
        break;
      case "jayna":
        updateAndListen("victory", "victory-progress", this.epilogueJayna.bind(this));
        break;
      case "zazzerpan":
        updateAndListen("victory", "victory-progress", this.epilogueZazzerpan.bind(this));
        break;
      case "yolo":
        updateAndListen("victory", "victory-progress", this.epilogueYolo.bind(this));
        break;
    }
  }

  gameOver() {
    audio.play("1m03");
    updateAndListen("game-over", "game-over-progress", this.titleScreen.bind(this));
  }
  epilogueBjorna() {
    updateAndListen("epilogue-bjorna", "epilogue-bjorna-progress", this.titleScreen.bind(this));
  }
  epilogueJayna() {
    updateAndListen("epilogue-jayna", "epilogue-jayna-progress", this.titleScreen.bind(this));
  }
  epilogueZazzerpan() {
    updateAndListen("epilogue-zazzerpan", "epilogue-zazzerpan-progress", this.titleScreen.bind(this));
  }
  epilogueYolo() {
    updateAndListen("epilogue-yolo", "epilogue-yolo-progress", this.titleScreen.bind(this));
  }
}
