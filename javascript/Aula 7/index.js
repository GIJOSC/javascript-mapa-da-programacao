const prompt = require('prompt-sync')();

const funcionario = new Object();
funcionario.nome = prompt("Digite o nome do funcionário: ");
funcionario.idade = prompt("Digite a idade do funcionário: ");
funcionario.cargo = prompt("Digite o cargo do funcionário: ");
funcionario.salario = prompt("Digite o salario do funcionário: ");

const { nome, idade, cargo, salario } = funcionario;

console.log("===========================================");
console.log("Dados do funcionário: ");
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Cargo: ", cargo);
console.log("Salário: ", salario);
console.log("===========================================");