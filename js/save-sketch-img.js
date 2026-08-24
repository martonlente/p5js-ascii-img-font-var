document.addEventListener('DOMContentLoaded', (event) => {
  const saveAppImgBtn = document.querySelector('.js-save-sketch-img');

  if (saveAppImgBtn) {
    saveAppImgBtn.addEventListener('click', saveAppImgAsPNG);
  }
});

function saveAppImgAsPNG() {
  saveCanvas('sketch-img', 'png');
}
