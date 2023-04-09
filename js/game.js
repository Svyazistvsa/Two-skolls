"use strict"

let game = document.querySelector('#game'),
    cells16 = document.querySelector('#cells16'),
    cells36 = document.querySelector('#cells36'),
    isThis;

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
        
        area.append(flip);
    }

    let cardArr = area.querySelectorAll(".face");
    faceAdd(jpgArr, cardArr, column);
}

function faceAdd (jpgArr, cardArr, column){
    let dub = 0, oimg, jArr, cArr = Array.from(cardArr);     
    for(let i = 0; i < (column*column); ++i){
        let rand;
        if(dub == 0){            
            if(oimg) {
                jpgArr.find(item => item.img == oimg.img).be = true;                
            };
            
            jArr = jpgArr.filter(item => item.be == false);
            oimg = jArr[getRandom(0, (jArr.length-1))];    
                     
            dub = 2; 
        }

        if(cArr.length != 1){
            rand = getRandom(0, (cArr.length-1));
        } else if(!cArr.length - 1){
            rand = 0;
        }

        cArr[rand].style.backgroundImage = `url(${oimg.img})`;        
        cArr.splice(rand, 1);        
        dub -= 1;
    }
}

function flipOver(e){
    let target = e.target;
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
               }, 1000);
                setTimeout(() => target.parentNode.remove(), 1000);        
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



cells16.onclick = () => render(game, 4, "titular");
cells36.onclick = () => render(game, 6, "titular");

game.addEventListener("click", flipOver);