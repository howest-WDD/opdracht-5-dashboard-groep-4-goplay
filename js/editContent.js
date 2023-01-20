let dataContentStore = [], genreContentFilter, contentSwitch, release_date;
const showMovieContent = function (dataObj) {
    let htmlContent = document.querySelector(".js-contentdata")
    htmlContent.innerHTML = ""
    let htmlString = `
        <div class="c-addContentDetails__header"><h1>1. Voeg Informatie van de Film/TVShow toe</h1></div>
        <div class="c-addContentDetails__details">
            <form action="">
                <label for="title">Titel</label><br>
                <input type="text" id="title" class="c-addContentDetails__details--input" placeholder="Titel" value="${dataObj.title}"><br>
                <label for="description">Beschrijving</label><br>
                <textarea name="description" id="description" class="c-addContentDetails__details--input"
                          placeholder="Description">${dataObj.description}</textarea><br>
                <label for="Director">Regie</label><br>
                <input type="text" id="Director" class="c-addContentDetails__details--input" placeholder="Regie" value="Steven Spielberg"><br>
                <label for="Cast">Cast</label><br>
                <input type="text" id="Cast" class="c-addContentDetails__details--input" placeholder="Cast" value="Leonardo Di Caprio, jenna ortega"><br>
            </form>
            <div class="c-addContentDetails__details--select">
            <div><label for="type">Type</label><br>
                    <select id="type" class="js-type-details">
                        <option>TVShow</option>
                        <option selected>Film</option>
                    </select>
                </div>
                <div><label for="genre">Genre</label><br>
                    <select id="genreContent">
                        <!--js loaded-->
                    <option value="Film">Film</option>
                    <option value="Fictie">Fictie</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Reality">Reality</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Humor">Humor</option>
                    </select>
                </div>
                <div><label for="language">Taal</label><br>
                    <select id="language">
                        <option>Nederlands</option>
                        <option>Engels</option>
                        <option>Frans</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="c-addContentDetails__settings">
            <div class="js-release-date__checker"><label for="release_date">Release Datum</label><br>
                <input class="js-release-date" type="datetime-local" placeholder="Maak Beschikbaar Op"
                       id="release_date">
            </div>
            <div><label for="release_date">Beschikbaar tot Datum</label><br>
                <input class="js-availbleTill-date" type="datetime-local" placeholder="${dataObj.availableTill}">
            </div>

            <div>
                <label for="switch">Staat Online</label><br>
                <label class="switch">
                    <input type="checkbox" id="switch" checked>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="c-addContentDetails__buttons">
            <button class="c-button js-details-back">Terug</button>
            <button class="c-button js-details-next">Volgende</button>
        </div>`
    htmlContent.innerHTML = htmlString
    showDateSelector()
    listenToNextButton()
    listenToBackButton()
    listenToContentSwitch()
}

const showShowContent = function (dataObj) {
    let htmlContent = document.querySelector(".js-contentdata")
    htmlContent.innerHTML = ""
    let htmlString = `
        <div class="c-addContentDetails__header"><h1>1. Voeg Informatie van de Film/TVShow toe</h1></div>
        <div class="c-addContentDetails__details">
            <form action="">
                <label for="title">Titel</label><br>
                <input type="text" id="title" class="c-addContentDetails__details--input" placeholder="Titel" value="${dataObj.title}"><br>
                <label for="description">Beschrijving</label><br>
                <textarea name="description" id="description" class="c-addContentDetails__details--input"
                          placeholder="Description">${dataObj.description}</textarea><br>
                <label for="Director">Regie</label><br>
                <input type="text" id="Director" class="c-addContentDetails__details--input" placeholder="Regie" value="Steven Spielberg"><br>
                <label for="Cast">Cast</label><br>
                <input type="text" id="Cast" class="c-addContentDetails__details--input" placeholder="Cast" value="Leonardo Di Caprio, jenna ortega"><br>
            </form>
            <div class="c-addContentDetails__details--select">
            <div class="js-release-date__checker"><label for="type">Type</label><br>
                    <select id="type" class="js-type-details">
                        <option selected>TVShow</option>
                        <option>Film</option>
                    </select>
                </div>
                <div><label for="genre">Genre</label><br>
                    <select id="genreContent">
                        <!--js loaded-->
                    <option value="Film">Film</option>
                    <option value="Fictie">Fictie</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Reality">Reality</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Humor">Humor</option>
                    </select>
                </div>
                <div><label for="language">Taal</label><br>
                    <select id="language">
                        <option>Nederlands</option>
                        <option>Engels</option>
                        <option>Frans</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="c-addContentDetails__settings">
            <div><label for="release_date">Release Datum</label><br>
                <input class="js-release-date" type="datetime-local" placeholder="Maak Beschikbaar Op"
                       id="release_date">
            </div>
            <div><label for="release_date">Beschikbaar tot Datum</label><br>
                <input class="js-availbleTill-date" type="datetime-local" placeholder="${dataObj.availableTill}">
            </div>

            <div>
                <label for="switch">Staat Online</label><br>
                <label class="switch">
                    <input type="checkbox" id="switch" checked>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="c-addContentDetails__buttons">
            <button class="c-button js-details-back">Terug</button>
            <button class="c-button js-details-next">Volgende</button>
        </div>`
    htmlContent.innerHTML = htmlString
    showDateSelector()
    listenToNextButton()
    listenToBackButton()
    listenToContentSwitch()
}

const showDateSelector = function () {
    //add the date selector
    flatpickr(".js-release-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
        disableMobile: "true"
    })

    flatpickr(".js-availbleTill-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
        disableMobile: "true"
    })

    release_date = document.querySelector('.js-release-date__checker')
}

const toggleReleaseDate = (contentSwitch) => {
    if (contentSwitch.checked === true) {
        release_date.classList.add("u-hidden");
    } else {
        release_date.classList.remove("u-hidden");
    }
}

const checkType = () => {
    const type = document.querySelector('.js-type-details')
    if (type.value === 'Film') {
        return "Film"
    } else {
        return "TVShow"
    }
}

const listenToContentSwitch = () => {
    contentSwitch = document.querySelector("#switch");
    contentSwitch.addEventListener('click', function () {
        toggleReleaseDate(contentSwitch)
    })
}

const listenToNextButton = () => {
    const nextButton = document.querySelector(".js-details-next")
    nextButton.addEventListener('click', function () {
        const type = checkType();
        if (type === 'Film') {
            window.location.href = '/content.html'
        } else {
            window.location.href = '/create_new_seasons.html'
        }
    })
}

const listenToBackButton = () => {
    const nextButton = document.querySelector(".js-details-back")
    nextButton.addEventListener('click', function () {
        window.location.href = `/create_new_upload.html`;
    })
}

const showContentGenres = function (genres) {
    genres.forEach(genre => {
        let htmlstring_content = `<option value="${genre}">${genre}</option>`
        genreContentFilter.innerHTML += htmlstring_content
    });
}

const getShowById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getshowbyid?_id=${id}`, showShowContent);
}

const getMovieById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getmoviebyid?_id=${id}`, showMovieContent);
}

const handleAllContentData = function (jsonObject) {
    //data from the API
    let movies = jsonObject[0]
    let shows = jsonObject[1]

    //create 1 Big list from 2 API calls
    //store the data in a List for later use
    dataContentStore = movies.concat(shows)

    getContentGenres()
}

const getAllEditContent = function () {
    Promise.all(["getmovies", "getshows"].map(name =>
        fetch(`https://goplayhowestapifunction.azurewebsites.net/api/${name}`).then(resp => resp.json())
    )).then(handleAllContentData)
}

const getContentGenres = () => {
    const genres = []
    dataContentStore.forEach(data => {
        if (!genres.includes(data.genre)) {
            genres.push(data.genre)
        }
    });
    showContentGenres(genres)
}

const editContent = function () {
    let [url, id, movie] = window.location.href.split(/[?&]/);
    //check if you are on the right page
    if (url.includes("create_new_details.html")) {
        //get the url and split it on ? and & then put it in to variables
        //check if there is an id if not new show or movie
        if (!id) {
            //new
        }
        //Check if it is a movie
        else if (id && movie === "movie=true") {
            getMovieById(id)
        }
        //Check if it is a tvshow
        else if (id && movie === "movie=false") {
            getShowById(id)
        } else {
            //should not be possible to get here
            console.log("idk buddy you did something wrong")
        }
        showDateSelector()
        getAllEditContent()
        genreContentFilter = document.querySelector("#genreContent");
        listenToContentSwitch()
        listenToNextButton()
        listenToBackButton()
    }
    if (url.includes("create_new_upload.html")) {
        let back = document.querySelector(".js-upload-back");
        let next = document.querySelector(".js-upload-next");

        back.addEventListener('click', function () {
            window.location.href = `/content.html`;
        })

        next.addEventListener('click', function () {
            if (!id) {
                window.location.href = `/create_new_details.html`;
            } else {
                window.location.href = `/create_new_details.html?${id}&movie=true`;
            }
        })
    }
    if (url.includes("create_new_seasons.html")) {
        let back = document.querySelector(".js-seasons-back");
        let next = document.querySelector(".js-seasons-next");

        back.addEventListener('click', function () {
            window.location.href = `/create_new_details.html`;
        })

        next.addEventListener('click', function () {
            window.location.href = `/content.html`;
        })
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', editContent);