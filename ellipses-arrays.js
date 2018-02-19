var x = [];
var y1 = [];
var y2 = [];
var d = [];
var colors1 = [];
var colors2 = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for (var i = 0; i < 50; i ++) {
		x[i] = random(0,width);
		y1[i] = random(0,100);
		y2[i] = random(300,400);
		d[i] = random(10,200);
		colors1[i] = color(random(0,60), random(100,255), random(100,255));
		colors2[i] = color(random(100,210), random(100,255), random(100,255));
	}
		
}
  
function draw() {
  background(255);
  noStroke();

  // draw 25 ellipses in top quarter of canvas
	for (var i = 0; i < 25; i ++) {
  	fill(colors1[i]);
  	ellipse(x[i], y1[i], d[i]);
	}
	
	//draw 25 ellipses in bottom quarter 
	for (var i = 0; i < 25; i ++) {
		fill(colors2[i]);
		ellipse(x[i], y2[i], d[i]);
	}
	
	// 1% of the time
	for (var i = 0; i < 100; i ++) {
  	if (random() < 0.01) {
    // random diameter between 10 and 100
    	d[i] = random(10, 250);
		}
	}
	
	//2% of the time
	for (var i = 0; i < 100; i ++) {
		if (random() < 0.02) {
			d[i] = random(10, 100);
	}
	}
}
