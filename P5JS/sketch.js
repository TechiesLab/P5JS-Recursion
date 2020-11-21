function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  noFill();
  strokeWeight(4);
  dessinerCercle(300, 200, 300);
}
function dessinerCercle(positionX, positionY, taille) {
  circle(positionX, positionY, taille);
  if (taille > 1) {
    dessinerCercle(positionX - taille / 2, positionY, taille * 0.5);
    dessinerCercle(positionX + taille / 2, positionY, taille * 0.5);
  }
}
