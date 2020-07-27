import { updateUi } from "./ui.js";
import { audio } from "./audio.js";

const listen = (listenElementId, triggeredEvent) => {
  document.getElementById(listenElementId).addEventListener("click", () => {
    triggeredEvent();
  });
};

const updateAndListen = (uiToUpdate, listenElementId, triggeredEvent) => {
  updateUi(uiToUpdate);
  listen(listenElementId, triggeredEvent);
};

export class Game {
  constructor() {
    this.character = undefined;
  }

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
    this.character = "bjorna";
    updateAndListen("choose-bjorna", "bjorna-progress", this.stage1.bind(this));
  }
  jayna() {
    this.character = "jayna";
    updateAndListen("choose-jayna", "jayna-progress", this.stage1.bind(this));
  }
  yolo() {
    this.character = "yolo";
    updateAndListen("choose-yolo", "yolo-progress", this.stage1.bind(this));
  }
  zazzerpan() {
    this.character = "zazzerpan";
    updateAndListen("choose-zazzerpan", "zazzerpan-progress", this.stage1.bind(this));
  }

  prelude() {
    updateAndListen("prelude", "prelude-progress", this.chooseCharacter.bind(this));
  }

  stage1() {
    updateUi("first-story");
    document.getElementById("scene-one-progress").addEventListener("click", () => {
      const diceRoll = Math.ceil(Math.random() * 3);
      this.stage2(diceRoll);
    });
  }
  stage2(diceRoll) {
    switch (diceRoll) {
      case 1:
        updateUi("second-story-a");
        document.getElementById("scene-two-a-progress").addEventListener("click", () => {
          this.battle1("forest");
        });
        break;
      case 2:
        updateUi("second-story-b");
        document.getElementById("scene-two-b-progress").addEventListener("click", () => {
          this.battle1("melwunt");
        });
        break;
      default:
        updateUi("second-story-c");
        document.getElementById("scene-two-c-progress").addEventListener("click", () => {
          this.battle1("wretcheddead");
        });
        break;
    }
  }
  stage3(enemyDefeated) {
    switch (enemyDefeated) {
      case "a":
        updateUi("third-story-a");
        break;
      case "b":
        updateUi("third-story-b");
        break;
      case "c":
        updateUi("third-story-c");
        break;
    }
    const reward = Math.ceil(Math.random() * 3);
    document.getElementById("scene-three-a-progress").addEventListener("click", () => {
      this.stage4(reward);
    });
    document.getElementById("scene-three-b-progress").addEventListener("click", () => {
      this.stage4(reward);
    });
    document.getElementById("scene-three-c-progress").addEventListener("click", () => {
      this.stage4(reward);
    });
  }
  stage4(reward) {
    switch (reward) {
      case 1:
        updateUi("fourth-story-a");
        break;
      case 2:
        updateUi("fourth-story-b");
        break;
      case 3:
        updateUi("fourth-story-c");
        break;
    }
    listen("scene-four-progress-a", this.stage5.bind(this));
    listen("scene-four-progress-b", this.stage5.bind(this));
    listen("scene-four-progress-c", this.stage5.bind(this));
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
        updateUi("sixth-story-a");
        document.getElementById("scene-six-progress-a").addEventListener("click", () => {
          this.battle2("ruby");
        });
        break;
      case "aquamarine":
        updateUi("sixth-story-b");
        document.getElementById("scene-six-progress-b").addEventListener("click", () => {
          this.battle2("aquamarine");
        });
        break;
      case "topaz":
        updateUi("sixth-story-c");
        document.getElementById("scene-six-progress-c").addEventListener("click", () => {
          this.battle2("topaz");
        });
        break;
    }
  }
  stage7(doorChoice) {
    audio.play("1m02");
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
    audio.play("1m03");
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

  victory() {
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
    updateAndListen("game-over", "game-over-progress", this.titleScreen.bind(this));
  }

  battle1(enemy) {
    console.log(enemy);
    switch (enemy) {
      case "forest":
        updateUi("battle-forest");
        break;
      case "melwunt":
        updateUi("battle-melwunt");
      case "wretcheddead":
        updateUi("battle-wretcheddead");
    }
    // ==========================================================//

    const attack = document.querySelector(".attack");
    attack.addEventListener("click", () => {
      console.log("attack");
    });
    const defend = document.querySelector(".defend");
    defend.addEventListener("click", () => {
      console.log("defend");
    });
    const special = document.querySelector(".special");
    special.addEventListener("click", () => {
      console.log("special");
    });
    const playerHealthReadout = document.getElementById("player-health");
    const enemyHealthReadout = document.getElementById("enemy-health");

    const player = {
      healthStat: 100,
      defenceStat: 50,
      attackStat: 70,
      attack() {
        enemy.health -= 10;
        console.dir(enemyHealthReadout);
      },
    };
    // const enemy = {
    //   health: 60,
    //   defence: 40,
    //   attack: 50,
    // };

    // ==========================================================//

    document.querySelector(".battle-one-progress-a").addEventListener("click", () => {
      this.stage3("a");
    });
    document.querySelector(".battle-one-progress-b").addEventListener("click", () => {
      this.stage3("b");
    });
    document.querySelector(".battle-one-progress-c").addEventListener("click", () => {
      this.stage3("c");
    });
  }
  battle2(doorChoice) {
    updateUi("battle-two");
    document.getElementById("battle-two-progress").addEventListener("click", () => {
      this.stage7(doorChoice);
    });
  }
  battle3() {
    updateUi("battle-three");
    listen("result-victory", this.victory.bind(this));
    listen("result-game-over", this.gameOver.bind(this));
  }
}
