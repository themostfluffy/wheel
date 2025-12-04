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
        "Stardew Valley",
        "slime rancher",
        "slime rancher 2",
        "potion craft",
        "minecraft",
        "terraria",
        "farming simulator 2022",
    ];
    let randomIndex = floor(random(games.length));
    let selectedGame = games[randomIndex];
    alert("You should play: " + selectedGame);
  } else {
    alert("click the button you dummy");
  }
}
