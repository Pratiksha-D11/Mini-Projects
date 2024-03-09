document.getElementById('search-btn').addEventListener('click', function () {
    // Retrieve the value of the city input and trim any leading/trailing whitespace
    var city = document.getElementById('city-input').value.trim();
    
    // API key for OpenWeatherMap
    var apiKey = '423c2348dd64fabf479c16a9fad740ac';
    
    // Construct the API URL using the city and API key
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is not OK, throw an error
            if (!response.ok) {
                throw new Error('City not found');
            }
            // If the response is OK, parse it as JSON and return it
            return response.json();
        })
        .then(data => {
            // Extract temperature and weather description from the JSON data
            var weatherInfo = document.getElementById('weather-info');
            var temp = data.main.temp;
            var description = data.weather[0].description;
            
            // Update the content of the weather-info element with the temperature and description
            weatherInfo.innerHTML = 'Temperature: ' + temp + '°C<br>Description: ' + description;
        })
        .catch(error => {
            // If there's an error during fetch or city is not found, display the error message
            var weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = error.message;
        });
});
