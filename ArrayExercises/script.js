
var arr1 =[];
var arr1out =[];
var ans1;
var arr2 =[];
var arr3=[];



function revStr(){
	var input1 = prompt("Enter string you want to reverse");
	arr1 = input.split("");
	for(var i=arr1.length; i>=0; i--){
		arr1out.push(arr1[i]);	 
	}
	ans1 = arr1out.join("");
	return ans1;
}

function isUni(){
	var q ="yes";
	while(q !== "no"){
		var input2 = prompt("type number to add to array or type no to stop");
		arr2.push(input2);
		q= prompt("add another number? yes/no");
	}
	//test all numbers in array
	for(var i =0; i < arr2.length; i++){
		if(arr2.length<2){
			console.log("true");
			return true;
		}
		else if(arr2[0] !== arr2[i]){
			console.log("false");
			return false;
		}
		else{
			console.log("true");
			return true;
		}

	}
		

	//console.log(arr2);
	
}

function sumArray(){
	var q ="yes";
	var result=0;
	while(q !== "no"){
		var input3 = prompt("type number to add to array or type no to stop");
		arr3.push(input3);
		q= prompt("add another number? yes/no");
	}
	result =arr3.reduce(add,0);
	
	console.log(result);
}



sumArray();


//isUni();


//alert(revStr(input));

