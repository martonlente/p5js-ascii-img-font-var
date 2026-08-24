let frameTargetValue;
let jumpToFrameBtn;
let jumpToFrameInput;
let jumpToFrameInputCurrent;

const updateJumpToFrameInputCurrent = function(p5jsFrameCount) {
  jumpToFrameInputCurrent.value = p5jsFrameCount;
}

const p5jsInitJumpToFrame = function(p, p5jsFrameCount) {
  updateJumpToFrameInputCurrent(p5jsFrameCount);

  if (jumpToFrameBtn.getAttribute('data-initialized') === 'true') return;

  const getFrameTargetValue = function() {
    return Number(jumpToFrameInput.value);
  };

  const setFrameCount = function(frameTargetValue) {
    p.frameCount = frameTargetValue - 1;
  }

  const jumpToFrameTarget = function() {
    frameTargetValue = getFrameTargetValue();

    if (p.isLooping()) {
      setFrameCount(frameTargetValue);
    } else {
      setFrameCount(frameTargetValue);

      p.loop();
      p.noLoop();
    }
  };

  jumpToFrameBtn.addEventListener('click', function(e) {
    e.preventDefault();

    jumpToFrameTarget();
  });

  jumpToFrameBtn.setAttribute('data-initialized', true);
}

const p5jsSetupJumpToFrame = function() {
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  const jumpToFrameForm = document.createElement('form');

  jumpToFrameBtn = document.createElement('button');
  jumpToFrameInput = document.createElement('input');
  jumpToFrameInputCurrent = document.createElement('input');

  jumpToFrameBtn.innerText = 'Jump to frame';

  jumpToFrameInput.id = 'js-p5js-util-jump-to-frame-target';
  jumpToFrameInput.type = 'number';
  jumpToFrameInput.value = 0;

  jumpToFrameInputCurrent.id = 'js-p5js-util-jump-to-frame-current';
  jumpToFrameInputCurrent.setAttribute('disabled', true);
  jumpToFrameInputCurrent.type = 'number';
  jumpToFrameInputCurrent.value = 0;

  jumpToFrameForm.appendChild(jumpToFrameBtn);
  jumpToFrameForm.appendChild(jumpToFrameInput);
  jumpToFrameForm.appendChild(jumpToFrameInputCurrent);

  helperP5jsUtils.appendChild(jumpToFrameForm);
}

export { p5jsInitJumpToFrame, p5jsSetupJumpToFrame };
