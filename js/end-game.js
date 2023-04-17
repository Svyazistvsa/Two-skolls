"use strict"
import{delFlip } from "./menu.js"

function endGame(points){
    delFlip();
    let exprSrc = document.createElement("div"),
        score = document.createElement("div"),
        endScr = document.createElement("div");
    endScr.classList.add("screen");
    exprSrc.classList.add("expr");
    score.classList.add("score");
    score.innerHTML = score;

    document.querySelector(".game");
}