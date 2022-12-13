"use strict";
  
  const toggleDarkmode = function(){
    const body = document.body;
  
    body.classList.toggle('o-darkmode');
  
  };
  
  const lisentoToggle = function(){
     const toggle = document.querySelector('.js-darkmode');
  
     toggle.addEventListener("click", toggleDarkmode);
  };
  
  const init = function () {
    lisentoToggle();
  };
  
  document.addEventListener("DOMContentLoaded", init);
  