// fetch('https://api.ipify.org?format=json')
//   .then(resultIp => resultIp.json())
//   .then(json => {
//     const ip = json.ip;

// fetch(`http://api.ipstack.com/${ip}?access_key=6bc4ff361803b27886a007bec081ef6e`)
//   .then((resultVille) => {
//   return resultVille.json() 
//   })
//   .then((json) =>{
//     const ville = json.city;


//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ba99412d31367a2f60169d905ef3b403&units=metric&lang=fr`)
//         .then((resultWeather) => {
//         return resultWeather.json() 
//       })
//       .then((resultWeather) =>{
//           console.log(resultWeather)
//      })
//   })
// })



////////////////////////////////////////////////////////////////
async function main(){

  const ip = await fetch('https://api.ipify.org?format=json')
    .then(resultIp => resultIp.json())
    .then(json => json.ip)
   
  
  const ville = await fetch(`http://api.ipstack.com/${ip}?access_key=6bc4ff361803b27886a007bec081ef6e`)
    .then(resultVille => resultVille.json())
      .then(json => json.city)
  
  
  
     const meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ba99412d31367a2f60169d905ef3b403&units=metric&lang=fr`)
          .then(resultWeather => resultWeather.json())
        .then(json => json) 
 
        console.log(meteo) 
        displayWeatherInfos(meteo)

}

function displayWeatherInfos(data){
  const name = data.name;
  const temperature = data.main.temp;
  const descriptions = data.weather[0].description;

  document.querySelector('#city').textContent = name;
  document.querySelector('#temperature').textContent = temperature;
  document.querySelector('#conditions').textContent = descriptions;
  
}

//main();
////////////////////////////////////////////////////////////////

// function capitalize(str){
//     return str[0].toUpperCase() + str.slice(1);
// };