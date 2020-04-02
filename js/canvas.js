// Variables!
var color = "rgb(255, 0, 0)";
var radius = 15;
//You will want to add more
var canvas = document.querySelector("#canvas");
var colorField = document.querySelector("#clr");
var body = document.querySelector("body");
var originalW = 400;
var x = 10;
var y = 20;
var xscale = 1;
var yscale = 1;
var width = 50;
var height = 50;
var lifted = false;
// draw();
//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", setSize);

//Add a listener for the mouse movement
canvas.addEventListener("mousemove", draw);

//Add a listener for the touch move
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchstart", draw);

//Add a listener for the keydown
window.addEventListener("keydown", keyboard);

colorField.addEventListener("change", manualColorSwap);

// Functions!
// I would add a function for draw
function draw(){
	if(lifted) return;
	canvasBorder = canvas.getBoundingClientRect();
	x = event.clientX - canvasBorder.left;
	y = event.clientY - canvasBorder.top;
	var context = canvas.getContext("2d");
	console.log("Drawing now...");
	context.fillStyle = color;
	context.beginPath();
	context.arc(x, y, 6, 0, 2 * Math.PI);
	// context.stroke();
	context.fill();
}

function manualColorSwap(){
	color = colorField.value;
}

function keyboard(){
	if(event.keyCode === 66){
		color = "rgb(0,0,255)";
		return;
	}
	else if(event.keyCode === 82){
		color = "rgb(255,0,0)";
		return;
	}
	else if(event.keyCode === 71){
		color = "rgb(0,255,0)";
		return;
	}
	else if(event.keyCode === 89){
		color = "rgb(255,255,0)";
		return;
	}
	else if(event.keyCode === 32){
		/*clear canvas*/
		console.log("clearing screen...");

		var context = canvas.getContext("2d");
		context.clearRect(0,0, canvas.width, canvas.height);
		return;
	}
	else if(event.keyCode === 38){
		lifted = true;
		return;
	}
	else if(event.keyCode === 40){
		lifted = false;
		return;
	}
}

function setSize(){
	w = window.innerWidth * .75;
	h = window.innerHeight * .75;
	canvas.style.width = "" + w + "px";
	canvas.style.height = "" + h + "px";
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	var context = canvas.getContext("2d");
	console.log("Setting size...");
}
b