var hr;
var mn;
var sc;



function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("grey");
  
  translate(200,200)
  rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
   scAngle=map(sc,0,60,0,360);
   mnAngle=map(mn,0,60,0,360);
   hrAngle=map(hr % 12,0,12,0,360);
   drawSprites();
   
   push();
   rotate(scAngle);
   stroke(25,67,90);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   push();
   rotate(mnAngle);
   stroke(255,867,0);
   strokeWeight(7);
   line(0,0,75,0);
   pop();

   push();
   rotate(hrAngle);
   stroke(255,11,543);
   strokeWeight(7);
   line(0,0,50,0);
   pop();

   strokeWeight(8);
   noFill();

   stroke(255,11,543);
   arc(0,0,300,300,0,scAngle)
   
   stroke(255,867,0);
   arc(0,0,280,280,0,mnAngle)
   
   stroke(25,67,90);
   arc(0,0,260,260,0,hrAngle)
   




}