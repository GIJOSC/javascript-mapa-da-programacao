const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome? ');
let idade = prompt("Qual é a sua idade: ");
let contratado = false;


console.log("Dados da ficha: ")
console.log("====================================")
console.log("Nome do funcionário: ",nome);
console.log("Idade: ", idade);
console.log("Já foi contratado: ", contratado);