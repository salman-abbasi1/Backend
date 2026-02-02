function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.innerText = "Please enter a city name.";
    return;
  }

  const apiKey = "50975f62700113d62889870fc1ec1b1e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        result.innerText = "City not found!";
        return;
      }

      result.innerText = 
        `Temperature: ${data.main.temp}°C | Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
      result.innerText = "Error fetching weather data.";
      console.error(error);
    });
}
