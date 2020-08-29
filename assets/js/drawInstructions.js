import { stage } from "./stages.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an instructionsT screen
 */

export function drawInstructions(stageToDraw = stage["instructions"]) {
    const injector = document.createElement("div");
    const container = document.createElement("div");
    const heading = document.createElement("h2");
    heading.innerText = stageToDraw.text;
    container.classList.add("ui-element", "instructions");
    container.appendChild(heading);

    const paragraphs = stageToDraw.paragraphs;
    paragraphs.forEach((paragraph) => {
        const paragraphElement = document.createElement("p");
        paragraphElement.innerText = paragraph;
        container.appendChild(paragraphElement);
    });

    const choices = stageToDraw.choices;
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
    return stageToDraw;
}
