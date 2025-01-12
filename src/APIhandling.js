async function getWeather(city) {
    //make an API call to get weather data
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=HN8U9XHRUT8RPMAFW5F3LN5E3&contentType=json`, {
        "method": "GET",
        "headers": {
        }
    });
    
    //convert response to JSON, log it in console and return it
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}

export { getWeather };