"use strict"

let game = document.querySelector('#game'),
    cells16 = document.querySelector('#cells16'),
    cells36 = document.querySelector('#cells36'),
    isThis, timerI, points;

    

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

    if(area.querySelector(`.${originClass}`)) area.querySelector(`.${originClass}`).remove();

    let flipps = area.querySelectorAll('.flip');
    if(flipps.length != 0){
        for(let i=0; i<flipps.length; i++){
            flipps[i].remove();            
        }
    }

    area.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    
    for(let i=0; i<(column*column); i++){

        let flip = document.createElement('div');
        flip.classList.add('flip');

        let div = document.createElement('div');
        div.classList.add('card');

        let shirt = document.createElement('div');
        shirt.classList.add('shirt');

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
        if(column == 4) timer(160, timerI);
        if(column == 6) timer(300, timerI);
}

function faceAdd (jpgArr, cardArr, column){
    let dub = 0, oimg, jArr, cArr = Array.from(cardArr);     
    for(let i = 0; i < (column*column); ++i){
        
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
               }, 800);
                setTimeout(() => {
                    target.parentNode.remove();                    
                    
                }, 800);                
            } else {
                setTimeout(() => {
                    isThis.parentNode.classList.remove("over");
                    isThis = undefined;
                }, 800);
                setTimeout(() => target.parentNode.classList.remove("over"), 800);                
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
        span.classList.add("timer");
        
    function fTimeLeft(time){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;            
        }
        
        return `${minutes}:${seconds}`;
    }

    function startTimer(){
        timerI = setInterval(
            () =>{        
                timeP = timeP += 1;
                timeL = time_limit - timeP;
                span.innerHTML = fTimeLeft(timeL);                
                if(span.innerHTML == `0:00`) {                    
                    stopGame(span.innerHTML, timerI);
                    span.remove();
                }
                if(!game.querySelectorAll(".card").length){
                    stopGame(span.innerHTML, timerI)
                    span.remove();
                };
            }, 1000
        )
    }
    game.after(span);
    span.innerHTML =`${fTimeLeft(time_limit)}`;
    startTimer()
}

function stopGame(time, timerI){
    clearInterval(timerI);    
    let minSec, secSec, arr;
    arr = time.split(':');
    minSec = arr[0] * 60;
    secSec = arr[1];
    points = +minSec + secSec;
    alert(points);
}

cells16.onclick = () => render(game, 4, "titular");
cells36.onclick = () => render(game, 6, "titular");

game.addEventListener("click", flipOver);