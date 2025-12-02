function setup() {
  createCanvas(1500, 715);
}

function draw() {
  background("#87CEEB");
  fill(200,200,200);
  noStroke(0,0,0);
  ellipse(width / 2, height / 2, 100, 100);
  fill(0,0,0);
  
}
function mousePressed() {
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < 50) {
    let games = [
      "The Binding of Isaac",
      "Enter the Gungeon",
      "Dead Cells",
      "Hades",
      "Slay the Spire",
      "risk of Rain 2",
      "risk of Rain",
      
    ];
    let randomIndex = floor(random(games.length));
    let selectedGame = games[randomIndex];
    alert("You should play: " + selectedGame);
  } else {
    alert("Click on the wheel to get a game suggestion!");
  }
}