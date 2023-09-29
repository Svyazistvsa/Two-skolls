"use strict"

let option = document.querySelector("#options"),
    shirtC = "shirt0", backG, screen, exShirt = "shirt0";


function rendScrean (){
    if(screen){
        screen.style.display = "block";
    } else {
        document.body.insertAdjacentHTML('beforeend', `<div class="screen">
        <div class="shirtC shirt0" ></div>
        <div class="shirtR" >
            <input name="shirt" type="radio" value="shirt0" id="s0" class="radio" checked></input>
            <label for="s0"></label>
            <input name="shirt" type="radio" value="shirt1" id="s1" class="radio"></input>
            <label for="s1"></label>
            <input name="shirt" type="radio" value="shirt2" id="s2" class="radio"></input>
            <label for="s2"></label>
        </div>
        <div class="backG" ></div>
        <div class="backR" >
            <input name="woll" type="radio" id="w1" value="jpg/wollpaper10.jpg" class="radio" checked></input>
            <label for="w1"></label>
            <input name="woll" type="radio" id="w2" value="jpg/wollpaper2.jpg" class="radio"></input>
            <label for="w2"></label>
            <input name="woll" type="radio" id="w3" value="jpg/wollpaper3.jpg" class="radio"></input>
            <label for="w3"></label>
        </div>
        <input type="button" value="Принять" name="confirm" class="butMenu"> 
        <input type="button" value="Отбой" name="cansel" class="butMenu">   
    </div>`);
    }
    
    
    screen = document.querySelector(".screen");

    screen.addEventListener("click", clickOpt);

    function clickOpt(e){
        let target = e.target;
        switch(target.name){
            case 'shirt':               
                shirtC = target.value;
                screen.querySelector(".shirtC").classList.remove(screen.querySelector(".shirtC").classList[1])
                screen.querySelector(".shirtC").classList.add(shirtC);             
                break;
            case 'woll':
                backG = screen.querySelector(".backG").style.backgroundImage = `url(${target.value})`;
                break;
            case 'confirm':
                if(document.querySelector(".shirt")){
                    let arr = document.querySelectorAll(".shirt");
                    for(let key = 0; key < arr.length; key++){ 
                        arr[key].classList.remove(arr[key].classList[1]);
                        arr[key].classList.add(shirtC);
                    }
                }
                exShirt = shirtC;
                document.querySelector("body").style.backgroundImage = backG;
                screen.style.display = "none";
                break;
            case 'cansel':
                screen.style.display = "none";
                break;           
        }
    }
}

option.addEventListener("click", rendScrean);

export {exShirt};