//#region ***  DOM references ***
let loader, dataStore = [], searchbar;
//#endregion

// showing loading logo
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
            <a class="c-content-card js-card" href="#" data-id="${content._id}" data-type="${content.seasons}">
            <figure class="c-content-card__figure">
                <img class="c-content-card__figure--img" src="${content.thumbnailImage}" alt="Image" />
                <figcaption class="c-content-card__figure--text">${content.title}</figcaption>
            </figure>
        </a>`
        document.querySelector(".js-content").innerHTML += htmlstring_content;
    }
    listenToClickOnCard();
}

const showFilteredContent = function (data) {
    document.querySelector(".js-content").innerHTML = "";
    for (const content of data) {
        let htmlstring_content = `
            <a class="c-content-card js-card" href="#" data-id="${content._id}" data-type="${content.seasons}">
            <figure class="c-content-card__figure">
                <img class="c-content-card__figure--img" src="${content.thumbnailImage}" alt="Image" />
                <figcaption class="c-content-card__figure--text">${content.title}</figcaption>
            </figure>
        </a>`
        document.querySelector(".js-content").innerHTML += htmlstring_content;
    }
    listenToClickOnCard();
}

const listenToClickOnCard = function () {
    const cards = document.querySelectorAll(".js-card");
    for (const card of cards) {
        card.addEventListener("click", function () {
            let id = card.getAttribute("data-id");
            let type = card.getAttribute("data-type");
            if (type === "undefined") {
                window.location.href = `http://127.0.0.1:8080/edit_movie.html?${id}`;
            } else if (type === "[object Object]") {
                window.location.href = `http://127.0.0.1:8080/edit_serie.html?${id}`;
            } else {
                console.log("euh no idea what this is");
            }
        })
    }
}

const listenToSearch = function () {
    searchbar.addEventListener('keyup', function (text) {
        const currentword = text.target.value;
        const filteredMovies = dataStore[0].filter(data => data.title.toLowerCase().includes(currentword.toLowerCase()));
        const filteredSeries = dataStore[1].filter(data => data.title.toLowerCase().includes(currentword.toLowerCase()));
        const filteredData = filteredMovies.concat(filteredSeries);
        showFilteredContent(filteredData)
    });
}

const getTvShows = function () {
    handleData("https://goplayhowestapifunction.azurewebsites.net/api/getshows", showTvShows);
}

const getMovies = function () {
    handleData("https://goplayhowestapifunction.azurewebsites.net/api/getmovies", showMovies);
}

//handles the data Array if you fetch all the data and puts it in an Array
const handleAllData = function (jsonObject) {
    for (const content of jsonObject) {
        showContent(content)
        dataStore.push(content)
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
        searchbar = document.querySelector("#filterInput");
        getAllContent();
        listenToSearch();
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', displayContent);