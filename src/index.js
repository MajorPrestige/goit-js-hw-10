import './css/styles.css';
import countryList from './templates/country-list.hbs';
import countryInfo from './templates/country-info.hbs';
// import { fetchCountries } from './js/fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');
const divEl = document.querySelector('div');

inputEl.addEventListener('input', () => {
  let inputCountry = inputEl.value;
  debounce(fetchCountries(inputCountry), DEBOUNCE_DELAY);
});

function fetchCountries(countryName) {
  fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(result => {
      if (result.length > 10) {
        return console.log(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function renderCountryCard(country) {
  console.log(country);
  const markup = countryInfo(country[0]);
  divEl.innerHTML = markup;
}

function renderCountryList(country) {
  console.log(country);
  const markup = countryList(country);
  listEl.innerHTML = markup;
}

// fetchCountries('ukraine')
//   .then(renderCountryCard)
//   .catch(err => {
//     console.log(err);
//   });

// function renderCountryCard(country) {
//   console.log(country);
//   const markup = countryInfo(country[0]);
//   divEl.innerHTML = markup;
//   console.log(markup);
// }
