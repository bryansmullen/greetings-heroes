class Character {
  constructor(classType, health, mana, strength) {
    this.classType = classType;
    this.health = health;
    this.magic = mana;
    this.strength = strength;
  }
}
class Player extends Character {
  constructor(classType, health, mana, strength, speed) {
    super(classType, health, mana, strength);
    this.speed = speed;
  }
}

class Enemy extends Character {
  constructor(classType, health, strength, agility) {
    super(classType, health, 0, strength);
    this.agility = agility;
  }
}

let player;

const bjorna = document.getElementById("bjorna");
const jayna = document.getElementById("jayna");
const yolo = document.getElementById("yolo");
const zazzerpan = document.getElementById("zazzerpan");
let getInterface = document.querySelector(".interface");

// ======== Why does this method succeed ==========
const gameStart = (character) => {
  gameManager.resetPlayer(character);
};
// =============================================

const gameManager = {
  printCharacter(character) {
    getInterface.innerHTML = `You have chosen ${character}`;
  },
  resetPlayer(character) {
    switch (character) {
      case "bjorna":
        player = new Player("Warrior", 120, 40, 30, 60);
        this.printCharacter(character);
        break;
      case "jayna":
        player = new Player("Knight", 120, 40, 30, 60);
        this.printCharacter(character);

        break;
      case "yolo":
        player = new Player("Thief", 120, 40, 30, 60);
        this.printCharacter(character);

        break;
      default:
        player = new Player("wizard", 120, 40, 30, 60);
        this.printCharacter(character);

        break;
    }
  },

  // ======== Why does this method fail ==========
  startGame() {
    this.resetPlayer(character);
  },
  // =============================================

  startBjorna() {
    gameStart("bjorna");
  },
  startJayna() {
    gameStart("jayna");
  },
  startYolo() {
    startGame("yolo");
  },
  startZazzerpan() {
    startGame("zazzerpan");
  },
};

bjorna.addEventListener("click", gameManager.startBjorna);
jayna.addEventListener("click", gameManager.startJayna);
yolo.addEventListener("click", gameManager.startYolo);
zazzerpan.addEventListener("click", gameManager.startZazzerpan);
