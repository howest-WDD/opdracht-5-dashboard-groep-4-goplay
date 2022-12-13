


const listenToExpand = function(){
    const expand = document.querySelector(".js-expand");
    const extra = document.querySelector(".js-extra");
    console.log(expand)

    expand.addEventListener("click",function(){
        extra.classList.toggle("u-hidden")
        console.log(extra)
        console.log("click")
    })
}

const listenToEdit= function(){
    const edit = document.querySelector(".js-edit");
    const inputs = document.getElementsByClassName("js-disable")
    console.log(inputs)
    console.log(edit)

    edit.addEventListener("click",function(){
        for(const input of inputs){
            input.toggleAttribute("disabled")
                
        }
        console.log("edit")
    })
       
    
}

const listenTodelete = function(){
    const deletebutton = document.querySelector(".js-delete")
    const deleteusers = document.getElementsByClassName("js-deleteuser")
    console.log(deletebutton)
    console.log(deleteusers)

    deletebutton.addEventListener("click",function(){
        for(const deleteuser of deleteusers){
            console.log(deleteuser)
            console.log("click")
            deleteuser.classList.add("u-hidden")
        }
        

    })
}

const accordeonUsers = function(){
    listenToExpand();
    listenToEdit();
    listenTodelete();
    console.log("startup")
}

document.addEventListener('DOMContentLoaded',accordeonUsers);