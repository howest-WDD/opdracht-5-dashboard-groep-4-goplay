//#region ***  DOM references ***
let loader;
//#endregion
// showing loading
function displayLoading() {
    if (loader.classList.contains("u-hidden")) {
        loader.classList.remove("u-hidden");
    } else {
        loader.classList.add("u-hidden");
    }

}

const showContent = function (jsonObject) {
    for (const content of jsonObject) {
        let htmlstring_content = `
            <a class="c-content-card" href="#" data-id="${content._id}">
            <figure class="c-content-card__figure">
                <img class="c-content-card__figure--img" src="${content.thumbnailImage}" alt="Image" />
                <figcaption class="c-content-card__figure--text">${content.title}</figcaption>
            </figure>
        </a>`
        document.querySelector(".js-content").innerHTML += htmlstring_content;
    }
}

const getTvShows = function () {
    handleData("https://goplayhowestapifunction.azurewebsites.net/api/getshows", showTvShows);
}

const getMovies = function () {
    handleData("https://goplayhowestapifunction.azurewebsites.net/api/getmovies", showMovies);
}

//handles the data Array if you fetch all the data
const handleAllData = function (jsonObject) {
    for (const content of jsonObject) {
        showContent(content)
    }
    displayLoading()
}

const getAllContent = function () {
    displayLoading()
    Promise.all(["getmovies", "getshows"].map(name =>
        fetch(`https://goplayhowestapifunction.azurewebsites.net/api/${name}`).then(resp => resp.json())
    )).then(handleAllData)
}

const displayContent = function () {
    const url = window.location.href;
    // check if you are on the content page
    if (url.includes("content.html")) {
        loader = document.querySelector("#loading");
        getAllContent();
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', displayContent);