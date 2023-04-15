"use strict"

let menu = document.querySelector('#main_menu'),
    list = document.querySelector('.list'),
    container = document.querySelector('#container'),
    area = document.querySelector('#game'),
    titular = document.querySelector('#titular');

menu.onclick = () => list.classList.toggle('block');

titular.addEventListener("click", rendTitl)

function rendTitl(){
    if(document.querySelector('.flip')){
        let a = container.querySelector(".timer");
        a.remove();
        area.style.gridTemplateColumns = `1fr`;
        let flipps = area.querySelectorAll('.flip');
        if(flipps.length != 0){
            for(let i=0; i<flipps.length; i++){
                flipps[i].remove();            
            }
        }
    }
    if(document.querySelector(".titular")) document.querySelector(".titular").style.display = "none";

    document.querySelector(".titular").style.display = "block";
}
export{rendTitl};