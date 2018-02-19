// Check off specific todos by clicking 
//add to ul parent so works for dynamically added li elements

$("ul").on("click","li",function(){
	$(this).toggleClass('completed');
});



//Click on X to delete to do, applied to ul so anytime span inside ul 
//is clicked it works for dynamically added elements
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();//stops bubbling of events
});

//ul click to demonstrate click event bubble
// $("ul").click(function(){
// 	alert("ul clicked");
// });

//add to the list
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){//13 is the code for the enter key
		var todoText = ($(this).val());//grab input value when hit 
		//clear the input
		$(this).val("");
		//create a new li with a span inside and trash icon inside span and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});


$("h1").on("click","#pen",function(){
	$("input").fadeToggle();
	// alert('click pencil');
});







