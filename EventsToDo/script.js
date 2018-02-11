//alert("connected!");
var lis = document.querySelectorAll("li");

//change green -black when museover mouseout
for(var i=0; i < lis.length;i++){
	lis[i].addEventListener("mouseover",function(){
	this.classList.add("selected");
	});
	lis[i].addEventListener("mouseout",function(){
	this.classList.remove("selected");
	});
	//toggle classist
	lis[i].addEventListener("click",function(){
		this.classList.toggle("done");
	});
}



