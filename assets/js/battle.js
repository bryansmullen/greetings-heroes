// Playable Characters

export class Player {
  constructor(name, strength, defense, magicDefense, health) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.magicDefense = magicDefense;
    this.health = health;
    this.maxHealth = health;
  }
}

export class Enemy {
  constructor(name, strength, defense, magicDefense, health) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.magicDefense = magicDefense;
    this.health = health;
    this.maxHealth = health;
  }
}

// Battle Logic

export class Battle {
  constructor(enemy, attackBtn, defendBtn, specialBtn, battleUi, progressBtn, nextStage, enemyHealthBarId, option) {
    this.attackBtn = attackBtn;
    this.defendBtn = defendBtn;
    this.specialBtn = specialBtn;
    this.battleUi = battleUi;
    this.progressBtn = progressBtn;
    this.nextStage = nextStage;
    this.option = option;
    this.enemy = enemy;
    this.enemyHealthBarId = enemyHealthBarId;
  }
  updateHealth() {
    enemy.health -= 10;
  }
  initialiseBattleCommand(attackBtn, defendBtn, specialBtn) {
    attackBtn.addEventListener("click", () => {
      this.playerMove(this.enemy, "forest-people-health", "attack");
      this.checkHealth(this.progressBtn);
    });
    defendBtn.addEventListener("click", () => {
      this.playerMove(enemy, "forest-people-health", "attack");
      this.checkHealth(this.progressBtn);
    });
    specialBtn.addEventListener("click", () => {
      this.playerMove(enemy, "forest-people-health", "attack");
      this.checkHealth(this.progressBtn);
    });
  }

  playerMove(enemy, enemyHealthBar, choice) {
    switch (choice) {
      case "attack":
        enemy.health -= 10;
        enemyHealthBar = document.getElementById(this.enemyHealthBarId);
        enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
        break;
      case "defend":
        console.log("defend");
        break;
      case "special":
        console.log("special");
        break;
    }
  }
  checkHealth(progressBtn) {
    console.dir(progressBtn);
    if (this.enemy.health <= 0) {
      document.getElementById(progressBtn).classList.remove("hidden");
    }
  }
  run() {
    this.initialiseBattleCommand(this.attackBtn, this.defendBtn, this.specialBtn);
    updateAndListen(this.battleUi, this.progressBtn, this.nextStage, this.option);
  }
}
