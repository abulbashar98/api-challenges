

const searchWeather = () => {
    const searchInputField = document.getElementById('search-input')

    const searchText = searchInputField.value;
    // const apiKey = `5c4f8b34c34e06511a1b06b0f3a8af4c`
    if (searchText == '') {
        console.log('Please insert a name')
    }
    else {
        loadWeatherMap(searchText);
    }
}

const loadWeatherMap = async city => {
    // const url = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

    console.log(city)


    // Note:- Can't use a trigger option in WeatherMap.   In that Case It gives a Syntax Error.....(<)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c4f8b34c34e06511a1b06b0f3a8af4c`

    const response = await fetch(url);
    const weatherDetail = await response.json();
    console.log(weatherDetail);
    displayWeatherDetail(weatherDetail);

}


const displayWeatherDetail = weatherDetail => {

    const weatherDetailContainer = document.querySelector('.weather-status')
    weatherDetailContainer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weatherDetail.weather[0].icon}@2x.png" alt="">
    <h1>${weatherDetail.name}</h1>
    <h3><span>${weatherDetail.main.temp - 273}</span>&deg;C</h3>
    <h1 class="lead">${weatherDetail.weather[0].description}</h1>
   `
    weatherDetailContainer.appendChild(div);

}