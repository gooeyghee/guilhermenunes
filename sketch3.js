let camera
let offset


function preload() {
	camera = createCapture(VIDEO)
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	camera.size(width,height)
	camera.hide()
	
	ellipseMode(CENTER)
}

function draw() {
	
	background(10)
	
	camera.loadPixels()
	
	//image(camera,0,0)
	
	let = stepSize = 20
	for (let x = 0; x < camera.width; x += stepSize){
		for (let y = 0; y < camera.height; y += stepSize) {
			let index = ((y * camera.width) + x) * 4
			
			let redVal = camera.pixels[index]
			let greenVal = camera.pixels[index + 1]
			let blueVal = camera.pixels[index + 2]
			
			offset = sin(frameCount*0.05)
			
			
			stroke(redVal,greenVal,blueVal)
			strokeWeight(map(redVal,0,255,0,10))
			point(x-15,y - (map(redVal,0,255,0,100)))
			
			
			//push()
			//stroke(0,greenVal,0)
			//strokeWeight(map(greenVal,0,255,0,10))
			//point(x,y)
			//pop()
			
			
			//push()
			//stroke(0,0,blueVal)
			//strokeWeight(map(blueVal,0,255,0,10))
			//point(x+15,y)
			//pop()
			
			
		}
	}
}