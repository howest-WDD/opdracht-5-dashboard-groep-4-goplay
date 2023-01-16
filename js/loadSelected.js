'use strict';


const addBlockData = function(){
    let htmlString = ``;

    const getBlock = document.querySelectorAll(".c-draggable");

    for(let block of getBlock){
        const selected = block.querySelector('.c-selector').value
        console.log(selected)

        
    }

}

const listenToSelected = function(){
   let changes = document.querySelectorAll('.c-selector')
    for(let change of changes){
        change.addEventListener('change',addBlockData)
    }
}
        

const checkstartscherm = function () {
        let i = 0;

	if (document.querySelector('.c-startscherm')) {
        
        listenToSelected();
	} else {
		console.log('no startscherm here');
	}

    
}

document.addEventListener('DOMContentLoaded',checkstartscherm() );