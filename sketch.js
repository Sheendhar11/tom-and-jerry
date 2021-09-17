var cupboardImg, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var jerry1Img, jerry2Img, jerry3Img, bg, bgImg, jerry_running;
var butch1Img, butch2Img, butch3Img;
var cheese1Img, cheese2Img, tom2, butch2;
var coinsImg, seathighlightImg;
var tom1Img, tom2Img, cheese1, cheese2, cheese3, cheese4, cheese5, cheese6, cheese7, cheese8;
var gamestate="play";
var gameOverImg, congratsImg, gameOVER, cup1, cup2;


function preload(){
  
  cupboardImg = loadImage("assets2/cup.PNG");
  jerry1Img= loadImage("assets2/jerry_Mouse.png");
  jerry2Img= loadImage("assets2/WHEN JERRY REACHED CHEESE.png");
  jerry3Img= loadImage("assets2/Mice-in-a-cage2.jpg");
  jerry_running= loadImage("assets2/jerry.png");
  butch1Img= loadImage("assets2/BUTCH LOOKING FOR JERRY.png");
  butch3Img= loadImage("assets2/happy butch.png");
  cheese1Img=loadImage("assets2/cheese cheese.png");
  cheese2Img=loadImage("assets2/cheeeese.png");
  coinsImg=loadImage("assets2/coins.jpg");
  seathighlightImg= loadImage("assets2/seat highlight.jpg");
  tom1Img=loadImage("assets2/TOM LOOKING FOR JERRY.PNG");
  tom2Img = loadImage("assets2/tom happy.png");
  bgImg = loadImage("assets2/background.jpg");
  gameOverImg = loadImage("assets2/game over.png");
  congratsImg= loadAnimation("assets2/congrats.gif");
}

function setup() {

  
  createCanvas(displayWidth-100,500);

  //adding the background image
  bg = createSprite(displayWidth-100,500)
  bg.addImage(bgImg)
  bg.scale = 5.0
  
  coins=createSprite(668,434)
  coins.addImage(coinsImg)
  coins.scale=0.05

  coins1=createSprite(630,208)
  coins1.addImage(coinsImg)
  coins1.scale=0.05

  coins2=createSprite(1023,205)
  coins2.addImage(coinsImg)
  coins2.scale=0.05
  
  coins3=createSprite(403,211)
  coins3.addImage(coinsImg)
  coins3.scale=0.05

  coins4=createSprite(269,37)
  coins4.addImage(coinsImg)
  coins4.scale=0.05

  coins5=createSprite(80,251)
  coins5.addImage(coinsImg)
  coins5.scale=0.05

  cup1= createSprite(424,387)
  cup1.addImage(cupboardImg)
  cup1.scale=0.2
  
  cup2= createSprite(1047,65)
  cup2.addImage(cupboardImg)
  cup2.scale=0.2

tom1= createSprite(100,200)
tom1.addImage(tom1Img)
tom1.scale=0.05

tom2= createSprite(550,300)
tom2.addImage(tom1Img)
tom2.scale=0.05

jerry1= createSprite(1198,470)
jerry1.addImage(jerry1Img)
jerry1.scale=0.10

butch1= createSprite(300,100)
butch1.addImage(butch1Img)
butch1.scale=0.30

butch2= createSprite(1199,100)
butch2.addImage(butch1Img)
butch2.scale=0.30

cheese1= createSprite(309,291)
cheese1.addImage(cheese1Img)
cheese1.scale=0.01

cheese2= createSprite(719,326)
cheese2.addImage(cheese1Img)
cheese2.scale=0.01

cheese3= createSprite(909,130)
cheese3.addImage(cheese1Img)
cheese3.scale=0.01

cheese4= createSprite(354,57)
cheese4.addImage(cheese1Img)
cheese4.scale=0.01

cheese5= createSprite(110,71)
cheese5.addImage(cheese1Img)
cheese5.scale=0.01

cheese6= createSprite(879,427)
cheese6.addImage(cheese1Img)
cheese6.scale=0.01

cheese7= createSprite(657,81)
cheese7.addImage(cheese1Img)
cheese7.scale=0.01

cheese8= createSprite(111,390)
cheese8.addImage(cheese1Img)
cheese8.scale=0.01

tom1.velocityX=random(-4,4)
  tom1.velocityY=random(-4,4)
  tom2.velocityX=random(-4,4)
  tom2.velocityY=random(-4,4)
  butch1.velocityX=random(-5,5)
  butch1.velocityY=random(-5,5)
  butch2.velocityX=random(-5,5)
  butch2.velocityY=random(-5,5)



}

function draw() {
  background('Blue'); 


  text(mouseX+":"+ mouseY,mouseX,mouseY)
  

wall1= createSprite(30,14,150,90);
wall1.shapeColor="red"
wall2=createSprite(229,273,5,400);
wall2.shapeColor="black"
wall3=createSprite(500,4,5,300);
wall3.shapeColor="black"
wall4=createSprite(500,411,5,300);
wall4.shapeColor="black"
wall5=createSprite(800,200,5,200);
wall5.shapeColor="black"
wall6=createSprite(1000,411,5,200);
wall6.shapeColor="black"
wall7=createSprite(1178,306,200,5);
wall7.shapeColor="black"
wall8=createSprite(1196,490,150,90);
wall8.shapeColor="red"
wall9=createSprite(1009,302,100,5);
wall9.shapeColor="black"


  var edges=createEdgeSprites()
  
jerry1.bounceOff(edges);
jerry1.bounceOff(wall1);
jerry1.bounceOff(wall2);
jerry1.bounceOff(wall3);
jerry1.bounceOff(wall4);
jerry1.bounceOff(wall5);
jerry1.bounceOff(wall6);
jerry1.bounceOff(wall7);
jerry1.bounceOff(wall8);

tom1.bounceOff(edges);
tom1.bounceOff(wall1);
tom1.bounceOff(wall2);
tom1.bounceOff(wall3);
tom1.bounceOff(wall4);
tom1.bounceOff(wall5);
tom1.bounceOff(wall6);
tom1.bounceOff(wall7);
tom1.bounceOff(wall8);
tom1.bounceOff(wall9);

tom2.bounceOff(edges);
tom2.bounceOff(wall1);
tom2.bounceOff(wall2);
tom2.bounceOff(wall3);
tom2.bounceOff(wall4);
tom2.bounceOff(wall5);
tom2.bounceOff(wall6);
tom2.bounceOff(wall7);
tom2.bounceOff(wall8);
tom2.bounceOff(wall9);

butch1.bounceOff(edges);
butch1.bounceOff(wall1);
butch1.bounceOff(wall2);
butch1.bounceOff(wall3);
butch1.bounceOff(wall4);
butch1.bounceOff(wall5);
butch1.bounceOff(wall6);
butch1.bounceOff(wall7);
butch1.bounceOff(wall8);
butch1.bounceOff(wall9);

butch2.bounceOff(edges);
butch2.bounceOff(wall1);
butch2.bounceOff(wall2);
butch2.bounceOff(wall3);
butch2.bounceOff(wall4);
butch2.bounceOff(wall5);
butch2.bounceOff(wall6);
butch2.bounceOff(wall7);
butch2.bounceOff(wall8);
butch2.bounceOff(wall9);

if(gamestate==="play"){

jerry1.velocityX=0
jerry1.velocityY=0

  if(keyIsDown(UP_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityY=-6
    jerry1.velocityX=0
  }
  
  if(keyIsDown(LEFT_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityX=-6
    jerry1.velocityY=0
  }

  if(keyIsDown(DOWN_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityY=6
    jerry1.velocityX=0
  }

  if(keyIsDown(RIGHT_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityX=6
    jerry1.velocityY=0
  }

  if(jerry1.isTouching(cup1)){
    jerry1.visible=false
  }

  if(jerry1.isTouching(cup2)){
    jerry1.visible=false
  }
  

  if(jerry1.collide(tom1)){
    tom1.addImage(tom2Img)
    tom1.scale=0.14
    gamestate="end"
  }

  if(jerry1.collide(tom2)){
    tom2.addImage(tom2Img)
    tom2.scale=0.14
    gamestate="end"
  }

  if(jerry1.collide(butch1)){
    butch1.addImage(butch3Img)
    butch1.scale=0.15
    gamestate="end"
  }

  if(jerry1.collide(butch2)){
    butch2.addImage(butch3Img)
    butch2.scale=0.15
    gamestate="end"
  }

  if(jerry1.collide(coins)){
    coins.destroy()
  }

  if(jerry1.collide(coins1)){
    coins1.destroy()
  }

  if(jerry1.collide(coins2)){
    coins2.destroy()
  }

  if(jerry1.collide(coins3)){
    coins3.destroy()
  }

  if(jerry1.collide(coins4)){
    coins4.destroy()
  }

  if(jerry1.collide(coins4)){
    coins4.destroy()
  }

  if(jerry1.collide(cheese1)){
    cheese1.destroy()
  }

  if(jerry1.collide(cheese2)){
    cheese2.destroy()
  }

  if(jerry1.collide(cheese3)){
    cheese3.destroy()
  }

  if(jerry1.collide(cheese4)){
    cheese4.destroy()
  }

  if(jerry1.collide(cheese5)){
    cheese5.destroy()
  }

  if(jerry1.collide(cheese6)){
    cheese6.destroy()
  }

  if(jerry1.collide(cheese7)){
    cheese7.destroy()
  }

  if(jerry1.collide(cheese8)){
    cheese8.destroy()
  }
}
else if(gamestate==="end"){
  jerry1.velocityX=0
  jerry1.velocityY=0
  jerry1.addImage(jerry3Img)
    jerry1.scale=0.15
    image(gameOverImg,497,213)
}


drawSprites();

}
