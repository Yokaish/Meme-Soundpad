function playSong(idSong) {
    document.querySelector(idSong).play();
}

const keyList = document.querySelectorAll('.tecla');

for (let i = 0; i < keyList.length; i++) {
    const keys = keyList[i];
    const song = keys.classList[1];
    const idAudio = `#som_${song}`

    keyList[i].onclick = function() {
        playSong(idAudio)
    }
}