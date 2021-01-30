
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1;
var p1;
var lb;
var rb;
var db;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
g1 = new Ground(800,600,1600,30);
p1 = new Paper(200,450,70);
db = new Dust (1300,570,250,30);
lb = new dd (1370,450,100,100);
rb = new Dust (1435,510,30,150);

	Engine.run(engine);
  




}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  

  p1.display();
g1.display();



//db.display();
lb.display();
//rb.display();


  drawSprites();
 
}

function keyPressed(){

if (keyCode===UP_ARROW){

Matter.Body.applyForce(p1.body,p1.body.position,{x:200,y:-200});



}



}

