var runner
var ground, groundImage
var treasure
var obstacles

function preload(){
groundImage=loadImage("ground2.png")

}


function setup() {
  createCanvas(1200,800);
  runner=createSprite(200, 673, 50, 50);
  
  ground=createSprite(600,700,1200,55)
  ground.velocityX= -5
  ground.addImage("ground", groundImage);


}

function draw() {
  background("white"); 
  if(keyDown("space")){
    runner.velocityY= -4 
  }
  runner.velocityY=runner.velocityY+1.0
  runner.collide(ground)
  

  if(ground.x<0){
    ground.x=ground.width/2
  }
  drawSprites();

}