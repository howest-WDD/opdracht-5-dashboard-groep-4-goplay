const modalContentToggle = function () {
    //select the modal window
    const modal = document.querySelector("#modalContent");
    const classes = modal.classList
    //makes the modal window visible if clicked on edit button
    if (classes.contains('u-hidden')) {
        modal.classList.remove("u-hidden");
    }
    //makes the modal window not visible on cancel
    else {
        modal.classList.add("u-hidden");
    }
};

const loadContentModal = function () {
    //split the url and take the 3 parameter
    const url = window.location.href;
    // check if you are on the movie/serie editing page
    if (url.includes("edit_movie.html") || url.includes("edit_serie.html")) {
        //select the buttons and check for click events
        const editButton = document.querySelector("#editMovies");
        const cancelButton = document.querySelector("#cancelButton");
        editButton.addEventListener('click', modalContentToggle);
        cancelButton.addEventListener('click', modalContentToggle);
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', loadContentModal);