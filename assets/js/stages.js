import { drawNarrative } from "./drawNarrative.js";
import { drawTitle } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";
import { drawCharacter } from "./drawCharacter.js";
import { drawBattle } from "./drawBattle.js";
import { toggleSound } from "./audio.js";
import { renderStage } from "./application.js";
import { paragraphs, story } from "./story.js";

class Story {
  constructor(text, type, next, choices, audio) {
    this.text = text;
    this.type = type;
    this.next = next;
    this.choices = choices;
    this.audio = audio;
  }
}

class Title {
  constructor(text, type, choices, audio) {
    this.text = text;
    this.type = type;
    this.choices = choices;
    this.audio = audio;
  }
}

class Instructions {
  constructor(text, type, choices, paragraphs) {
    this.text = text;
    this.type = type;
    this.choices = choices;
    this.paragraphs = paragraphs;
  }
}

class Character {
  constructor(text, type, characters, audio) {
    this.text = text;
    this.type = type;
    this.characters = characters;
    this.audio = audio;
  }
}

class Battle {
  constructor(type, enemy, next, choices, audio) {
    this.type = type;
    this.enemy = enemy;
    this.next = next;
    this.choice = choices;
    this.audio = audio;
  }
}

const progressToNextScene = () => {
  const currentStageName = sessionStorage.getItem("stage");
  const currentStage = stage[currentStageName];
  sessionStorage.setItem("stage", currentStage.next);
  renderStage();
};
const returnToCurrentScene = () => {
  const currentStageName = sessionStorage.getItem("stage");
  const currentStage = stage[currentStageName];
  renderStage();
};

const returnButton = { text: "Return To Previous Screen", action: returnToCurrentScene };
const progressButton = { text: "Next Scene", action: progressToNextScene };
const playGameButton = { text: "Play Game", action: drawNarrative };
const instructionsButton = { text: "Instructions", action: drawInstructions };
const preferencesButton = { text: "Preferences", action: drawTitle };

export const stage = {
  title: new Title("Greetings Heroes", "title", [playGameButton, instructionsButton, preferencesButton], "1m03"),
  preferences: new Title("Preferences", "title", [
    { text: "Return To Title", action: drawTitle, next: "title" },
    { text: "Sound On", action: toggleSound },
  ]),
  instructions: new Instructions("Instructions", "instructions", [returnButton], paragraphs),
  prelude: new Story(story.prelude, "story", "stage_1", [progressButton], "1m02"),
  character: new Character(
    "Choose Your Hero",
    "character",
    [
      { name: "jayna", imagePath: "assets/img/jayna.png", action: drawNarrative, next: "preludea" },
      { name: "bjorna", imagePath: "assets/img/bjorna.png", action: drawNarrative, next: "preludeb" },
      { name: "zazzerpan", imagePath: "assets/img/zazzerpan.png", action: drawNarrative, next: "preludec" },
      { name: "yolo", imagePath: "assets/img/yolo.png", action: drawNarrative, next: "preluded" },
    ],
    "1m03"
  ),
  preludea: new Story(story.preludea, "story", "stage_1", [progressButton], "1m03"),
  preludeb: new Story(story.preludeb, "story", "stage_1", [progressButton], "1m03"),
  preludec: new Story(story.preludec, "story", "stage_1", [progressButton], "1m03"),
  preluded: new Story(story.preluded, "story", "stage_1", [progressButton], "1m03"),
  stage_1: new Story(story.stage_1, "story", "stage_2a", [progressButton], "1m03"),
  stage_2a: new Story(story.stage_2a, "story", "stage_3a", [progressButton], "1m03"),
  stage_2b: new Story(story.stage_2b, "story", "stage_3b", [progressButton], "1m03"),
  stage_2c: new Story(story.stage_2c, "story", "stage_3c", [progressButton], "1m03"),
  stage_3a: new Story(story.stage_3a, "story", "stage_4a", [progressButton], "1m03"),
  stage_3b: new Story(story.stage_3b, "story", "stage_4b", [progressButton], "1m03"),
  stage_3c: new Story(story.stage_3c, "story", "stage_4c", [progressButton], "1m03"),
  stage_4a: new Story(story.stage_4a, "story", "stage_5", [progressButton], "1m03"),
  stage_4b: new Story(story.stage_4b, "story", "stage_5", [progressButton], "1m03"),
  stage_4c: new Story(story.stage_4c, "story", "stage_5", [progressButton], "1m03"),
  stage_5: new Story(story.stage_5, "story", "stage_6a", [progressButton], "1m03"),
  stage_6a: new Story(story.stage_6a, "story", "stage_7a", [progressButton], "1m03"),
  stage_6b: new Story(story.stage_6b, "story", "stage_7b", [progressButton], "1m03"),
  stage_6c: new Story(story.stage_6c, "story", "stage_7c", [progressButton], "1m03"),
  stage_7a: new Story(story.stage_7a, "story", "stage_8", [progressButton], "1m03"),
  stage_7b: new Story(story.stage_7b, "story", "stage_8", [progressButton], "1m03"),
  stage_7c: new Story(story.stage_7c, "story", "stage_8", [progressButton], "1m03"),
  stage_8: new Story(story.stage_8, "story", "stage_9a", [progressButton], "1m03"),
  stage_9a: new Story(story.stage_9a, "story", "stage_10", [progressButton], "1m03"),
  stage_9b: new Story(story.stage_9b, "story", "stage_10", [progressButton], "1m03"),
  stage_9c: new Story(story.stage_9c, "story", "stage_10", [progressButton], "1m03"),
  stage_9d: new Story(story.stage_9d, "story", "stage_10", [progressButton], "1m03"),
  stage_10: new Story(story.stage_10, "story", "victory", [progressButton], "1m03"),
  victory: new Story(story.victory, "story", "stage_11a", [progressButton], "1m03"),
  stage_11a: new Story(story.stage_11a, "story", "title", [progressButton], "1m03"),
  stage_11b: new Story(story.stage_11b, "story", "title", [progressButton], "1m03"),
  stage_11c: new Story(story.stage_11c, "story", "title", [progressButton], "1m03"),
  stage_11d: new Story(story.stage_11d, "story", "title", [progressButton], "1m03"),
  game_over: new Story(story.game_over, "story", "title", [progressButton], "1m03"),
  battle1a: new Battle(
    "battle",
    { name: "The Forest People", enemyHealth: 100, enemyStrengh: 10, enemyDefence: 10, enemyMagic: 10, enemyMagicDefence: 10 },
    "stage_3a",
    [progressButton],
    "1m04"
  ),
  battle1b: new Battle(
    "battle",
    { name: "A Tribe Of Melwunts", enemyHealth: 100, enemyStrengh: 10, enemyDefence: 10, enemyMagic: 10, enemyMagicDefence: 10 },
    "stage_3b",
    [progressButton],
    "1m04"
  ),
  battle1a: new Battle(
    "battle",
    { name: "The Wretched Dead", enemyHealth: 100, enemyStrengh: 10, enemyDefence: 10, enemyMagic: 10, enemyMagicDefence: 10 },
    "stage_3c",
    [progressButton],
    "1m04"
  ),
  battle2: new Battle(
    "battle",
    { name: "The Engine Of Chaos", enemyHealth: 100, enemyStrengh: 10, enemyDefence: 10, enemyMagic: 10, enemyMagicDefence: 10 },
    "stage_7a",
    [progressButton],
    "1m04"
  ),
  battle3: new Battle(
    "battle",
    { name: "Valderak", enemyHealth: 100, enemyStrengh: 10, enemyDefence: 10, enemyMagic: 10, enemyMagicDefence: 10 },
    "victory",
    [progressButton],
    "1m04"
  ),
};
