export const audio = {
    play(cue) {
        let currentlyPlaying = document.querySelector('audio');
        if (currentlyPlaying) {
            currentlyPlaying.remove();
        }
        let newTrack = document.createElement("audio");
        newTrack.loop = true;
        newTrack.src = `assets/audio/${cue}.mp3`;
        newTrack.play()
        document.body.appendChild(newTrack)
    }
}