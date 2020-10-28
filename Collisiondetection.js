var movingRect;
var fixedRect;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;
  movingRect= createSprite(700,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug= true;
}


function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x- movingRect.x <fixedRect.width/2 +movingRect.width/2 &&
     movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y- movingRect.y <fixedRect.height/2 +movingRect.height/2) {
    
      movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}