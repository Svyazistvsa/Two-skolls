"use strict"
let full = document.querySelector("#full"), 
    container = document.querySelector("#container");
    
full.addEventListener("click", () => thatFull(container));

function thatFull(nd){
  if(container.fullscreenElement){
    container.exitFullscreen();
  } else {
    container.requestFullscreen();
  }
}