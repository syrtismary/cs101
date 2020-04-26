//источники вдохновения: панические атаки и https://www.youtube.com/watch?v=v8p8IDkD-fc

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ost.setVolume(0.5);
  ost.play();
}

function preload() {
  soundFormats('mp3', 'ogg');
  ost = loadSound('scream.mp3');
}


let frame = -300;

function draw() {
  background(255);
  DrawRect(170,170,60,60)
  translate(width/2, height/2);
//  frameRate(30);

  let x = 0
  while (x < 100) {
    drLine(frame);
    rotate(3.6);
    x = x + 1;
  }
  frame = frame + 1;
}

function drLine(stX){
  rectMode(CENTER);
  fill(255,0,0);
  rect(50, int(random(1, 19))*20, 10, 10);
  line(stX,0, stX,400);
}

function DrawRect( cx, cy, d) {rectMode(CORNER);
  push();
  fill(255);
  strokeWeight(10);
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
  arc(cx+30, cy+36, 7, 5, 0, 0);
  pop();
}