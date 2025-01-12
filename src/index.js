import './styles.css';
import { getWeather } from './APIhandling';
import { getTodayForecast, getFiveDayForecast, displayErrorMessage, clearResults } from '../DOMhandling';

//cache DOM
const $search = document.getElementById('search');
const $myForm = document.getElementById('myForm');
const $todayRadioButton = document.getElementById('radioToday');
const $fiveDayRadioButton = document.getElementById('radioFive');

//event listener that fires when form is submitted
$myForm.addEventListener('submit', async (event) => {
    //prevents default form submission from happening
    event.preventDefault();
    try {
        //clears div, then starts querying the weather API
        clearResults();
        let city = $search.value;
        let weatherData = await getWeather(city);
        //changes the search bar to show the user exactly which city they searched for
        $search.value = weatherData.resolvedAddress;
        let selectedValue = document.querySelector('input[name="forecast"]:checked').value;
        //checks which radio button was chosen, and displays the data accordingly
        if (selectedValue === 'radioToday') {
            getTodayForecast(weatherData);
        } else {
            getFiveDayForecast(weatherData);
        };
        //two event listeners on the radio buttons to allow for user to switch back
        //and forth without having to resubmit the form
        $todayRadioButton.addEventListener('click', () => {
            if(city) {
                clearResults();
                getTodayForecast(weatherData);
            }
        });
        
        $fiveDayRadioButton.addEventListener('click', () => {
            if(city) {
                clearResults();
                getFiveDayForecast(weatherData);
            }
        })
    //if an error is caught while querying the API, it is logged in the console,
    //and an error is displayed to the user
    } catch(error) {
        console.log(error);
        displayErrorMessage();
    }
})