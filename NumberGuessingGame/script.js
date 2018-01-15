var complete = false;
var answer = 7;
var play = "y";

while(complete==false){

	var guess = prompt("Please guess a number");

	if(guess>answer){
		alert("Your guess is too high. Guess again!");

	}
	else if(guess<answer){
		alert("Your guess is too low. Guess again!");

	}
	else{
		alert("You got it! The answer was: "+answer);
		play = prompt("Play again? y/n");
			if(play==="y"){
				complete =false;
			}
			else{
				complete =true;
			}
		
	}

}

alert("Goodbye!");