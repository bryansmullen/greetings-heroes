import { renderStage, startGame } from "./application.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as a title screen
 */

export function drawTitle() {
  // Create Elements
  const injector = document.createElement("div");
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const main = document.getElementById("main-content");

  // Configure Elements
  container.classList.add("ui-element", "title");
  heading.innerText = "Greetings Heroes";
  injector.appendChild(container);
  container.appendChild(heading);
  main.innerHTML = injector.innerHTML;

  // Create Option 1
  const choice = document.createElement("div");
  choice.classList.add("button", "button-text");
  choice.innerText = "Play Game";
  choice.addEventListener("click", () => {
    startGame();
  });
  main.firstChild.appendChild(choice);
  // Exit Game Event Listeners

  const exitGame = document.getElementById("exit");
  exitGame.style.visibility = "hidden";

  // Clear Session Storage
  sessionStorage.clear();
}

export function drawConfirmExit() {
  // Create Elements
  const injector = document.createElement("div");
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const main = document.getElementById("main-content");

  // Configure Elements
  container.classList.add("ui-element", "title");
  heading.innerText = "Are You Sure You Wish To Exit?";
  injector.appendChild(container);
  container.appendChild(heading);
  main.innerHTML = injector.innerHTML;

  // Create Option 1
  const choice1 = document.createElement("div");
  choice1.classList.add("button", "button-text");
  choice1.innerText = "Exit and discard progress";
  choice1.addEventListener("click", () => {
    drawTitle();
  });
  main.firstChild.appendChild(choice1);

  // Create Option 2
  const choice2 = document.createElement("div");
  choice2.classList.add("button", "button-text");
  choice2.innerText = "Resume Playing";
  choice2.addEventListener("click", () => {
    renderStage();
  });
  main.firstChild.appendChild(choice2);

  // Clear Session Storage
  console.log(sessionStorage);
}
