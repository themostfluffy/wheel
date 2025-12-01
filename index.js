function setup() {
  createCanvas(400, 400);
}
background("black");

}
function draw() {
  fill("green");
  ellipse(randomNumber(0, 400), randomNumber(0, 400));
  fill("orange");
  ellipse(randomNumber(0, 400), randomNumber(0, 400));
}