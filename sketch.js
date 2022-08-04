var screen = 0;
var bimg,bimg1,bimg2,bimg3;
var speed = 2;
var score = 0;
var y = -20,x=200;
function preload(){
bimg = loadImage("n.png");
bimg1 = loadImage("b2.png")
bimg2 = loadImage("b311.png")
bimg3 = loadImage("Gameon.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);

}

function draw(){
background(bimg);
if(screen == 0){
    startScreen();
} else if(screen == 1){
    gameOn();
} else if(screen == 2){
    gameEnd();
}
}


function startScreen(){
background(bimg1)
fill("black")
textAlign(CENTER);
textSize(50);
text("Catch Me If You Can!!!", width/2,height/3);
textSize(60);
text("click to start", width/2,height/3+50);
reset();
}

function gameOn(){
background(bimg3)
rectMode(CENTER);
rect(mouseX,height-20,100,30);
ellipse(x,y,30,30);
fill("blue");
textSize(40);
text("Score = "+score,80,30);
y += speed ;
if(y>height){
    screen = 2;
}
if(y>height-20 && x>mouseX-20 && x<mouseX+30 ){
y=-20;
speed+=.5;
score+=1;
}
if(y==-20 ){
    pickRandom();
}
}

function gameEnd(){
background(bimg2);
fill("orange")
textAlign(CENTER);
textSize(40);
//text("GAME OVER",width/2,height/2);
text("SCORE :"+score,width/2,height/2+220);
fill("yellow")
text("Click to restart",width/2,height/2+260);
}

function mousePressed(){
    if(screen==0){
  screen = 1
    }
    else if(screen == 2){
  screen = 0
    }
}


function pickRandom(){
    x = random(20,width-20);
}
function reset(){
    score=0;
    speed=2;
    y= -20;
}