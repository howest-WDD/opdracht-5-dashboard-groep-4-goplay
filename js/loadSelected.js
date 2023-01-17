'use strict';


const addBlocks = function(selection){
    console.log(selection)
     const container = document.querySelector('.c-startscherm__container')

     container.innerHTML += `<div class="c-draggable" draggable="true">
                
     <h2>${selection}<input type="text" value="${selection}"></h2>

       <div class="row">
       <div class="container">
           <button class="handle left-handle">
             <div class="text">&#8249;</div>
           </button>
           <div class="progress-bar"></div>
           <div class="slider c-carousel js-Carousel${selection}">
             <img src="./assets/img/addNew.png" alt="addNew" class="c-carousel__item">
             
           </div>
           <button class="handle right-handle">
             <div class="text">&#8250;</div>
           </button>
           
         </div>
       </div>
   </div>`
}


const listenToButton = function(){
       const addButton = document.querySelector('.c-addButton')
       
       addButton.addEventListener('click',function(){
        let selected = document.querySelector('.c-selector').value
        addBlocks(selected)
       } )
}

        

const checkstartscherm = function () {
        let i = 0;

	if (document.querySelector('.c-startscherm')) {
        
        listenToButton();
	} else {
		console.log('no startscherm here');
	}

    
}

document.addEventListener('DOMContentLoaded',checkstartscherm() );