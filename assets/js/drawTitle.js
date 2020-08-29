import { startGame } from './application.js'

/**
 *
 * @param {Object} stageToDraw The current stage which the game should draw as a title screen
 */

export function drawTitle() {
    // Create Elements
    const injector = document.createElement("div");
    const container = document.createElement("div");
    const heading = document.createElement("h2");
    const main = document.getElementById("main-content");

    // Configure Elements
    container.classList.add("ui-element", "title");
    heading.innerText = 'Greetings Heroes';
    injector.appendChild(container);
    container.appendChild(heading);
    main.innerHTML = injector.innerHTML;

    // Create Option 1
    const choice = document.createElement('div')
    choice.classList.add('button', 'button-text')
    choice.innerText = 'Play Game'
    choice.addEventListener('click', () => { startGame() })
    main.firstChild.appendChild(choice)

    // Create Option 2
    const choice2 = document.createElement('div')
    choice2.classList.add('button', 'button-text')
    choice2.innerText = 'Instructions'
    main.firstChild.appendChild(choice2)

    // Create Option 3
    const choice3 = document.createElement('div')
    choice3.classList.add('button', 'button-text')
    choice3.innerText = 'Preferences'
    main.firstChild.appendChild(choice3)

    // Clear Session Storage
    sessionStorage.clear()

}


