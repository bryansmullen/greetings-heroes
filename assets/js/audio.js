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
  newTrack.loop = true;
  newTrack.src = `assets/audio/${cue}.mp3`;
  newTrack.play();
  document.body.appendChild(newTrack);
};
const soundIcon = document.getElementById("toggle-sound");
export const toggleSound = function () {
  if (soundIcon.classList.contains("fa-volume-mute")) {
    soundIcon.classList.remove("fa-volume-mute");
    soundIcon.classList.add("fa-volume-up");
  } else {
    soundIcon.classList.remove("fa-volume-up");
    soundIcon.classList.add("fa-volume-mute");
  }
};
const toggleSoundIcon = () => {};
const toggleAudio = () => {
  const audioElement = document.querySelector("audio");
  if (audioElement.muted) {
    audioElement.muted = false;
    volumeOn = true;
  } else {
    audioElement.muted = true;
    volumeOn = false;
  }
  toggleSoundIcon();
};
