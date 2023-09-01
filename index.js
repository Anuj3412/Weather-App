const apiKey = "094dd36fb6ba1b5c3df11b6db9558cf5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Bhopal&units=metric" ;

async function checkWeather(){
  const response = await fetch(apiUrl + "&appid=" + apiKey); 
  // here response is being promised --- fetch will get promise
  //
  const data = await response.json() 
  // this will convert that promise in json file which is readible

  console.log("data" , data);


}
checkWeather();

  