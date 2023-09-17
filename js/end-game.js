"use strict"

import { render } from "./game.js";
import { playing } from "./audio.js";

let clmn, 
    game = document.querySelector("#game"); 

function endGame(points, column){
    
    let exprSrc = document.createElement("div"),
        score = document.createElement("div"),
        endScr = document.createElement("div"),
        phrase = document.createElement("div"), 
        input = document.createElement("input");
    endScr.classList.add("scrn");
    exprSrc.classList.add("expr");
    score.classList.add("score");
    phrase.classList.add("phrase");
    input.classList.add("restart");
    score.innerHTML = points;
    input.type = "button";
    input.value = "заново";

    endScr.append(exprSrc);
    exprSrc.append(score);
    game.append(endScr);
    endScr.append(phrase);
    endScr.append(input);
    
    clmn = column;
    
    if(column == 4) {
        if(points == 0) {
            exprSrc.style.backgroundImage = "url(jpg/gameover.jpg)";
            phrase.innerHTML = "GAME OVER";
            playing("yarkiy");
        }   
        if(points > 0 && points <= 1500) {
            exprSrc.style.backgroundImage = "url(jpg/maybe.jpg)";
            phrase.innerHTML = "MAYBE";
            playing("akkord");
        }
        if(points > 1500) {
            exprSrc.style.backgroundImage = "url(jpg/winner.jpg)";
            phrase.innerHTML = "WINNER";
            playing("fanfar");
        }
    } else if (column == 6){
        if(points == 0) {
                exprSrc.style.backgroundImage = "url(jpg/gameover.jpg)";
                phrase.innerHTML = "GAME OVER";
                playing("yarkiy");
            }   
            if(points > 0 && points <= 2000) {
                exprSrc.style.backgroundImage = "url(jpg/maybe.jpg)";
                phrase.innerHTML = "MAYBE";
                playing("akkord");
            }
            if(points > 2000) {
                exprSrc.style.backgroundImage = "url(jpg/winner.jpg)";
                phrase.innerHTML = "WINNER";
                playing("fanfar");
            }
    }
document.body.querySelector(".restart").addEventListener("click", restartGame);
}
function restartGame (){
  render(game, clmn, "scrn");
}



export { endGame };