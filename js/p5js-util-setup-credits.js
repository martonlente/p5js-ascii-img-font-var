const p5jsSetupCredits = function() {
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  const credits = document.createElement('div');

  credits.classList.add('helper-p5js-utils-credits');
  credits.innerHTML = `University of Győr<br>
    Design Campus<br>
    Graphic design MA 1<br>
    Márton Lente, Győr 2026<br>
    <br>
    p5js-ascii-img-font-var v1.0.0-alpha.1<br>
    <a href="https://github.com/martonlente/p5js-ascii-img-font-var" target="_blank">Project on GitHub</a> – <a href="https://martonlente.com" target="_blank">martonlente.com</a>`;

  helperP5jsUtils.appendChild(credits);
}

export { p5jsSetupCredits };
