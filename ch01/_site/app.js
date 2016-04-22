"use strict"
$(document).ready(function(){
	console.log("jquery is ready!")

	paper.install(window);
	paper.setup(document.getElementById("display"));
	paper.view.draw();

	var c;
	for(var x=25; x<600; x+=50) {
	   for(var y=25; y<600; y+=50) {
	      c = Shape.Circle(x, y, 20);
	      c.fillColor = 'black';
	   }
	}

	var circle = Shape.Circle(300,300,100);
	circle.fillColor = "white";
	circle.strokeColor = "black"

	var tool = new Tool();
	tool.onMouseDown = function(event){
		circle.fillColor = "black";
	}

});


