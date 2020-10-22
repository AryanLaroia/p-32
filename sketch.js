const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground1, ground2;
var block, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11;
var polygon;
var polygon_img;
var slingShot;
var score =0;
var hello;

function preload() {
  polygon_img = loadImage("hexa.png");
}


function setup() {
 var canvas = createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);

    ground = new Ground(400,350,800,20);
    ground1 = new Ground(370,270,150,20);
    ground2 = new Ground(650,150,150,20);
    block = new Block(370,250,40,40);
    block1 = new Block(330,250,40,40);
    block2 = new Block(410,250,40,40);
    block3 = new Block(350,210,40,40);
    block4 = new Block(390,210,40,40);
    block5 = new Block(370,170,40,40);
    block6 = new Block(650,130,40,40);
    block7 = new Block(610,130,40,40);
    block8 = new Block(690,130,40,40);
    block9 = new Block(630,110,40,40);
    block10 = new Block(670,110,40,40);
    block11 = new Block(650,60,40,40);
    slingShot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() {
  Engine.update(engine);
  background12();
  imageMode(CENTER);
  fill("red");
    textSize(20);
    noStroke();
  text("score:"+score,width-300,50);
  ground.display();
  ground1.display();
  ground2.display();
  block.display();
  block.score();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  image(polygon_img, polygon.position.x,polygon.position.y, 40,40);
  slingShot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
      
  }

}

async function background12(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();

  
 var time = responseJson.datetime.slice(11,13);
if(time> 6 && time< 18){
background("yellow");
}else{
  background("black");
}

}