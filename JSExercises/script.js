/*var isEven=function(num){
	if(num%2==0){
		return "yes, that number is even"
	}
	else{
		return "no"
	}
}
var guess = prompt("Please choose a number")

alert(isEven(guess));

var factorial=function(number){
	var answer=1;
		if(number>0){
			for(var i=number; i>0;i--){
				console.log(answer*=i);
				

			}
			return answer;
			
		}
		else{
			return 1;
		}
		
}

var facGuess = prompt("What number to factorial?");

//factorial(10);

alert(factorial(facGuess));*/

var kebabToSnake= function(word){
	
	var x = word.split('-');
	x=x.join("_")
	return x;
}
var input = prompt("please enter a string");

alert(kebabToSnake(input));


