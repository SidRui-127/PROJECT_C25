var Trashcan,ground,paper,paperObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,672.5,width,50);

	Trashcan = new TrashCan(1010,635,200,20);

	paper = new Paper(width/8,650,135,135);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");	

	Engine.update(engine);

  paper.display();
  ground.display();
  Trashcan.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1000});
	}
}

