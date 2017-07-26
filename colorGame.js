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

var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var random = [];
//Create a new array to store array of random colors
var randomColorArray = [];
randomColorArray = generateRandomColor(squares.length);

//choose something random from randomColorArray
var correctColor = randomColorArray[pickRandomColor(squares.length)];
rgbColor.textContent = correctColor;

//console.log(correctColor);

hardButton.classList.add("selected");
hardButton.style.color = "white";

easyButton.addEventListener("click", function() {
	h1Bg.style.backgroundColor = "steelblue";
	hardButton.style.color = "steelblue";
	easyButton.style.color = "white";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	statusMessage.textContent = ""
	newGameButton.textContent = "try again?";

	randomColorArray = generateRandomColor(3);
	correctColor = randomColorArray[pickRandomColorEasy()];

	for(var i = 0; i < squares.length; i++) 
	{
		if(randomColorArray[i])
			squares[i].style.backgroundColor = randomColorArray[i];
		else 
		{
			squares[i].style.display = "none";
		}
	}
	rgbSpan.textContent = correctColor;
	//console.log(randomColorArray[pickRandomColorEasy()]);
});

hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	hardButton.style.color = "white";
	easyButton.style.color = "steelblue";

	h1Bg.style.backgroundColor = "steelblue";
	statusMessage.textContent = "";
	newGameButton.textContent = "try again?";
	
	randomColorArray = generateRandomColor(6);
	correctColor = randomColorArray[pickRandomColor()];
	
	for(var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = randomColorArray[i];
		squares[i].style.display = "block";
	}
	rgbSpan.textContent = correctColor;
});

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

	
		//statusMessage.textContent = "try again?";
		//See if rgb values match
		if(clickedColor === correctColor)
		{
			statusMessage.style.color = correctColor;

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

			//reset statusMessage color and message
			statusMessage.style.color = "black";
			statusMessage.textContent = "Try again!";
		}
	});
}

//Generate a number between 0 and 6 inclusive
function pickRandomColor(size) 
{
	var randomNum = Math.floor(Math.random() * squares.length);
	return randomNum;
}

function pickRandomColorEasy() 
{
	var randomNum = Math.floor(Math.random() * 3);
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
	h1Bg.style.backgroundColor = "steelblue";
	console.log(squares.length);
	//reset header background
	
	easyButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	
	hardButton.style.color = "steelblue";
	easyButton.style.color = "steelblue";
	
	//reset newButton text
	newGameButton.textContent = ("try again?");

	//reset statusMessage text
	statusMessage.textContent = "";	
	
	//Generate new randomColorArray
	random = generateRandomColor(squares.length);
	randomColorArray = random;
	correctColor = randomColorArray[pickRandomColor(squares.length)];
	
	for(var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = random[i];
		squares[i].style.display = "block";
	}
	rgbSpan.textContent = correctColor;
	hardButton.classList.add("selected");
	hardButton.style.color = "white";
	
});