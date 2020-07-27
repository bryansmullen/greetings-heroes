import { audio } from "./audio.js";
import { updateUi, listen, updateAndListen } from "./utility.js";

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
    const diceRoll = Math.ceil(Math.random() * 3);
    updateAndListen("first-story", "scene-one-progress", this.stage2.bind(this), diceRoll);
  }
  stage2(diceRoll) {
    switch (diceRoll) {
      case 1:
        updateAndListen("second-story-a", "scene-two-a-progress", this.battle1.bind(this), "forest");
        break;
      case 2:
        updateAndListen("second-story-b", "scene-two-b-progress", this.battle1.bind(this), "melwunt");
        break;
      default:
        updateAndListen("second-story-c", "scene-two-c-progress", this.battle1.bind(this), "wretcheddead");
        break;
    }
  }
  battle1(enemy) {
    console.log(enemy);
    switch (enemy) {
      case "forest":
        updateAndListen("battle-forest", "battle-one-progress-a", this.stage3.bind(this), "a");
        break;
      case "melwunt":
        updateAndListen("battle-melwunt", "battle-one-progress-b", this.stage3.bind(this), "b");
      case "wretcheddead":
        updateAndListen("battle-wretcheddead", "battle-one-progress-c", this.stage3.bind(this), "c");
    }
  }
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
    updateAndListen("battle-two", "battle-two-progress", this.stage7.bind(this), doorChoice);
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
