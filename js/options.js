"use strict"

let option = document.querySelector("#options");   

function rendScrean (){
    document.body.insertAdjacentHTML('beforeend', `<div class="screen">
        <div class="shirtC" ></div>
        <div class="shirtR" >
            <input name="shirt" type="radio" value="jpg/shirt0.jpg" class="rad" id="r1" checked></input>
            <input name="shirt" type="radio" value="jpg/shirt1.jpg" class="rad" id="r2"></input>
            <input name="shirt" type="radio" value="jpg/shirt2.jpg" class="rad" id="r3"></input>
        </div>
        <div class="backG" ></div>
        <div class="backR" >
            <input name="woll" type="radio" value="jpg/wollpaper1.jpg" class="rad" id="r4" checked></input>
            <input name="woll" type="radio" value="jpg/wollpaper2.jpg" class="rad" id="r5"></input>
            <input name="woll" type="radio" value="jpg/wollpaper3.jpg" class="rad" id="r6"></input>
        </div>
        <input type="button" value="Принять" class="menuBut"> 
        <input type="button" value="Отбой" class="menuBut">       
    </div>`); 
}

option.addEventListener("click", rendScrean);