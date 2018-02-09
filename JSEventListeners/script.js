var h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
	//alert("h1 was clicked!");
	if(h1.style.background != "orange"){
		h1.style.background = "orange";
		}
		else{
			h1.style.background = "white";
		}
});



var lis = document.querySelectorAll("li");

for(var i=0; i < lis.length; i++){
	lis[i].addEventListener("click",function(){
		this.style.color="pink";
	})
}

var button = document.querySelector("button");
// var isPurple = false;


// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });


button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});

// var cat = document.querySelector("img");
// var isCat = false;

// cat.addEventListener("click",function(){
// 	if(isCat){
// 		cat.src="https://3.bp.blogspot.com/-pZMZb0rC6qI/UTHNYH7mi7I/AAAAAAAAAPA/m_VYPjtLG8w/s1600/cat.jpeg";
// 		isCat=false;
// 	}
// 	else(){
// 		cat.src="http://miriadna.com/desctopwalls/images/max/White-cat-with-yellow-eyes.jpg";
// 		isCat=true;
// 	}
	
// });





