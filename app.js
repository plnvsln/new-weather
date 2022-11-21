function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function displayTemp(response) {
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let currentCountry = document.querySelector("#current-country");
  currentCountry.innerHTML = response.data.country;

  // if (currentCountry.length > 10) {
  //   alert(`TEST!`);
  //   // currentCountry.style = "color: red";
  // }

  let descriptionElement = document.querySelector("#current-description");
  descriptionElement.innerHTML = response.data.condition.description;

  let tempFeelsLike = document.querySelector("#feels-like");
  tempFeelsLike.innerHTML = Math.round(response.data.temperature.feels_like);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let dateElement = document.querySelector("#current-date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);

  let iconElement = document.querySelector("#current-icon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
  console.log(response.data);
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Thursday", "Friday", "Saturday", "Sunday"];

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col-md-3 text-end">
                ${day}
                <div class="forecast-temp">
                  <span id="forecast-min">22 </span>°C
                  <span id="forecast-max" class="ps-2"> 25</span>°C
                </div>
                <p id="forecast-description">Broken Clouds</p>
              </div>
              <div class="col-md-3">
                <img src="images/clear-sky-day.png" alt="" id="forecast-icon" />
              </div>`;
  });
  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}

function search(city) {
  let apiKey = "f1089ea2a06e9tf3co914bf9c65aa287";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input").value;
  search(cityInputElement);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Lviv");
displayForecast();
