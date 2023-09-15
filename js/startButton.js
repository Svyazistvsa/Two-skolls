"use strict"

import {render} from "./game.js";
import {playing} from "./audio.js";

let startButton = document.querySelector(".startButton"),
    form = document.forms.variant, 
    variantCells = form.elements.cells,
    variantArr = Array.from(variantCells);
    
    startButton.addEventListener("pointerdown", () =>{
        playing("vzryiv");
        startButton.addEventListener("pointerup", () => {
            setTimeout(quickStart, 500);
        });
    } );

    function quickStart(){
        let cell;        

        for(let x=0; x<variantArr.length; x++){
            if(variantArr[x].checked) cell=variantArr[x].value;
        }
        render(game, cell, "titular");    
    }