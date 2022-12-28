const modalContentToggle = function () {
    const modal = document.querySelector("#modalContent");
    const classes = modal.classList
    if (classes.contains('u-hidden')) {
        modal.classList.remove("u-hidden");
    } else {
        modal.classList.add("u-hidden");
    }
};

const loadContentModal = function () {
    const url = window.location.href.split("/")[3];
    if (url === "edit_movie.html" || url === "edit_serie.html") {
        // check if you are on the movie editing page
        const editButton = document.querySelector("#editMovies");
        const cancelButton = document.querySelector("#cancelButton");
        editButton.addEventListener('click', modalContentToggle);
        cancelButton.addEventListener('click', modalContentToggle);
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', loadContentModal);