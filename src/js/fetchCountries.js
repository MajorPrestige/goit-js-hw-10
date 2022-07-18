'use strict';

export const fetchCountries = countryName => {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    return response.json();
  });
};

// const resultMarkup = result => {
//     if (result.length > 10) {
//       return console.log(
//         'Too many matches found. Please enter a more specific name.'
//       );
//     } else if (result.length >= 2 && result.length <= 10) {
//       return renderCountryList;
//     } else (result.length === 1){
//       return renderCountryCard;
//     }
//   }
