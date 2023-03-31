"use strict"

let game = document.querySelector('#game'),
    cells16 = document.querySelector('#cells16'),
    cells36 = document.querySelector('#cells36');

let jpgArr = [
    {img: "../jpg/skulls0", be: false},
    {img: "../jpg/skulls1", be: false},
    {img: "../jpg/skulls2", be: false},
    {img: "../jpg/skulls3", be: false},
    {img: "../jpg/skulls4", be: false},
    {img: "../jpg/skulls5", be: false},
    {img: "../jpg/skulls6", be: false},
    {img: "../jpg/skulls7", be: false},
    {img: "../jpg/skulls8", be: false},
    {img: "../jpg/skulls9", be: false},
    {img: "../jpg/skulls10", be: false},
    {img: "../jpg/skulls11", be: false},
    {img: "../jpg/skulls12", be: false},
    {img: "../jpg/skulls13", be: false},
    {img: "../jpg/skulls14", be: false},
    {img: "../jpg/skulls15", be: false}
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
}

function addFace(collect, ){
    //Надо писать через классы!!!
}

function flipOver(e){
    let target = e.target;
    if(target.classList.contains("shirt")){
        target.parentNode.classList.add("over");
    }
}



cells16.onclick = () => render(game, 4, "titular");
cells36.onclick = () => render(game, 6, "titular");

game.addEventListener("click", flipOver);