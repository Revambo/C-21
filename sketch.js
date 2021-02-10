var rect1, rect2

function setup() {
  createCanvas(800,800);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400, 600, 50, 50);

  rect1.shapeColor = "purple"
  rect2.shapeColor = "red"
  rect1.velocityY = 2
  rect2.velocityY = -2

  rect1.debug = true
  rect2.debug = true
}

function draw() {
  background(0);  


if(isTouching(rect1, rect2)){
  rect1.shapeColor = "blue"
  rect2.shapeColor = "red"
}else{
  rect2.shapeColor = "green"
  rect1.shapeColor = "brown"
}
  
  //  bounceOff(rect1, rect2)
  drawSprites();
}

