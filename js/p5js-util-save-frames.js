let frameEndValue;
let frameStartValue;
let isSaving;
let saveFrameBtn;
let saveFramesBtn;
let saveFramesInputEnd;
let saveFramesInputFilename;
let saveFramesInputStart;

const getFileName = function() {
  return saveFramesInputFilename.value;
}

// TODO: refactor consider renaming function
const saveFramesAsPNG = function() {
  frameEndValue = saveFramesInputEnd.value;
  frameStartValue = saveFramesInputStart.value;
  isSaving = true;
}

const p5jsInitSaveFrames = function(p, p5jsFrameCount) {
  if (frameStartValue <= p5jsFrameCount && frameEndValue >= p5jsFrameCount && isSaving) {
    const fileName = getFileName();

    p.saveCanvas(`${fileName}-${p5jsFrameCount}`, 'png');
  } else if (frameEndValue < p5jsFrameCount && isSaving) {
    isSaving = false;
  }

  if (saveFrameBtn.getAttribute('data-initialized') === 'true') return;

  saveFrameBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // TODO: refactor consider moving to function named
    const fileName = getFileName();

    p.saveCanvas(`${fileName}`, 'png');
  });

  saveFramesBtn.addEventListener('click', function(e) {
    e.preventDefault();

    saveFramesAsPNG();
  });

  isSaving = false;

  saveFrameBtn.setAttribute('data-initialized', true);
};

const p5jsSetupSaveFrames = function() {
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  const saveFramesForm = document.createElement('form');

  saveFrameBtn = document.createElement('button');
  saveFramesBtn = document.createElement('button');
  saveFramesInputEnd = document.createElement('input');
  saveFramesInputFilename = document.createElement('input');
  saveFramesInputStart = document.createElement('input');

  saveFrameBtn.innerText = 'Save image';
  saveFramesBtn.innerText = 'Save image sequence';

  saveFramesInputFilename.id = 'js-p5js-util-save-frames-filename';
  saveFramesInputFilename.type = 'text';
  saveFramesInputFilename.value = 'frame';

  saveFramesInputEnd.id = 'js-p5js-util-save-frames-end';
  saveFramesInputEnd.type = 'number';
  saveFramesInputEnd.value = 60;

  saveFramesInputStart.id = 'js-p5js-util-save-frames-start';
  saveFramesInputStart.type = 'number';
  saveFramesInputStart.value = 0;

  saveFramesForm.appendChild(saveFrameBtn);
  saveFramesForm.appendChild(saveFramesBtn);
  saveFramesForm.appendChild(saveFramesInputFilename);
  saveFramesForm.appendChild(saveFramesInputStart);
  saveFramesForm.appendChild(saveFramesInputEnd);

  helperP5jsUtils.appendChild(saveFramesForm);
}

export { p5jsInitSaveFrames, p5jsSetupSaveFrames };
