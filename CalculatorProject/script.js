var finalCalculation =[];
var totalString="";

var display =document.getElementById("main-display").innerHTML;
//shows the button pressed on the calc display
function myFunction(input) {
    document.getElementById("main-display").innerHTML +=input;
    finalCalculation.push(input);      	     
}
//clears the screen
function myClearFunction(input) {
    document.getElementById("main-display").innerHTML ="";
    finalCalculation=[];  
    totalString ="0";  	     
}
//adds numbers
function myAddFunction(input) {
    document.getElementById("main-display").innerHTML += "+"; 
    finalCalculation.push(input);       
}
//subtract numbers
function mySubtractFunction(input) {
    document.getElementById("main-display").innerHTML += "-"; 
    finalCalculation.push(input);       
}
//multiply numbers
function myMultplyFunction(input) {
    document.getElementById("main-display").innerHTML += "*"; 
    finalCalculation.push(input);      
}
//divide numbers
function myDivideFunction(input) {
    document.getElementById("main-display").innerHTML += "/"; 
    finalCalculation.push(input);       
}
//calculate all in the array
function myEqualsFunction(input) {       
 	console.log(finalCalculation);
 	finalCalculation.forEach(function(item){ 		
 			if(item!=""){
 				totalString+=item;
 			} 			
 	}); 
 	console.log(eval(totalString));
 	document.getElementById("main-display").innerHTML =String(eval(totalString));
 	finalCalculation=[];
 	totalString=String(eval(totalString)); 	
}






