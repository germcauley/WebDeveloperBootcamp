var movieDB =[
{title:'Leon',rating:5,watched:true},
{title:'King Kong',rating:2,watched:true},
{title:'Frozen',rating:3,watched:false},
{title:'Good Will Hunting',rating:5,watched:true}
]



movieDB.forEach(function(movie)
{

	if(movie.watched ==true){
			console.log("You have watched " + movie.title +" "+ movie.rating+" stars");
	} 
			else{console.log("you have not watched "+movie.title +" "+ movie.rating+" stars")}



});

		




