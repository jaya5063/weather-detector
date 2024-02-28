const apiKey = "0f6d7f72a7e9fb96adbafe9aa4d1b6db";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let temp = document.querySelector(".temp");

let name = document.getElementById("city");

let humidity = document.querySelector(".humidity");

let wind = document.querySelector(".wind");

let searchBox = document.getElementById("search")

let searchBtn = document.getElementById("btn");

let image = document.getElementById("img")

let pressure = document.querySelector(".pressure")

let latititude = document.querySelector(".lat")

let longitude = document.querySelector(".long")


async function checkWheather(city) {
    let wheather = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await wheather.json()

    if (wheather.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".wheather").style.display = "none";
    }
    console.log(data)

    temp.innerHTML = data.main.temp + `°C`;
    name.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + "km/h";
    pressure.innerHTML = data.main.pressure
    latititude.innerHTML = "Latitude:" + data.coord.lat
    longitude.innerHTML = "Longitude:" + data.coord.lon
    document.querySelector(".error").style.display = "none"
    document.querySelector(".wheather").style.display = " block";

    if (data.weather[0].main == 'Clouds') {
        image.src = "cloud&sun.svg";
    } else if (data.weather[0].main == 'Rain') {
        image.src = "rain.svg"
    }
}


searchBtn.addEventListener("click", () => {
    console.log("hi")
    checkWheather(searchBox.value);
})

