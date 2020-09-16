// This file is responsible for rendering instructions screens

import { stage } from "./stages.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an instructionsT screen
 */

export function drawInstructions() {

  // Set Up Container and Injector
  const instructionsObj = stage.instructions;
  const injector = document.createElement("div");
  const container = document.createElement("div");

  // Draw Heading
  const heading = document.createElement("h2");
  heading.innerText = instructionsObj.text;
  container.classList.add("ui-element", "instructions");
  container.appendChild(heading);

  // Draw each paragraph
  const paragraphs = instructionsObj.paragraphs;
  paragraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = paragraph;
    container.appendChild(paragraphElement);
  });

  // Set up main injector
  const choices = instructionsObj.choices;
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  // Render each choice
  choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("button", "button-text");
    choiceElement.innerText = choice.text;
    main.firstChild.appendChild(choiceElement);
    choiceElement.addEventListener("click", () => {
      choice.action(stage[choice.next]);
    });
  });

  //   Logic to return to allow returning to title
  if (!sessionStorage.stage) {
    sessionStorage.setItem("stage", "title");
  }
}
