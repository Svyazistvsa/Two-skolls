"use strict"

const  Change = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

Change();

window.addEventListener('resize', () => {
    Change();
})

