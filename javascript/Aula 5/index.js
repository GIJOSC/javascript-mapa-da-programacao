const prompt = require('prompt-sync')();

// let nomeJogador = prompt("Digite o nome do jogador: ");
// if (nomeJogador == "neymar") {
//     console.log("É o melhor jogador");
// } else {
//     console.log("Bom Jogador");
// }

let notaExatas = Number(prompt("Digite sua nota de exatas: "));
let notaHumanas = Number(prompt("Digite sua nota de humanas: "));
let notaRedacao = Number(prompt("Digite sua nota da redação: "));

let media = (notaExatas + notaHumanas + notaRedacao) / 3;
console.log("Média: ",media);

if(media >= 650) {
    console.log("Boas chances de aprovação")
} else {
    console.log("Aprovação mais dificil");
}