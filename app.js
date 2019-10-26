<<<<<<< HEAD
const weatherIcons ={
  "Rain": "wi wi-day-rain",
  "Clouds": "wi wi-day-cloudy",
  "Clear": "wi wi-day-sunny",
  "Snow": "wi wi-day-snow",
  "Mist": "wi wi-day-fog",
  "Drizzle": "wi wi-day-sleet"
}

////////////////////////////////////////////////////////////////
async function main(){
  // let ville;

  // if(withIP){
      const ip = await fetch('https://api.ipify.org?format=json')
        .then(adblockIp => adblockIp.json())
        .then(json => json.ip)
        
      const ville = await fetch(`http://api.ipstack.com/${ip}?access_key=6bc4ff361803b27886a007bec081ef6e`)
        .then(adblockVille => adblockVille.json())
        .then(json => json.city) 
  // }else{
  //     ville = document.querySelector(#city).textContent;
  // }  
     const meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Reims&appid=ba99412d31367a2f60169d905ef3b403&units=metric&lang=fr`)
        .then(adblockWeather => adblockWeather.json())
        .then(json => json) 
console.log(meteo);

       displayWeatherInfos(meteo)
=======
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

>>>>>>> f40f92e8c4ef65c29752cd5352a9dfbe79bb8b53
}

function displayWeatherInfos(data){
  const name = data.name;
  const temperature = data.main.temp;
<<<<<<< HEAD
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const descriptions = data.weather[0].description;
  const conditions = data.weather[0].main;

  document.querySelector('#city').textContent = name;
  document.querySelector('#temperature').textContent = Math.round(temperature);
  document.querySelector('#tempMax').textContent = Math.round(tempMax);
  document.querySelector('#tempMin').textContent = Math.round(tempMin);
  document.querySelector('#conditions').textContent = capitalize(descriptions);
  document.querySelector('i.wi').className = weatherIcons[conditions];
  
  document.body.className = conditions.toLowerCase();
  //console.log(conditions.toLowerCase())
}
const ville = document.querySelector('#city');
ville.addEventListener('click',() =>{
ville.contentEditable = true;
  //  alert('aa')
});
ville.addEventListener('keydown',(e) =>{
  if(e.keyCode === 13){
    e.preventDefault();
    ville.contentEditable = false;
    main(false);
  }
})
=======

  document.querySelector('#city').textContent = name;
  document.querySelector('#temperature').textContent = temperature;
}
>>>>>>> f40f92e8c4ef65c29752cd5352a9dfbe79bb8b53

main();
////////////////////////////////////////////////////////////////

<<<<<<< HEAD
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
};

////////////////////////////////////////////////////////////////
=======
// function capitalize(str){
//     return str[0].toUpperCase() + str.slice(1);
// };

// function main(){
//   fetch('https://api.ipify.org?format=json')
//   .then(resultIp => resultIp.json())
//   .then(json => console.log(json.ip))
   
// }
>>>>>>> f40f92e8c4ef65c29752cd5352a9dfbe79bb8b53
