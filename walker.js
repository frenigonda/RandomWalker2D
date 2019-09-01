function Walker() {

  this.finished = false;
  var step = 10;

  var i = createVector(step,0);
  var j = createVector(0,step);
  var _i = createVector(-step,0);
  var _j = createVector(0,-step);

  var velocities = [i.copy(),_i.copy(),j.copy(),_j.copy()];

  this.position = createVector(0, 0);
  this.path = [this.position.copy()];

  this.update = function () {
    var newPositions = [];
    for (var pos = 0; pos < 4; pos++) {
      var newPos = p5.Vector.add(this.position, velocities[pos]);
      newPositions.push(newPos);
    }
    var unacceptablePositions = [false, false, false, false];

    for (pos = newPositions.length-1; pos >= 0; pos--) {
      for (var p in this.path) {
        if (newPositions[pos].equals(this.path[p])) {
          unacceptablePositions[pos] = true;
        }
      }
    }

    for (pos = newPositions.length-1; pos >= 0; pos--) {
      if (unacceptablePositions[pos]) {
        newPositions.splice(pos,1);
      }
    }
    if (newPositions.length != 0) {
      this.position = random(newPositions).copy();
      this.path.push(this.position.copy());
    } else {
      this.finished = true;
    }
  }

  this.show = function() {
    colorMode(HSB);
    fill(frameCount%255, 255, 255, 255);
    noStroke();

    ellipse(this.position.x, this.position.y, 10, 10);
  }
}
