let mercuryAngle = 0;
let venusAngle = 0;
let earthAngle = 0;
let marsAngle = 0;
let jupitarAngle = 0;
let saturnAngle = 0;
let uranusAngle = 0;
let neptuneAngle = 0;
let plutoAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15);

  let screenX = width / 2;
  let screenY = height / 2;
  let ringColor = color(255);

  // Sun
  let sunColor = color(242, 161, 19);
  smooth();
  fill(sunColor);
  noStroke();
  circle(screenX, screenY, 100);

  // Ring
  let ringRadius = 100;
  noFill();
  stroke(ringColor);
  strokeWeight(4);
  circle(screenX, screenY, ringRadius * 2);

  // Mercury
  let mercuryColor = color(87, 85, 81);
  let mercuryX = screenX + ringRadius * cos(mercuryAngle);
  let mercuryY = screenY + ringRadius * sin(mercuryAngle);

  // Draw Mercury
  stroke(mercuryColor);
  fill(mercuryColor);
  circle(mercuryX, mercuryY, 20);

  //ring2
  let ringRadius2 = 130;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius2 * 2);

  //venus
  let venusColor = color(130, 108, 64);
  let venusX = screenX + ringRadius2 * cos(venusAngle);
  let venusY = screenY + ringRadius2 * sin(venusAngle);
  stroke(venusColor);
  fill(venusColor);
  circle(venusX, venusY, 20);

  //ring3
  let ringRadius3 = 160;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius3 * 2);

  //earth
  let earthColor = color(51, 76, 166);
  let earthX = screenX + ringRadius3 * cos(earthAngle);
  let earthY = screenY + ringRadius3 * sin(earthAngle);
  stroke(earthColor);
  fill(earthColor);
  circle(earthX, earthY, 20);

  //ring4
  let ringRadius4 = 190;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius4 * 2);

  //mars
  let marColor = color(163, 78, 39);
  stroke(marColor);
  fill(marColor);
  let marsX = screenX + ringRadius4 * cos(marsAngle);
  let marsY = screenY + ringRadius4 * sin(marsAngle);
  circle(marsX, marsY, 20);

  //ring5
  let ringRadius5 = 220;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius5 * 2);

  //jupitar
  let jupitarX = screenX + ringRadius5 * cos(jupitarAngle);
  let jupitarY = screenY + ringRadius5 * sin(jupitarAngle);
  let jupitarColor = color(161, 95, 34);
  noStroke();
  fill(jupitarColor);
  circle(jupitarX, jupitarY, 20);

  //ring6
  let ringRadius6 = 250;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius6 * 2);

  //saturn
  let saturnX = screenX + ringRadius6 * cos(saturnAngle);
  let saturnY = screenY + ringRadius6 * sin(saturnAngle);
  let saturnColor = color(130, 93, 23);
  noStroke();
  fill(saturnColor);
  circle(saturnX, saturnY, 20);

  //ring7
  let ringRadius7 = 280;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius7 * 2);

  //uranus
  let uranusColor = color(23, 91, 130);
  let uranusX = screenX + ringRadius7 * cos(uranusAngle);
  let uranusY = screenY + ringRadius7 * sin(uranusAngle);
  noStroke();
  fill(uranusColor);
  circle(uranusX, uranusY, 20);

  //ring8
  let ringRadius8 = 310;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius8 * 2);

  //neptune
  let neptuneX = screenX + ringRadius8 * cos(neptuneAngle);
  let neptuneY = screenY + ringRadius8 * sin(neptuneAngle);
  let neptuneColor = color(35, 84, 176);
  noStroke();
  fill(neptuneColor);
  circle(neptuneX, neptuneY, 20);

  //ring9
  let ringRadius9 = 340;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius9 * 2);

  //pluto
  let plutoX = screenX + ringRadius9 * cos(plutoAngle);
  let plutoY = screenY + ringRadius9 * sin(plutoAngle);
  let plutoColor = color(26, 165, 196);
  noStroke();
  fill(plutoColor);
  circle(plutoX, plutoY, 20);

  //plante Angles
  mercuryAngle += 0.029;
  venusAngle += 0.016;
  earthAngle += 0.019;
  marsAngle += 0.0114;
  jupitarAngle += 0.0112;
  saturnAngle += 0.012;
  uranusAngle += 0.012;
  neptuneAngle += 0.013;
  plutoAngle += 0.012;
}
