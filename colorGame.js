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

// var easyButton = document.querySelector("#easyBtn");
// var hardButton = document.querySelector("#hardBtn");

//Create a new array to store array of random colors
var random = [];

random = generateRandomColor(squares.length);

//choose something random from randomColorArray
var correctColor = random[pickRandomColor(squares.length)];
rgbColor.textContent = correctColor;

//Show 6 squares with random colors by default
var numofSquares = squares.length;

var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) 
{
	modeButtons[i].addEventListener("click", function() 
	{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		
		this.classList.add("selected");

		if(this.textContent === "Easy") 
		{
			numofSquares = 3;
		} 
		else 
		{
			numofSquares = 6;
		}
		reset();
	});
}

//Loop through the colors array
for(var i = 0; i < squares.length; i++) 
{
	//set squares to colors in random colors array
	squares[i].style.backgroundColor = random[i];

	//Add clickListener events and test if the clicked square matches with the 'picked color'
	squares[i].addEventListener("click", function() 
	{
		//Set this to hold currently clicked square
		var clickedColor = this.style.backgroundColor;
	
		//statusMessage.textContent = "New Colors?";
		//See if rgb values match
		if(clickedColor === correctColor)
		{
			statusMessage.style.color = correctColor;

			statusMessage.textContent = "Correct! You Win!";
			h1Bg.style.backgroundColor = correctColor;
			//Reset newButon text
			newGameButton.textContent = "New Colors";

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
	var randomNum = Math.floor(Math.random() * size);
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

newGameButton.addEventListener("click", function() 
{
	reset();
});

function reset() 
{
	/*
	Generate random index
	pick and set random color
	Display the color
	*/
	
	//Generate random index
	random = generateRandomColor(numofSquares);

	//set and pick random color
	correctColor = random[pickRandomColor(numofSquares)];
	
	//Display rgb code
	rgbColor.textContent = correctColor;
	
	newGameButton.textContent = ("New Colors");

	//reset statusMessage text
	statusMessage.textContent = "";	

	for(var i = 0; i < squares.length; i++) 
	{
		if(random[i]) 
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = random[i];
		}
		else 
		{
			squares[i].style.display = "none";
		}
	}
	h1Bg.style.backgroundColor = "steelblue";
}