const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisions = [];
var divisionHeight = 300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(600,600);
  // createSprite(400, 200, 50, 50);
  ground1 = new Ground(300,580,600,10);
  bar1 = new Bar(20,150,10,50);
  for (var k = 0; k<=width; k = k + 80){
    divisions.push(new Bar (k, height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
  Engine.update(engine); 
  background("black"); 
  ground1.display(); 
  drawSprites();
  for (var i = 0; i<divisions.length;i++){
    divisions[i].display();
  }
  bar1.display();
}