import { stage } from "./stages.js";


/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as a story screen
 */
export function drawNarrative(stageObj) {

  console.dir(stageObj)
  // Create Elements
  const injector = document.createElement("div");
  const container = document.createElement("div");
  const text = document.createElement("p");
  const choices = stageObj.choices;
  const main = document.getElementById("main-content");

  // Configure Elements
  container.classList.add("ui-element", "story");
  text.id = "story";
  text.innerText = stageObj.text;
  container.appendChild(text);
  injector.appendChild(container);
  main.innerHTML = injector.innerHTML;

  // Create Choices
  choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("button", "button-text");
    choiceElement.innerText = choice.text;
    main.firstChild.appendChild(choiceElement);
    choiceElement.addEventListener("click", () => {
      choice.action(stage[choice.next]);
    });
  });

}


