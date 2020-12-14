const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1; 
var paper1;
var dustbin1;

//function preload()
//{
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    ground1= new Ground(width/2, height-75, width,10);
    dustbin1= new dustbin(600,height-90,100,150)
    paper1= new Paper(100,height-90,70); 
    
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbin1.display();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

   Matter.Body.applyForce(paper1.body, paper1.body.position,{x:105,y:-105});
     
   }
 }

