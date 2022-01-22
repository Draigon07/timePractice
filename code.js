"use strict"

function createElement(el){
    return document.createElement(el)
}

function txt({el,txt}){
    console.log(txt)
    return el.textContent = txt
}

function appen({el,pat}){
    return pat.appendChild(el)
}

const pl1 = document.querySelector('.disPlay1')
const pl2 = document.querySelector('.disPlay2')


const createTimer = ()=>{
  let min = 0;
  let sec = 0;
}

function increment({min,sec}){
    let minutes = 0;
    let seconds = 0;
   setTimeout(() => {
       minutes++
   }, 1000);
}

createTimer()

const select = document.querySelector('.select')


select.addEventListener('change',()=>{
    let options = (select.options[select.selectedIndex].value)
     displayOnScreen({el: options, display: pl1})
     displayOnScreen({el: options, display: pl2})
})

function displayOnScreen({el,display}){
    const h2 = createElement('h2');
    txt({el: h2, txt: el})
    appen({pat: display, el: h2})
}

const btn = document.querySelector('.play1_btn')
btn.addEventListener('pointerdown',()=>{
    console.info('Hola')
})



