const $resultsDiv = document.querySelector('.results');

function getTodayForecast(data) {
    //establishing variables for all information we want on the card
    let currentConditions = data.currentConditions.conditions;
    let currentWeatherIcon = data.currentConditions.icon;
    //using require for image src path
    let iconSrc = require(`./src/images/${currentWeatherIcon}.svg`);
    let currentSunrise = data.currentConditions.sunrise;
    let currentSunset = data.currentConditions.sunset;
    let currentTemp = data.currentConditions.temp;
    let currentHumidity = data.currentConditions.humidity;
    let currentFeelsLike = data.currentConditions.feelslike;
    let address = data.resolvedAddress;
    let currentUV = data.currentConditions.uvindex;
    let currentHigh = data.days[0].tempmax;
    let currentLow = data.days[0].tempmin;
    let currentPrecipitation = data.currentConditions.precip;

    //creating weather card in the DOM
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
    
    //appending all created elements to the card and pinning it to the container div
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

function getFiveDayForecast(data) {
    //makes a weather card for each of the days of the week, and adds the class to it
    let day0 = makeOneFutureDayForecast(data, 0);
    day0.classList.add('fiveDayWeatherCard');
    let day1 = makeOneFutureDayForecast(data, 1);
    day1.classList.add('fiveDayWeatherCard');
    let day2 = makeOneFutureDayForecast(data, 2);
    day2.classList.add('fiveDayWeatherCard');
    let day3 = makeOneFutureDayForecast(data, 3);
    day3.classList.add('fiveDayWeatherCard');
    let day4 = makeOneFutureDayForecast(data, 4);
    day4.classList.add('fiveDayWeatherCard');

    //append all weather cards to the display div
    $resultsDiv.appendChild(day0);
    $resultsDiv.appendChild(day1);
    $resultsDiv.appendChild(day2);
    $resultsDiv.appendChild(day3);
    $resultsDiv.appendChild(day4);
}

function makeOneFutureDayForecast(data, day) {
    //creating card in DOM
    let card = document.createElement('div');
    let cardDate = document.createElement('p');
    //checking to see what day it is, if it is today, it says today instead of the day
    if (day === 0) {
        cardDate.textContent = 'Today';
    } else {
        cardDate.textContent = getDayName(data.days[day+1].datetime, 'en-US');
    };  
    let cardImg = document.createElement('img');
    cardImg.src = require(`./src/images/${data.days[day].icon}.svg`);
    let cardDescription = createParagraph('Forecast:', data.days[day].description);
    let cardHigh = createParagraph('High:', data.days[day].tempmax);
    let cardLow = createParagraph('Low:', data.days[day].tempmin);
    let cardPrecipitation = createParagraph('Chance of Precipitation:', data.days[day].precipprob);

    //appending data to card
    card.appendChild(cardDate);
    card.appendChild(cardImg);
    card.appendChild(cardDescription);
    card.appendChild(cardHigh);
    card.appendChild(cardLow);
    card.appendChild(cardPrecipitation);

    //returning card
    return card;
}

//function to create a paragraph node for the weather cards
function createParagraph(title, data) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = `${title} ${data}`;

    return newParagraph;
}

//function to display an error message if something goes wrong during the API search
function displayErrorMessage() {
    let errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.textContent = 'Oops, there was an error during that search.';
    $resultsDiv.appendChild(errorMessage);
}

//function to turn date string into a day of the week
function getDayName(dateStr, locale)
{
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

//function to clear the div the weather cards reside in
function clearResults() {
    $resultsDiv.innerHTML = '';
}

export { getTodayForecast, getFiveDayForecast, displayErrorMessage, clearResults };