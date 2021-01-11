'use stirct';

const country = document.querySelector('#country');
const state = document.querySelector('#state');

const createCountries = (arr) => {
    arr.forEach(item => {
        const optionElement = document.createElement('option');
        optionElement.innerHTML = item;
        state.appendChild(optionElement);
    })
};

state.addEventListener('click', function() {
    if (country.value === "Magyarország") {
        state.innerHTML = "";
        createCountries(huStates);
    } else if (country.value === "USA") {
        state.innerHTML = "";
        createCountries(usaStates);
    }
});

import {usaStates} from './usaStates.js';
import {huStates} from './huStates.js';