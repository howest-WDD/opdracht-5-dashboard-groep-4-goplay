//#region ***  DOM references ***

//#endregion

const showTvShows = function (jsonObject) {
    for (const show of jsonObject) {
        let htmlstring_show = `
            <a class="c-content-card" href="#" data-id="${show._id}">
            <figure class="c-content-card__figure">
                <img class="c-content-card__figure--img" src="${show.thumbnailImage}" alt="Image" />
                <figcaption class="c-content-card__figure--text">${show.title}</figcaption>
            </figure>
        </a>`
        document.querySelector(".js-content").innerHTML += htmlstring_show;
    }
}

const showMovies = function (jsonObject) {
    for (const movie of jsonObject) {
        let htmlstring_movie = `
            <a class="c-content-card" href="#" data-id="${movie._id}">
            <figure class="c-content-card__figure">
                <img class="c-content-card__figure--img" src="${movie.tumbnailImage}" alt="Image" />
                <figcaption class="c-content-card__figure--text">${movie.title}</figcaption>
            </figure>
        </a>`
        document.querySelector(".js-content").innerHTML += htmlstring_movie;
    }
}

const getTvShows = function () {
    handleData("https://goplayhowestapifunction.azurewebsites.net/api/getshows", showTvShows);
}

const getMovies = function () {
    handleData("https://goplayhowestapifunction.azurewebsites.net/api/getmovies", showMovies);
}

const displayContent = function () {
    const url = window.location.href;
    // check if you are on the content page
    if (url.includes("content.html")) {
        getTvShows()
        getMovies()
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', displayContent);