"use strict"

let game = document.querySelector('#game'),
    cells16 = document.querySelector('#cells16'),
    cells36 = document.querySelector('#cells36');

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

cells16.onclick = () => render(game, 4, "titular");
cells36.onclick = () => render(game, 6, "titular");