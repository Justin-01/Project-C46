var canvas;
var sub;
var edges;
var subImage;
var backgorundImage;
var stoneImage;
var obstacleGroup;
var stationImage;
var station;
var lives = 3;
var torpedoes = 10;
var gameState = "PLAY"

function preload(){ 
  subImage = loadImage('sub.png')
  backgroundImage = loadImage('background.jpg')
  stoneImage = loadImage('stone.png')
  stationImage = loadImage('station.png')
} 

function setup() { 
 canvas = createCanvas(5000,5000); 
 sub = createSprite(200,200,50,50)
 sub.addImage(subImage);
 edges = createEdgeSprites()
 sub.scale = 0.4

 station = createSprite(4500,4500,50,50);
 station.addImage(stationImage);

 obstacleGroup = new Group()


 for(var i = 0;i<50;i++){
  x = random(100,5000);
  y = random(100,5000)
  var obstacle = createSprite(x,y,50,50); 
  obstacle.addImage(stoneImage);
  obstacle.scale = 0.2;
  obstacleGroup.add(obstacle)
 }
} 

function draw() { 
  if(gameState === "PLAY"){
    background(backgroundImage); 
    if(keyDown("right")){
      sub.x = sub.x + 10;
    }
    if(keyDown("left")){
      sub.x = sub.x - 10;
    }
    if(keyDown("down")){
      sub.y = sub.y + 10;
    }
    if(keyDown("up")){
      sub.y = sub.y - 10;
    }
    textSize(30);
    text('Lives: '+lives, sub.x-100, sub.y-70)
    
    text('Torpedoes: '+torpedoes, sub.x+20, sub.y-70)

    if(sub.isTouching(obstacleGroup)){
      lives-=1
      sub.x-=20
    }
  
    sub.bounceOff(edges)
    drawSprites(); 
  }
  
  
}

