let togglePlayBtn;

const p5jsInitTogglePlay = function(p) {
  if (togglePlayBtn.getAttribute('data-initialized') === 'true') return;

  const togglePlay = function() {
    if (p.isLooping()) {
      p.noLoop();
    } else {
      p.loop();
    }
  }

  togglePlayBtn.addEventListener('click', function(e) {
    e.preventDefault();

    togglePlay();
  });

  togglePlayBtn.setAttribute('data-initialized', true);
}

const p5jsSetupTogglePlay = function() {
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  const togglePlayForm = document.createElement('form');

  togglePlayBtn = document.createElement('button');

  togglePlayBtn.innerText = 'Pause / Play';

  togglePlayForm.appendChild(togglePlayBtn);

  helperP5jsUtils.appendChild(togglePlayForm);
}

export { p5jsInitTogglePlay, p5jsSetupTogglePlay };
