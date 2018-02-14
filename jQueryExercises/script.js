$("h1").click(function(){
	alert("h1 cliggggggcked!");
});


// $("button").click(function(){
// 	alert("button clicked!");
// });

// $("button").click(function(){
// 	$(this).css("background","pink")
// });

$("button").click(function(){
	var text = $(this).text();
	alert("you clicked "+text);
});

$("input").keypress(function(event) {
	if(event.which === 13){
		alert("you pressed ENTER");
	}
	
});