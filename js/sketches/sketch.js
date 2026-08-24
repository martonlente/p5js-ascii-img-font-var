import { p5jsInitUtil, p5jsSetupUtil } from '../p5js-util-main.js';
import { p5jsSetupCanvas } from '../p5js-util-setup-canvas.js';

const bg = "hsl(0, 0%, 95%)";
const fg = bg;

const sketch = function(p) {
  // TODO: refactor check const declaration placement
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  p.setup = function() {
    p5jsSetupCanvas(p, 1080, 1080, true);
    p5jsSetupUtil();

    p.debugMode();
  };

  p.draw = function() {
    p.background(bg);
    p.directionalLight(255, 255, 255, 1, 1, 0);
    p.fill(fg);
    p.noStroke();

    p.push();
    p.rotateX(p.radians(-30));
    p.rotateY(p.radians(30));
    p.box(200);
    p.pop();

    p5jsInitUtil(p, p.frameCount);
  };
};

new p5(sketch);
