'use strict';
let idCount = 4 ;

const listenToDelete = function(){
  const deleteButton = document.querySelectorAll('.js-block-delete')

  for(let button of deleteButton){
    let buttonId = button.id;

    button.addEventListener('click', function(){
      deleteBlock(buttonId);
    })
  } 

}

const deleteBlock = function(childId){
  let parent = document.querySelector('.c-startscherm__container');
  let child = document.getElementById(`drag${childId}`)
  child.remove();
}

const addBlocks = function(selection){

  setTimeout(() => {
    const container = document.querySelector('.c-startscherm__container');
    
      let oldBlock = ``;
       oldBlock = container.innerHTML;

      
      let newBlock = ``;

      


     newBlock = `<div class="c-draggable" draggable="true" id="drag${idCount}">
                
     <div class="c-input"> <h2><input type="text" value="${selection}"></h2>

      <button class="c-users__delete js-block-delete" id="${idCount}">
        <svg style="width: 24px; height: 24px" class="c-users__deletesvg" viewBox="0 0 24 24">
          <path fill="currentColor" class="c-users__deletepath" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"></path>
        </svg>
      </button>
      
      <img src="/assets/svg/movable.svg" alt="move_item" class="c-input__icon js-addShow">

      
    
    </div>
 
        <div class="row">
        <div class="container">
            <button class="handle left-handle">
            <img src="./assets/svg/carouselLeft.svg" alt="arrow">
            </button>
            <div class="progress-bar"></div>
            <div class="slider c-carousel js-Carousel${selection}">
              <img src="./assets/img/addNew.png" alt="addNew" class="c-carousel__item">
              
            </div>
            <button class="handle right-handle">
            <img src="./assets/svg/carouselRight.svg" alt="arrow">
            </button>
            
          </div>
        </div>
    </div>`

   
    idCount++ ;
    
   container.innerHTML = ``;
   container.innerHTML = newBlock+oldBlock;
   listenToDelete();
   addCarouselData(selection) 
   loadStartschermFuncties()
  }, 10);
    
     
}


const listenToButton = function(){
       const addButton = document.querySelector('.c-addButton')
       
       addButton.addEventListener('click',function(){
        let selected = document.querySelector('.c-selector').value
        addBlocks(selected)
        console.log('clicked')
       } )
}

const addListData = function(){
  let listTitle = ``;

  fetch("../json/tvshows.json").then(function(resp){
      return resp.json();
    }).then((data) => {
      


      let getListCreate = document.querySelectorAll('.js-showList');
      const titles = data;

        for(let block of getListCreate){
          
          
      for(let titel of titles){
        listTitle = `<option value="${titel.title}" selected="">${titel.title}</option>`;
        block.innerHTML += listTitle;

      }
    }

    })


  
}

        

const checkstartscherm = function () {
        let i = 0;

	if (document.querySelector('.c-startscherm')) {
        addListData();
        listenToDelete();
        listenToButton();
	} else {
		console.log('no startscherm here');
	}

    
}

document.addEventListener('DOMContentLoaded',checkstartscherm() );