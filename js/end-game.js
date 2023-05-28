"use strict"

function endGame(points, column){
    
    let exprSrc = document.createElement("div"),
        score = document.createElement("div"),
        endScr = document.createElement("div"),
        phrase = document.createElement("div");
    endScr.classList.add("scrn");
    exprSrc.classList.add("expr");
    score.classList.add("score");
    phrase.classList.add("phrase");
    score.innerHTML = points;

    let game = document.querySelector("#game");
    endScr.append(exprSrc);
    exprSrc.append(score);
    game.append(endScr);
    endScr.append(phrase);
    
    if(column == 4) {
        if(points == 0) {
        exprSrc.style.backgroundImage = "url(jpg/gameover.jpg)";
        phrase.innerHTML = "GAME OVER";
        }   
        if(points > 0 && points <= 1500) {
            exprSrc.style.backgroundImage = "url(jpg/maybe.jpg)";
            phrase.innerHTML = "MAYBE";
        }
        if(points > 1500) {
            exprSrc.style.backgroundImage = "url(jpg/winner.jpg)";
            phrase.innerHTML = "WINNER";
        }
    } else if (column == 6){
        if(points == 0) {
            exprSrc.style.backgroundImage = "url(jpg/gameover.jpg)";
            phrase.innerHTML = "GAME OVER";
            }   
            if(points > 0 && points <= 2000) {
                exprSrc.style.backgroundImage = "url(jpg/maybe.jpg)";
                phrase.innerHTML = "MAYBE";
            }
            if(points > 2000) {
                exprSrc.style.backgroundImage = "url(jpg/winner.jpg)";
                phrase.innerHTML = "WINNER";
            }
    }
}

export { endGame };