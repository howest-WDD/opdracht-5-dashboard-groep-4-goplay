


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

const accordeonUsers = function(){
    listenToExpand()
    console.log("startup")
}

document.addEventListener('DOMContentLoaded',accordeonUsers);