import { updateUi } from "./ui.js";
import { audio } from "./audio.js";

export class Game {
  constructor() {
    this.character = undefined;
  }
  toggleSoundIcon() {
    const soundIcon = document.getElementById('toggle-sound');
    if (soundIcon.classList.contains('fa-volume-mute')) {
      soundIcon.classList.remove('fa-volume-mute')
      soundIcon.classList.add('fa-volume-up')
    } else {
      soundIcon.classList.remove('fa-volume-up')
      soundIcon.classList.add('fa-volume-mute')
    }
  }
  toggleAudio() {
    const audio = document.querySelector('audio');
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    this.toggleSoundIcon()
  }
  titleScreen() {
    updateUi('title-screen')
    document.getElementById('play-game-button').addEventListener('click', () => {
      this.chooseCharacter();
    })
    document.getElementById('exit-game').addEventListener('click', () => {
      this.titleScreen()
    })
    document.getElementById('instructions-button').addEventListener('click', () => {
      this.instructionsScreen()
    })
    document.getElementById('info-button').addEventListener('click', () => {
      this.instructionsScreen()
    })
  }
  instructionsScreen() {
    updateUi('instructions-screen')
    document.getElementById('return-to-title').addEventListener('click', () => {
      this.titleScreen()
    })
  }
  chooseCharacter() {
    updateUi('character-screen')
    audio.play('1m01')
    this.toggleSoundIcon()
    document.getElementById('bjorna').addEventListener('click', () => {
      this.character = 'bjorna'

      this.stage1();
    })
    document.getElementById('jayna').addEventListener('click', () => {
      this.character = 'jayna'

      this.stage1();
    })
    document.getElementById('yolo').addEventListener('click', () => {
      this.character = 'yolo'

      this.stage1();
    })
    document.getElementById('zazzerpan').addEventListener('click', () => {
      this.character = 'zazzerpan'

      this.stage1();
    })
  }
  stage1() {
    updateUi('first-story')
    document.getElementById('scene-one-progress').addEventListener('click', () => {
      this.stage2();
    })
  }
  stage2() {
    updateUi('second-story')
    document.getElementById('scene-two-progress').addEventListener('click', () => {
      this.stage3();
    })
  }
  stage3() {
    updateUi('third-story')
    document.getElementById('scene-three-progress').addEventListener('click', () => {
      this.stage4();
    })
  }
  stage4() {
    updateUi('fourth-story')
    document.getElementById('scene-four-progress').addEventListener('click', () => {
      this.stage5();
    })
  }
  stage5() {
    updateUi('fifth-story')
    document.getElementById('scene-five-progress').addEventListener('click', () => {
      this.stage6();
    })
  }
  stage6() {
    updateUi('sixth-story')
    document.getElementById('scene-six-progress').addEventListener('click', () => {
      this.battle1();
    })
  }
  stage7() {
    updateUi('seventh-story')
    audio.play('1m02')
    document.getElementById('scene-seven-progress').addEventListener('click', () => {
      this.battle2();
    })
  }
  stage8() {
    updateUi('eighth-story')
    audio.play('1m03')
    document.getElementById('scene-eight-progress').addEventListener('click', () => {
      this.stage9();
    })
  }
  stage9() {
    updateUi('ninth-story')
    document.getElementById('scene-nine-progress').addEventListener('click', () => {
      this.stage10();
    })
  }
  stage10() {
    updateUi('tenth-story')
    document.getElementById('scene-ten-progress').addEventListener('click', () => {
      this.stage11();
    })
  }
  stage11() {
    updateUi('eleventh-story')
    document.getElementById('scene-eleven-progress').addEventListener('click', () => {
      this.stage12();
    })
  }
  stage12() {
    updateUi('twelfth-story')
    audio.play('1m04')
    document.getElementById('scene-twelve-progress').addEventListener('click', () => {
      this.battle3();
    })
  }
  finalStage() {
    updateUi('final-scene')
    document.getElementById('victory').addEventListener('click', () => {
      this.victoryOne();
    })
    document.getElementById('game-over').addEventListener('click', () => {
      this.gameOverOne();
    })
  }
  victoryOne() {
    updateUi('victory-one')
    document.getElementById('victory-one-progress').addEventListener('click', () => {
      this.victoryTwo();
    })
  }

  victoryTwo() {
    updateUi('victory-two')
    document.getElementById('victory-two-progress').addEventListener('click', () => {
      this.victoryThree();
    })
  }
  victoryThree() {
    updateUi('victory-three')
    document.getElementById('victory-three-progress').addEventListener('click', () => {
      this.titleScreen();
    })
  }
  gameOverOne() {
    updateUi('game-over-one')
    document.getElementById('game-over-one-progress').addEventListener('click', () => {
      this.gameOverTwo();
    })
  }
  gameOverTwo() {
    updateUi('game-over-two')
    document.getElementById('game-over-two-progress').addEventListener('click', () => {
      this.gameOverThree();
    })
  }
  gameOverThree() {
    updateUi('game-over-three')
    document.getElementById('game-over-three-progress').addEventListener('click', () => {
      this.gameOverFour();
    })
  }
  gameOverFour() {
    updateUi('game-over-four')
    document.getElementById('game-over-four-progress').addEventListener('click', () => {
      this.titleScreen();
    })
  }
  battle1() {
    updateUi('battle-one')
    // ==========================================================//

    const attack = document.querySelector('.attack')
    attack.addEventListener('click', () => { console.log('attack') })
    const defend = document.querySelector('.defend')
    defend.addEventListener('click', () => { console.log('defend') })
    const special = document.querySelector('.special')
    special.addEventListener('click', () => { console.log('special') })
    const playerHealthReadout = document.getElementById('player-health')
    const enemyHealthReadout = document.getElementById('enemy-health')

    const player = {
      healthStat: 100,
      defenceStat: 50,
      attackStat: 70,
      attack() {
        enemy.health -= 10
        console.dir(enemyHealthReadout)

      }
    }
    const enemy = {
      health: 60,
      defence: 40,
      attack: 50
    }









    // ==========================================================//


    document.getElementById('battle-one-progress').addEventListener('click', () => {
      this.stage7();
    })
  }
  battle2() {
    updateUi('battle-two')
    document.getElementById('battle-two-progress').addEventListener('click', () => {
      this.stage8();
    })
  }
  battle3() {
    updateUi('battle-three')
    document.getElementById('battle-three-progress').addEventListener('click', () => {
      this.finalStage();
    })
  }
}


