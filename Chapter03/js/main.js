//~program begins on line 50~

//Example 2.5: Adding a conversion() function to convert the returned `fetch()' request data in main.js
/*
function jsAjaxLong(){
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
    console.log(JSON.stringify(response))
}
window.onload = jsAjaxLong();
*/
/*
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};
/*
//define callback function
function callback(response){
    //tasks using the data go here
    console.log(JSON.stringify(response))
}

window.onload = jsAjax();
*/

//~Chapter 2 Script~

//initialize function called when the script loads
function initialize(){
    cities3();
};

//function to create a table with cities and their populations
function cities3(){
    //define two arrays for cities and population
    var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#myDiv").appendChild(table);
    
    //Added at Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#myDiv').getAttribute('id');

    //theid is 'myDiv'; add it as text to the div
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend',theid);

    //add the class 'foo' to the div
    document.querySelector('#myDiv').setAttribute('class', 'foo');

    //Check your work with the Inspector!

    //Added below Example 3.7...
    //iterate over each script element and add each one's source url as text to the div
    document.querySelectorAll("script").forEach(function(selectedScript){
        var thesource = selectedScript.src;
        document.querySelector('#myDiv').insertAdjacentHTML('beforeend',thesource);
    })

    //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    document.querySelector("#myDiv").addEventListener('click', clickme);

    //remove the event listener
    //document.querySelector("table").removeEventListener('click', clickme);

    //change the text color
document.querySelector('#myDiv').style.color = 'rebeccapurple';

//change the text size and alignment
document.querySelector('#myDiv').style.fontSize = 'em';
document.querySelector('#myDiv').style.textAlign = 'left';

//get the text color and add it as text to the div
var thecolor = document.querySelector('#myDiv').style.color;
document.querySelector('#myDiv').insertAdjacentHTML('beforeend',' . . . '+thecolor);
}

//Full send
document.addEventListener('DOMContentLoaded',initialize)

//~Chapter 3 Script~
/*
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        
        //convert geojson to json
        .then(function(response){
            return response.json();
        }) 

        //AFTER conversion, call another function
        .then(function(response){
            myData = response;
            
            //check if you can access the data (here it can be accessed)
            console.log(myData)
        }) 

    //check if you can access the data (here it cannot be accessed. It is undefined
    // because the fetch request is not done fulfilling the promise when this code 
    // executes)
    console.log(myData)
};

//Full send
document.addEventListener('DOMContentLoaded',jsAjax)
*/

//~debug_ajax.js~

//define a callback function to insert data into the html 
function debugCallback(response){
	document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: </br>' + JSON.stringify(response))
};

//Create a function to load geojson data
function debugAjax(){
	
    //fetch the geojson data
	fetch("data/MegaCities.geojson")
		
        //once fetched, convert data to json
        .then(function(response){
            return response.json();

		})

        //once converted, execute callback function defined earlier
        .then(function(response){
            //console.log("hello")
            debugCallback(response)
        })

	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend','<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

//Full send
document.addEventListener('DOMContentLoaded',debugAjax)
