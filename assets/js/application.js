import { Game } from "./game.js";
import { Player, Enemy, Battle } from "./battle.js";
import { story } from "./story.js";

const myGame = new Game();

myGame.start = () => {
  // Start Game Running
  myGame.stage = "1";
  if (myGame.stage == "1") {
    myGame.renderUi("1");
  }
  myGame.readyProgress();
};

myGame.start();
