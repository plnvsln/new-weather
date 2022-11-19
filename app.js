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
  console.log(response);

  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#current-description");
  descriptionElement.innerHTML = response.data.condition.description;

  let tempFeelsLike = document.querySelector("#feels-like");
  tempFeelsLike.innerHTML = Math.round(response.data.temperature.feels_like);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let dateElement = document.querySelector("#current-date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "f1089ea2a06e9tf3co914bf9c65aa287";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tokyo&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
