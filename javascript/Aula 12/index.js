const nome = "Gesiel Neves";

console.log("Nome: ", nome);
console.log("Tamanho do meu nome: " + nome.length);
console.log("Primeiro nome: ", nome.substring(0, 6));
console.log("Outro nome: ", nome.replace(/Gesiel/i, "Daniel")); //case insensitive
console.log("Maiusculo: ", nome.toUpperCase());
console.log("Minusculo: ", nome.toLowerCase());