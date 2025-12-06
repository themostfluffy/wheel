function setup() {
  createCanvas(1500, 715);
}

function draw() {
  background(0, 0, 0);
  fill(200, 200, 200);
  noStroke(0, 0, 0);
  ellipse(width / 2, height / 2, 400, 400);
  fill(0, 0, 0);
}
function mousePressed() {
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < 200) {
    let games = [
        "subnautica",
        "subnautica below zero",
        "project zomboid",
        "the forest",
        "stranded deep",
        "rimworld",

    ];
    let randomIndex = floor(random(games.length));
    let selectedGame = games[randomIndex];
    alert("You should play: " + selectedGame);
  } else {
    alert("Click the button you idiot!");
  }
}
