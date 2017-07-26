//alert("connected");

/*
var colors1 = [
				"rgb(255, 0, 0)",
				"rgb(0, 0, 255",
				"rgb(255, 0, 255)",
				"rgb(255, 255, 0)",
				"rgb(0, 255, 0)",
				"rgb(0, 255, 0)"
			]
*/

//select the class 'square' from html file
var squares = document.querySelectorAll(".square");

//Select the ID 'rgbColor" from html file'
var rgbSpan = document.querySelector("#rgbColor");

//Display rgb color
//rgbSpan.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");
var h1Bg = document.querySelector("#title");

var statusMessage = document.querySelector("#status");
var newGameButton = document.querySelector("#newGame");

//Create a new array to store array of random colors
var randomColorArray = [];
randomColorArray = generateRandomColor(squares.length);

//choose something random from randomColorArray
var correctColor = randomColorArray[pickRandomColor()];
rgbColor.textContent = correctColor;
//console.log(correctColor);

//Loop through the colors array
for(var i = 0; i < squares.length; i++) 
{
	//set squares to colors in random colors array
	squares[i].style.backgroundColor = randomColorArray[i];

	//Add clickListener events and test if the clicked square matches with the 'picked color'
	squares[i].addEventListener("click", function() 
	{
		//Set this to hold currently clicked square
		var clickedColor = this.style.backgroundColor;

		//See if rgb values match
		//console.log(clickedColor, correctColor);
		statusMessage.textContent = "try again?";
		//Change rgbSpan to match which square user clicked
		//rgbSpan.textContent = clickedColor;
		if(clickedColor === correctColor)
		{
			statusMessage.textContent = "Correct! You Win!";
			h1Bg.style.backgroundColor = correctColor;
			//Reset newButon text
			newGameButton.textContent = "New Game?";

			for(var j = 0; j < squares.length; j++) 
			{
				//When user chooses correct color, change all suqares to winning color
				squares[j].style.backgroundColor = correctColor;
			}
		} 
		else 
		{
			//'fade' wrong color so it isn't visible
			this.style.backgroundColor = "#232323"
			statusMessage.textContent = "Try again!";
		}
	});
}

//Generate a number between 0 and 6 inclusive
function pickRandomColor() 
{
	var randomNum = Math.floor(Math.random() * squares.length);
	return randomNum;
}

//generate 3 random numbers and push them into array
function generateRandomColor(size) 
{
	var arr = [];
	for(var i = 0; i < size; i++) 
	{
		arr.push(randomColor());
	}
	return arr;
}

//Generate a random number between 0-255 inclusive
//NOTE: rgb(#, #, #) needs a space between commas
function randomColor() 
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

//Refresh the page to generate new colors
newGameButton.addEventListener("click", function() {
	//reset header background
	h1Bg.style.backgroundColor = "black";
	
	//reset newButton text
	newGameButton.textContent = ("try again?");

	//reset statusMessage text
	statusMessage.textContent = "";	
	
	//Generate new randomColorArray
	var random = [];
	random = generateRandomColor(squares.length);
	randomColorArray = random;
	correctColor = randomColorArray[pickRandomColor()];
	
	for(var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = random[i];
	}

	rgbSpan.textContent = correctColor;
});