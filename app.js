function displayTemp(response) {
  console.log(response.data);
}

let apiKey = "f1089ea2a06e9tf3co914bf9c65aa287";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Chicago&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
