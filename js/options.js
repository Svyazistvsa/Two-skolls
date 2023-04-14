"use strict"

let option = document.querySelector("#options"),
    shirtC, backG, screen;


function rendScrean (){
    if(screen){
        screen.style.display = "block";
    } else {
        document.body.insertAdjacentHTML('beforeend', `<div class="screen">
        <div class="shirtC" ></div>
        <div class="shirtR" >
            <input name="shirt" type="radio" value="jpg/shirt0.jpg" class="rad" checked></input>
            <input name="shirt" type="radio" value="jpg/shirt1.jpg" class="rad"></input>
            <input name="shirt" type="radio" value="jpg/shirt2.jpg" class="rad"></input>
        </div>
        <div class="backG" ></div>
        <div class="backR" >
            <input name="woll" type="radio" value="jpg/wollpaper1.jpg" class="rad" checked></input>
            <input name="woll" type="radio" value="jpg/wollpaper2.jpg" class="rad"></input>
            <input name="woll" type="radio" value="jpg/wollpaper3.jpg" class="rad"></input>
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
                    
                shirtC = screen.querySelector(".shirtC").style.backgroundImage = `url(${target.value})`;             
                break;
            case 'woll':
                backG = screen.querySelector(".backG").style.backgroundImage = `url(${target.value})`;
                break;
            case 'confirm':
                /*здесь будет присвоение с вариантом для выведенных карт через cssText*/               
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
//замена рубашек должна быть через импорт переменной и cssTex