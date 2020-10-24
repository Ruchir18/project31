
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


particles = []
function preload(){

}

function setup() {
  createCanvas(480,600);
 
  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  
ground = new Ground(240,595,480,10);
side1 = new Ground(475,300,10,600);
side2 = new Ground(5,300,10,600);
pko1 = new Plinko(50,50,10);
pko2 = new Plinko(20,120,10);
pko3 = new Plinko(80,190,10);
pko4 = new Plinko(50,260,10);
pko5 = new Plinko(20,340,10);
//pko6 = new Plinko(50,410,10);

pko7 = new Plinko(120,50,10);
pko8 = new Plinko(90,120,10);
pko9 = new Plinko(150,190,10);
pko10 = new Plinko(120,260,10);
pko11 = new Plinko(90,340,10);

pko13 = new Plinko(190,50,10);
pko14 = new Plinko(160,120,10);
pko15 = new Plinko(220,190,10);
pko16 = new Plinko(190,260,10);
pko17 = new Plinko(160,340,10);
pko18 = new Plinko(190,410,10);

pko19 = new Plinko(260,50,10);
pko20 = new Plinko(230,120,10);
pko21 = new Plinko(290,190,10);
pko22 = new Plinko(260,260,10);
pko23 = new Plinko(230,340,10);

pko25 = new Plinko(330,50,10);
pko26 = new Plinko(300,120,10);
pko27 = new Plinko(360,190,10);
pko28 = new Plinko(330,260,10);
pko29 = new Plinko(300,340,10);
pko30 = new Plinko(410,410,10);

pko31 = new Plinko(400,50,10);
pko32 = new Plinko(370,120,10);
pko33 = new Plinko(430,190,10);
pko34 = new Plinko(400,260,10);
pko35 = new Plinko(370,340,10);

divi1 = new Division(96,505,10,190);
divi2 = new Division(192,505,10,190);
divi3 = new Division(288,505,10,190);
divi4 = new Division(384,505,10,190);
//divi5 = new Division(480,505,10,190);
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  if(frameCount%60===0){
particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
for(var j = 0; j < particles.length; j++){

  particles[j].display();
}

  ground.display()
  side1.display()
  side2.display()
  pko1.display()
  pko2.display()
  pko3.display()
  pko4.display()
  pko5.display()
 // pko6.display()

  pko9.display()
  pko10.display()
  pko11.display()
  pko13.display()
  pko14.display()

  pko15.display()
  pko16.display()
  pko17.display()
 // pko18.display()
  pko7.display()
  pko8.display()

  pko19.display()
  pko20.display()
  pko21.display()
  pko22.display()
  pko23.display()

  pko25.display()
  pko26.display()
  pko27.display()
  pko28.display()
  pko29.display()
  //pko30.display()

  pko31.display()
  pko32.display()
  pko33.display()
  pko34.display()
  pko35.display()

  divi1.display()
  divi2.display()
  divi3.display()
  divi4.display()
 // divi1.display()
  drawSprites();
}