//источники вдохновения: страх, тревога, изоляция

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  strokeWeight(10);
  angleMode(DEGREES);
  drawPattern();
}

function draw() {
  DrawRect(20,20,60,60);
  DrawRect(20,310,60,60);
  DrawRect(310,20,60,60);
}

function drawPattern(){
  let x = 0
  while (x < 100) {
    push();
    stroke(255,0,0);
    rect(int(random(1, 19))*20, int(random(1, 19))*20, 10, 10);
    push();
    stroke(0);
    rect(int(random(1, 19))*20, int(random(1, 19))*20, 10, 10);
    pop();
    pop();
    x = x + 1;
  }
}

function DrawRect( cx, cy, d) {
  push();
  rect(cx, cy, d, d)
  fill(0);
  noStroke();
  rect(cx+15, cy+15, 30, 30);
  pop();
  push();
  strokeWeight(2);
  fill(255);
  ellipse(cx+30, cy+30, 23, 23);
  ellipse(cx+26, cy+29, 3, 3);
  ellipse(cx+34, cy+29, 3, 3);
  arc(cx+30, cy+36, 7, 5, -180, 0);
  pop();
}
 

 
  
  
 
 
 
  

