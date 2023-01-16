const getShowById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getshowbyid?_id=${id}`, showShow);
}

const getMovieById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getmoviebyid?_id=${id}`, showMovie);
}

const editContent = function () {
    //split the url and take the 3 parameter
    const url = window.location.href;
    // check if you are on the movie/serie editing page
    if (url.includes("create_new_details.html")) {
        let [url, id, movie] = window.location.href.split(/[?&]/);
        //check if there is an id if not new show or movie
        if (!id) {
            console.log("new show/movie")
        }
        //Check if it is a movie
        else if (id && movie === "movie=true") {
            console.log("is movie")
        }
        //Check if it is a tvshow
        else if (id && movie === "movie=false") {
            console.log("is tvshow")
        } else {
            console.log(movie)
            console.log("idk buddy you did something wrong")
        }
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', editContent);