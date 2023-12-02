const prompt = require('prompt-sync')();

// let n1 = Number (prompt("Digite o 1 numero: "));
// let n2 = Number (prompt("Digite o 2 numero: "));

// console.log("Soma = ", n1 + n2);
// console.log("Subtração = ", n1 - n2);
// console.log("Multiplicação = ", n1 * n2);
// console.log("Divisão = ", n1 / n2);
// console.log("Módulo = ", n1 % n2);
// console.log("Exponenciação = ", n1 ** n2);


// console.log("===============================");

// let n3 = Number (prompt("Digite o 3 numero: "));

// console.log("Ação do decremento: ", n3--);
// console.log("Após o decremento: ", n3);
// console.log("Decremento imediato: ", --n3);

// console.log("===============================");

// console.log("Ação do incremento: ", n3++);
// console.log("Após o incremento: ", n3);
// console.log("Incremento imediato: ", ++n3);

// console.log("===============================");

// let n5 = Number (prompt("Digite o numero: "));

// console.log("Adição com 5", (n5 += 5));
// console.log("Divisão por 5", (n5 /= 5));
// console.log("Módulo por 5", (n5 %= 5));

// console.log("===============================");

let velocidade = Number(prompt("Digite sua velocidade em km/hora: "));
let horas = Number(prompt("Digite o tempo percorrido (em horas): "));
let distancia = velocidade * horas

console.log("Distância percorrida: ", + distancia + "km");