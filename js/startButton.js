"use strict"

import {render} from "./game.js";

let startButton = document.querySelector(".startButton"),
    form = document.forms.variant;

    

    startButton.addEventListener("click", quickStart);

    function quickStart(){
        let cell,
            variantCells = form.elements.cells;
            alert(variantCells.lenght);
        for(let x=0; x<variantCells.lenght; x+1){
          //  alert(x);
            if(variantCells[x].checked) cell=variantCells[x].value;
        }
        //alert(cell);
        render(game, cell, "titular");    
        
    }