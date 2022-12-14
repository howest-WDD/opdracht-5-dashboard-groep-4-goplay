"use strict";
  
  const toggleDarkmode = function(){
    const body = document.body;
    const logo = document.querySelectorAll('.js-logo')
  
    body.classList.toggle('o-darkmode');
    logo[0].classList.toggle('u-hidden')
    logo[1].classList.toggle('u-hidden')
    
  
  };
  
  const lisentoToggle = function(){
     const toggle = document.querySelector('.js-darkmode');
  
     toggle.addEventListener("click", toggleDarkmode);
  };
  
  const init = function () {
    lisentoToggle();
  };
  
  document.addEventListener("DOMContentLoaded", init);
  