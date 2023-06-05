"use strict"
let full = document.querySelector("#full"), 
    container = document.querySelector("#container");
    
full.addEventListener("click", () => thatFull(container));

function thatFull(nd){
  if (container.fullscreenEnabled){
    document.body.exitFullscreen(document.body.container);
  } else {
    document.body.requestFullscreen(document.body.container);
  }
}