var iss, spacecraft 
var hasDocked=false;

function preload(){

  issImg=loadImage("iss.png");
  bgImg=loadImage("spacebg.jpg");
  spaceCraft1=loadImage("spacecraft1.png");
  spaceCraft2=loadImage("spacecraft2.png");
  spaceCraft3=loadImage("spacecraft3.png");
  spaceCraft4=loadImage("spacecraft4.png");
}
  function setup() {
  createCanvas(1000,600);
 
  iss=createSprite(600,200,40,40);
  iss.addImage(issImg);
  iss.scale=1;

  spacecraft=createSprite(550,450,10,10);
  spacecraft.addImage(spaceCraft1);
  spacecraft.scale=0.3;
  
  
}

function draw() {
  background(bgImg);  

   if(!hasDocked){

    var rand  = Math.round(random(-1,1));
   spacecraft.x=spacecraft.x+rand;


    
    if(keyDown(LEFT_ARROW)){
      spacecraft.x-=2;
      spacecraft.addImage(spaceCraft3);
      
    }
  
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x+=2;
      spacecraft.addImage(spaceCraft4);
      
    }
  
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spaceCraft2);
  
    }
  
    if(keyDown(UP_ARROW)){
    spacecraft.y-=2;  
  
    }



   

  }

  if(spacecraft.x===538 && (spacecraft.y===332)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Successful",50,60);
    

  
}

 //if(spacecraft.x+20<iss.x && spacecraft.y+20<=iss.y){
  //hasDocked=true;
  //textSize(25);
  //text("Docking Successful",50,60);
    
  //}
 
  console.log(spacecraft.x,spacecraft.y);


  
  drawSprites();
}

