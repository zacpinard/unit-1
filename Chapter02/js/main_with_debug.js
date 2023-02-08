
//Zac Edit
//initialize function called when the script loads
function initialize(){
    createTable();
	addColumns(cityPop);
	addEvents();
};

//Create the list variable CityPop and populate it with values
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


function createTable(){
	//Zac Edits
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
	for(var i = 0; i < cityPop.length; i++){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	}
	//Add the table to the myDiv object in the body of the HTML
	document.querySelector("#myDiv").appendChild(table);
	//console.log(table)
}


function addColumns(cityPop2){
	//Zac Edit
	console.log("hello")

	//Create forEach loop for each row in the table
	document.querySelectorAll("tr").forEach(function(row, i){
		
		//Zac Edit
		console.log(i)

		//For first row, add a column for City Size and add to HTML
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
		//For the rest of the rows, populate the new City Size column with string based on population value
    	} else {

    		var citySize;
			//Assign CitySize string based on population values
    		if (cityPop2[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop2[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			//Add the City Size row to the HTML
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	//Zac Edit
	console.log("hello3")

	//Add a mouseover event listener to the table
	document.querySelector("table").addEventListener("mouseover", function(){
		//Zac Edit
		//console.log("hello4")
		//rgb(24,34,54)
		
		//create the color variable and set up beginning of rgb(xx,xx,xx) syntax
		var color = "rgb(";

		//set up for loop
		for (var i=0; i<3; i++){

			//Zac Edit
			//console.log("hello5")
			
			//generate a random number to be inserted into the rgb(xx,xx,xx) value to create a random color
			var random = Math.round(Math.random() * 255);

			//Add the random number to the color variable
			color += random;

			//add a comma after the first and second iterations and a close parentheses after the third so the rgb(xx,xx,xx) syntax of the color variable remains intact
			if (i<2){
				color += ",";

				//Zac Edit
				console.log("hello6")
			
			} else {
				color += ")";
		};
		}
		//change the color of the table to the color variable we just created
		document.querySelector("table").style.color = color;
	}
	
	);
	//Create a function for a popup alert to appear
	function clickme(){

		alert('Hey, you clicked me!');
	};
	//Add a click event listener to run the function when we click
	document.querySelector("table").addEventListener("click", clickme)
};

//Zac Edit
//Add event listener to run the initialize function that does all this stuff once the DOM content loads
document.addEventListener('DOMContentLoaded',initialize)
