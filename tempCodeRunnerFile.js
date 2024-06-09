onst apiKey = "c615f13c2b86bc48bca2b4d86b6b7ca1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";

async function checkWeather(){
    const response = fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}

checkWeather();