// TODO: refactor check if changing to p5js methods DOM is needed

import { p5jsInitJumpToFrame, p5jsSetupJumpToFrame } from './p5js-util-jump-to-frame.js';
import { p5jsInitSaveFrames, p5jsSetupSaveFrames } from './p5js-util-save-frames.js';
import { p5jsInitTogglePlay, p5jsSetupTogglePlay } from './p5js-util-toggle-play.js';
import { p5jsSetupCredits } from './p5js-util-setup-credits.js';

const p5jsInitUtil = function(p, frameCount) {
  p5jsInitTogglePlay(p);
  p5jsInitJumpToFrame(p, frameCount);
  p5jsInitSaveFrames(p, frameCount);
};

const p5jsSetupUtil = function() {
  p5jsSetupTogglePlay();
  p5jsSetupJumpToFrame();
  p5jsSetupSaveFrames();
  p5jsSetupCredits();
};

export { p5jsInitUtil, p5jsSetupUtil };
