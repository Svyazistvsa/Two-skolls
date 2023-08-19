"use strict"

import { jpgArr } from "./game.js";
preloadImg(jpgArr);
window.addEventListener('load', () => {
  //preloadImg(jpgArr);
  document.querySelector("#load").classList.add("none");
})

/*async*/ function preloadImg(arr){
  
    for(let i = 0; i < arr.length; i++){
      let image = new Image();
      image.src = arr[i].img;
    }
  
  
}