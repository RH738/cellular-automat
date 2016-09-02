function Level(tier, cells) {
  this.tier = tier;

  if (cells) {
    this.cells = cells;
  } else {
    this.cells = [];
    for (var i = 0; i < numberOfCells; i++) {
      this.cells[i] = new Cell(i, i == floor(numberOfCells / 2) ? 1 : 0);
    }
  }

  this.show = function() {
    for (var i = 0; i < numberOfCells; i++) {
      this.cells[i].show();
    }
  }

  this.evolve = function() {
    var newCells = [];
    for (var i = 0; i < numberOfCells; i++) {
      var left, right;
      if (i == 0) {
        left = numberOfCells - 1;
        right = i + 1;
      } else if (i == numberOfCells - 1) {
        left = i - 1;
        right = 0;
      } else {
        left = i - 1;
        right = i + 1;
      }

      newCells[i] = new Cell(i,
        this.cells[i].evolve(this.cells[left], this.cells[right]));
    }
    return new Level(this.tier + 1, newCells)
  }
}
