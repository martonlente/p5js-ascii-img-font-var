const getQueryParam = function(param) {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param);
}

const loadJsModule = function() {
  const jsModule = getQueryParam('js');
  const script = document.createElement('script');

  let scriptSrc;

  script.setAttribute('type', 'module');

  // If a query parameter 'js' is provided, load the corresponding script
  if (jsModule) {
    scriptSrc = `js/sketches/${jsModule}`;
  } else {
    scriptSrc = 'js/sketches/sketch.js';
  }

  script.src = scriptSrc;

  document.body.appendChild(script);
}

loadJsModule();
