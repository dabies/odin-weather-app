async function getWeather(city) {
    try {
       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=HN8U9XHRUT8RPMAFW5F3LN5E3&contentType=json`, {
            "method": "GET",
            "headers": {
            }
        });

        const weatherData = await response.json();
        console.log(weatherData);
 
    } catch(error) {
        console.log(error)
    }
}

export { getWeather };