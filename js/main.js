"use strict"

let men = document.querySelector('#main_menu'),
    lst = document.querySelector('.list');

document.onclick = (e) => {
    if(e.target != men) lst.classList.remove('block');
}