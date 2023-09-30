"use strict"

let mute = document.querySelector("#mute");

mute.onclick = () => {
  let m = document.querySelector("#Harry");
  if(m.muted){
    m.muted = false;
  }else{
    m.muted = true;
  }  
}

function playing(track){
  document.querySelector(`#${track}`).play();
  document.querySelector(`#${track}`).volume = .1;
}

function stoping(track){
  let trk = document.querySelector(`#${track}`);
  trk.pause();
  trk.currentTime = 0.0;
}

function insertAudio(track, area, loop = ""){
  area.insertAdjacentHTML("afterbegin", `<audio id="${track}" ${loop}  volume="0.5">
      <source src="audio/${track}.ogg" type="audio/ogg" >
      <source src="audio/${track}.mp3" type="audio/mpeg" >
    </audio>`
    )
}

export { playing };
export { insertAudio };
export { stoping };