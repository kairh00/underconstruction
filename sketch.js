let textX=180; let textY=20;
let moveX=1.8;
let moveY=1.8;
let r=200; let g=0;


function setup() { 
  createCanvas(windowWidth,windowWidth/2.1 + 200);
  frameRate(60);
  count=0;
   
}

function draw() {

 fill('blue');
  stroke(0);
  strokeWeight(2);
  strokeCap(ROUND);
rect(0,0,width,windowWidth/2.1);
 textX += moveX;
  textY += moveY;
  

square(windowWidth/2-125,windowWidth/2.1+50,20);
  fill(200,200,220);
  
    square(windowWidth/2-75,windowWidth/2.1+50,20);
     square(windowWidth/2-25,windowWidth/2.1+50,20);
  square(windowWidth/2+25,windowWidth/2.1+50,20);
  
   square(windowWidth/2+75,windowWidth/2.1+50,20);
   square(windowWidth/2+125,windowWidth/2.1+50,20);
  
  
   

  textFont('Ubuntu Mono');
  textAlign(CENTER);
  
   fill (r,g,255);
   textSize(40);
  text('under construction',textX,textY)
  textSize(12);
  text("feel free to look around but don't judge",textX, textY+20);
 

 if (textX > width-180 || textX < 180){
   moveX *= -1; r=random(50,200); g=random(1,100);
 }
  if (textY > windowWidth/2.1-25 || textY < 20){
   moveY *= -1;r=random(50,200); g=random(1,100);
 }
  

}