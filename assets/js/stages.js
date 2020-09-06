import { drawNarrative } from "./drawNarrative.js";
import { drawTitle } from "./drawTitle.js";
import { drawInstructions } from "./drawInstructions.js";

import { renderStage } from "./application.js";
import { paragraphs, story } from "./story.js";
import { Story, Title, Instructions, Character, Battle } from "./screenClasses.js";
import { forestPeople, melwuntTribe, wretchedDead, engineOfChaos, valderak } from "./characters.js";
export const progressToNextScene = () => {
  const currentStageName = sessionStorage.getItem("stage");
  const currentStage = stage[currentStageName];
  sessionStorage.setItem("stage", currentStage.next);
  renderStage();
};

export const progressToGameOverScreen = () => {
  sessionStorage.setItem("stage", "game_over");
  renderStage();
};
const returnToCurrentScene = () => {
  const currentStageName = sessionStorage.getItem("stage");
  const currentStage = stage[currentStageName];
  renderStage();
};

const returnButton = { text: "Return To Previous Screen", action: returnToCurrentScene };
const progressButton = { text: "Next Scene", action: progressToNextScene };
const titleButton = { text: "Return To Title Screen", action: progressToNextScene };
const playGameButton = { text: "Play Game", action: drawNarrative };
const instructionsButton = { text: "Instructions", action: drawInstructions };
const preferencesButton = { text: "Preferences", action: drawTitle };

// Function Which Sets Stages Which Vary Based On Character Selection
export const setPreludeInfo = function () {
  const chosenCharacter = sessionStorage.character;
  switch (chosenCharacter) {
    case "bjorna":
      stage.prelude2 = new Story(story.bjornaIntro, "story", "stage_1", [progressButton], "1m03");
      stage.stage_9 = new Story(story.stage_9b, "story", "stage_10", [progressButton], "1m03");
      stage.stage_11 = new Story(story.stage_11b, "story", "title", [progressButton], "1m03");
      break;
    case "jayna":
      stage.prelude2 = new Story(story.jaynaIntro, "story", "stage_1", [progressButton], "1m03");
      stage.stage_9 = new Story(story.stage_9a, "story", "stage_10", [progressButton], "1m03");
      stage.stage_11 = new Story(story.stage_11a, "story", "title", [progressButton], "1m03");
      break;

    case "yolo":
      stage.prelude2 = new Story(story.yoloIntro, "story", "stage_1", [progressButton], "1m03");
      stage.stage_9 = new Story(story.stage_9d, "story", "stage_10", [progressButton], "1m03");
      stage.stage_11 = new Story(story.stage_11d, "story", "title", [progressButton], "1m03");
      break;

    case "zazzerpan":
      stage.prelude2 = new Story(story.zazzerpanIntro, "story", "stage_1", [progressButton], "1m03");
      stage.stage_9 = new Story(story.stage_9c, "story", "stage_10", [progressButton], "1m03");
      stage.stage_11 = new Story(story.stage_11c, "story", "title", [progressButton], "1m03");
      break;
  }
};

export const setRandomFirstEnemy = function () {
  const randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      stage.stage_2 = new Story(story.stage_2a, "story", "battle_1", [progressButton], "1m03");
      stage.battle_1 = new Battle("battle", forestPeople, "stage_3", [progressButton], "1m04");
      stage.stage_3 = new Story(story.stage_3a, "story", "stage_4", [progressButton], "1m03");
      stage.stage_4 = new Story(story.stage_4a, "story", "stage_5", [progressButton], "1m03");
      break;
    case 2:
      stage.stage_2 = new Story(story.stage_2b, "story", "battle_1", [progressButton], "1m03");
      stage.battle_1 = new Battle("battle", melwuntTribe, "stage_3", [progressButton], "1m04");
      stage.stage_3 = new Story(story.stage_3b, "story", "stage_4", [progressButton], "1m03");
      stage.stage_4 = new Story(story.stage_4b, "story", "stage_5", [progressButton], "1m03");
      break;
    case 3:
      stage.stage_2 = new Story(story.stage_2c, "story", "battle_1", [progressButton], "1m03");
      stage.battle_1 = new Battle("battle", wretchedDead, "stage_3", [progressButton], "1m04");
      stage.stage_3 = new Story(story.stage_3c, "story", "stage_4", [progressButton], "1m03");
      stage.stage_4 = new Story(story.stage_4c, "story", "stage_5", [progressButton], "1m03");
      break;
  }
};
// Set Cards For Character Selection Screen
const jaynaCard = { name: "jayna", imagePath: "assets/img/jayna.png", action: drawNarrative, next: "preludea" };
const bjornaCard = { name: "bjorna", imagePath: "assets/img/bjorna.png", action: drawNarrative, next: "preludeb" };
const zazzerpanCard = { name: "zazzerpan", imagePath: "assets/img/zazzerpan.png", action: drawNarrative, next: "preludec" };
const yoloCard = { name: "yolo", imagePath: "assets/img/yolo.png", action: drawNarrative, next: "preluded" };

export const stage = {
  title: new Title("Greetings Heroes", "title", [playGameButton, instructionsButton, preferencesButton], "1m03"),
  instructions: new Instructions("Instructions", "instructions", [returnButton], paragraphs),
  prelude: new Story(story.prelude, "story", "character", [progressButton], "1m02"),
  character: new Character("Choose Your Hero", "character", "prelude2", [jaynaCard, bjornaCard, zazzerpanCard, yoloCard], "1m03"),
  // Prelude 2 is set dynamically
  stage_1: new Story(story.stage_1, "story", "stage_2", [progressButton], "1m03"),
  // Stages 2,3,4 set dynamically
  stage_5: new Story(story.stage_5, "story", "battle2", [progressButton], "1m03"),
  stage_6a: new Story(story.stage_6a, "story", "battle2", [progressButton], "1m03"),
  stage_6b: new Story(story.stage_6b, "story", "battle2", [progressButton], "1m03"),
  stage_6c: new Story(story.stage_6c, "story", "battle2", [progressButton], "1m03"),
  stage_7a: new Story(story.stage_7a, "story", "stage_8", [progressButton], "1m03"),
  stage_7b: new Story(story.stage_7b, "story", "stage_8", [progressButton], "1m03"),
  stage_7c: new Story(story.stage_7c, "story", "stage_8", [progressButton], "1m03"),
  stage_8: new Story(story.stage_8, "story", "stage_9", [progressButton], "1m03"),
  // Stage 9 is set dynamically
  stage_10: new Story(story.stage_10, "story", "battle3", [progressButton], "1m03"),
  victory: new Story(story.victory, "story", "stage_11", [progressButton], "1m03"),
  // Stage 11 is set dynamically
  game_over: new Story(story.game_over, "story", "title", [titleButton], "1m03"),
  battle2: new Battle("battle", engineOfChaos, "stage_7a", [progressButton], "1m04"),
  battle3: new Battle("battle", valderak, "victory", [progressButton], "1m04"),
};
