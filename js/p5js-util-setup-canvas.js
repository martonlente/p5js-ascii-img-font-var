const p5jsSetupCanvas = function (p, pxWidth, pxHeight, isWebGL = false) {
  let canvas;

  if (isWebGL) {
    canvas = p.createCanvas(pxWidth, pxHeight, p.WEBGL);
  } else {
    canvas = p.createCanvas(pxWidth, pxHeight);
  }

  canvas.parent(document.querySelector('.js-helper-p5js-sketch'));
}

export { p5jsSetupCanvas };
