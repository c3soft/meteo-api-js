fetch('https://api.ipify.org?format=json')
.then(resultIp => resultIp.json())
.then(json => {
  const ip = json.ip;

//   fetch('http://freegeoip.net/json/' + ip,{mode: 'no-corps'})
//   .then(resultAddress => resultAddress.json())
//   .then(json => {
//     const ville = json.city
//    console.log(ville)
fetch(`http://api.ipstack.com/${ip}?access_key=6bc4ff361803b27886a007bec081ef6e`)
.then((resultVille) => {
return resultVille.json() 
})
.then((json) =>{
  const ville = json.city;


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ba99412d31367a2f60169d905ef3b403&units=metric&lang=fr`)
  .then((resultWeather) => {
  return resultWeather.json() 
})
.then((resultWeather) =>{
    console.log(resultWeather)
  })
})
})

//   fetch('http://api.openweathermap.org/data/2.5/weather?q=lille&appid=ba99412d31367a2f60169d905ef3b403&units=metric', {
//     mode: 'no-cors',

// })
//   .then(result => result.json())
//   .then(json => {
//     console.log(json)
//   })
//  })
// })


// function capitalize(str){
//     return str[0].toUpperCase() + str.slice(1);
// };

// function main(){
//   fetch('https://api.ipify.org?format=json')
//   .then(resultIp => resultIp.json())
//   .then(json => console.log(json.ip))
   
// }

