const prompt = require("prompt-sync")();

const alunos = [
    {
        nome: "Gesiel",
        sobrenome: "Neves",
        nota: 7,
    },
    {
        nome: "Daniel",
        sobrenome: "Neves",
        nota: 8,
    },
    {
        nome: "Emanuela",
        sobrenome: "Neves",
        nota: 9,
    },
];

// const novosAlunos = alunos.map(function (item) {
//    return {
//        ...item, // copia todas as propriedades do item para o novo objeto
//      nomeCompleto: item.nome + " " + item.sobrenome,
//     }


 const novosAlunos = alunos.filter(function (item) {
     return item.nota >= 8;
 });

const somaNotas = alunos.reduce(function (total,item) {
    return total + item.nota;
}, 0);

console.log(novosAlunos);
console.log("A soma de todas as notas dos alunos é " + somaNotas);