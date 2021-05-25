var pikachu,charmander,squirtle;

function setup() {
  createCanvas(displayWidth-20,displayHeight-1);
  pikachu = createSprite(displayWidth/4-200,displayHeight/4+270,50,80);
}

function draw() {
  background(0);  
  drawSprites();
}
