var ground, invisibleGround, groundImage;
var obstacleGroup;
var score=0;
var player,playerImage;
var obstacle,obstacle_img;
var bg
var gameState="play"
function preload (){
  playerImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png", "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png");
  banana_img=loadImage("banana.png");
  obstacle_img=loadImage("stone.png");
  backImage=loadImage("jungle.jpg");
  }
  function setup() {
  createCanvas(400, 400);
    bg=createSprite(200,200)
    bg.addImage(backImage)
    bg.velocityX=-2
  player=createSprite(50,350)
  player.addAnimation("monkey",playerImage)
    player.scale=0.2
      ground=createSprite(200,380,400,20 )
    obstacleGroup=new Group();
     bananaGroup=new Group();
    //stone=createSprite(40,360)
    
  //obstacle_img.addImage("stone",obstacle_img)
}

function draw() {
  background(backImage);
  player.x=camera.position.x
  stroke("white")
  if (gameState==="play"){
    
  
  if (bg.x<0){
    bg.x=bg.width/2
  }
  textSize(20)
  fill("white")
  
  if(keyDown("space")&&player.y>300){
    player.velocityY=-12;
  }
  player.velocityY=player.velocityY+0.5;
  player.collide(ground);
  if(player.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score++
  }
     
switch(score){
  case 10: player.scale=0.12;
            break;
  case 20: player.scale=0.14;
           break;
  case 30: player.scale=0.16;
           break;
  case 40: player.scale=0.18;
            break;
 default: break;
}
if(obstacleGroup.isTouching(player)){
  player.scale=0.2;
  (gameState="end")
}
   //spawn the Stone
    spawnobstacle();
  spawnbanana();
  }
  
drawSprites();
  textSize(20);
  fill(0);
  text("Score:"+ score,300 ,50);
  if(gameState==="end"){
    bg.velocityX=0
    bananaGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    player.destroy()
    textSize(40)
    text("GAME OVER",100,200)
    
    
  }
}


function spawnobstacle() {
  //write code here to spawn the Stone
  if (frameCount % 120 === 0) {
    var obstacle = createSprite(600,350,40,10);
    //obstacle.y = Math.round(random(80,120));
    obstacle.addImage(obstacle_img);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
   obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = player.depth;
    obstacle.depth = player.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
} 

function spawnbanana() {
  //write code here to spawn the Stone
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,350,40,10);
    banana.y = Math.round(random(100,150));
    banana.addImage(banana_img);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
   banana.lifetime = 200;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
} 
