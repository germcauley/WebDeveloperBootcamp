var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//choose easy mode
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares=3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});
//choose hard mode
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares=6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i =0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});



//play again/reset button
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//reset the new colors button after player wins
	this.textContent="New Colors"
	//clear the message span
	messageDisplay.textContent="";
	//change colors of squares
	for(var i = 0; i<squares.length; i++){ //can refactor this
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor ="steelblue";
})



colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor= colors[i];
	//add click event to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor =this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent= "Try Again!";
		}
	});
}

//change all squares to the correct color if picked
function changeColors(color){
	//loop through all square
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
	//change each color to match given color
}

function pickColor(){
	//pick random number
	var random = Math.floor(Math.random()*colors.length);
	//use number to acces color in color array
	return colors[random];
}

//generate random colors
function generateRandomColors(num){
	//make an array
	var arr=[];
	//add n random colors to array
	for(var i =0; i < num; i++){
		//get random color, push into array
		arr.push(randomColor())
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a 'red' from 0-255
	var r =Math.floor(Math.random()*256);
	//pick a green 0- 255
	var g =Math.floor(Math.random()*256);
	//pick a blue from 0 -255
	var b =Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";

}