var count = 0
var rabbit
var gamestate = 0
function preload(){
  seed1Img = loadImage("seed.png")
  sproutImg = loadImage("sprout.png")
  plant1Img = loadImage("plant.gif")
  seed2Img = loadImage("seed2.png")
  sprout2Img = loadImage("sprout2.png")
  plant2Img = loadImage("plant2.png")
  seed3Img = loadImage("seed3.png")
  sprout3Img = loadImage("sprout3.png")
  plant3Img = loadImage("plant3.png")
  rabbitImg = loadImage("rabbit.png")
}

function setup() {
  createCanvas(800,400);
  seed1 = createSprite(400, 200, 50, 50);
  seed1.addImage("seed",seed1Img)
  seed1.addImage("sprout",sproutImg)
  seed1.addImage("plant1",plant1Img)
  seed1.scale = 0.01

  seed2 = createSprite(600, 200, 50, 50);
  seed2.addImage("seed2",seed2Img)
  seed2.addImage("sprout2",sprout2Img)
  seed2.addImage("plant2",plant2Img)
  seed2.scale = 0.02
  
  seed3 = createSprite(200, 200, 50, 50);
  seed3.addImage("seed3",seed3Img)
  seed3.addImage("sprout3",sprout3Img)
  seed3.addImage("plant3",plant3Img)
  seed3.scale = 0.1

  ground = createSprite(400,310,800,200)
  ground.shapeColor = "#8B4513"

  btn = createButton("Click to Grow")
  btn.position(30,30)
  btn.mousePressed(function(){
    count += 1 
  })

  btn2 = createButton("Click to Stop Animal")
  btn2.position(25,60)
  btn2.mousePressed(function(){
    rabbit.velocityX = -1
  })
}

function draw() {
  background("lightblue"); 
   if(count === 1){
     seed1.changeImage("sprout")
     seed1.scale = 0.2
     seed1.y = 170
   }
   if(count === 2){
    seed1.changeImage("plant1")
    seed1.y = 170
  }
  if(count === 3){
    seed2.changeImage("sprout2")
    seed2.y = 170
    seed2.scale = 0.4
  }
  if(count === 4){
    seed2.changeImage("plant2")
    seed2.y = 170
  }
  if(count === 5){
    seed3.changeImage("sprout3")
    seed3.y = 170
    seed3.scale = 0.4
  }
  if(count === 6){
    seed3.changeImage("plant3")
    seed3.y = 170
    seed3.scale = 0.25
  }
  if(gamestate===0&& count===6){
    animals()
    gamestate =1
  }
if(rabbit !==undefined){
    if(rabbit.x<-20 && gamestate===1){
      rabbit.destroy()
      gamestate = 1
  }
}

  drawSprites();
}

function animals(){
    rabbit = createSprite(0,160)
    rabbit.addImage(rabbitImg)
    rabbit.scale = 0.2
    rabbit.velocityX = 1
}