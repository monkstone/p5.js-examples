// After an Islamic Star Sketch by Mary Scahill
// https://www.openprocessing.org/sketch/78611
var star;
var angle;
let XOFF = 133;
let YOFF = 10;
let STAR_OFF = 116;

function preload() {
	star = loadImage("assets/islamicstar.png");
}

function setup() {
	createCanvas(460, 360);
	angle = radians(60);
}

function draw() {
	background(200, 0, 0);
	drawTiles();
	noLoop();
}

function drawStar() {
	for (var i = 0; i < 6; i++) {
		translate(XOFF, YOFF);
		rotate(angle);
		image(star, 0, 0);
	}
	translate(STAR_OFF, 0);
}

function drawTiles() {
	translate(0, -40);
	for (var i = 0; i < 4; i++) {
		drawStar();
	}
	translate(-4 * STAR_OFF, 200);
	for (var j = 0; j < 4; j++) {
		drawStar();
	}
}
