const prompt = require('prompt-sync')();

// const alunos = ["João", "Lucas", "Ana", "Marcos", "Helena"];
// console.log(alunos);

const alunos = new Array();

for (let i = 0; i < 5; i++) {
    let novoAluno = new Object();
    novoAluno.nome = prompt("Digite o nome do aluno: ");
    novoAluno.nota = prompt("Digite a nota do aluno: ");
    alunos[i] = novoAluno;
}

console.log("Listagem final de alunos: ", alunos);
console.log("Quantidade total de alunos: ", alunos.length);
console.log("Último aluno: ", alunos[alunos.length - 1]);