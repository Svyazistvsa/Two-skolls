"use strict"

import {render} from "./game.js";

let startButton = document.querySelector(".startButton"),
    form = document.forms.variant, 
    variantCells = form.elements.cells,
    variantArr = Array.from(variantCells);
    
    startButton.addEventListener("click", quickStart);

    function quickStart(){
        let cell;
alert(variantArr.lenght);
        for(let x=0; x<variantArr.lenght; x++){
          //  alert(x);
            if(variantArr[x].checked) cell=variantArr[x].value;
        }
        //alert(cell);
        render(game, cell, "titular");    
    }