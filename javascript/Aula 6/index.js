const prompt = require('prompt-sync')();

function calculaMedia(n1,n2) {
    let resultado = (n1 + n2) / 2;
     return  resultado;
}

let primeiroNumero = Number(prompt("Digite o primeiro número: "));
let segundoNumero = Number(prompt("Digite o segundo numero: "));

let resultadoMedia = calculaMedia(primeiroNumero, segundoNumero);
console.log("Resultado da média: ", resultadoMedia);