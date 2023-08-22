"use strict"

import { jpgArr } from "./game.js";
preloadImg(jpgArr);
window.addEventListener('load', () => {
  
  document.querySelector("#load").classList.add("none");
})

function preloadImg(arr){
  
    for(let i = 0; i < arr.length; i++){
      let image = new Image();
      image.src = arr[i].img;
    }
    let shirt = new Image();
    shirt.src = "jpg/shirt0.jpg";
    let woll = new Image();
    woll.src = "jpg/wollpaper10.jpg";
    let win = new Image();
    win.src = "jpg/winner.jpg";
    let may = new Image();
    may.src = "jpg/maybe.jpg";
    let over = new Image();
    over.src = "jpg/gameover.jpg";
  
}