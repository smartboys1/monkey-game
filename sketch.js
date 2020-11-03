
var monkey , monkey_running;
var banana ,bananaImage, obstacles, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var PLAY=1;
var END=0;
var gameState=1





function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400,400);
  
  //creating and adding animation to the monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  // creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background(220);
  
  
  
  // making infinite ground
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  
  // making the monkey jump when space is pressed
  if(keyDown("space")&& monkey.y>=0){
  monkey.velocityY=-12;
   }
  
  // adding gravity
  monkey.velocityY=monkey.velocityY+0.8;
  
  //monkey collides with ground
  monkey.collide(ground);
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score,"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
// if(monkey.isTouching(rock));
  //obstacleGroup.destroy
  
  
  
 drawSprites(); 
}


function food(){
  if(frameCount % 80===0){
    var banana=createSprite(200,40,120,40)
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.y=Math.round(random(120,200));
     banana.velocityX=-7;
     banana.Lifetime=50 ;
    FoodGroup.add(banana);
  }
  
}
function obstacles(){
  if(World.frameCount%200===0){
  var rock=createSprite( 400,320,20,20);
    rock.addImage(obstaceImage);
    rock.velocityX=-8
    rock.setLifetime=50;
    rock.scale=0.2;
    obstacleGroup.add(rock)       
    
  } 
  }





