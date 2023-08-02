"use strict"

import {render} from "./game.js";

let startButton = document.querySelector(".startButton"),
    form = document.forms.variant,
    variantCells = form.elements.cells,
    cells;

    for(let x=0; x<variantCells.lenght; x+1){
        if(variantCells[x].checked) cells=variantCells[x].value;
        alert(cells);
    }

    startButton.addEventListener("click", quickStart);

    function quickStart(){
        render(game, cells+0, "titular");    
        
    }

    

    