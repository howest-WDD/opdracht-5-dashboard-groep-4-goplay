const showUpdateContent = function (dataObj) {
    let htmlContent = document.querySelector(".js-contentdata")
    htmlContent.innerHTML = ""
    let htmlString = `<div class="c-addContentDetails__header"><h1>1. Voeg Informatie van de Film/TVShow toe</h1></div>
        <div class="c-addContentDetails__details">
            <h2 class="c-addContentDetails__details--title">Algemene Info</h2>
            <form action="">
                <label for="title">Titel</label><br>
                <input type="text" id="title" class="c-addContentDetails__details--input" placeholder="Titel" value="${dataObj.title}"><br>
                <label for="description">Beschrijving</label><br>
                <textarea name="description" id="description" class="c-addContentDetails__details--input"
                          placeholder="Description">${dataObj.description}</textarea><br>
                <label for="Director">Regie</label><br>
                <input type="text" id="Director" class="c-addContentDetails__details--input" placeholder="Regie" value="Steven Spielberg"><br>
                <label for="Cast">Cast</label><br>
                <input type="text" id="Cast" class="c-addContentDetails__details--input" placeholder="Cast" value="Leonardo Di Caprio, Jennifer Aniston"><br>
                <label for="trailer">Trailer</label><br>
                <input type="url" id="trailer" class="c-addContentDetails__details--input" placeholder="Trailer Url"><br>
            </form>
            <div class="c-addContent__details--select">
                <label for="type" hidden>Type</label>
                <select id="type">
                    <option>TVShow</option>
                    <option>Film</option>
                </select>
                <label for="genre" hidden>Genre</label>
                <select id="genre">
                    <option>Actie</option>
                    <option>test2</option>
                    <option>test3</option>
                </select>
                <label for="language" hidden>Taal</label>
                <select id="language">
                    <option>Nederlands</option>
                    <option selected>Engels</option>
                    <option>Frans</option>
                </select>
            </div>
        </div>
        <div class="c-addContentDetails__settings">
            <h2 class="c-addContentDetails__settings--title">Instellingen</h2>
            <label for="release_date" hidden>Release Datum</label>
            <input class="js-release-date" type="datetime-local" placeholder="Maak Beschikbaar Op" id="release_date">
            <label for="release_date" hidden>Beschikbaar tot Datum</label>
            <input class="js-availbleTill-date" type="datetime-local" placeholder="Beschikbaar Tot">
        </div>
        <div class="c-addContentDetails__buttons">
            <a href="content.html">
                <button>Terug</button>
            </a>
            <button>Volgende</button>
        </div>`
    htmlContent.innerHTML = htmlString
    showDateSelector()
}

const showDateSelector = function (){
    //add the date selector
    flatpickr(".js-release-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true
    })

    flatpickr(".js-availbleTill-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
    })
}

const getShowById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getshowbyid?_id=${id}`, showUpdateContent);
}

const getMovieById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getmoviebyid?_id=${id}`, showUpdateContent);
}

const editContent = function () {
    let url = window.location.href;
    //check if you are on the right page
    if (url.includes("create_new_details.html")) {
        //get the url and split it on ? and & then put it in to variables
        let [url, id, movie] = window.location.href.split(/[?&]/);
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
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', editContent);