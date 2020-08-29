import { stage } from "./stages.js";
import { drawTitle } from "./drawTitle.js";
import { drawNarrative } from './drawNarrative.js'
// Sound Event Listener
// const soundIcon = document.getElementById("toggle-sound");
// soundIcon.addEventListener("click", toggleSound);

// Exit Game Event Listeners
// const exitGame = document.getElementById("exit");
// exitGame.addEventListener("click", () => {
//   drawTitle(stage["title"]);
//   return;
// });

// Info Event Listener
// const info = document.getElementById("info-button");
// info.addEventListener("click", () => {
//   drawInstructions();
// });

export function renderStage() {
    const stageId = sessionStorage.getItem('stage')
    const stageObj = stage[stageId]
    if (stageObj.type === 'story') {
        console.log(sessionStorage)
        drawNarrative(stageObj)
    } else {
        console.log('somethingelse')
    }

}

export function startGame() {
    sessionStorage.setItem("gameIsRunning", true);
    sessionStorage.setItem("randomiser", Math.ceil(Math.random() * 3));
    sessionStorage.setItem('stage', 'prelude')
    console.log('startGame')
    renderStage()
}



drawTitle()
