"use strict"

/*Написать функцию проигрывания музыки и импортировать*/
function playing(track){
  document.querySelector(`#${track}`).play();
}

function stoping(track){
  let trk = document.querySelector(`#${track}`);
  trk.pause();
  trk.currentTime = 0.0;
}

function insertAudio(track, area, loop = ""){
  area.insertAdjacentHTML("afterbegin", `<audio id="${track}" ${loop} >
      <source src="audio/${track}.ogg" type="audio/ogg" >
      <source src="audio/${track}.mp3" type="audio/mpeg" >
    </audio>`
    )
}

export { playing };
export { insertAudio };
export { stoping };