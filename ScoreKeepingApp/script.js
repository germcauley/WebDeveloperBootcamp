//alert("Connected!");

var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var p1Score =0;
var p2Score=0;
var gameOver =false;
var highScore=5;
numInput.value=5; //set to highscore initially



p1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
	p1display.textContent = p1Score;
	if(p1Score===highScore){
	p1display.classList.add("green");
	alert("Game over Player 1 wins");
	gameOver= true;
		}
	}
	
});

p2.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
	p2display.textContent = p2Score;
	if(p2Score===highScore){
	p2display.classList.add("green");
	alert("Game over Player 2 wins");
	gameOver = true;
		}
	}
});

reset.addEventListener("click",function(){
	gamereset();
});

numInput.addEventListener("change", function(){
	document.querySelector("#top").textContent=numInput.value;
	highScore=Number(this.value);
	gamereset();
});
	

function gamereset(){
	p1Score=0;
	p2Score=0;
	p1display.textContent = p1Score;
	p2display.textContent = p2Score;
	p1display.classList.remove("green");
	p2display.classList.remove("green");
	numInput.value=5;
	gameOver=false;
}
