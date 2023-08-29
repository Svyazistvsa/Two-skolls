"use strict"

let game = document.querySelector('#game'),
    cells16 = document.querySelector('#cells16'),
    cells36 = document.querySelector('#cells36'),
    isThis, timerI, points, timerBox, colum;
    
import { exShirt } from "./options.js";
import { rendTitl } from "./menu.js";
import { delFlip } from "./menu.js";
import { endGame } from "./end-game.js";
import { playing } from "./audio.js";
import { insertAudio } from "./audio.js";

let jpgArr = [
    {img: "jpg/skulls0.jpg", be: false},
    {img: "jpg/skulls1.jpg", be: false},
    {img: "jpg/skulls2.jpg", be: false},
    {img: "jpg/skulls3.jpg", be: false},
    {img: "jpg/skulls4.jpg", be: false},
    {img: "jpg/skulls5.jpg", be: false},
    {img: "jpg/skulls6.jpg", be: false},
    {img: "jpg/skulls7.jpg", be: false},
    {img: "jpg/skulls8.jpg", be: false},
    {img: "jpg/skulls9.jpg", be: false},
    {img: "jpg/skulls10.jpg", be: false},
    {img: "jpg/skulls11.jpg", be: false},
    {img: "jpg/skulls12.jpg", be: false},
    {img: "jpg/skulls13.jpg", be: false},
    {img: "jpg/skulls14.jpg", be: false},
    {img: "jpg/skulls15.jpg", be: false},
    {img: "jpg/skulls16.jpg", be: false},
    {img: "jpg/skulls17.jpg", be: false},
    {img: "jpg/skulls18.jpg", be: false}
]



function render(area, column, originClass){

    
    if(area.querySelector(`.${originClass}`)) area.querySelector(`.${originClass}`).style.display = "none";
    if(area.querySelector(".scrn")) area.querySelector(".scrn").remove();
    
    delFlip(area);
    
    insertAudio("up", area);
    insertAudio("down", area);
    insertAudio("haha", area);
    insertAudio("del", area);

    timerBox = document.createElement("div"),        
    stop = document.createElement("button");
    stop.innerText = "СТОП";
    stop.classList.add("stop");
    game.after(timerBox);
    timerBox.append(stop);
    timerBox.classList.add("timer");    

    area.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    
    for(let i=0; i<(column*column); i++){

        let flip = document.createElement('div');
        flip.classList.add('flip');

        let div = document.createElement('div');
        div.classList.add('card');

        let shirt = document.createElement('div');
        shirt.classList.add(`shirt`);
        shirt.classList.add(`${exShirt}`);

        let face = document.createElement('div');
        face.classList.add('face');
        
        div.append(shirt);
        div.append(face);
        flip.append(div);

        if(column == 4) div.classList.add('c16');
        if(column == 6) div.classList.add('c36');
        flip.style.height = div.style.height + "10px";
        area.append(flip);
    }

    let cardArr = area.querySelectorAll(".face");
    
    
    faceAdd(jpgArr, cardArr, column);      

    if(column == 4) {
        timer(160, timerI);
        colum = 4;
    }
    if(column == 6) {
        timer(300, timerI);
        colum = 6;
    }
        
}


 function faceAdd (jpgArr, cardArr, column){
    let dub = 0, oimg, jArr, cArr = Array.from(cardArr), loadArr = [], timerLoad;     
    for(let i = 0; i < (column*column); ++i){
        let img;
        if(dub == 0){            
            if(oimg) {
                jpgArr.find(item => item.img == oimg.img).be = true;                
            };            
            jArr = jpgArr.filter(item => item.be == false);
            oimg = jArr[getRandom(0, (jArr.length-1))];                        
            dub = 2; 
            
        }
        let rand;
        if(cArr.length != 1){
            rand = getRandom(0, (cArr.length-1));
        } else if(cArr.length == 1){
            rand = 0;
        }        

        cArr[rand].style.backgroundImage = `url(${oimg.img})`;
        
        cArr.splice(rand, 1);
        if(cArr.length == 0){            
            for(let i=0; i < jpgArr.length; i++){
                jpgArr[i].be = false;                
            }
        }        
        dub -= 1;
    }
    
}

function flipOver(e){
    let target = e.target,
        open = game.querySelectorAll(".over"); 
    if(open.length > 1) return;
    
    if (target.classList.contains("shirt")){
        if (!isThis){            
            target.parentNode.classList.add("over");
            isThis = target.parentNode.querySelector(".face");
        } else if (isThis){            
            target.parentNode.classList.add("over");
            if (isThis.style.backgroundImage == target.parentNode.querySelector(".face").style.backgroundImage){
                setTimeout(() => {
                    isThis.parentNode.remove();
                    isThis = undefined;
               }, 500);
                setTimeout(() => {
                    target.parentNode.remove();                    
                    
                }, 500);                
            } else {
                setTimeout(() => {
                    isThis.parentNode.classList.remove("over");
                    isThis = undefined;
                }, 500);
                setTimeout(() => target.parentNode.classList.remove("over"), 500); 
            }            
        }
    }    
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timer (time_limit, timerI){
    
    let timeP = 0, timeL,                
        span = document.createElement("span");
        
        
    function fTimeLeft(time){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;            
        }        
        return `${minutes}:${seconds}`;
    }
    document.addEventListener("tbn", function(e){
        stopGame("00:00", timerI, "true")
        return;
    })

    document.querySelector(".stop").onclick = () => {
        stopGame("00:00", timerI, "true")
        rendTitl();
        return;
    }
    document.querySelector('#titular').onclick = () => {
        stopGame("00:00", timerI, "true")
        rendTitl();
        return;
    }
    

    function startTimer(){
        timerI = setInterval(
            () =>{        
                timeP = timeP += 1;
                timeL = time_limit - timeP;
                span.innerHTML = fTimeLeft(timeL);
                
                if(span.innerHTML == `0:00`) {                    
                    stopGame(span.innerHTML, timerI)                    
                }
                if(!game.querySelectorAll(".card").length){   
                    if(span.innerHTML == "0:00") return;                
                    stopGame(span.innerHTML, timerI)                    
                };
            }, 1000
        )
    }
    document.querySelector(".timer").append(span);    
    span.innerHTML =`${fTimeLeft(time_limit)}`;
    startTimer();    
}

function stopGame(time, timerI, not){
    clearInterval(timerI);
    if(not) return;         
    delFlip(game);
    let minSec, secSec, arr;
    arr = time.split(':');
    minSec = arr[0] * 60;
    secSec = arr[1];
    points = (+minSec + +secSec) * 13;
    endGame(points, colum);
    points = 0;
    game.style.gridTemplateColumns = `1fr`;   
}

cells16.onclick = () => render(game, 4, "titular");
cells36.onclick = () => render(game, 6, "titular");

game.addEventListener("click", flipOver);

export {render};
export {jpgArr};