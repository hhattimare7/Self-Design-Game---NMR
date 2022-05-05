var mrawesome;
var flametal;
var darthnihulis;

function preload(){
  
  nathnotactive = loadImage("assets/heart_1.png")
  rithnotavtive = loadImage("assets/heart_2.png")
  mehrannotactive = loadImage("assets/heart_3.png")

  zap = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

  //creating the player sprite
    mrawesome = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    mrawesome.addImage("notactive", nathnotactive);
    mrawesome.scale = 1;
    mrawesome.debug = true;
    mrawesome.setCollider("rectangle",0,0,300,300);

    flametal = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    flametal.addImage("rnotactive", rithnotavtive);
    flametal.scale = 1;
    flametal.debug = true;
    flametal.setCollider("rectangle",0,0,300,300);

    darthnihulis = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    darthnihulis.addImage("mnotactive", mehrannotactive);
    darthnihulis.scale = 1;
    darthnihulis.debug = true;
    darthnihulis.setCollider("rectangle",0,0,300,300);


   //creating sprites to depict lives remaining
    heart2 = createSprite(displayWidth-50,40,20,20);
    heart2.visible = false;
    heart2.addImage("heart1",heart1Img);
    heart2.scale = 0.4;

    heart2 = createSprite(displayWidth-100,40,20,20);
    heart2.visible = false;
    heart2.addImage("heart2",heart2Img);
    heart2.scale = 0.4;

    heart3 = createSprite(displayWidth-150,40,20,20);
    heart3.addImage("heart3",heart3Img);
    heart3.scale = 0.4;
   

    //creating group for zombies    
    goldGoblins = new Group();
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")){
    mrawesome.y = mrawesome.y-30
  }
  if(keyDown("LEFT_ARROW")){
    mrawesome.x = mrawesome.x-30
  }
  if(keyDown("RIGHT_ARROW")){
    mrawesome.x = mrawesome.x+30;
  }
  if(keyDown("w")){
    flametal.y = flametal.y-30;
  }
  if(keyDown("a")){
    flametal.x = flametal.x-30;
  }
  if(keyDown("d")){
    flametal.x = flametal.x+30;
  }
  if(keyDown("i")){
    darthnihulis.y = darthnihulis.y-30;
  }
  if(keyDown("j")){
    flametal.x = flametal.x-30;
  }
  if(keyDown("l")){
    flametal.x = flametal.x+30;
  }
  drawSprites();


}
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    zombie = createSprite(500,500,40,40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,400,400)

    zombie.lifetime = 400
    zombieGroup.add(zombie)
  }
}
