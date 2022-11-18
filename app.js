function displayTemp(response) {
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response);

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#current-description");
  descriptionElement.innerHTML = response.data.condition.description;

  let tempFeelsLike = document.querySelector("#feels-like");
  tempFeelsLike.innerHTML = Math.round(response.data.temperature.feels_like);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
}

let apiKey = "f1089ea2a06e9tf3co914bf9c65aa287";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tokyo&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
