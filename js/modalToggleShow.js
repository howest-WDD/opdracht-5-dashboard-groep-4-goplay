'use strict';

const modalOpen = function(){
const modal = document.querySelector('.c-modalContainer')
modal.classList.remove('u-hidden');


listenToClose();
}
const modalClose = function(){

const modal = document.querySelector('.c-modalContainer')
modal.classList.add('u-hidden');
}


const listenToAddShow = function(){
let addButton = document.querySelectorAll('.js-addShow');
    for(let button of addButton){
        button.addEventListener('click', function(){

            modalOpen();
        })
    }



}
const listenToClose = function(){
      const Xbutton = document.querySelector('.c-modal__close')
      const button = document.querySelectorAll('.c-modal__button')

      Xbutton.addEventListener('click', function(){
        modalClose();
    })

    for(let but of button){
    but.addEventListener('click', function(){
        modalClose();
    })}
    
}



const checkAddButton = function () {
    let i = 0;

if (document.querySelector('.c-startscherm')) {
   
    listenToAddShow();
    
} else {
    console.log('no startscherm here');
}


}

document.addEventListener('DOMContentLoaded',checkAddButton() );