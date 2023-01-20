const listenToNewEpisodeBtn = ()=> {
    const btn = document.querySelector(".js-newEpisode")
    btn.addEventListener('click', function (){
        addNewEpisode()
    })
}

const listenToEditEpisodeBtn = ()=> {
    const btn = document.querySelectorAll(".js-editBtn")
    btn.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            addNewEpisode()
        });
    });
}

const addNewEpisode = ()=>{
    window.location.href = '/create_new_episode.html'
}

const displayEpisodes= function () {
    const url = window.location.href;
    // check if you are on the content page
    if (url.includes("create_new_episodes.html")) {
        let back = document.querySelector(".js-seasons-back");
        let next = document.querySelector(".js-seasons-next");
        back.addEventListener('click', function () {
            window.location.href = `/create_new_seasons.html`;
        })
        next.addEventListener('click', function () {
            window.location.href = `/content.html`;
        })

        listenToNewEpisodeBtn()
        listenToEditEpisodeBtn()
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', displayEpisodes);