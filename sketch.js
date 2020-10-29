// gaving name spaceing. Engine it's like universe. World is like earth. Bodies are like living and non-living bodies on the earth.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// name of our engine
var engine1;
// name of our world
var world1;

var box1,box2,ground,ground2;

function setup() {
  createCanvas(800,400);
engine1 = Engine.create(); // creating engine1 (universe)
world1 = engine1.world; // creating world1 inside engine1 (Earth)
box1 = new Box(200,300,50,50,"blue");
box2 = new Box(240,100,50,50,"red");
ground = new Ground(200,400,400,20);
ground2 = new Ground(200,0,400,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine1); // starting engine 

  box1.display();
  box2.display();
  ground.display();
  ground2.display();

  drawSprites();
}