let textX=180; let textY=20;
let moveX=1.8;
let moveY=1.8;
let r=200; let g=0;


function setup() { 
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  count=0;
   
}

function draw() {

 background('blue');
 textX += moveX;
  textY += moveY;

  textFont('Ubuntu Mono');
  textAlign(CENTER);
  
   fill (r,g,255);
  stroke(0); strokeWeight(2);
   textSize(40);
  text('under construction',textX,textY)
  textSize(12);
  text("feel free to look around but don't judge",textX, textY+20);
 

 if (textX > width-180 || textX < 180){
   moveX *= -1; r=random(150,200); g=random(150,100);
 }
  if (textY > windowHeight-25 || textY < 20){
   moveY *= -1;r=random(150,200); g=random(150,100);
 }
  

}
