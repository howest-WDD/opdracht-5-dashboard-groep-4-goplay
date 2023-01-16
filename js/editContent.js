const showUpdateContent = function(dataObj){
    console.log(dataObj)
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
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', editContent);