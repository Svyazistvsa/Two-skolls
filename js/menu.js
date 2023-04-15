"use strict"

let menu = document.querySelector('#main_menu'),
    list = document.querySelector('.list'),
    //container = document.querySelector('#container'),
    area = document.querySelector('#game'),
    titular = document.querySelector('#titular');

 

menu.onclick = () => list.classList.toggle('block');

titular.addEventListener("click", rendTitl)

function delFlip (area){    
    if(document.querySelector(".timer")) document.querySelector(".timer").remove();
    let flipps = area.querySelectorAll('.flip');
    if(flipps.length != 0){
        for(let i=0; i<flipps.length; i++){
            flipps[i].remove();            
        }
    }
}

function rendTitl(){
    if(document.querySelector('.flip')){        
        area.style.gridTemplateColumns = `1fr`;
        delFlip(area);       
    if(document.querySelector(".titular")) document.querySelector(".titular").style.display = "none";

    document.querySelector(".titular").style.display = "block";
    }
}

export{rendTitl};
export{delFlip};