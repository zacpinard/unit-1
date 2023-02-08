//initialize function called when script loads
function initialize(){
    cities2();
};

//function to create a table with cities and their populations
//Version 1:
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

//Version 2:
//Example 2.3 line 6...function to create a table with cities and their populations
function cities2(){
    //define an array of objects for cities and population
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
        }
    ];

    //...

    //Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; //NOTE DIFFERENT SYNTAX
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; //NOTE DIFFERENT SYNTAX
        tr.appendChild(pop);

        table.appendChild(tr);
    };
}

//Version 3
//Example 2.3 line 8...create an empty array
var cityPop = [];

//create the first city object
var madison = {};
//add each property to the object
madison.city = 'Madison';
madison.population = 233209;

//push the city object into the array
cityPop.push(madison);

//repeat...
var milwaukee = {};
milwaukee.city = 'Milwaukee';
milwaukee.population = 594833;
cityPop.push(milwaukee);

var greenBay = {};
greenBay.city = 'Green Bay';
greenBay.population = 104057;
cityPop.push(greenBay);

var superior = {};
superior.city = 'Superior';
superior.population = 27244;
cityPop.push(superior);

window.onload = initialize();

//While Loop:

//WHILE LOOP...Example 2.4 line 25
//define a counter variable
var i = 0;
//start the loop
while (i < cityPop.length){
    var tr = document.createElement("tr");

    var city = document.createElement("td");
    city.innerHTML = cityPop[i].city;
    tr.appendChild(city);

    var pop = document.createElement("td");
    pop.innerHTML = cityPop[i].population;
    tr.appendChild(pop);

    table.appendChild(tr);

    //increment counter
    i++;
};

//ForEach Loop:
//FOREACH LOOP...Example 2.4 line 25
cityPop.forEach(function(cityObject){
    var tr = document.createElement("tr");

    var city = document.createElement("td");
    city.innerHTML = cityObject.city; //NOTE DIFFERENT SYNTAX
    tr.appendChild(city);

    var pop = document.createElement("td");
    pop.innerHTML = cityObject.population; //NOTE DIFFERENT SYNTAX
    tr.appendChild(pop);

    table.appendChild(tr);
});

//ForEach Loop with object For Loop:
//FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25
cityPop.forEach(function(cityObject){
    var tr = document.createElement("tr");

    for (var property in cityObject){
        var td = document.createElement("td");
        td.innerHTML = cityObject[property];
        tr.appendChild(td);
    };

    table.appendChild(tr);
});

//Example 2.4 line 25...loop to add a new row for each city
for (var i = 0; i < cityPop.length; i++){
    var tr = document.createElement("tr");

    var city = document.createElement("td");
    //first conditional block
        if (cityPop[i].city == 'Madison'){
            city.innerHTML = 'Badgerville';
        } else if (cityPop[i].city == 'Green Bay'){
            city.innerHTML = 'Packerville';
        } else {
            city.innerHTML = cityPop[i].city;
        }

        tr.appendChild(city);

        var pop = document.createElement("td");
    //second conditional block        
        if (cityPop[i].population < 500000){
            pop.innerHTML = cityPop[i].population;
        } else {
            pop.innerHTML = 'Too big!';
        };

        tr.appendChild(pop);

        table.appendChild(tr);
    };

var myDiv = document.querySelector("#myDiv");
myDiv.appendChild(table);

document.querySelector("#myDiv").insertAdjacentHTML('beforeend',"Hello World!");

//example 3.4:

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
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
}

document.addEventListener('DOMContentLoaded',initialize)

//Added at Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#myDiv').getAttribute('id');

    //theid is 'myDiv'; add it as text to the div
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend',theid);

    //add the class 'foo' to the div
    document.querySelector('#myDiv').setAttribute('class', 'foo');

    //Check your work with the Inspector!

//Added at Example 3.6
    //get the div id
    var theid = document.querySelector('#myDiv').id;

    //set the id to newdiv
    document.querySelector('#myDiv').id = "newdiv";

    //set the class 
    document.querySelector('#newDiv').className = "foo";

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
    document.querySelector("table").addEventListener('click', clickme);

    //remove the event listener
    document.querySelector("table").removeEventListener('click', clickme);

//Example 3.9
//change the text color
document.querySelector('#myDiv').style.color = 'red';

//Example 3.10
//change the text size and alignment
document.querySelector('#myDiv').style.fontSize = '2em';
document.querySelector('#myDiv').style.textAlign = 'left';

//get the text color and add it as text to the div
var thecolor = document.querySelector('#myDiv').style.color;
document.querySelector('#myDiv').insertAdjacentHTML('beforeend',thecolor);