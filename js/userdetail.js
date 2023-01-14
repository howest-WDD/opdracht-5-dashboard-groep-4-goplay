

const openTab = function(){
  const tabs = document.querySelectorAll('[data-tab-target]')
  const tabContents = document.querySelectorAll('[data-tab-content]')


  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  })
  
}
const buttons = function(){
  const deleteButton = document.querySelector(".js-delete")
  const editButton = document.querySelector(".js-edit")
  const inputs = document.querySelectorAll(".js-input")
  const modal = document.querySelector(".js-modal")

  editButton.addEventListener("click",function(){
    console.log("clickity edit")
    for(const input of inputs){
      console.log(input)
      input.toggleAttribute("disabled")
    }
  })
  
  deleteButton.addEventListener("click",function(){
    console.log("clickity delete")
    modal.classList.toggle('u-hidden');
  })
}
const editModal = function(){
  const modalClose = document.querySelector(".js-modalclose");
  const modalDelete = document.querySelector(".js-delete");
  const modalCancel = document.querySelector(".js-cancel")
  const modal = document.querySelector(".js-modal")

  modalClose.addEventListener("click",function(){
    modal.classList.toggle("u-hidden")
  })
  modalDelete.addEventListener("click",function(){
    modal.classList.toggle("u-hidden")
  })
  modalCancel.addEventListener("click",function(){
    modal.classList.toggle("u-hidden")
  })
}



const showUser = function(){
  const user = document.querySelector(".js-userdetails")
  console.log(user)
}
const showNaam = function(){
  const naam = document.querySelector(".js-userdetailname")
  console.log(naam)
}
const showJson = function(json){
  console.log(json)
}

const userdetailinit = function(){
  showUser()
  showNaam()
  showJson()
  buttons()
  editModal()
  openTab()
}
document.addEventListener('DOMContentLoaded',userdetailinit);
