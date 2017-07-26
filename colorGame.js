//alert("connected");

var colors = [
	"rgb(255, 0, 0)", //red
	"rgb(255, 255, 0)", //yellow
	"rgb(0, 255, 0)", //green
	"rgb(0, 255, 255)", //cyan
	"rgb(0, 0, 255)", //blue
	"rgb(255, 0, 255)", //pink
]

//select the class 'square' from html file
var squares = document.querySelectorAll(".square");

//Color to be chosen randomly from colors array
var pickedColor = colors[2];

//Select the ID 'rgbColor" from html file'
var rgbSpan = document.querySelector("#rgbColor");

//Display rgb color
rgbSpan.textContent = pickedColor;

//Loop through the colors array
for(var i = 0; i < squares.length; i++) 
{
	//set squares to colors in colors array
	squares[i].style.backgroundColor = colors[i];

	//Add clickListener events and test if the clicked square matches with the 'picked color'
	squares[i].addEventListener("click", function() 
	{
		//Set this to hold currently clicked square
		var clickedColor = this.style.backgroundColor;

		//Change rgbSpan to match which square user clicked
		rgbSpan.textContent = clickedColor;
		if(clickedColor === pickedColor) 
		{
			for(var j = 0; j < squares.length; j++) 
			{
				//When user chooses correct color, change all suqares to winning color
				squares[j].style.backgroundColor = pickedColor;
			}
		} 
		else 
		{
			//'fade' wrong color so it isn't visible
			this.style.backgroundColor = "#232323"
		}
	});
}