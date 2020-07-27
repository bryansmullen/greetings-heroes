import { updateUi } from "./ui.js";
import { audio } from "./audio.js";

const listen = (listenElementId, triggeredEvent) => {
  document.getElementById(listenElementId).addEventListener("click", () => {
    triggeredEvent();
  });
};

export class Game {
  constructor() {
    this.character = undefined;
  }

  updateScreen(screenToUpdateTo, buttonToAddListenerTo, methodToCall) {
    updateUi(screenToUpdateTo);
    document
      .getElementById(buttonToAddListenerTo)
      .addEventListener("click", methodToCall);
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
    document
      .getElementById("play-game-button")
      .addEventListener("click", () => {
        this.prelude();
      });
    document.getElementById("exit-game").addEventListener("click", () => {
      this.titleScreen();
    });
    document
      .getElementById("instructions-button")
      .addEventListener("click", () => {
        this.instructionsScreen();
      });
    document.getElementById("info-button").addEventListener("click", () => {
      this.instructionsScreen();
    });
  }
  instructionsScreen() {
    updateUi("instructions-screen");
    document.getElementById("return-to-title").addEventListener("click", () => {
      this.titleScreen();
    });
  }
  chooseCharacter() {
    updateUi("character-screen");
    audio.play("1m01");
    this.toggleSoundIcon();
    document.getElementById("bjorna").addEventListener("click", () => {
      this.character = "bjorna";
      this.bjorna();
    });
    document.getElementById("jayna").addEventListener("click", () => {
      this.character = "jayna";

      this.jayna();
    });
    document.getElementById("yolo").addEventListener("click", () => {
      this.character = "yolo";

      this.yolo();
    });
    document.getElementById("zazzerpan").addEventListener("click", () => {
      this.character = "zazzerpan";

      this.zazzerpan();
    });
  }
  bjorna() {
    updateUi("choose-bjorna");
    listen("bjorna-progress", this.stage1);
  }
  jayna() {
    updateUi("choose-jayna");
    document.getElementById("jayna-progress").addEventListener("click", () => {
      this.stage1();
    });
  }
  yolo() {
    updateUi("choose-yolo");
    document.getElementById("yolo-progress").addEventListener("click", () => {
      this.stage1();
    });
  }
  zazzerpan() {
    updateUi("choose-zazzerpan");
    document
      .getElementById("zazzerpan-progress")
      .addEventListener("click", () => {
        this.stage1();
      });
  }
  prelude() {
    updateUi("prelude");
    document
      .getElementById("prelude-progress")
      .addEventListener("click", () => {
        this.chooseCharacter();
      });
  }
  stage1() {
    updateUi("first-story");
    document
      .getElementById("scene-one-progress")
      .addEventListener("click", () => {
        const diceRoll = Math.ceil(Math.random() * 3);
        this.stage2(diceRoll);
      });
  }
  stage2(diceRoll) {
    switch (diceRoll) {
      case 1:
        updateUi("second-story-a");
        document
          .getElementById("scene-two-a-progress")
          .addEventListener("click", () => {
            this.battle1("forest");
          });
        break;
      case 2:
        updateUi("second-story-b");
        document
          .getElementById("scene-two-b-progress")
          .addEventListener("click", () => {
            this.battle1("melwunt");
          });
        break;
      default:
        updateUi("second-story-c");
        document
          .getElementById("scene-two-c-progress")
          .addEventListener("click", () => {
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
    document
      .getElementById("scene-three-a-progress")
      .addEventListener("click", () => {
        this.stage4(reward);
      });
    document
      .getElementById("scene-three-b-progress")
      .addEventListener("click", () => {
        this.stage4(reward);
      });
    document
      .getElementById("scene-three-c-progress")
      .addEventListener("click", () => {
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
    document
      .getElementById("scene-four-progress-a")
      .addEventListener("click", () => {
        this.stage5();
      });
    document
      .getElementById("scene-four-progress-b")
      .addEventListener("click", () => {
        this.stage5();
      });
    document
      .getElementById("scene-four-progress-c")
      .addEventListener("click", () => {
        this.stage5();
      });
  }
  stage5() {
    updateUi("fifth-story");
    document
      .getElementById("scene-five-progress-a")
      .addEventListener("click", () => {
        this.stage6("ruby");
      });
    document
      .getElementById("scene-five-progress-b")
      .addEventListener("click", () => {
        this.stage6("aquamarine");
      });
    document
      .getElementById("scene-five-progress-c")
      .addEventListener("click", () => {
        this.stage6("topaz");
      });
  }
  stage6(doorChoice) {
    switch (doorChoice) {
      case "ruby":
        updateUi("sixth-story-a");
        document
          .getElementById("scene-six-progress-a")
          .addEventListener("click", () => {
            this.battle2("ruby");
          });
        break;
      case "aquamarine":
        updateUi("sixth-story-b");
        document
          .getElementById("scene-six-progress-b")
          .addEventListener("click", () => {
            this.battle2("aquamarine");
          });
        break;
      case "topaz":
        updateUi("sixth-story-c");
        document
          .getElementById("scene-six-progress-c")
          .addEventListener("click", () => {
            this.battle2("topaz");
          });
        break;
    }
  }
  stage7(doorChoice) {
    audio.play("1m02");
    switch (doorChoice) {
      case "ruby":
        updateUi("seventh-story-a");
        document
          .getElementById("scene-seven-progress-a")
          .addEventListener("click", () => {
            this.stage8();
          });
        break;
      case "aquamarine":
        updateUi("seventh-story-b");
        document
          .getElementById("scene-seven-progress-b")
          .addEventListener("click", () => {
            this.stage8();
          });
        break;
      case "topaz":
        updateUi("seventh-story-c");
        document
          .getElementById("scene-seven-progress-c")
          .addEventListener("click", () => {
            this.stage8();
          });
        break;

      default:
        break;
    }
  }
  stage8() {
    updateUi("eighth-story");
    audio.play("1m03");
    document
      .getElementById("scene-eight-progress")
      .addEventListener("click", () => {
        this.stage9(this.character);
      });
  }
  stage9() {
    switch (this.character) {
      case "jayna":
        updateUi("ninth-story-a");
        document
          .getElementById("scene-nine-progress-a")
          .addEventListener("click", () => {
            this.stage10();
          });
        break;
      case "bjorna":
        updateUi("ninth-story-b");
        document
          .getElementById("scene-nine-progress-b")
          .addEventListener("click", () => {
            this.stage10();
          });
        break;
      case "zazzerpan":
        updateUi("ninth-story-c");
        document
          .getElementById("scene-nine-progress-c")
          .addEventListener("click", () => {
            this.stage10();
          });
        break;
      case "yolo":
        updateUi("ninth-story-d");
        document
          .getElementById("scene-nine-progress-d")
          .addEventListener("click", () => {
            this.stage10();
          });
        break;
    }
  }

  stage10() {
    this.updateScreen("tenth-story", "scene-ten-progress", this.battle3());
  }

  epilogueBjorna() {
    updateUi("epilogue-bjorna");
    document
      .getElementById("epilogue-bjorna-progress")
      .addEventListener("click", () => {
        this.titleScreen();
      });
  }
  epilogueJayna() {
    updateUi("epilogue-jayna");
    document
      .getElementById("epilogue-jayna-progress")
      .addEventListener("click", () => {
        this.titleScreen();
      });
  }
  epilogueZazzerpan() {
    updateUi("epilogue-zazzerpan");
    document
      .getElementById("epilogue-zazzerpan-progress")
      .addEventListener("click", () => {
        this.titleScreen();
      });
  }
  epilogueYolo() {
    updateUi("epilogue-yolo");
    document
      .getElementById("epilogue-yolo-progress")
      .addEventListener("click", () => {
        this.titleScreen();
      });
  }

  victory() {
    updateUi("victory");
    switch (this.character) {
      case "bjorna":
        document
          .getElementById("victory-progress")
          .addEventListener("click", () => {
            this.epilogueBjorna();
          });
        break;
      case "jayna":
        document
          .getElementById("victory-progress")
          .addEventListener("click", () => {
            this.epilogueJayna();
          });
        break;
      case "zazzerpan":
        document
          .getElementById("victory-progress")
          .addEventListener("click", () => {
            this.epilogueZazzerpan();
          });
        break;
      case "yolo":
        document
          .getElementById("victory-progress")
          .addEventListener("click", () => {
            this.epilogueYolo();
          });
        break;
    }
  }

  gameOver() {
    updateUi("game-over");
    document
      .getElementById("game-over-progress")
      .addEventListener("click", () => {
        this.titleScreen();
      });
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

    document
      .querySelector(".battle-one-progress-a")
      .addEventListener("click", () => {
        this.stage3("a");
      });
    document
      .querySelector(".battle-one-progress-b")
      .addEventListener("click", () => {
        this.stage3("b");
      });
    document
      .querySelector(".battle-one-progress-c")
      .addEventListener("click", () => {
        this.stage3("c");
      });
  }
  battle2(doorChoice) {
    updateUi("battle-two");
    document
      .getElementById("battle-two-progress")
      .addEventListener("click", () => {
        this.stage7(doorChoice);
      });
  }
  battle3() {
    updateUi("battle-three");
    document.getElementById("result-victory").addEventListener("click", () => {
      this.victory();
    });
    document
      .getElementById("result-game-over")
      .addEventListener("click", () => {
        this.gameOver();
      });
  }
}
