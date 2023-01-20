const showNewSeasonModal = () => {
    const modal = document.querySelector('.js-modalSeasons')
    if (modal.classList.contains("u-hidden")) {
        modal.classList.remove('u-hidden')
        listenAddSeasonModalButton(6)
        listenCancelSeasonModalButton()
    } else {
        modal.classList.add('u-hidden')
    }
}

const addNewSeasonRow = (id) => {
    const table = document.querySelector("#seasons")
    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = `${id}`;
    cell2.innerHTML = "0";
    cell3.innerHTML = "Niet Live";
    cell4.innerHTML = `<i class="material-icons c-editIcon js-editBtn">edit</i>
                        <i class="material-icons c-visibilityIcon--offline js-visibilityBtn">visibility_off</i>
                        <i class="material-icons c-deleteIcon js-deleteBtn">delete</i>`;
}

const deleteSeasonRow = (id) => {
    const row = document.getElementById(`row_${id}`)
    row.remove()
}

const listenToAddSeasonButton = () => {
    const btn = document.querySelector('.js-addSeasonRowBtn')
    btn.addEventListener('click', function () {
        showNewSeasonModal()
    })
}

const listenToEditSeasonButton = () => {
    const btn = document.querySelectorAll('.js-editBtn')
    btn.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            window.location.href = '/create_new_episodes.html'
        });
    });
}

const listenAddSeasonModalButton = (id) => {
    let btn = document.querySelector('.js-add')
    btn.addEventListener('click', function () {
        addNewSeasonRow(id)
        showNewSeasonModal()
    })
}
const listenCancelSeasonModalButton = () => {
    let btn = document.querySelector('.js-cancel')
    btn.addEventListener('click', function () {
        showNewSeasonModal()
    })
}

const listenToDeleteSeasonButton = () => {
    const btn = document.querySelectorAll('.js-deleteBtn')
    btn.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            let id = btn.id.split('_')[1]
            deleteSeasonRow(id)
        });
    });
}

const displaySeasons = function () {
    const url = window.location.href;
    // check if you are on the content page
    if (url.includes("create_new_seasons.html")) {
        listenToAddSeasonButton()
        listenToEditSeasonButton()
        listenToDeleteSeasonButton()
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', displaySeasons);