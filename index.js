//pequeña animacion para incrementar el numero de gatos adoptados

const num = document.querySelector("#numero");

const numero = parseInt(num.innerText);

let i = 0;

const intervalo = setInterval(() => {
  num.innerText = i;
  i += 10;

  if (i > numero) {
    clearInterval(intervalo);
  }
}, 10);
