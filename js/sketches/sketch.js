import { p5jsInitUtil, p5jsSetupUtil } from '../p5js-util-main.js';
import { p5jsSetupCanvas } from '../p5js-util-setup-canvas.js';

const sketch = function(p) {
  const colourWhite = "#fff";
  const colourBlack = "#000";

  let bg;
  let charsInput;
  let fg;
  let font;
  let fw;
  let fwMax;
  let fwMin;
  let hasFontVariable;
  let img;
  let imgInput;
  let imgResized;
  let inputGroupCheckboxes;
  let isBgTransparent;
  let isColourInverted;
  let tilesInput;
  let tilesXVal;
  let tilesYVal;
  let tileWidth, tileHeight;

  p.setup = async function() {
    img = await p.loadImage("data/img-portrait.jpg");
    font = await p.loadFont("data/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf");

    // Set variable defaults
    bg = colourWhite;
    fg = colourBlack;
    fwMax = 1000;
    fwMin = 300;

    p5jsSetupCanvas(p, 1024, 1024);
    p5jsSetupUtil();

    const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

    // TODO: add p5js input labels
    // TODO: consider renaming vars input
    charsInput = p.createInput("//\\\\");
    hasFontVariable = p.createCheckbox('Betűtípus változó', true);
    isBgTransparent = p.createCheckbox('Háttér átlátszó', false);
    isColourInverted = p.createCheckbox('Színek fordított', true);
    tilesInput = p.createInput("64", "number");

    inputGroupCheckboxes = p.createDiv();
    inputGroupCheckboxes.addClass('input-group');

    const resizeImg = function() {
      // Assign img copy to imgResized
      imgResized = img.get();
      imgResized.resize(tilesInput.value(), tilesInput.value());
    }

    // Reference: https://p5js.org/reference/p5/createFileInput/
    const handleImg = function(file) {
      if (file.type === 'image') {
        // Load img selected as a p5.Image
        p.loadImage(file.data, function(imgLoaded) {
          img = imgLoaded;

          resizeImg();
        });
      } else {
        img = null;
      }
    }

    // TODO: check js function call ordering
    const handleTiles = function() {
      resizeImg();
    }

    imgInput = p.createFileInput(handleImg);
    tilesInput.changed(handleTiles);

    inputGroupCheckboxes.child(hasFontVariable);
    inputGroupCheckboxes.child(isBgTransparent);
    inputGroupCheckboxes.child(isColourInverted);

    helperP5jsUtils.appendChild(charsInput.elt);
    helperP5jsUtils.appendChild(inputGroupCheckboxes.elt);
    helperP5jsUtils.appendChild(tilesInput.elt);
    helperP5jsUtils.appendChild(imgInput.elt);

    resizeImg();

    tileHeight = p.height / tilesYVal;
    tileWidth = p.width / tilesXVal;

    p.textAlign(p.CENTER, p.CENTER);
    p.textFont(font);
    p.textSize(12);
  }

  p.draw = function() {
    const charsInputVal = charsInput.value();

    tilesXVal = tilesInput.value();
    tilesYVal = tilesXVal;

    tileHeight = p.height / tilesYVal;
    tileWidth = p.width / tilesXVal;

    if (isColourInverted.checked()) {
      bg = colourBlack;
      fg = colourWhite;
    } else {
      bg = colourWhite;
      fg = colourBlack;
    }

    if (isBgTransparent.checked()) {
      p.clear();
    } else {
      p.background(bg);
    }

    p.noStroke();

    p.translate(tileWidth / 2, tileHeight / 2);

    for (let x = 0; x < tilesXVal; x++) {
      for (let y = 0; y < tilesYVal; y++) {
        const colour = imgResized.get(x, y);
        const brightnessV = p.brightness(colour);

        // TODO: fix font weight visibility
        fw = p.map(brightnessV, 0, 100, fwMin, fwMax);

        const selector = p.int(p.map(brightnessV, 0, 100, 0, charsInputVal.length) - 1);

        p.fill(fg);

        if (hasFontVariable.checked()) {
          p.textWeight(fw);
        }

        p.push();
        p.translate(x * tileWidth, y * tileHeight);
        p.text(charsInputVal.charAt(selector), 0, 0);
        p.pop();

        p5jsInitUtil(p, p.frameCount);
      }
    }
  }
}

new p5(sketch);
