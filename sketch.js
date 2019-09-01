var walker;


function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(0);

  walker = new Walker();
}

function draw() {
  // put drawing code here
  translate(width/2, height/2);
  if (!walker.finished) {
    walker.update();
    walker.show();
  }

}
