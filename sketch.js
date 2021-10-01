//global variable
var star;

function setup() {
  createCanvas(1600, 800);

  star = createSprite(600,300);
  star.shapeColor = "orange"
}

function draw() {
  background(0);

  drawSprites();
}