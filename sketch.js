var numberOfCells = 101;
var cellSize;
var rule = 30;
var ruleSet = [];
var levels = [];
var maxCells;

function setup() {
  fullscreen()
  createCanvas(400, 400, P2D);
  cellSize = floor((width - 1) / numberOfCells);
  for (var i = 0; i < 8; i++) {
    ruleSet[map(i, 0, 7, 7, 0)] = rule >> i & 1;
  }
  console.log(ruleSet);
  levels[0] = new Level(0);
  maxCells = floor(height / cellSize);
  frameRate(60)
}

function draw() {
  background(0, 0);
  for (var i = 0; i < levels.length; i++) {
    push();
    translate(0, i * cellSize);
    console.time('show function')
    levels[i].show();
    console.time('show function end')
    pop();
  }
  levels.push(levels[levels.length - 1].evolve());
  if(levels.length > maxCells){
    levels.splice(0, 1)
  }
}
