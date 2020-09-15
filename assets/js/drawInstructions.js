import { stage } from "./stages.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an instructionsT screen
 */

export function drawInstructions() {
  const instructionsObj = stage.instructions;
  const injector = document.createElement("div");
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  heading.innerText = instructionsObj.text;
  container.classList.add("ui-element", "instructions");
  container.appendChild(heading);

  const paragraphs = instructionsObj.paragraphs;
  paragraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = paragraph;
    container.appendChild(paragraphElement);
  });

  const choices = instructionsObj.choices;
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

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
