// This file is responsible for rendering character screens

import { progressToNextScene, setPreludeInfo } from "./stages.js";

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as an character screen
 */

export function drawCharacter(stageObj) {
  // Set Up Container and Injector
  const injector = document.createElement("div");
  let container = document.createElement("div");
  container.classList.add("ui-element", "character");

  // Draw Heading
  const heading = document.createElement("h2");
  heading.classList.add("character-heading");
  heading.innerText = stageObj.text;
  container.appendChild(heading);

  // Draw Character Container
  const characterContainer = document.createElement("div");
  characterContainer.classList.add("character-selection");
  const characters = stageObj.characters;
  container.append(characterContainer);
  injector.appendChild(container);

  // Set up main injector
  const main = document.getElementById("main-content");
  main.innerHTML = injector.innerHTML;

  // Render each character
  characters.forEach((character) => {
    // Set up character Card
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");
    const characterImage = document.createElement("img");
    characterImage.src = character.imagePath;
    characterImage.classList.add(character.name)
    const stats = document.createElement('div')
    stats.innerText = character.name
    stats.classList.add('stats')

    // Bundle and append character card
    characterCard.append(stats)
    characterCard.append(characterImage);
    characterContainer.append(characterCard);
    let container = document.querySelector(".character-selection");
    container.appendChild(characterCard);

    // Wire up event listener to set chosen character name and progress
    characterCard.addEventListener("click", () => {
      sessionStorage.setItem("character", character.name);
      setPreludeInfo();
      progressToNextScene();
    });
  });
}
