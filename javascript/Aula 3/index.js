const prompt = require('prompt-sync')();

console.log("Opções de credenciais: ");
console.log("adm ");
console.log("fin ");
console.log("rh ");


// let credencial = prompt("Digite sua credencial: ");
// let acessoLiberado = credencial == "adm";
// console.log("Acesso liberado: ", acessoLiberado);

let credencial = prompt("Digite sua credencial: ");
let acessoLiberado = credencial != "rh";
console.log("Acesso liberado: ", acessoLiberado);