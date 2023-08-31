"use strict"
let full = document.querySelector("#full"), 
    cl = new Event("onclick");
    
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