var secCount = 0;
var minCount =0;
var distance=25
var intervalID = null;


function myAddFunction(){
  if(secCount<59){
    secCount+=1;
    document.getElementById("secDiv").innerHTML=secCount;
  }
  else if(minCount<25){
    minCount+=1;
    secCount=0;
    document.getElementById("minDiv").innerHTML=minCount;
    document.getElementById("secDiv").innerHTML=secCount;
  }
	
	
}

function mySubFunction(){
	if(secCount>0){
	secCount-=1;
	document.getElementById("secDiv").innerHTML=secCount;
	}
  else if(minCount>0){
    minCount-=1;
    secCount=59;
    document.getElementById("minDiv").innerHTML=minCount;
    document.getElementById("secDiv").innerHTML=secCount;
  }
}


function myTimer(){
  intervalID = setInterval("showalert()", 1000);//pass function and timespan to setInterval

}

function showalert(){
  if(minCount!=0&&secCount==0){
     minCount-=1;
    document.getElementById("minDiv").innerHTML=minCount;
    secCount=59;
    document.getElementById("secDiv").innerHTML=secCount;
  }
  else if(minCount!=0&&secCount!=0){
    secCount-=1;
    document.getElementById("secDiv").innerHTML=secCount;
  }
  else if(minCount==0&&secCount!=0){
    secCount-=1;
    document.getElementById("secDiv").innerHTML=secCount;
  }
  else {
    alert("Countdown has ended!");
    clearInterval(intervalID);
    
  }
}












