"use strict";
  
  const toggleDarkmode = function(){
    const body = document.body;
    const logo = document.querySelectorAll('.js-logo')
    const button = document.querySelector('.js-darkmode');
    const dark = document.querySelector('.c-button2');
  
    body.classList.toggle('o-darkmode');
    logo[0].classList.toggle('u-hidden');
    logo[1].classList.toggle('u-hidden');
    button.classList.toggle('c-button2');
    button.classList.toggle('c-button');
    dark.innerHTML = `Dark mode`;
    
  
  };
  
  const lisentoToggle = function(){
     const toggle = document.querySelector('.js-darkmode');
  
     toggle.addEventListener("click", toggleDarkmode);
  };
  
  const init = function () {
    lisentoToggle();
  };
  
  document.addEventListener("DOMContentLoaded", init);
  