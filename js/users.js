
let modal;
let sect;
let htmlString; 

const listenToExpand = function(){
    const expand = document.querySelector(".js-expand");
    const extra = document.querySelector(".js-extra");
    const expandButton = document.querySelector(".js-expandbutton")
    console.log(expand)

    expand.addEventListener("click",function(){
        if(extra.classList.contains("u-hidden")){
            extra.classList.toggle("u-hidden")
            expandButton.classList.toggle("c-users__expandicon--turnaround")
        } else if(!extra.classList.contains("u-hidden")){
            extra.classList.toggle("u-hidden")
            expandButton.classList.toggle("c-users__expandicon--turnaround")
        }
        

        // console.log(extra)
        console.log("click")
    })
}

const listenToEdit= function(){
    const edit = document.querySelector(".js-edit");
    const inputs = document.getElementsByClassName("js-disable")
    // console.log(inputs)
    console.log(edit)

    edit.addEventListener("click",function(){
        for(const input of inputs){
            
            input.toggleAttribute("disabled")
                
        }
        // console.log("edit")
    })
       
    
}

const listenTodelete = function(){
    const deletebutton = document.querySelector(".js-delete")
    const deleteusers = document.getElementsByClassName("js-deleteuser")
    
    // deze zijn voor De modal window en aanpassingen aan de body
    const darkbackground = document.querySelector(".js-darkbackground")
    const modal = document.querySelector(".js-modal")
    const verwijder = document.querySelector(".js-verwijder")
    const cancel = document.querySelector(".js-cancel")

    
   
    // console.log(deletebutton)
    // console.log(deleteusers)

    deletebutton.addEventListener("click",function(){


        modal.classList.remove("u-hidden");
        darkbackground.classList.add("c-darkbackground")

        // for(const deleteuser of deleteusers){

        //     // console.log(deleteuser)
        //     // console.log("click")
        //     deleteuser.classList.add("u-hidden")

        // }
        

    })
    verwijder.addEventListener("click",function(){
        for(const deleteuser of deleteusers){
            deleteuser.classList.add("u-hidden")

        }            
        modal.classList.add("u-hidden")
        darkbackground.classList.remove("c-darkbackground")
    })
    cancel.addEventListener("click",function(){
        modal.classList.add("u-hidden")
        darkbackground.classList.remove("c-darkbackground")
    })
}

const listenToEditChange = function(){
    const editButton = document.querySelector(".js-edit"); 
    const editSvg = document.querySelector(".js-editsvg")
    
    editButton.addEventListener("click",function(){
        if(editSvg.classList.contains("c-users__editsvg--edit")){
            editSvg.classList.remove("c-users__editsvg--edit")
            editSvg.classList.add("c-users__editsvg--save")
            editSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="c-users__editsvg" viewBox="0 0 24 24"><path class="c-users__editpath" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>`
        } else if(editSvg.classList.contains("c-users__editsvg--save")){
            editSvg.classList.add("c-users__editsvg--edit")
            editSvg.classList.remove("c-users__editsvg--save")
            editSvg.innerHTML = `<svg style="width: 24px; height: 24px" class="c-users__editsvg c-users__editsvg--edit js-editsvg" viewBox="0 0 24 24"><path fill="currentColor" class="c-users__editpath" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`
        }
           
    })
}
const checkIfWorks = function(){
    const thbuttons = document.querySelectorAll(".js-filter")

    for(const thbutton of thbuttons){
        console.log(thbutton)
        thbutton.addEventListener("click",function(){
            if(thbutton.classList.contains("c-users__id--active")){
                thbutton.classList.remove("c-users__id--active")
            }
            console.log("click")
            thbutton.classList.toggle("c-users__id--active");
            thbutton.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg>`
        })
    }
}

const loadJson = function(){
 
    fetch('../json/users.json')
    .then((response) => response.json())
    .then((json) => {
        const users = json.users;
        for(const user of users){
            const id = user.UID
            const voornaam = user.voornaam
            const achternaam = user.achternaam
            const mail = user.mail
            const geslacht = user.geslacht 
            const geboortedatum = user.geboortedatum
            const postcode = user.postcode
            const gemeente = user.gemeente
            const straatnaam = user.straatnaam 
            const phone = user.phone 
            const nr = user.nr 
            const bus = user.bus
            const nieuwsbrief = user.nieuwsbrief
            const reclame = user.reclame 
            const admin = user.admin
            console.log(bus) 
        }
        return users;
    });
}



const accordeonUsers = function(){
    listenToExpand();
    listenToEdit();
    listenTodelete();
    listenToEditChange(); 
    checkIfWorks();
    // loadJson();


}

document.addEventListener('DOMContentLoaded',accordeonUsers);