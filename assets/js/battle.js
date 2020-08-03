// Battle Logic

import { drawNarrative } from "./application.js";
import { stage } from "./story.js";
/**
 * Battle.
 *

 */
export class Battle {
  constructor(player, enemy, attackBtn, defendBtn, specialBtn, progressBtn, playerHealthBarId, enemyHealthBarId, updateField) {
    this.player = player;
    this.enemy = enemy;
    this.attackBtn = attackBtn;
    this.defendBtn = defendBtn;
    this.specialBtn = specialBtn;
    this.progressBtn = progressBtn;
    this.playerHealthBarId = playerHealthBarId;
    this.enemyHealthBarId = enemyHealthBarId;
    this.updateField = document.getElementById(updateField);
  }

  updateHealth() {
    enemy.health -= 10;
  }

  initialiseBattleCommand(attackBtn, defendBtn, specialBtn) {
    attackBtn.addEventListener("click", () => {
      this.playerMove(this.enemy, "enemy-health", "attack");

      setTimeout(() => {
        this.computerMove(this.player, "player-health");
      }, 1000);
      this.checkHealth(this.progressBtn);
    });
    defendBtn.addEventListener("click", () => {
      this.playerMove(enemy, "enemy-health", "attack");
      this.computerMove(this.player, "player-health");
      this.checkHealth(this.progressBtn);
    });
    specialBtn.addEventListener("click", () => {
      this.playerMove(enemy, "enemy-health", "attack");
      this.computerMove(this.player, "player-health");
      this.checkHealth(this.progressBtn);
    });
  }

  playerMove(enemy, enemyHealthBar, choice) {
    switch (choice) {
      case "attack":
        enemy.health -= 10;
        enemyHealthBar = document.getElementById(this.enemyHealthBarId);
        enemyHealthBar.value = (enemy.health / enemy.maxHealth) * 100;
        console.dir(this.player);
        this.updateField.innerText = `${this.player.name} attacked!`;
        break;
      case "defend":
        console.log("defend");
        this.updateField.innerText = `${this.player.name} defended!`;
        break;
      case "special":
        console.log("special");
        this.updateField.innerText = `${this.player.name} used their special ability!`;
        break;
    }
  }
  computerMove(player, playerHealthBar) {
    player.health -= 5;
    playerHealthBar = document.getElementById(this.playerHealthBarId);
    console.dir(playerHealthBar);
    this.updateField.innerText = `${this.enemy.name} attacked!`;
    playerHealthBar.value = (player.health / player.maxHealth) * 100;
  }

  checkHealth(progressBtn) {
    console.dir(progressBtn);
    if (this.enemy.health <= 0) {
      document.getElementById(progressBtn).classList.remove("hidden");
    } else if (this.player.health <= 0) {
      drawNarrative(stage["Game Over"]);
    }
  }
  run() {
    this.initialiseBattleCommand(this.attackBtn, this.defendBtn, this.specialBtn);
  }
}
