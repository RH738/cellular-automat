function Cell(i, state) {
  if (state == undefined) {
    this.state = random(1) > 0.5 ? 1 : 0;
  } else {
    this.state = state;
  }
  this.x = i;
  this.evolve = function(leftN, rightN) {
    var n1 = !leftN.state ? 1 << 0 : 0;
    var n2 = !this.state ? 1 << 1 : 0;
    var n3 = !rightN.state ? 1 << 2 : 0;
    return ruleSet[n1 + n2 + n3];
  }
  this.show = function() {
    if (this.state == 1) {
      fill(255);
    } else {
      fill(0);
    }
    rect(this.x * cellSize, 0, cellSize, cellSize);
  }
}
