const api = {

    key: "e788181cad2336904ae8d637703c3b1a",
    baseurl: "https://api.openweathermap.org/data/2.5/"

};

const searchbox = document.querySelector('.search-bar');

searchbox.addEventListener('keypress', setQuery)

function setQuery(e) {

    if (e.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }

}

function getResults(query) {

    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);

}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.description');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`

    let weatherel = document.querySelector('.humidity');
    weatherel.innerHTML = weather.weather[0].main;

    let spind = document.querySelector('.wind');
    spind.innerHTML = `${weather.wind.speed}`

}

function dateBuilder(sh) {

    let month = [
        "Yanvar",
        'Fevral',
        'Mart',
        'Aprel',
        'May',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentabr',
        'Oktabr',
        'Noyabr',
        'Dekabr'
    ];

    let days = [
        'Dushanba',
        'Seshanba',
        'Chorshanba',
        'Juma',
        'Shanba',
        'Yakshanba'
    ];

    let day = days[sh.getDay()];
    let date = sh.getDate();
    let mon = month[sh.getMonth()];
    let year = sh.getFullYear();

    return `${day} ${date} ${mon} ${year}`

}