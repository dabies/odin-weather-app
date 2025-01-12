/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./DOMhandling.js":
/*!************************!*\
  !*** ./DOMhandling.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearResults: () => (/* binding */ clearResults),\n/* harmony export */   displayErrorMessage: () => (/* binding */ displayErrorMessage),\n/* harmony export */   getFiveDayForecast: () => (/* binding */ getFiveDayForecast),\n/* harmony export */   getTodayForecast: () => (/* binding */ getTodayForecast)\n/* harmony export */ });\nconst $resultsDiv = document.querySelector('.results');\n\nfunction getTodayForecast(data) {\n    //establishing variables for all information we want on the card\n    let currentConditions = data.currentConditions.conditions;\n    let currentWeatherIcon = data.currentConditions.icon;\n    //using require for image src path\n    let iconSrc = __webpack_require__(\"./src/images sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(`./${currentWeatherIcon}.svg`);\n    let currentSunrise = data.currentConditions.sunrise;\n    let currentSunset = data.currentConditions.sunset;\n    let currentTemp = data.currentConditions.temp;\n    let currentHumidity = data.currentConditions.humidity;\n    let currentFeelsLike = data.currentConditions.feelslike;\n    let address = data.resolvedAddress;\n    let currentUV = data.currentConditions.uvindex;\n    let currentHigh = data.days[0].tempmax;\n    let currentLow = data.days[0].tempmin;\n    let currentPrecipitation = data.currentConditions.precip;\n\n    //creating weather card in the DOM\n    let card = document.createElement('div');\n    card.classList.add('oneDayWeatherCard')\n    let cardAddress = document.createElement('p');\n    cardAddress.textContent = `${address}`;\n    cardAddress.classList.add('header');\n    let cardImg = document.createElement('img');\n    cardImg.src = iconSrc;\n    let cardCurrentConditions = createParagraph('Current Weather:', currentConditions);\n    let cardUV = createParagraph('Current UV Index:', currentUV);\n    let cardHigh = createParagraph(\"Today's High:\", currentHigh);\n    let cardLow = createParagraph(\"Today's Low:\", currentLow);\n    let cardCurrentTemp = createParagraph('Current Temp:', currentTemp);\n    let cardCurrentFeelsLike = createParagraph('Feels Like:', currentFeelsLike);\n    let cardPrecipitation = createParagraph('Precipitation:', currentPrecipitation);\n    let cardHumidity = createParagraph('Humidity:', currentHumidity);\n    let cardSunrise = createParagraph('Sunrise:', currentSunrise);\n    let cardSunset = createParagraph('Sunset:', currentSunset);\n    \n    //appending all created elements to the card and pinning it to the container div\n    card.appendChild(cardAddress);\n    card.appendChild(cardImg);\n    card.appendChild(cardCurrentConditions);\n    card.appendChild(cardUV);\n    card.appendChild(cardCurrentTemp)\n    card.appendChild(cardCurrentFeelsLike);\n    card.appendChild(cardHigh);\n    card.appendChild(cardLow);\n    card.appendChild(cardPrecipitation);\n    card.appendChild(cardHumidity);\n    card.appendChild(cardSunrise);\n    card.appendChild(cardSunset);\n    $resultsDiv.appendChild(card);\n}\n\nfunction getFiveDayForecast(data) {\n    //makes a weather card for each of the days of the week, and adds the class to it\n    let day0 = makeOneFutureDayForecast(data, 0);\n    day0.classList.add('fiveDayWeatherCard');\n    let day1 = makeOneFutureDayForecast(data, 1);\n    day1.classList.add('fiveDayWeatherCard');\n    let day2 = makeOneFutureDayForecast(data, 2);\n    day2.classList.add('fiveDayWeatherCard');\n    let day3 = makeOneFutureDayForecast(data, 3);\n    day3.classList.add('fiveDayWeatherCard');\n    let day4 = makeOneFutureDayForecast(data, 4);\n    day4.classList.add('fiveDayWeatherCard');\n\n    //append all weather cards to the display div\n    $resultsDiv.appendChild(day0);\n    $resultsDiv.appendChild(day1);\n    $resultsDiv.appendChild(day2);\n    $resultsDiv.appendChild(day3);\n    $resultsDiv.appendChild(day4);\n}\n\nfunction makeOneFutureDayForecast(data, day) {\n    //creating card in DOM\n    let card = document.createElement('div');\n    let cardDate = document.createElement('p');\n    //checking to see what day it is, if it is today, it says today instead of the day\n    if (day === 0) {\n        cardDate.textContent = 'Today';\n    } else {\n        cardDate.textContent = getDayName(data.days[day+1].datetime, 'en-US');\n    };  \n    let cardImg = document.createElement('img');\n    cardImg.src = __webpack_require__(\"./src/images sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(`./${data.days[day].icon}.svg`);\n    let cardDescription = createParagraph('Forecast:', data.days[day].description);\n    let cardHigh = createParagraph('High:', data.days[day].tempmax);\n    let cardLow = createParagraph('Low:', data.days[day].tempmin);\n    let cardPrecipitation = createParagraph('Chance of Precipitation:', data.days[day].precipprob);\n\n    //appending data to card\n    card.appendChild(cardDate);\n    card.appendChild(cardImg);\n    card.appendChild(cardDescription);\n    card.appendChild(cardHigh);\n    card.appendChild(cardLow);\n    card.appendChild(cardPrecipitation);\n\n    //returning card\n    return card;\n}\n\n//function to create a paragraph node for the weather cards\nfunction createParagraph(title, data) {\n    let newParagraph = document.createElement('p');\n    newParagraph.textContent = `${title} ${data}`;\n\n    return newParagraph;\n}\n\n//function to display an error message if something goes wrong during the API search\nfunction displayErrorMessage() {\n    let errorMessage = document.createElement('p');\n    errorMessage.classList.add('error');\n    errorMessage.textContent = 'Oops, there was an error during that search.';\n    $resultsDiv.appendChild(errorMessage);\n}\n\n//function to turn date string into a day of the week\nfunction getDayName(dateStr, locale)\n{\n    let date = new Date(dateStr);\n    return date.toLocaleDateString(locale, { weekday: 'long' });        \n}\n\n//function to clear the div the weather cards reside in\nfunction clearResults() {\n    $resultsDiv.innerHTML = '';\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ET01oYW5kbGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBUSxHQUFjLEVBQUUsbUJBQW1CLEtBQUssQ0FBQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBUSxHQUFjLEVBQUUsb0JBQW9CLEtBQUssQ0FBQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU8sRUFBRSxLQUFLOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ET01oYW5kbGluZy5qcz8wNTUzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICRyZXN1bHRzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcblxuZnVuY3Rpb24gZ2V0VG9kYXlGb3JlY2FzdChkYXRhKSB7XG4gICAgLy9lc3RhYmxpc2hpbmcgdmFyaWFibGVzIGZvciBhbGwgaW5mb3JtYXRpb24gd2Ugd2FudCBvbiB0aGUgY2FyZFxuICAgIGxldCBjdXJyZW50Q29uZGl0aW9ucyA9IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucztcbiAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uO1xuICAgIC8vdXNpbmcgcmVxdWlyZSBmb3IgaW1hZ2Ugc3JjIHBhdGhcbiAgICBsZXQgaWNvblNyYyA9IHJlcXVpcmUoYC4vc3JjL2ltYWdlcy8ke2N1cnJlbnRXZWF0aGVySWNvbn0uc3ZnYCk7XG4gICAgbGV0IGN1cnJlbnRTdW5yaXNlID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlO1xuICAgIGxldCBjdXJyZW50U3Vuc2V0ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQ7XG4gICAgbGV0IGN1cnJlbnRUZW1wID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wO1xuICAgIGxldCBjdXJyZW50SHVtaWRpdHkgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5O1xuICAgIGxldCBjdXJyZW50RmVlbHNMaWtlID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5mZWVsc2xpa2U7XG4gICAgbGV0IGFkZHJlc3MgPSBkYXRhLnJlc29sdmVkQWRkcmVzcztcbiAgICBsZXQgY3VycmVudFVWID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy51dmluZGV4O1xuICAgIGxldCBjdXJyZW50SGlnaCA9IGRhdGEuZGF5c1swXS50ZW1wbWF4O1xuICAgIGxldCBjdXJyZW50TG93ID0gZGF0YS5kYXlzWzBdLnRlbXBtaW47XG4gICAgbGV0IGN1cnJlbnRQcmVjaXBpdGF0aW9uID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5wcmVjaXA7XG5cbiAgICAvL2NyZWF0aW5nIHdlYXRoZXIgY2FyZCBpbiB0aGUgRE9NXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ29uZURheVdlYXRoZXJDYXJkJylcbiAgICBsZXQgY2FyZEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FyZEFkZHJlc3MudGV4dENvbnRlbnQgPSBgJHthZGRyZXNzfWA7XG4gICAgY2FyZEFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgbGV0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJkSW1nLnNyYyA9IGljb25TcmM7XG4gICAgbGV0IGNhcmRDdXJyZW50Q29uZGl0aW9ucyA9IGNyZWF0ZVBhcmFncmFwaCgnQ3VycmVudCBXZWF0aGVyOicsIGN1cnJlbnRDb25kaXRpb25zKTtcbiAgICBsZXQgY2FyZFVWID0gY3JlYXRlUGFyYWdyYXBoKCdDdXJyZW50IFVWIEluZGV4OicsIGN1cnJlbnRVVik7XG4gICAgbGV0IGNhcmRIaWdoID0gY3JlYXRlUGFyYWdyYXBoKFwiVG9kYXkncyBIaWdoOlwiLCBjdXJyZW50SGlnaCk7XG4gICAgbGV0IGNhcmRMb3cgPSBjcmVhdGVQYXJhZ3JhcGgoXCJUb2RheSdzIExvdzpcIiwgY3VycmVudExvdyk7XG4gICAgbGV0IGNhcmRDdXJyZW50VGVtcCA9IGNyZWF0ZVBhcmFncmFwaCgnQ3VycmVudCBUZW1wOicsIGN1cnJlbnRUZW1wKTtcbiAgICBsZXQgY2FyZEN1cnJlbnRGZWVsc0xpa2UgPSBjcmVhdGVQYXJhZ3JhcGgoJ0ZlZWxzIExpa2U6JywgY3VycmVudEZlZWxzTGlrZSk7XG4gICAgbGV0IGNhcmRQcmVjaXBpdGF0aW9uID0gY3JlYXRlUGFyYWdyYXBoKCdQcmVjaXBpdGF0aW9uOicsIGN1cnJlbnRQcmVjaXBpdGF0aW9uKTtcbiAgICBsZXQgY2FyZEh1bWlkaXR5ID0gY3JlYXRlUGFyYWdyYXBoKCdIdW1pZGl0eTonLCBjdXJyZW50SHVtaWRpdHkpO1xuICAgIGxldCBjYXJkU3VucmlzZSA9IGNyZWF0ZVBhcmFncmFwaCgnU3VucmlzZTonLCBjdXJyZW50U3VucmlzZSk7XG4gICAgbGV0IGNhcmRTdW5zZXQgPSBjcmVhdGVQYXJhZ3JhcGgoJ1N1bnNldDonLCBjdXJyZW50U3Vuc2V0KTtcbiAgICBcbiAgICAvL2FwcGVuZGluZyBhbGwgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgY2FyZCBhbmQgcGlubmluZyBpdCB0byB0aGUgY29udGFpbmVyIGRpdlxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEFkZHJlc3MpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ3VycmVudENvbmRpdGlvbnMpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFVWKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDdXJyZW50VGVtcClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDdXJyZW50RmVlbHNMaWtlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRIaWdoKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRMb3cpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFByZWNpcGl0YXRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEh1bWlkaXR5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTdW5yaXNlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTdW5zZXQpO1xuICAgICRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG5mdW5jdGlvbiBnZXRGaXZlRGF5Rm9yZWNhc3QoZGF0YSkge1xuICAgIC8vbWFrZXMgYSB3ZWF0aGVyIGNhcmQgZm9yIGVhY2ggb2YgdGhlIGRheXMgb2YgdGhlIHdlZWssIGFuZCBhZGRzIHRoZSBjbGFzcyB0byBpdFxuICAgIGxldCBkYXkwID0gbWFrZU9uZUZ1dHVyZURheUZvcmVjYXN0KGRhdGEsIDApO1xuICAgIGRheTAuY2xhc3NMaXN0LmFkZCgnZml2ZURheVdlYXRoZXJDYXJkJyk7XG4gICAgbGV0IGRheTEgPSBtYWtlT25lRnV0dXJlRGF5Rm9yZWNhc3QoZGF0YSwgMSk7XG4gICAgZGF5MS5jbGFzc0xpc3QuYWRkKCdmaXZlRGF5V2VhdGhlckNhcmQnKTtcbiAgICBsZXQgZGF5MiA9IG1ha2VPbmVGdXR1cmVEYXlGb3JlY2FzdChkYXRhLCAyKTtcbiAgICBkYXkyLmNsYXNzTGlzdC5hZGQoJ2ZpdmVEYXlXZWF0aGVyQ2FyZCcpO1xuICAgIGxldCBkYXkzID0gbWFrZU9uZUZ1dHVyZURheUZvcmVjYXN0KGRhdGEsIDMpO1xuICAgIGRheTMuY2xhc3NMaXN0LmFkZCgnZml2ZURheVdlYXRoZXJDYXJkJyk7XG4gICAgbGV0IGRheTQgPSBtYWtlT25lRnV0dXJlRGF5Rm9yZWNhc3QoZGF0YSwgNCk7XG4gICAgZGF5NC5jbGFzc0xpc3QuYWRkKCdmaXZlRGF5V2VhdGhlckNhcmQnKTtcblxuICAgIC8vYXBwZW5kIGFsbCB3ZWF0aGVyIGNhcmRzIHRvIHRoZSBkaXNwbGF5IGRpdlxuICAgICRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKGRheTApO1xuICAgICRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKGRheTEpO1xuICAgICRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKGRheTIpO1xuICAgICRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKGRheTMpO1xuICAgICRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKGRheTQpO1xufVxuXG5mdW5jdGlvbiBtYWtlT25lRnV0dXJlRGF5Rm9yZWNhc3QoZGF0YSwgZGF5KSB7XG4gICAgLy9jcmVhdGluZyBjYXJkIGluIERPTVxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vY2hlY2tpbmcgdG8gc2VlIHdoYXQgZGF5IGl0IGlzLCBpZiBpdCBpcyB0b2RheSwgaXQgc2F5cyB0b2RheSBpbnN0ZWFkIG9mIHRoZSBkYXlcbiAgICBpZiAoZGF5ID09PSAwKSB7XG4gICAgICAgIGNhcmREYXRlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IGdldERheU5hbWUoZGF0YS5kYXlzW2RheSsxXS5kYXRldGltZSwgJ2VuLVVTJyk7XG4gICAgfTsgIFxuICAgIGxldCBjYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FyZEltZy5zcmMgPSByZXF1aXJlKGAuL3NyYy9pbWFnZXMvJHtkYXRhLmRheXNbZGF5XS5pY29ufS5zdmdgKTtcbiAgICBsZXQgY2FyZERlc2NyaXB0aW9uID0gY3JlYXRlUGFyYWdyYXBoKCdGb3JlY2FzdDonLCBkYXRhLmRheXNbZGF5XS5kZXNjcmlwdGlvbik7XG4gICAgbGV0IGNhcmRIaWdoID0gY3JlYXRlUGFyYWdyYXBoKCdIaWdoOicsIGRhdGEuZGF5c1tkYXldLnRlbXBtYXgpO1xuICAgIGxldCBjYXJkTG93ID0gY3JlYXRlUGFyYWdyYXBoKCdMb3c6JywgZGF0YS5kYXlzW2RheV0udGVtcG1pbik7XG4gICAgbGV0IGNhcmRQcmVjaXBpdGF0aW9uID0gY3JlYXRlUGFyYWdyYXBoKCdDaGFuY2Ugb2YgUHJlY2lwaXRhdGlvbjonLCBkYXRhLmRheXNbZGF5XS5wcmVjaXBwcm9iKTtcblxuICAgIC8vYXBwZW5kaW5nIGRhdGEgdG8gY2FyZFxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERhdGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEhpZ2gpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZExvdyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkUHJlY2lwaXRhdGlvbik7XG5cbiAgICAvL3JldHVybmluZyBjYXJkXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGEgcGFyYWdyYXBoIG5vZGUgZm9yIHRoZSB3ZWF0aGVyIGNhcmRzXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGl0bGUsIGRhdGEpIHtcbiAgICBsZXQgbmV3UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld1BhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke3RpdGxlfSAke2RhdGF9YDtcblxuICAgIHJldHVybiBuZXdQYXJhZ3JhcGg7XG59XG5cbi8vZnVuY3Rpb24gdG8gZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGlmIHNvbWV0aGluZyBnb2VzIHdyb25nIGR1cmluZyB0aGUgQVBJIHNlYXJjaFxuZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdPb3BzLCB0aGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIHRoYXQgc2VhcmNoLic7XG4gICAgJHJlc3VsdHNEaXYuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbn1cblxuLy9mdW5jdGlvbiB0byB0dXJuIGRhdGUgc3RyaW5nIGludG8gYSBkYXkgb2YgdGhlIHdlZWtcbmZ1bmN0aW9uIGdldERheU5hbWUoZGF0ZVN0ciwgbG9jYWxlKVxue1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZSwgeyB3ZWVrZGF5OiAnbG9uZycgfSk7ICAgICAgICBcbn1cblxuLy9mdW5jdGlvbiB0byBjbGVhciB0aGUgZGl2IHRoZSB3ZWF0aGVyIGNhcmRzIHJlc2lkZSBpblxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xuICAgICRyZXN1bHRzRGl2LmlubmVySFRNTCA9ICcnO1xufVxuXG5leHBvcnQgeyBnZXRUb2RheUZvcmVjYXN0LCBnZXRGaXZlRGF5Rm9yZWNhc3QsIGRpc3BsYXlFcnJvck1lc3NhZ2UsIGNsZWFyUmVzdWx0cyB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./DOMhandling.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.content {\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n    height: 100vh;\n    background-color: cadetblue;\n}\n\n.results {\n    display: flex;\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;\n    background-color: antiquewhite;\n}\n\n.search {\n    display: grid;\n    justify-items: center;\n    margin-top: 6vh;\n}\n\n.search label {\n    font-size: 1.25rem;\n}\n\n.radio input {\n    margin-right: 2vw;\n}\n\ninput[type='text'] {\n    line-height: 2;\n    border-radius: 5px;\n    width: 25vw;\n    border: 1px solid gray;\n    margin-bottom: 2vh;\n}\n\nbutton {\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid gray;\n}\n\nbutton:active {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\n.oneDayWeatherCard {\n    background-color: cadetblue;\n    height: 75vh;\n    width: 25vw;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    margin-top: 3vh;\n    margin-left: 3vw;\n}\n\n.oneDayWeatherCard img,\n.fiveDayWeatherCard img {\n    height: 15%;\n    margin-left: 30%;\n}\n\n.fiveDayWeatherCard {\n    background-color: cadetblue;\n    height: 50vh;\n    width: 14vw;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    margin-top: 8vh;\n    margin-left: 2vw;\n}\n\n.header {\n    font-size: 1.5rem;\n    margin-left: 10%;\n}\n\n.error {\n    color: red;\n    font-size: xx-large;\n    margin-top: 20%;\n}`, \"\",{\"version\":3,\"sources\":[\"webpack://./src/styles.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,0GAA0G;AAC9G;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB\",\"sourcesContent\":[\".content {\\n    display: grid;\\n    grid-template-rows: 1fr 5fr;\\n    height: 100vh;\\n    background-color: cadetblue;\\n}\\n\\n.results {\\n    display: flex;\\n    justify-content: space-around;\\n    height: 100%;\\n    width: 100%;\\n    background-color: antiquewhite;\\n}\\n\\n.search {\\n    display: grid;\\n    justify-items: center;\\n    margin-top: 6vh;\\n}\\n\\n.search label {\\n    font-size: 1.25rem;\\n}\\n\\n.radio input {\\n    margin-right: 2vw;\\n}\\n\\ninput[type='text'] {\\n    line-height: 2;\\n    border-radius: 5px;\\n    width: 25vw;\\n    border: 1px solid gray;\\n    margin-bottom: 2vh;\\n}\\n\\nbutton {\\n    padding: 5px;\\n    border-radius: 5px;\\n    border: 1px solid gray;\\n}\\n\\nbutton:active {\\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\\n}\\n\\n.oneDayWeatherCard {\\n    background-color: cadetblue;\\n    height: 75vh;\\n    width: 25vw;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    margin-top: 3vh;\\n    margin-left: 3vw;\\n}\\n\\n.oneDayWeatherCard img,\\n.fiveDayWeatherCard img {\\n    height: 15%;\\n    margin-left: 30%;\\n}\\n\\n.fiveDayWeatherCard {\\n    background-color: cadetblue;\\n    height: 50vh;\\n    width: 14vw;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    margin-top: 8vh;\\n    margin-left: 2vw;\\n}\\n\\n.header {\\n    font-size: 1.5rem;\\n    margin-left: 10%;\\n}\\n\\n.error {\\n    color: red;\\n    font-size: xx-large;\\n    margin-top: 20%;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxvQ0FBb0Msb0JBQW9CLGtDQUFrQyxvQkFBb0Isa0NBQWtDLEdBQUcsY0FBYyxvQkFBb0Isb0NBQW9DLG1CQUFtQixrQkFBa0IscUNBQXFDLEdBQUcsYUFBYSxvQkFBb0IsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQix5QkFBeUIsa0JBQWtCLDZCQUE2Qix5QkFBeUIsR0FBRyxZQUFZLG1CQUFtQix5QkFBeUIsNkJBQTZCLEdBQUcsbUJBQW1CLGlIQUFpSCxHQUFHLHdCQUF3QixrQ0FBa0MsbUJBQW1CLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsdUJBQXVCLEdBQUcsc0RBQXNELGtCQUFrQix1QkFBdUIsR0FBRyx5QkFBeUIsa0NBQWtDLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHVCQUF1QixHQUFHLGFBQWEsd0JBQXdCLHVCQUF1QixHQUFHLFlBQVksaUJBQWlCLDBCQUEwQixzQkFBc0IsR0FBRyxtQkFBbUI7QUFDenZFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/ZTlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuXG4ucmVzdWx0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4uc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA2dmg7XG59XG5cbi5zZWFyY2ggbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnJhZGlvIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcbn1cblxuaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4IGluc2V0O1xufVxuXG4ub25lRGF5V2VhdGhlckNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xufVxuXG4ub25lRGF5V2VhdGhlckNhcmQgaW1nLFxuLmZpdmVEYXlXZWF0aGVyQ2FyZCBpbWcge1xuICAgIGhlaWdodDogMTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi5maXZlRGF5V2VhdGhlckNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDE0dnc7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwR0FBMEc7QUFDOUc7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4ucmVzdWx0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDZ2aDtcXG59XFxuXFxuLnNlYXJjaCBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnJhZGlvIGlucHV0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcXG59XFxuXFxuLm9uZURheVdlYXRoZXJDYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbn1cXG5cXG4ub25lRGF5V2VhdGhlckNhcmQgaW1nLFxcbi5maXZlRGF5V2VhdGhlckNhcmQgaW1nIHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcblxcbi5maXZlRGF5V2VhdGhlckNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgd2lkdGg6IDE0dnc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA4dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/styles.css\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcz8yNGZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/api.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcz9hZjEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/sourceMaps.js\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles.css\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzPzJkYmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzP2IyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertBySelector.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanM/ZGU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertStyleElement.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzP2RkY2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcz9lNDc5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleDomAPI.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcz8xZGRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleTagTransform.js\n");

/***/ }),

/***/ "./src/APIhandling.js":
/*!****************************!*\
  !*** ./src/APIhandling.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(city) {\n    //make an API call to get weather data\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=HN8U9XHRUT8RPMAFW5F3LN5E3&contentType=json`, {\n        \"method\": \"GET\",\n        \"headers\": {\n        }\n    });\n    \n    //convert response to JSON, log it in console and return it\n    const weatherData = await response.json();\n    console.log(weatherData);\n    return weatherData;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQVBJaGFuZGxpbmcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSx3SEFBd0gsS0FBSztBQUM3SDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9BUEloYW5kbGluZy5qcz9iMzJlIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICAgIC8vbWFrZSBhbiBBUEkgY2FsbCB0byBnZXQgd2VhdGhlciBkYXRhXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtjaXR5fT9rZXk9SE44VTlYSFJVVDhSUE1BRlc1RjNMTjVFMyZjb250ZW50VHlwZT1qc29uYCwge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy9jb252ZXJ0IHJlc3BvbnNlIHRvIEpTT04sIGxvZyBpdCBpbiBjb25zb2xlIGFuZCByZXR1cm4gaXRcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/APIhandling.js\n");

/***/ }),

/***/ "./src/images sync recursive ^\\.\\/.*\\.svg$":
/*!****************************************!*\
  !*** ./src/images/ sync ^\.\/.*\.svg$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": "./src/images/clear-day.svg",
	"./clear-night.svg": "./src/images/clear-night.svg",
	"./cloudy.svg": "./src/images/cloudy.svg",
	"./fog.svg": "./src/images/fog.svg",
	"./hail.svg": "./src/images/hail.svg",
	"./partly-cloudy-day.svg": "./src/images/partly-cloudy-day.svg",
	"./partly-cloudy-night.svg": "./src/images/partly-cloudy-night.svg",
	"./rain-snow-showers-day.svg": "./src/images/rain-snow-showers-day.svg",
	"./rain-snow-showers-night.svg": "./src/images/rain-snow-showers-night.svg",
	"./rain-snow.svg": "./src/images/rain-snow.svg",
	"./rain.svg": "./src/images/rain.svg",
	"./showers-day.svg": "./src/images/showers-day.svg",
	"./showers-night.svg": "./src/images/showers-night.svg",
	"./sleet.svg": "./src/images/sleet.svg",
	"./snow-showers-day.svg": "./src/images/snow-showers-day.svg",
	"./snow-showers-night.svg": "./src/images/snow-showers-night.svg",
	"./snow.svg": "./src/images/snow.svg",
	"./thunder-rain.svg": "./src/images/thunder-rain.svg",
	"./thunder-showers-day.svg": "./src/images/thunder-showers-day.svg",
	"./thunder-showers-night.svg": "./src/images/thunder-showers-night.svg",
	"./thunder.svg": "./src/images/thunder.svg",
	"./wind.svg": "./src/images/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _APIhandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIhandling */ \"./src/APIhandling.js\");\n/* harmony import */ var _DOMhandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOMhandling */ \"./DOMhandling.js\");\n\n\n\n\n//cache DOM\nconst $search = document.getElementById('search');\nconst $myForm = document.getElementById('myForm');\nconst $todayRadioButton = document.getElementById('radioToday');\nconst $fiveDayRadioButton = document.getElementById('radioFive');\n\n//event listener that fires when form is submitted\n$myForm.addEventListener('submit', async (event) => {\n    //prevents default form submission from happening\n    event.preventDefault();\n    try {\n        //clears div, then starts querying the weather API\n        (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.clearResults)();\n        let city = $search.value;\n        let weatherData = await (0,_APIhandling__WEBPACK_IMPORTED_MODULE_1__.getWeather)(city);\n        //changes the search bar to show the user exactly which city they searched for\n        $search.value = weatherData.resolvedAddress;\n        let selectedValue = document.querySelector('input[name=\"forecast\"]:checked').value;\n        //checks which radio button was chosen, and displays the data accordingly\n        if (selectedValue === 'radioToday') {\n            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.getTodayForecast)(weatherData);\n        } else {\n            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.getFiveDayForecast)(weatherData);\n        };\n        //two event listeners on the radio buttons to allow for user to switch back\n        //and forth without having to resubmit the form\n        $todayRadioButton.addEventListener('click', () => {\n            if(city) {\n                (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.clearResults)();\n                (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.getTodayForecast)(weatherData);\n            }\n        });\n        \n        $fiveDayRadioButton.addEventListener('click', () => {\n            if(city) {\n                (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.clearResults)();\n                (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.getFiveDayForecast)(weatherData);\n            }\n        })\n    //if an error is caught while querying the API, it is logged in the console,\n    //and an error is displayed to the user\n    } catch(error) {\n        console.log(error);\n        (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_2__.displayErrorMessage)();\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFzQjtBQUNxQjtBQUM4RDs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFZO0FBQ3BCO0FBQ0EsZ0NBQWdDLHdEQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFnQjtBQUM1QixVQUFVO0FBQ1YsWUFBWSxnRUFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBWTtBQUM1QixnQkFBZ0IsOERBQWdCO0FBQ2hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBWTtBQUM1QixnQkFBZ0IsZ0VBQWtCO0FBQ2xDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLGlFQUFtQjtBQUMzQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vQVBJaGFuZGxpbmcnO1xuaW1wb3J0IHsgZ2V0VG9kYXlGb3JlY2FzdCwgZ2V0Rml2ZURheUZvcmVjYXN0LCBkaXNwbGF5RXJyb3JNZXNzYWdlLCBjbGVhclJlc3VsdHMgfSBmcm9tICcuLi9ET01oYW5kbGluZyc7XG5cbi8vY2FjaGUgRE9NXG5jb25zdCAkc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgJG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKTtcbmNvbnN0ICR0b2RheVJhZGlvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhZGlvVG9kYXknKTtcbmNvbnN0ICRmaXZlRGF5UmFkaW9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFkaW9GaXZlJyk7XG5cbi8vZXZlbnQgbGlzdGVuZXIgdGhhdCBmaXJlcyB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXG4kbXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8vcHJldmVudHMgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gZnJvbSBoYXBwZW5pbmdcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICAgIC8vY2xlYXJzIGRpdiwgdGhlbiBzdGFydHMgcXVlcnlpbmcgdGhlIHdlYXRoZXIgQVBJXG4gICAgICAgIGNsZWFyUmVzdWx0cygpO1xuICAgICAgICBsZXQgY2l0eSA9ICRzZWFyY2gudmFsdWU7XG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSk7XG4gICAgICAgIC8vY2hhbmdlcyB0aGUgc2VhcmNoIGJhciB0byBzaG93IHRoZSB1c2VyIGV4YWN0bHkgd2hpY2ggY2l0eSB0aGV5IHNlYXJjaGVkIGZvclxuICAgICAgICAkc2VhcmNoLnZhbHVlID0gd2VhdGhlckRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmb3JlY2FzdFwiXTpjaGVja2VkJykudmFsdWU7XG4gICAgICAgIC8vY2hlY2tzIHdoaWNoIHJhZGlvIGJ1dHRvbiB3YXMgY2hvc2VuLCBhbmQgZGlzcGxheXMgdGhlIGRhdGEgYWNjb3JkaW5nbHlcbiAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdyYWRpb1RvZGF5Jykge1xuICAgICAgICAgICAgZ2V0VG9kYXlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXRGaXZlRGF5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICAvL3R3byBldmVudCBsaXN0ZW5lcnMgb24gdGhlIHJhZGlvIGJ1dHRvbnMgdG8gYWxsb3cgZm9yIHVzZXIgdG8gc3dpdGNoIGJhY2tcbiAgICAgICAgLy9hbmQgZm9ydGggd2l0aG91dCBoYXZpbmcgdG8gcmVzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgJHRvZGF5UmFkaW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihjaXR5KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJSZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgZ2V0VG9kYXlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgJGZpdmVEYXlSYWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGNpdHkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcbiAgICAgICAgICAgICAgICBnZXRGaXZlRGF5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIC8vaWYgYW4gZXJyb3IgaXMgY2F1Z2h0IHdoaWxlIHF1ZXJ5aW5nIHRoZSBBUEksIGl0IGlzIGxvZ2dlZCBpbiB0aGUgY29uc29sZSxcbiAgICAvL2FuZCBhbiBlcnJvciBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXJcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSgpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/images/clear-day.svg":
/*!**********************************!*\
  !*** ./src/images/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ae928911d7143fe5c97.svg";

/***/ }),

/***/ "./src/images/clear-night.svg":
/*!************************************!*\
  !*** ./src/images/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "10da86080cdf8ab805dc.svg";

/***/ }),

/***/ "./src/images/cloudy.svg":
/*!*******************************!*\
  !*** ./src/images/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3bf211cc12293dba117.svg";

/***/ }),

/***/ "./src/images/fog.svg":
/*!****************************!*\
  !*** ./src/images/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4367781d78de4b41c8ba.svg";

/***/ }),

/***/ "./src/images/hail.svg":
/*!*****************************!*\
  !*** ./src/images/hail.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3889cfa8600afb2befbe.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/images/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b7e30503cbfe9b1328f.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/images/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f16ddc81302dd032a209.svg";

/***/ }),

/***/ "./src/images/rain-snow-showers-day.svg":
/*!**********************************************!*\
  !*** ./src/images/rain-snow-showers-day.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2049dc22f51b775cff95.svg";

/***/ }),

/***/ "./src/images/rain-snow-showers-night.svg":
/*!************************************************!*\
  !*** ./src/images/rain-snow-showers-night.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "70b740bd0df75f5a12ca.svg";

/***/ }),

/***/ "./src/images/rain-snow.svg":
/*!**********************************!*\
  !*** ./src/images/rain-snow.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f570b61f610cc47550c.svg";

/***/ }),

/***/ "./src/images/rain.svg":
/*!*****************************!*\
  !*** ./src/images/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e4f357e69e53710441a.svg";

/***/ }),

/***/ "./src/images/showers-day.svg":
/*!************************************!*\
  !*** ./src/images/showers-day.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a2b8451b8315b4993a1.svg";

/***/ }),

/***/ "./src/images/showers-night.svg":
/*!**************************************!*\
  !*** ./src/images/showers-night.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "86d5570e13c926b05b8a.svg";

/***/ }),

/***/ "./src/images/sleet.svg":
/*!******************************!*\
  !*** ./src/images/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c11ff972687fa3708771.svg";

/***/ }),

/***/ "./src/images/snow-showers-day.svg":
/*!*****************************************!*\
  !*** ./src/images/snow-showers-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "acb2b455bd9de4db2a8b.svg";

/***/ }),

/***/ "./src/images/snow-showers-night.svg":
/*!*******************************************!*\
  !*** ./src/images/snow-showers-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21754c08cf67996293bf.svg";

/***/ }),

/***/ "./src/images/snow.svg":
/*!*****************************!*\
  !*** ./src/images/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a38ec89338af4551eb0e.svg";

/***/ }),

/***/ "./src/images/thunder-rain.svg":
/*!*************************************!*\
  !*** ./src/images/thunder-rain.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83b0db88aba6097c5c55.svg";

/***/ }),

/***/ "./src/images/thunder-showers-day.svg":
/*!********************************************!*\
  !*** ./src/images/thunder-showers-day.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "545dd2062c3e501db0f4.svg";

/***/ }),

/***/ "./src/images/thunder-showers-night.svg":
/*!**********************************************!*\
  !*** ./src/images/thunder-showers-night.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e83e5d078be84eac9071.svg";

/***/ }),

/***/ "./src/images/thunder.svg":
/*!********************************!*\
  !*** ./src/images/thunder.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e22ef7b53fde88ba057.svg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9e79d493e2fd83a55bd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;