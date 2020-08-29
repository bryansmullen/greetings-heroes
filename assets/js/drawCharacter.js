import { stage } from "./stages.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an character screen
 */

export function drawCharacter(stageToDraw = stage["character"]) {
    const injector = document.createElement("div");
    let container = document.createElement("div");
    container.classList.add("ui-element", "character");
    const heading = document.createElement("h2");
    heading.classList.add("character-heading");
    heading.innerText = stageToDraw.text;
    container.appendChild(heading);

    const characterContainer = document.createElement("div");
    characterContainer.classList.add("character-selection");

    const characters = stageToDraw.characters;
    container.append(characterContainer);
    injector.appendChild(container);
    const main = document.getElementById("main-content");
    main.innerHTML = injector.innerHTML;

    characters.forEach((character) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");
        const characterHeading = document.createElement("h3");
        characterHeading.innerText = character.name;
        const characterImage = document.createElement("img");
        characterImage.src = character.imagePath;
        characterCard.append(characterHeading);
        characterCard.append(characterImage);
        characterContainer.append(characterCard);
        let container = document.querySelector(".character-selection");
        container.appendChild(characterCard);
        characterCard.addEventListener("click", () => {
            sessionStorage.setItem("character", character.name);
        });
    });
    setGameVariables();
    return stageToDraw;
}
