var x = [];
var y = [];
var ySpeed = [];
var xSpeed = [];
var r = 0;

function setup() {
  createCanvas(400, 400);
	
	for(var i = 0; i < 100; i++){
		x[i] = 195;
		y[i] = 300;
		ySpeed[i] = random(0,5);
		xSpeed[i] = random(-5,5);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // save graphics state
	for (var i = 0; i < 100; i++) {
  	push();
		fill(y[i]);
		translate(x[i], y[i]);
  	rotate(r);
  	rect(-10, -10, 20, 20);
		pop();
	}
  
  // up 3 pixels
	for (var i = 0; i < 100; i++) {
  	y[i] -= ySpeed[i];
	}
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
	
	//move horizontally
	for (var i = 0; i < 100; i++) {
		x[i] += xSpeed[i];
	}
}
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
	
	//move horizontally
	for (var i = 0; i < 100; i++) {
		x[i] += xSpeed[i];
	}
}
