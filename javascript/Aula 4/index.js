const prompt = require('prompt-sync')();

// altura tem que ser > 120 e < 180
// e peso > 60 < 80

let altura = prompt("Digite sua altura: ");
let peso = prompt("Digite o seu peso: ");
let condicaoAltura = altura >= 120 && altura  <= 180;
let condicaoPeso = peso >= 60 && peso <= 80;

console.log("Pode ser piloto da F1: ", condicaoAltura && condicaoPeso);