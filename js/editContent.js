let html_movie, html_show;

const modalContentToggle = function () {
    console.log("i got it")
    //select the modal window
    const modal = document.querySelector("#editContentModal");
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

const showShow = function (jsonObject) {
    console.log(jsonObject)
    html_show.innerHTML = ""
    let htmlstring_show = `
            <div class="program-header">
            <div class="program-header__inner">
                <header class="hero-video has-playlists">
                    <div class="hero-video__overlay"
                         style="background-image: url(&quot;${jsonObject.backgroundImage}&quot;);"></div>
                    <div class="hero-video__readability"></div>
                    <div class="hero-video__container">
                        <div class="hero-video__container">
                            <div class="hero-video__content l-spacer">
                                <div class="hero-video__inner"><h1 class="hero-video__title">${jsonObject.title}</h1>
                                    <div class="hero-video__description">${jsonObject.desciption}
                                    </div>
                                    <div class="c-movie-hero__actions">
                                        <a href="#" class="c-button"><span>Online</span></a>
                                        <a href="content.html" class="c-button"><span>Terug naar Content</span></a>
                                        <a href="#" class="c-button" id="editButton"><span>Aanpassen</span></a>
                                        <div class="selectseason"><label for="language" hidden>Select a Programming
                                            Language:</label>
                                            <select name="language" id="language">
                                                <option value="javascript">JavaScript</option>
                                                <option value="python">Python</option>
                                                <option value="c++" disabled>C++</option>
                                                <option value="java" selected>Java</option>
                                            </select></div>
                                    </div>
                  </header>
            </div>
        </div>`
    html_show.innerHTML = htmlstring_show;
}


const getShowById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getshowbyid?_id=${id}`, showShow);
}

const showMovie = function (jsonObject) {
    console.log(jsonObject)
    html_movie.innerHTML = ""
    let htmlstring_movie = `
            <div class="c-movie-hero c-movie-hero--program is-movie">
                <div class="c-movie-hero__bg has-blur"
                     style="background-image: url(&quot;${jsonObject.backgroundImage}&quot;);"></div>
                <div class="c-movie-hero__bg-readable"></div>
                <div class="c-movie-hero__container c-movie-hero__movie-container" style="margin-top: 25px">
                    <div class="c-movie-hero-video__container">
                        <div class="c-movie-hero-video__content l-spacer">
                            <div class="c-movie-hero-video__inner"><h1 class="c-movie-hero-video__title">${jsonObject.title}</h1>
                                <div class="c-movie-hero-video__description"><p>${jsonObject.description}</p>
                                </div>
                                <div class="c-movie-hero__actions">
                                    <a class="c-button"
                                       href="https://www.goplay.be${jsonObject.file_link}" target="_blank">
                                        <span class="button__text">Afspelen</span>
                                    </a>
                                    <a href="#" class="c-button"><span>Online</span></a>
                                    <a href="content.html" class="c-button"><span>Terug naar Content</span></a>
                                    <a href="#" class="c-button" id="editButton"><span>Aanpassen</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="c-movie-hero__poster c-button--poster" type="button">
                        <div class="play-button"></div>
                        <picture class="l-spacer">
                            <img src="${jsonObject.thumbnailImage}"
                                 alt="Winter's Dream" width="510" height="740"></picture>
                    </button>
                </div>
            </div>`
    html_movie.innerHTML = htmlstring_movie;
}

const getMovieById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getmoviebyid?_id=${id}`, showMovie);
}

const loadContentModal = function () {
    //split the url and take the 3 parameter
    const url = window.location.href;
    // check if you are on the movie/serie editing page
    if (url.includes("edit_movie.html") || url.includes("edit_serie.html")) {
        let id = url.split('?')[1]
        //check if you are editing a movie or a serie
        if (url.includes("edit_movie.html")) {
            //fetch the data from the API
            getMovieById(id)
            html_movie = document.querySelector(".js-movie-data")
        } else if (url.includes("edit_serie.html")) {
            html_show = document.querySelector(".js-show-data")
            getShowById(id)
        } else {
            //no clue what would cause this to run
        }
        //select the buttons and check for click events
        const editButton = document.querySelector("#editButton");
        const cancelButton = document.querySelector("#cancelButton");
        editButton.addEventListener('click', modalContentToggle);
        cancelButton.addEventListener('click', modalContentToggle);
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', loadContentModal);