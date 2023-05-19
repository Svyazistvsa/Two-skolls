"use strict"
import { delFlip } from "./menu.js";

function endGame(points){
    let exprSrc = document.createElement("div"),
        score = document.createElement("div"),
        endScr = document.createElement("div");
    endScr.classList.add("scrn");
    exprSrc.classList.add("expr");
    score.classList.add("score");
    score.innerHTML = points;

    let game = document.querySelector("#game");
    endScr.append(exprSrc);
    exprSrc.append(score);
    game.append(endScr);
alert(points);
    
    if(points == 0) exprSrc.style.backgroundImage = "url(jpg/gameover.jpg)";    
    if(points <= 1000) exprSrc.style.backgroundImage = "url(jpg/maybe.jpg)";
    if(points > 1000) exprSrc.style.backgroundImage = "url(jpg/winner.jpg)";
}

export { endGame };