const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var bin1, bin2, bin3
var ground
function preload()
{

}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER)
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,40)
	bin1 = new Bin(1100, 650, 10, 100)
	bin2 = new Bin(995, 680, 200, 10)
	bin3 = new Bin(895, 650, 10, 100)
	ground = new Ground(width/2, 695, width, 10)
		Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
// Engine.update(engine); 
  
 //bin1.display();
  bin2.display();
 //bin3.display();
  ground.display();
  paper.display();
  drawSprites();
 }

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:75, y:-75})
// future class  
}
}