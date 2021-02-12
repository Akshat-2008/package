var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= helicopterSprite.x;
  packageSprite.y= packageBody.position.y 
  drawSprites();
  move();
  keypressed();
}

function move(){
if(keyCode === RIGHT_ARROW){
	helicopterSprite.velocityX = 2;
	 }

	 if(keyCode !== RIGHT_ARROW && keyCode !== LEFT_ARROW){
		 helicopterSprite.velocityX = 0;
	 }

	 if(keyCode === LEFT_ARROW){
		 helicopterSprite.velocityX = -2;
	 }
	}
function keypressed() {
 if (keyPressed("d")) {
	packageBody.velocityY = 2;
  }
}