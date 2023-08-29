"use strict"

/*Написать функцию проигрывания музыки и импортировать*/
function playing(track){
  document.querySelector(`#${track}`).play();
}

function insertAudio(track, area){
  area.insertAdjacentHTML("afterbegin",
  `<audio id="${track}" >
      <source src="audio/${track}.ogg" type="audio/ogg" >
      <source src="audio/${track}.mp3" type="audio/mpeg" >
    </audio>`
    )
}

export { playing };
export { insertAudio };