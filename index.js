const apiKey = "094dd36fb6ba1b5c3df11b6db9558cf5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// creating var to direct access elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

// main function to be executed
async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + "&appid=" + apiKey);
  // here response is being promised --- fetch will get promise
  //
  if ((response.status == 404)) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    // this will convert that promise in json file which is readible
    console.log("data", data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // changing the weather icon
    if (data.weather[0].main == "Clouds") {
      WeatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      WeatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      WeatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      WeatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      WeatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      WeatherIcon.src = "./images/snow.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  // we are adding eventListner ---- to tell what to do when get clicked

  checkWeather(searchBox.value);
  // here searcBox value is city name
});
