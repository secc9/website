
// sketch A
// a random walk


let posX=0;
let posY=0;
let amt;
//let size = 900;
function setup(){
createCanvas(windowWidth, windowHeight);
frameRate(30);
background(255);

noLoop();
}


function draw(){

// get new postion by adding a random quantity to the current one

let nPosX = posX + random(-amt, amt);
let nPosY = posY + random(-amt, amt);


//draw a line with current properties and coordinates
noFill();
// line01
strokeWeight(random(0.1, random(2,4)));
stroke(random(0, 100), random(100, 200), random(155, 255));
line(posX, posY, nPosX, nPosY);
//line02
strokeWeight(random(0, 2));
stroke(255, random(200,255), random(200,255));
line(posX+random(0,10), posY+random(0,10), nPosX, nPosY);


//update current position
posX = nPosX;
posY = nPosY;

}


// click mouse to start drawing
function mousePressed(){
posX = mouseX;
posY= mouseY;
amt = random(4, 32);

// from now on use the loop - it will cause the program to call draw()

loop();
}