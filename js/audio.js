"use strict"

/*Написать функцию проигрывания музыки и импортировать*/
function playing(track){
  track.play();
}

function insertAudio(track, area){
  area.insertAdjasentHTML("afterbegin", `
    <audio>
      <source src="audio/${track}.ogg" type="audio/ogg" >
      <source src="audio/${track}.mp3" type="audio/mpeg" >
    </audio>
  `)
}

export { playing };
export { insertAudio };