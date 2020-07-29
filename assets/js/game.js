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
  constructor(enemy, attackBtn, defendBtn, specialBtn, battleUi, progressBtn, nextStage, enemyHealthBarId, option) {
    this.attackBtn = attackBtn;
    this.defendBtn = defendBtn;
    this.specialBtn = specialBtn;
    this.battleUi = battleUi;
    this.progressBtn = progressBtn;
    this.nextStage = nextStage;
    this.option = option;
    this.enemy = enemy;
    this.enemyHealthBarId = enemyHealthBarId;
  }
  updateHealth() {
    enemy.health -= 10;
  }
  initialiseBattleCommand(attackBtn, defendBtn, specialBtn) {
    attackBtn.addEventListener("click", () => {
      this.playerMove(this.enemy, "forest-people-health", "attack");
      this.checkHealth(this.progressBtn);
    });
    defendBtn.addEventListener("click", () => {
      this.playerMove(enemy, "forest-people-health", "attack");
      this.checkHealth(this.progressBtn);
    });
    specialBtn.addEventListener("click", () => {
      this.playerMove(enemy, "forest-people-health", "attack");
      this.checkHealth(this.progressBtn);
    });
  }

  playerMove(enemy, enemyHealthBar, choice) {
    switch (choice) {
      case "attack":
        enemy.health -= 10;
        enemyHealthBar = document.getElementById(this.enemyHealthBarId);
        enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
        break;
      case "defend":
        console.log("defend");
        break;
      case "special":
        console.log("special");
        break;
    }
  }
  checkHealth(progressBtn) {
    console.dir(progressBtn);
    if (this.enemy.health <= 0) {
      document.getElementById(progressBtn).classList.remove("hidden");
    }
  }
  run() {
    this.initialiseBattleCommand(this.attackBtn, this.defendBtn, this.specialBtn);
    updateAndListen(this.battleUi, this.progressBtn, this.nextStage, this.option);
  }
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
    switch (enemy) {
      case "forest-people":
        const attack1a = document.getElementById("battle-1a-attack");
        const defend1a = document.getElementById("battle-1a-defend");
        const special1a = document.getElementById("battle-1a-special");
        let forestBattle = new Battle(
          new Enemy(enemy, 10, 10, 10, 100),
          attack1a,
          defend1a,
          special1a,
          "battle-forest",
          "battle-one-progress-a",
          this.stage3.bind(this),
          "forest-people-health",
          "a"
        );
        forestBattle.run();
        break;
      case "melwunt-tribe":
        const attack1b = document.getElementById("battle-1b-attack");
        const defend1b = document.getElementById("battle-1b-defend");
        const special1b = document.getElementById("battle-1b-special");
        let melwuntBattle = new Battle(
          new Enemy(enemy, 10, 10, 10, 100),
          attack1b,
          defend1b,
          special1b,
          "battle-melwunt",
          "battle-one-progress-b",
          this.stage3.bind(this),
          "melwunt-tribe-health",
          "a"
        );
        melwuntBattle.run();
        break;
      case "wretched-dead":
        const attack1c = document.getElementById("battle-1c-attack");
        const defend1c = document.getElementById("battle-1c-defend");
        const special1c = document.getElementById("battle-1c-special");
        let wretchedBattle = new Battle(
          new Enemy(enemy, 10, 10, 10, 100),
          attack1c,
          defend1c,
          special1c,
          "battle-wretcheddead",
          "battle-one-progress-c",
          this.stage3.bind(this),
          "wretched-dead-health",
          "a"
        );
        wretchedBattle.run();
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
    const attack2 = document.getElementById("battle-2-attack");
    const defend2 = document.getElementById("battle-2-defend");
    const special2 = document.getElementById("battle-2-special");
    let enemy2;
    switch (doorChoice) {
      case "ruby":
        enemy2 = new Enemy("The Engine Of Chaos - Fire", 10, 10, 10, 100);
        let rubyBattle = new Battle(
          new Enemy(enemy2, 10, 10, 10, 100),
          attack2,
          defend2,
          special2,
          "battle-two",
          "battle-two-progress",
          this.stage7.bind(this),
          "engine-of-chaos-health",
          "ruby"
        );
        rubyBattle.run();
        break;

      case "aquamarine":
        enemy2 = new Enemy("The Engine Of Chaos - Water", 10, 10, 10, 100);
        let aquamarineBattle = new Battle(
          new Enemy(enemy2, 10, 10, 10, 100),
          attack2,
          defend2,
          special2,
          "battle-two",
          "battle-two-progress",
          this.stage7.bind(this),
          "engine-of-chaos-health",
          "ruby"
        );
        aquamarineBattle.run();
        break;
      case "topaz":
        enemy2 = new Enemy("The Engine Of Chaos - Lightning", 10, 10, 10, 100);
        let topazBattle = new Battle(
          new Enemy(enemy2, 10, 10, 10, 100),
          attack2,
          defend2,
          special2,
          "battle-two",
          "battle-two-progress",
          this.stage7.bind(this),
          "engine-of-chaos-health",
          "ruby"
        );
        topazBattle.run();
        break;
    }
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
    console.dir(this.character.name);
    switch (this.character.name) {
      case "Jayna":
        updateAndListen("ninth-story-a", "scene-nine-progress-a", this.stage10.bind(this));
        break;
      case "Bjorna":
        updateAndListen("ninth-story-b", "scene-nine-progress-b", this.stage10.bind(this));
        break;
      case "Zazzerpan":
        updateAndListen("ninth-story-c", "scene-nine-progress-c", this.stage10.bind(this));
        break;
      case "Yolo":
        updateAndListen("ninth-story-d", "scene-nine-progress-d", this.stage10.bind(this));
        break;
      default:
        console.log("DEFAULT");
    }
  }

  stage10() {
    updateAndListen("tenth-story", "scene-ten-progress", this.battle3.bind(this));
  }
  battle3() {
    updateUi("battle-three");

    const attack3 = document.getElementById("battle-3-attack");
    const defend3 = document.getElementById("battle-3-defend");
    const special3 = document.getElementById("battle-3-special");
    let enemy3;
    enemy3 = new Enemy("The Engine Of Chaos - Fire", 10, 10, 10, 100);
    let finalBattle = new Battle(
      enemy3,
      attack3,
      defend3,
      special3,
      "battle-three",
      "result-victory",
      this.victory.bind(this),
      "valderak-health"
    );
    finalBattle.run();
  }
  victory() {
    audio.play("1m03");
    switch (this.character.name) {
      case "Bjorna":
        updateAndListen("victory", "victory-progress", this.epilogueBjorna.bind(this));
        break;
      case "Jayna":
        updateAndListen("victory", "victory-progress", this.epilogueJayna.bind(this));
        break;
      case "Zazzerpan":
        updateAndListen("victory", "victory-progress", this.epilogueZazzerpan.bind(this));
        break;
      case "Yolo":
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
