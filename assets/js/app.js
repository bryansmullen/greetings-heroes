class Character {
  constructor(name, strength, health, magic) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.magic = magic;
  }
}

const jayna = new Character("jayna", 8, 100, 20);
const bjorna = new Character("bjorna", 10, 120, 10);
const yolo = new Character("yolo", 4, 70, 40);
const zazzerpan = new Character("zazzerpan", 2, 40, 100);

const characters = [jayna, bjorna, yolo, zazzerpan];

const mainContent = document.querySelector("#main-content");
const playGameButton = document.querySelector("#play-game-button");

const renderCharacters = () => {
  htmlToRender = "";
  characters.forEach((character) => {
    characterHTML = `
    <div class="character-card">
      <img src="assets/img/${character.name}.png" alt="${character.name}" />
      <h2>${character.name}</h2>
      <div class="character-info">
        <p>Name: ${character.name}</p>
        <p>Strength: ${character.strength}</p>
        <p>Health: ${character.health}</p>
        <p>Magic: ${character.magic}</p>
      </div>
    </div>`;
    htmlToRender += characterHTML;
  });
  mainContent.innerHTML = `<h2 class="character-heading">Choose Your Hero</h2><div class = character-selection>${htmlToRender}</div>`;
};

console.log(renderCharacters);

playGameButton.addEventListener("click", renderCharacters);
