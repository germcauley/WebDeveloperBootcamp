
$(document).ready(function() {


	
	var count =15;
	var size =30;
	var colors = ['red','yellow','orange','purple','blue','green','pink','white','black','turquoise']


	function GenGrid(){
		/*Create 16x16 grid */
		for (var x=0; x<=count; x++){
			for(var y=0; y<=count; y++){
				console.log('print')
				var unit = $("<div class='unit'></div>");
					unit.css("height",size);
					unit.css("width",size);
		            unit.appendTo('#container');
			}
		}
	}

	function ChangeColor(){
		/*Random sqaure colors*/
		$(".unit").hover(function(){
			var rand = Math.floor((Math.random() * 10))
	    $(this).css("background-color", colors[rand]);
	    }, function(){
	    $(this).css("background-color", colors[rand]);
		})
	}

	function ClearGrid(){
		$(".unit").css("background-color","white")
		
	}

	function deleteGrid(){
		$('#container').children('div').remove();
	}

	function newSquares(){
		var squares = prompt("How many squares do you want in the canvas?");
		size =(512/squares);
		size = size-2;
		count = squares-1;
		document.getElementById("demo").innerHTML ="there will be:"+squares+"squares"+size+"pixels big";
	}

	GenGrid()
	ChangeColor()
		
		/*Button functionality*/
	$(".but").click(function(){
		newSquares()
		deleteGrid()
		GenGrid()
		ChangeColor()
			              	
	 });
		
});












