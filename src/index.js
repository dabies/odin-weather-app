import './styles.css';
import { getWeather } from './APIhandling';
import { getTodayForecast, displayErrorMessage } from '../DOMhandling';

//cache DOM
const $search = document.getElementById('search');
const $myForm = document.getElementById('myForm');
const $resultsDiv = document.querySelector('.results');

$myForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        $resultsDiv.innerHTML = '';
        let city = $search.value;
        let weatherData = await getWeather(city);
        //if radio is today's forecast, get todays forecast() else get five day forecast()
        getTodayForecast(weatherData, $resultsDiv);
    } catch(error) {
        console.log(error);
        displayErrorMessage();
    }
})