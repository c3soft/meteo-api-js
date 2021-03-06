const weatherIcons = {
  "Rain": "wi wi-day-rain",
  "Clouds": "wi wi-day-cloudy",
  "Clear": "wi wi-day-sunny",
  "Snow": "wi wi-day-snow",
  "Mist": "wi wi-day-fog",
  "Drizzle": "wi wi-day-sleet"
}

async function main() {
  let ville;
  ville = document.querySelector('#city').textContent;
  const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ba99412d31367a2f60169d905ef3b403&units=metric&lang=fr`)
    .then(adblockWeather => adblockWeather.json())
    .then(json => json)
  console.log(meteo);

  displayWeatherInfos(meteo)
}

function displayWeatherInfos(data) {
  const name = data.name;
  const temperature = data.main.temp;
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const descriptions = data.weather[0].description;
  const conditions = data.weather[0].main;

  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  document.querySelector('#city').textContent = name;
  document.querySelector('#temperature').textContent = Math.round(temperature);
  document.querySelector('#tempMax').textContent = Math.round(tempMax);
  document.querySelector('#tempMin').textContent = Math.round(tempMin);
  document.querySelector('#conditions').textContent = capitalize(descriptions);
  document.querySelector('i.wi').className = weatherIcons[conditions];

  document.querySelector('#humidity').textContent = humidity;
  document.querySelector('#pressure').textContent = pressure;
  document.querySelector('#wind').textContent = wind;


  document.body.className = conditions.toLowerCase();
}
const ville = document.querySelector('#city');
ville.addEventListener('click', () => {
  ville.contentEditable = true;
});
ville.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    ville.contentEditable = false;
    main(false);
  }
})

main();

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
};