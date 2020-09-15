const soundIcon = document.getElementById("toggle-sound");
/**
 * Plays Audio In the Browser.
 *
 * This function takes one argument - the cue name of the track to be played. The cue should exist in the assets/audio/ directory and be in .mp3 format
 *
 * @param {string}   string      The audio cue to be played, formatted as .mp3
 *
 */
export const audio = function (cue) {
  let currentlyPlaying = document.querySelector("audio");
  if (currentlyPlaying) {
    currentlyPlaying.remove();
  }
  let newTrack = document.createElement("audio");
  newTrack.classList.add("audio", cue);
  newTrack.loop = true;
  newTrack.src = `assets/audio/${cue}.mp3`;
  newTrack.play();
  document.body.appendChild(newTrack);
  if (soundIcon.classList.contains("fa-volume-mute")) {
    newTrack.muted = true;
  }
};

export const sfx = function (cue) {
  let sfx = document.createElement("audio");
  if (cue === 'attack') {
    sfx.src = 'assets/audio/attack.wav';
  } else if (cue === 'heal') {
    sfx.src = 'assets/audio/heal.mp3'
  }
  sfx.play();
}
soundIcon.addEventListener("click", () => {
  toggleSound();
});

export const toggleSound = function () {
  const audioElement = document.querySelector("audio");
  if (soundIcon.classList.contains("fa-volume-mute")) {
    soundIcon.classList.replace("fa-volume-mute", "fa-volume-up");
  } else {
    soundIcon.classList.replace("fa-volume-up", "fa-volume-mute");
  }
  if (soundIcon.classList.contains("fa-volume-mute")) {
    audioElement.muted = true;
  } else {
    audioElement.muted = false;
  }
};
