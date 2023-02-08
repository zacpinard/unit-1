// Add all scripts to the JS folder

/*function myFunc() {
    var Div = document.getElementById("myDiv");
    myDiv.innerHTML = "Hello World";
}; */

//window.onload = myFunc();

//initialize function called when the script loads
function initialize(){
    cities3();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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

    //Zac Edit
    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
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
    var myDiv = document.getElementById("myDiv");
    myDiv.appendChild(table);
};

function cities2(){
    //Version 3
    
   //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

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
        //pop.innerHTML = cityPop[i].population;
        pop.innerHTML = cityPop[i].population < 500000 ? cityPop[i].population : 'Too big!';

        tr.appendChild(pop);

        table.appendChild(tr);



        //increment counter
        i++;
    };
//Example 2.7 line 19

//add the table to the div in index.html
var myDiv = document.getElementById("myDiv");
myDiv.appendChild(table);

//get the div id
var theid = document.querySelector('#myDiv').id;

//set the id to newdiv
document.querySelector('#myDiv').id = "newDiv";

//set the class 
document.querySelector('#newDiv').className = "foo";

document.querySelector('#newDiv').insertAdjacentHTML('beforeend',theid);
}

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
document.querySelector('#myDiv').style.fontSize = '2em';
document.querySelector('#myDiv').style.textAlign = 'right';

//get the text color and add it as text to the div
var thecolor = document.querySelector('#myDiv').style.color;
document.querySelector('#myDiv').insertAdjacentHTML('beforeend',' . . . '+thecolor);
}

/*function myFunc (){
    //Added at Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#myDiv').getAttribute('id');

    //theid is 'myDiv'; add it as text to the div
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend',theid);

    //add the class 'foo' to the div
    document.querySelector('#myDiv').setAttribute('class', 'foo');

    //Check your work with the Inspector!
}*/

/* function myFunc2(){
    //get the div id
    var theid = document.querySelector('#myDiv').id;

    //set the id to newdiv
    document.querySelector('#myDiv').id = "newDiv";

    //set the class 
    document.querySelector('#newDiv').className = "foo";
} */

document.addEventListener('DOMContentLoaded',initialize)

//call the initialize function when the window has loaded
//window.onload = initialize();