const prompt = require('prompt-sync')();

const notas = [7, 8.2, 5, 3.5, 9, 4.6];
for(let i=0; 1 < notas.length; i++) {
    notas[i] = notas[i] + 1;
}

console.log(notas);