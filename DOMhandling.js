const $resultsDiv = document.querySelector('.results');

function getTodayForecast(data) {
    let currentConditions = data.currentConditions.conditions;
    console.log(currentConditions);
    let currentWeatherIcon = data.currentConditions.icon;
    let iconSrc = require(`./src/images/${currentWeatherIcon}.svg`);
    console.log(currentWeatherIcon);
    let currentSunrise = data.currentConditions.sunrise;
    console.log(currentSunrise);
    let currentSunset = data.currentConditions.sunset;
    console.log(currentSunset);
    let currentTemp = data.currentConditions.temp;
    console.log(currentTemp);
    let currentHumidity = data.currentConditions.humidity;
    console.log(currentHumidity);
    let currentFeelsLike = data.currentConditions.feelslike;
    console.log(currentFeelsLike);
    let address = data.resolvedAddress;
    console.log(address);
    let currentUV = data.currentConditions.uvindex;
    let currentHigh = data.days[0].tempmax;
    let currentLow = data.days[0].tempmin;
    let currentPrecipitation = data.currentConditions.precip;
    console.log(currentHigh);

    let card = document.createElement('div');
    card.classList.add('oneDayWeatherCard')
    let cardAddress = document.createElement('p');
    cardAddress.textContent = `${address}`;
    cardAddress.classList.add('header');
    let cardImg = document.createElement('img');
    cardImg.src = iconSrc;
    let cardCurrentConditions = createParagraph('Current Weather:', currentConditions);
    let cardUV = createParagraph('Current UV Index:', currentUV);
    let cardHigh = createParagraph("Today's High:", currentHigh);
    let cardLow = createParagraph("Today's Low:", currentLow);
    let cardCurrentTemp = createParagraph('Current Temp:', currentTemp);
    let cardCurrentFeelsLike = createParagraph('Feels Like:', currentFeelsLike);
    let cardPrecipitation = createParagraph('Precipitation:', currentPrecipitation);
    let cardHumidity = createParagraph('Humidity:', currentHumidity);
    let cardSunrise = createParagraph('Sunrise:', currentSunrise);
    let cardSunset = createParagraph('Sunset:', currentSunset);
    
    card.appendChild(cardAddress);
    card.appendChild(cardImg);
    card.appendChild(cardCurrentConditions);
    card.appendChild(cardUV);
    card.appendChild(cardCurrentTemp)
    card.appendChild(cardCurrentFeelsLike);
    card.appendChild(cardHigh);
    card.appendChild(cardLow);
    card.appendChild(cardPrecipitation);
    card.appendChild(cardHumidity);
    card.appendChild(cardSunrise);
    card.appendChild(cardSunset);
    $resultsDiv.appendChild(card);
}

function createParagraph(title, data) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = `${title} ${data}`;

    return newParagraph;
}

function displayErrorMessage() {
    let errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.textContent = 'Oops, there was an error during that search.';
    $resultsDiv.appendChild(errorMessage);
}

export { getTodayForecast, displayErrorMessage };