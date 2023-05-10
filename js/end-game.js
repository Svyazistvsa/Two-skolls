"use strict"
import { delFlip } from "./menu.js";

function endGame(points){
    delFlip();
    let exprSrc = document.createElement("div"),
        score = document.createElement("div"),
        endScr = document.createElement("div");
    endScr.classList.add("scrn");
    exprSrc.classList.add("expr");
    score.classList.add("score");
    score.innerHTML = points;

    let game = document.querySelector(".game");
    game.append("")
}