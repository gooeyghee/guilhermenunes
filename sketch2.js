let offset = 0;
let camera;

function preload() {
  camera = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  camera.size(width, height);
  camera.hide();
}

function draw() {
  background(10);
  camera.loadPixels();

  stroke(255);
	strokeWeight(1)
  noFill();
	
  let spacing = 7; // Distance between sine waves

	translate(0,-10)
	
  for (let i = 0; i < height+100; i += spacing) {
    beginShape();
    for (let x = 0; x < width+100; x += 10) {
      let pixelX = int(map(x, 0, width, 0, camera.width));
      let pixelY = int(map(i, 0, height, 0, camera.height));
      let index = (pixelX + pixelY * camera.width) * 4;

      let brightnessValue = camera.pixels[index]; // Red channel (brightness proxy)
      let waveHeight = map(brightnessValue, 0, 255, 0, 75); 

      let angle = offset + x * 0.001;
      let y = i + sin(angle) * waveHeight; 

      vertex(x, y);
    }
    endShape();
  }
}