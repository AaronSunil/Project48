const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var gameState,reset;

var wall1,wall2,wall3,wall4;
var labCell1,labCell2,labCell3,labCell4,labCell5,labCellImg;
var nextStage1,nextStage2;
var pathwall1,pathwall2,pathwall3,pathwall4,pathwall5,pathwall6,pathwall7,pathwall8,pathwall9,pathwall11,pathwall12,pathwall13,pathwall4,pathwall5,pathwall6,pathwall17,pathwall18,pathwall19,pathwall20,
pathwall21,pathwall22,pathwall23,pathwall24,pathwall25,pathwall26,pathwall28,pathwall29,pathwall30,pathwall31,pathwall32,pathwall33,pathwall34,pathwall35,pathwall36,pathwall37,pathwal38,pathwall39,
pathwall40,pathwall41,pathwall42,pathwall43,pathwall44,pathwall45,pathwall46,pathwall47,pathwall48,pathwall49,pathwall50,pathwall50,pathwall51,pathwall52,pathwall53,pathwall54,pathwall55,pathwall56,pathwall57,
pathwall58,pathwall59,pathwall60,pathwall61,pathwall62,pathwall63,pathwall64,pathwall65;

var player, playerImage, oplayerImage, playerLives = 3;
var enemy, enemyAnimation;

function preload()
{
  enemyAnimation = loadAnimation("Images/Enemy/Enemy1.png","Images/Enemy/Enemy2.png","Images/Enemy/Enemy3.png","Images/Enemy/Enemy4.png",
  "Images/Enemy/Enemy5.png","Images/Enemy/Enemy6.png","Images/Enemy/Enemy7.png","Images/Enemy/Enemy8.png","Images/Enemy/Enemy9.png","Images/Enemy/Enemy10.png",
  "Images/Enemy/Enemy11.png","Images/Enemy/Enemy12.png","Images/Enemy/Enemy13.png","Images/Enemy/Enemy14.png","Images/Enemy/Enemy15.png","Images/Enemy/Enemy16.png","Images/Enemy/Enemy17.png","Images/Enemy/Enemy18.png","Images/Enemy/Enemy19.png","Images/Enemy/Enemy20.png")

  oenemyAnimation = loadAnimation("Images/Enemy/Mirrored/oEnemy1.png","Images/Enemy/Mirrored/oEnemy2.png","Images/Enemy/Mirrored/oEnemy3.png","Images/Enemy/Mirrored/oEnemy4.png",
  "Images/Enemy/Mirrored/oEnemy5.png","Images/Enemy/Mirrored/oEnemy6.png","Images/Enemy/Mirrored/oEnemy7.png","Images/Enemy/Mirrored/oEnemy8.png","Images/Enemy/Mirrored/oEnemy9.png","Images/Enemy/Mirrored/oEnemy10.png",
  "Images/Enemy/Mirrored/oEnemy11.png","Images/Enemy/Mirrored/oEnemy12.png","Images/Enemy/Mirrored/oEnemy13.png","Images/Enemy/Mirrored/oEnemy14.png","Images/Enemy/Mirrored/oEnemy15.png","Images/Enemy/Mirrored/oEnemy16.png","Images/Enemy/Mirrored/oEnemy17.png","Images/Enemy/Mirrored/oEnemy18.png","Images/Enemy/Mirrored/oEnemy19.png","Images/Enemy/Mirrored/oEnemy20.png")
    
  playerImage= loadAnimation("Images/Player/Player1.png","Images/Player/Player2.png","Images/Player/Player3.png","Images/Player/Player4.png","Images/Player/Player5.png","Images/Player/Player6.png","Images/Player/Player7.png","Images/Player/Player8.png");

  oplayerImage= loadAnimation("Images/Player/Mirrored/oPlayer1.png","Images/Player/Mirrored/oPlayer2.png","Images/Player/Mirrored/oPlayer3.png","Images/Player/Mirrored/oPlayer4.png","Images/Player/Mirrored/oPlayer5.png","Images/Player/Mirrored/oPlayer6.png","Images/Player/Mirrored/oPlayer7.png","Images/Player/Mirrored/oPlayer8.png");
}
function setup() {
  var canvas = createCanvas(1280,730);
  engine = Engine.create();
  world = engine.world;

  gameState = "PLAY";
  
  console.log("Boundaries Created")
  //Boundaries
  wall1 = createSprite(2,390,5,1280);
  wall2 = createSprite(640,729,1280,5);
  wall3 = createSprite(640,2,1280,5);
  wall4 = createSprite(1280,200,5,1280);
 
  console.log("lab Created") 
  //LabCell
  labCell1 = createSprite(50,8,75,5);
  labCell2 = createSprite(10,40,5,70);
  labCell3 = createSprite(90,40,5,70);
  labCell4 = createSprite(20,75,20,5);
  labCell5 = createSprite(80,75,20,5);

  nextStage1 = createSprite(1250,625,65,5);
  nextStage2 = createSprite(1175,678,5,100);
  
  console.log("player Created")
  //Player
  player = createSprite(50,8,25,25);
  player.addAnimation("player",playerImage)
  player.scale = 0.5;

  console.log("enemies Created")
  //Enemy
  enemy1 = createSprite(300,200,25,25);
  enemy1.addAnimation("enemy",oenemyAnimation);
  enemy1.scale=0.3 
  enemy1.velocityY = -3;
  
  enemy2= createSprite(700,380,25,25);
  enemy2.addAnimation("enemy",enemyAnimation);
  enemy2.scale=0.3 
  enemy2.velocityX = 3;

  enemy3= createSprite(1150,500,25,25);
  enemy3.addAnimation("enemy",oenemyAnimation);
  enemy3.scale=0.3 
  enemy3.velocityY = -3;
  console.log("path Created")
  //Path for Maze
  pathwall1 = createSprite(30,125,5,100);
  pathwall2 = createSprite(72,125,5,100);
  pathwall3 = createSprite(120,175,100,5);
  //pathwall4 = createSprite(170,185,5,25);
  pathwall5 = createSprite(105,195,130,5);
  pathwall6 = createSprite(20,175,25,5);
  pathwall7 = createSprite(10,450,5,550);
  pathwall8 = createSprite(40,317,5,250);
  pathwall9 = createSprite(137,445,200,5);
  pathwall10 = createSprite(157,475,250,5);
  pathwall11 = createSprite(237,422,5,50);
  pathwall12 = createSprite(280,435,5,77);
  pathwall13 = createSprite(357,400,150,5);
  pathwall14 = createSprite(160,400,150,5);
  //pathwall15 = createSprite(435,390,5,25);
  pathwall16 = createSprite(85,390,5,25);
  pathwall17 = createSprite(157,375,150,5);
  pathwall18 = createSprite(360,375,150,5);
  pathwall19 = createSprite(235,340,5,75);
  pathwall20 = createSprite(285,340,5,75);
  pathwall21 = createSprite(162,300,150,5);
  pathwall22 = createSprite(385,300,200,5);
  pathwall23 = createSprite(87,290,5,25);
  pathwall24 = createSprite(260,275,350,5);
  pathwall25 = createSprite(485,195,5,215);
  pathwall26 = createSprite(435,140,5,270);
  pathwall28 = createSprite(585,89,200,5);
  pathwall29 = createSprite(35,583,5,225);
  pathwall30 = createSprite(260,695,455,5);
  pathwall31 = createSprite(300,665,455,5);
  pathwall32 = createSprite(525,680,5,35);
  pathwall33 = createSprite(300,635,455,5);
  pathwall34 = createSprite(75,650,5,35);
  pathwall35 = createSprite(260,600,455,5);
  pathwall36 = createSprite(525,600,5,75);
  pathwall37 = createSprite(300,565,455,5);
  pathwall38 = createSprite(260,525,455,5);
  pathwall39 = createSprite(320,475,270,5);
  pathwall40 = createSprite(525,520,5,90);
  pathwall41 = createSprite(825,695,600,5);
  pathwall42 = createSprite(1125,710,5,35);
  pathwall43 = createSprite(685,49,5,85);
  pathwall44 = createSprite(565,49,160,5);
  pathwall45 = createSprite(452,450,5,50);
  pathwall46 = createSprite(737,425,575,5);
  pathwall47 = createSprite(747,475,450,5);
  pathwall48 = createSprite(975,572,5,200);
  pathwall49 = createSprite(1025,522,5,200);
  pathwall50 = createSprite(1075,670,200,5);
  pathwall51 = createSprite(1100,625,155,5);
  pathwall52 = createSprite(1000,10,5,400);
  pathwall53 = createSprite(900,10,5,400);
  pathwall54 = createSprite(800,10,5,400);
  pathwall55 = createSprite(900,250,400,5); 
  pathwall56 = createSprite(850,150,5,200); 
  pathwall57 = createSprite(950,150,5,200); 
  pathwall58 = createSprite(1100,100,5,150); 
  pathwall59 = createSprite(1070,330,5,150); 
  pathwall60 = createSprite(1050,100,5,150); 
  pathwall61 = createSprite(1148,27,100,5); 
  pathwall62 = createSprite(1148,87,50,5); 
  pathwall63 = createSprite(1148,172,100,5); 
  pathwall64 = createSprite(1200,100,5,70); 
  pathwall65 = createSprite(600,260,5,200);
}

function draw() {
  background(211,211,211);  
  
  if(gameState==="PLAY"){
  textSize(20);
  text("Lives: "+playerLives, 100,30 );

  console.log("movements Created")
  //Player Movement 
  if (keyDown(touches.length > 0 || UP_ARROW)){
    player.y -=5;
    touches = [];
 }
  if (keyDown(touches.length > 0 ||DOWN_ARROW)){
    player.y +=5;
    touches = [];
  }
  if (keyDown(touches.length > 0 ||RIGHT_ARROW)){
    player.x +=5;
    player.addAnimation("player",playerImage);
    touches = [];
 }
  if (keyDown(touches.length > 0 ||LEFT_ARROW)){
   player.x -=5;
   player.addAnimation("player",oplayerImage);
   touches = [];
  }
 
 // Enemy Movement 

  //-----------Enemy1-----------------
 if(enemy1.y>200)
  {
    enemy1.velocityY=enemy1.velocityY*(-1);
  }  
  else if(enemy1.y<30){
    enemy1.velocityY=enemy1.velocityY*(-1);
    
  }

   //-----------Enemy2-----------------
  if(enemy2.x<600){
    enemy2.velocityX=enemy2.velocityX*(-1);
    enemy2.addAnimation("enemy",enemyAnimation);
  }
  else if(enemy2.x>1000)
  {
    enemy2.velocityX=enemy2.velocityX*(-1);
    enemy2.addAnimation("enemy",oenemyAnimation);
  }

   //-----------Enemy3-----------------
  if(enemy3.y>550)
  {
    enemy3.velocityY=enemy3.velocityY*(-1);
    
  }
  else if(enemy3.y<250){
    enemy3.velocityY=enemy3.velocityY*(-1);
    
  }
  
   //Scoring
   if(player.isTouching(enemy1))
   {
     playerLives = playerLives-1;
   }
 
   if(player.isTouching(enemy2))
   {
     playerLives = playerLives-1;
   }
   
   if(player.isTouching(enemy3))
   {
     playerLives = playerLives-1;
   }  

   if(playerLives < 0)
   {
     gameState="END";
   }
   

  console.log("collision Created")
  //Collision

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);

  player.collide(labCell1);
  player.collide(labCell2);
  player.collide(labCell3);
  player.collide(labCell4);
  player.collide(labCell5);

  player.collide(nextStage1);
  player.collide(nextStage2);

  player.collide(pathwall1);
  player.collide(pathwall2);
  player.collide(pathwall3);
  //player.collide(pathwall4);
  player.collide(pathwall5);
  player.collide(pathwall6);
  player.collide(pathwall7);
  player.collide(pathwall8);
  player.collide(pathwall9);
  player.collide(pathwall10);
  player.collide(pathwall11);
  player.collide(pathwall12);
  player.collide(pathwall13);
  player.collide(pathwall14);
  //player.collide(pathwall15);
  player.collide(pathwall16);
  player.collide(pathwall17);
  player.collide(pathwall18);
  player.collide(pathwall19);
  player.collide(pathwall20);
  player.collide(pathwall21);
  player.collide(pathwall22);
  player.collide(pathwall23);
  player.collide(pathwall24);
  player.collide(pathwall25);
  player.collide(pathwall26);
  player.collide(pathwall28);
  player.collide(pathwall29);
  player.collide(pathwall30);
  player.collide(pathwall31);
  player.collide(pathwall32);
  player.collide(pathwall33);
  player.collide(pathwall34);
  player.collide(pathwall35);
  player.collide(pathwall36);
  player.collide(pathwall37);
  player.collide(pathwall38);
  player.collide(pathwall39);
  player.collide(pathwall40);
  player.collide(pathwall41);
  player.collide(pathwall42);
  player.collide(pathwall43);
  player.collide(pathwall44);
  player.collide(pathwall45);
  player.collide(pathwall46);
  player.collide(pathwall47);
  player.collide(pathwall48);
  player.collide(pathwall49);
  player.collide(pathwall50);
  player.collide(pathwall51);
  player.collide(pathwall52);
  player.collide(pathwall53);
  player.collide(pathwall54);
  player.collide(pathwall55);
  player.collide(pathwall56);
  player.collide(pathwall57);
  player.collide(pathwall58);
  player.collide(pathwall59);
  player.collide(pathwall60);
  player.collide(pathwall61);
  player.collide(pathwall62);
  player.collide(pathwall63);
  player.collide(pathwall64);
  player.collide(pathwall65);
 
 if(keyDown(touches.length > 0 ||"i")){
   player.scale=player.scale+0.1;
   if(player.scale>=1)
    {
     player.scale=1;
    }
    touches = [];
  } 
 else if(keyDown(touches.length > 0 ||"d"))
 {
  player.scale=player.scale-0.1;
  if(player.scale<=0.1)
  {
    player.scale=0.1
  }
  touches = [];
}
  
}else if(gameState === "END")
{
  reset = createButton("Restart");
  reset.position(200,200);
  if(document.getElementById(reset).clicked == true)
{
  gameState = "PLAY";
  reset.hide();
}
  End();
}

  drawSprites();
}

function End()
{

  player.velocityX = 0;
  player.velocityY = 0;
  enemy1.velocityX = 0;
  enemy1.velocityY = 0;
  enemy2.velocityX = 0;
  enemy2.velocityY = 0;
  enemy3.velocityX = 0;
  enemy3.velocityY = 0;

  textSize(100);
  text("GAME OVER",400,400);

}
