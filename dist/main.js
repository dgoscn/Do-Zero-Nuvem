"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
console.log('n-fatorial');
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
/*
console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

process.on('exit', () => {
  console.log('script está prestes a terminar')
})
*/
//Encontrando os caminhos que o node procurará quando usamos um require para um número
//console.log(module.paths)
//# sourceMappingURL=main.js.map