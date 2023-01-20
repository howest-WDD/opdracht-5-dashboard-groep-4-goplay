const showDateEpisodeSelector = function () {
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

const displayEpisode = function () {
    const url = window.location.href;
    // check if you are on the content page
    if (url.includes("create_new_episode.html")) {
        let back = document.querySelector(".js-episode-back");
        let next = document.querySelector(".js-episode-next");
        back.addEventListener('click', function () {
            window.location.href = `/create_new_episodes.html`;
        })
        next.addEventListener('click', function () {
            window.location.href = `/create_new_episodes.html`;
        })

        showDateEpisodeSelector()
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', displayEpisode);