var ball;
var ground;
var dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	



}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,580,800,20);
  paper = new Paper(100, 500, 10);
  leftSide = new Dustbin(550, 520, 20, 100);
  bottom = new Dustbin(610, 560, 100, 20);
  rightSide = new Dustbin(670, 520, 20, 100);
  
  var ball_options={
   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2

   }

	Engine.run(engine);
  
  ball = Bodies.circle(400,300,20,ball_options);
  World.add(world,ball);


}


function draw() {
  rectMode(CENTER);
  background(0);
  
 Engine.update(engine);

 ground.display();
 paper.display();
 leftSide.display();
 bottom.display();
 rightSide.display();
 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:8, y: -8})
  }
}


