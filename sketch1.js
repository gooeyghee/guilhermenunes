let webcam
let w = 512
let h = 342
let windowsize = 30
let dropshadow = 5
let chicago

function preload() {
	webcam = createCapture(VIDEO)
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	webcam.size(width,height)
	
	webcam.hide()
	
	imageMode(CENTER)
	rectMode(CENTER)
	ellipseMode(CENTER)
	
	noSmooth()
}

function draw() {
	
	background(0)
	
	webcam.loadPixels()
	
	push()
	let stepSize = 10
	for (let x = 0; x < webcam.width; x += stepSize) {
		for (let y = 0; y < webcam.height; y += stepSize) {
			let index = ((y*webcam.width) + x) * 4;
			
			let redVal = webcam.pixels[index]
			let greenVal = webcam.pixels[index + 1]
			let blueVal = webcam.pixels[index + 2]
			
			fill(200)
			
			//noStroke()
			circle(x,y * map(redVal,0,255,0,1.25),stepSize * map(redVal,0,255,0,1)-2)
		
			}	
		}
	pop()
	
}