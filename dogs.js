/*
    Author: Alan Henry
    JavaScript for the dog website
*/

// Variables
const breedListUrl = 'https://dog.ceo/api/breeds/list/all';
const breedList = document.getElementById('breed-list');

// When the page loads
window.addEventListener('load', updateBreedList);

// Retrive the list of all breeds from the API
async function getBreedList() {
    return fetch(breedListUrl).then(response => response.json());
}

// Add breed to drop down list
function updateBreedList() {
    getBreedList().then(function(data) {
        // Get breed name
        for(var element in data.message) {
            // Append to the select list
            let option = createOption(element);
            breedList.appendChild(option);
        }
    })
}

function createOption(text) {
    let option = document.createElement('option');
    option.textContent = text;
    return option;
}

// When button is clicked
const element = document.getElementById('btn')
element.addEventListener('click')

// Display photo for selected breed


