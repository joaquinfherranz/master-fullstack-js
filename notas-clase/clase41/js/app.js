// const worker = new Worker('js/worker.js');

// worker.addEventListener('message', evento => {
//   console.log('El worker dice ', evento.data);
//   //worker.terminate();
// }, false);

// worker.postMessage('ping');

const blob = new Blob([document.querySelector('#worker').textContent], { type: "text/javascript" });
const worker = new Worker(window.URL.createObjectURL(blob));

worker.addEventListener('message', evento => {
  console.log('El worker dice ', evento.data);
  //worker.terminate();
}, false);

worker.postMessage('ping');