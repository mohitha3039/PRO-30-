const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world,ground;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon,polygon_img;
var slingShot,block1,block2,block3,block4,block5,block6,block7;
var ground3;

function preload()
{
    polygon_img = loadImage('polygon.png');
}
function setup()
{
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(435,265,200,20);
  ground2 = new Ground(830,200,180,20);
  ground3 = new Ground(600,380,2000,20);

  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block17 = new Box(480,235,30,40);
  block18 = new Box(510,235,30,40);
  block1 = new Box(890,160,30,40);
  block2 = new Box(860,160,30,40);
  block3 = new Box(830,160,30,40);
  block4 = new Box(800,160,30,40);
  block5 = new Box(770,160,30,40);

  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block20 = new Box(450,195,30,40);
  block21 = new Box(480,195,30,40);
  block6 = new Box(860,120,30,40);
  block7 = new Box(830,120,30,40);
  block22 = new Box(800,120,30,40);
  
  block16 = new Box(420,155,30,40);
  block19 = new Box(450,155,30,40);
  block23 = new Box(830,80,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:150,y:250});
  Engine.run(engine);
}
function draw()
{
  background("purple");
  Engine.update(engine);
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  textSize(25);
  stroke("Fuchsia");
  fill("Fuchsia");
  text("Drag the Hexagonal Stone and Release it, to Launch towards the blocks.",200,30);
  textSize (20)
  stroke ("lightblue")
  fill ("lightblue")
  text ("By Mohitha",550,55)
  ground1.display();
  ground2.display();
  block9.display();
  block10.display();
  block11.display();
  ground3.display();
  block12.display();
  block22.display();
  block23.display();
  block14.display();
  block15.display();
  block16.display();
  block4.display();
  block5.display();
  block7.display();
  block6.display();
  block17.display(); 
  block18.display(); 
  block20.display();
  block19.display();
  block2.display();
  block3.display();
  block21.display();
  block1.display();
  slingShot.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingShot.fly();
}
function keyPressed (){

  if(keyCode === 32){

    slingShot.attach(this.polygon);
  }
}