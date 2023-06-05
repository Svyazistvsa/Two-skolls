"use strict"
let full = document.querySelector("#full"), 
    container = document.querySelector("#container");
    
full.addEventListener("click", thatFull);

function thatFull(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  } else {
    if(document.fullscreenEnabled){
      document.exitFullscreen();
    }
  }
}