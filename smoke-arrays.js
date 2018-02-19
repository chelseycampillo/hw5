var x = 200;
var y = [];
var ySpeed = [];
var r = 0;

function setup() {
  createCanvas(400, 400);
	
	for (var i = 0; i < 100; i ++) {
		y[i] = random(0,height);
		ySpeed[i] = random(0, 10);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, 300, 30, 100);

  // save graphics state
	for (var i = 0; i < 100; i ++) {
  	push();
  	rect(x, y[i], 20, 20);
  	pop();
	}
  
  // up 3 pixels
	for (var i = 0; i < 100; i ++) {
  	y[i] = y[i] + ySpeed[i];
	}
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}
