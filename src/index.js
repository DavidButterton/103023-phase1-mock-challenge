//assign the API URL to a variable
const cakesAPI = 'http://localhost:3000/cakes'
//grab the element "cake-list" and assign it to a variable
const cakeNamesList = document.getElementById('cake-list')
// grab the main div of cake details and assign it to a variable
const cakeDetails = document.getElementById('cake-details')


//create a fetch response to get the cake name
fetch(cakesAPI)
    //json makes a promise to return data back from the server
    .then(res => res.json())
    //when the server returns that data we pass it off to this function
    .then(cakeList)

//write a funtion to the cake names from json API to the ul in li
function cakeList(names) {
    //clear the innerHTML content
    cakeNamesList.innerHTML = '';
    //write a forEach function to iterate the JSON array
    names.forEach(namesList)
};

function namesList(cakes) {
    //create a li and assign it to a variable
    const listItem = document.createElement('li')
    //append the li to the ul
    cakeNamesList.append(listItem);
    //Add the json names to the li
    listItem.innerHTML =` <li>${cakes.name}</li>`
    listItem.addEventListener('click', clickTheCake);
};

function clickTheCake(e) {
    //Add e.preventDefault to keep the page from reloading
    e.preventDefault();
    // grab data from Json and send it to main div cake details
}