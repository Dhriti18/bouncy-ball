const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ground,ball;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
engine=Engine.create();

world=engine.world;
var ground_options={
  isStatic:true
}



 ground=Bodies.rectangle(200,380,50,10,ground_options);
 World.add(world,ground);
 console.log(ground);
 var ball_options={
  restitution: 0.4

 }
 ball=Bodies.circle(200,100,40,ball_options);

 World.add(world,ball);




 console.log(ball);





}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,50);
 ellipseMode(CENTER);
 ellipse(ball.position.x,ball.position.y,40);

  drawSprites();
}