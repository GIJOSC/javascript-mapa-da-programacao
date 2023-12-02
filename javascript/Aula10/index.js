const prompt = require("prompt-sync")();

const notas = [7,8.2,5,3.5,9,4.6];

for (let i = 0; i< notas.length; i++) {
    notas[i] = notas[i] +1;
}

console.log(notas);

const nomes = [
    {
        nome: "Gesiel",
        sobrenome: "Neves",
    },
    {
        nome: "Daniel",
        sobrenome: "Luiz Martins Neves",
    },
];

for( let pessoa of nomes) {
    const nomeCompleto = pessoa.nome + " " + pessoa.sobrenome;
    console.log(nomeCompleto);
}