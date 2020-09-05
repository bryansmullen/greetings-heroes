import { stage } from "./stages.js";
import { progressToNextScene, setPreludeInfo } from "./stages.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an character screen
 */

export function drawCharacter(stageObj) {
  const injector = document.createElement("div");

  let container = document.createElement("div");
  container.classList.add("ui-element", "character");
  const heading = document.createElement("h2");
  heading.classList.add("character-heading");
  heading.innerText = stageObj.text;
  container.appendChild(heading);

  const characterContainer = document.createElement("div");
  characterContainer.classList.add("character-selection");

  const characters = stageObj.characters;
  container.append(characterContainer);
  injector.appendChild(container);
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    const characterImage = document.createElement("img");
    characterImage.src = character.imagePath;
    characterCard.append(characterImage);
    characterContainer.append(characterCard);
    let container = document.querySelector(".character-selection");
    container.appendChild(characterCard);
    characterCard.addEventListener("click", () => {
      sessionStorage.setItem("character", character.name);

      setPreludeInfo();
      progressToNextScene();
    });
  });
}
