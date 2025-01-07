import './styles.css';
import { getWeather } from './APIhandling';

//cache DOM
const $search = document.getElementById('search');
const $submitButton = document.getElementById('submit');
const $myForm = document.getElementById('myForm');

$myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let city = $search.value;
    getWeather(city);
})