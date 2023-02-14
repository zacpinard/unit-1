
/*
//Example 2.1: Declaring and assigning a new data request object in main.js
function jsAjax(){
    // Step 1: Define the data request
    var request = new Request('data/MegaCities.geojson');
};

window.onload = jsAjax();

//Example 2.2: Defining the `method' property in main.js
function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
};

window.onload = jsAjax();

//Example 2.3: Creating a AJAX request using fetch() in main.js
function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve the data
    fetch(request, init)
};

window.onload = jsAjax();

//Example 2.4: Adding a callback() function to a fetch() request in main.js
function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve data
    fetch(request, init)
        .then(callback) //Step 4 Send retrieved data to a callback function
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();

//Example 2.5: Adding a conversion() function to convert the returned `fetch()' request data in main.js
function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve data
    fetch(request, init)
        .then(conversion) //Step 4 convert data to usable form
        .then(callback) //Step 5 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();

//Example 2.6: Translating the MegaCitites.geojson object to a string in main.js
    //Example 2.5 line 23...
    console.log(JSON.stringify(response));

//Example 2.7: Simplifying the fetch() request in main.js
//Example 2.5 line 1
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(conversion) //convert data to usable form
        .then(callback) //send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();

//Example 2.8: Simplifying the conversion() request with shorthand in main.js
//Example 2.7 line 1
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();



//Example 3.1: Viewing fetched data without converting in main.js
function jsAjax(){
    fetch('data/MegaCities.geojson')
        .then(callback) 
};

function callback(response){
    //console.log(response)
    //Example 3.1 line 7...
    console.log(response.json());
}

window.onload = jsAjax();

*/

//Example 3.3: Correctly accessing the response using a callback() function in main.js
//Example 3.1...
//define fetch request
function jsAjax(){
    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function

/*
function callback(response){

    //tasks using the data go here
    console.log(response)

} */

//Example 3.3 Line 10...
//define callback function
function callback(response){

    var myData = response;

    //pass data to another function
    nextFunction(myData);
};

function nextFunction(data){

    console.log(data); //contains response data held by myData in callback
};

window.onload = jsAjax();