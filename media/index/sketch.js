size = 50

var canvas

function setup() {
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0,0)
	canvas.style("z-index", "-1")
	textAlign(CENTER)
	rectMode(CENTER)
}

function draw() {

	background(0)

	sizecounter = 5 * sin(frameCount * 0.05)

	for (let x = -width; x < width; x = x + 100) {
		for (let y = -height; y < height; y = y + 100) {
			textSize(size + sizecounter)
			noStroke()
			fill(255)
			//text("welcome",x + mouseX, y + mouseY)
			ellipse(x + mouseX,y + mouseY, 30)
		}
	}

}
