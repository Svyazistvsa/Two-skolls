"use strict"

let menu = document.querySelector('#main_menu'),
    list = document.querySelector('.list'),
    container = document.querySelector('#container');    

menu.onclick = () => list.classList.toggle('block');