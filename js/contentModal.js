const loadContentModal = function () {
    const url = window.location.href;
    if (url === "http://127.0.0.1:8080/edit_movie.html") {
        // check if you are on the movie editing page


    } else if (url === "http://127.0.0.1:8080/edit_serie.html") {
        // check if you are on the serie editing page
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', loadContentModal);