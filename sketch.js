function setup() {
  createCanvas(400, 400);
  sc = 0;
  textFont(f);
  r = [st, a, o, b];
  x1 = 180;
  y1 = 200;
  sy = 10;
  r0 = random(r);
}

function preload() {
  s = loadImage("s.png");
  s0 = loadImage("s0.png");
  f = loadFont("f.otf");
  b = loadImage("b.png");
  st = loadImage("st.png");
  a = loadImage("a.png");
  o = loadImage("o.png");
}

function draw() {
  background(220);
  textSize(30);
  fill("black");
  text("score : " + sc, 150, 40);
  image(r0, x1, y1, 50, 50);

  y1 -= sy;
  s1 = s;

  x = mouseX - 100;
  y = mouseY - 100;
  if (y1 <= 50) {
    sy = -sy;
  } else if (y1 >= random([430, 500, 600, 550])) {
    r0 = random(r);
    sy = -sy;
  }

  if (mouseIsPressed === true) {
    s1 = s0;

    if (r0 == b) {
      if (dist(x + 100, y + 100, x1, y1) <= 50) {
        sc -= 2;
        y1 = 500;
        sy = -sy;
      }
    } else if (r0 == st || r0 == o || r0 == a) {
      if (dist(x + 100, y + 100, x1, y1) <= 50) {
        sc += 1;
        y1 = 500;
        sy = -sy;
      }
    } else {
      sc += 0;
    }
  }
  image(s1, x, y, 200, 200);
}
