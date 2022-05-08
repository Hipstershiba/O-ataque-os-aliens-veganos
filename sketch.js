function setup() {
  createCanvas(400, 400);
  player = new Player(5)
  // player.position.x = 50
  rectMode(CENTER)
}

function draw() {
  background(220);
  square(width/2, height/2, player.position.x)
  player.positionDefiner(50)
}
