const frutas = ["maçã", "banana", "laranja", "uva"];

console.log("Usando forEach:");
frutas.forEach(function(fruta, indice, arr) {
	console.log(`Índice ${indice}: ${fruta} (do array: [${arr}])`);
});
// Saída:
// Índice 0: maçã (do array: [maçã,banana,laranja,uva])
// Índice 1: banana (do array: [maçã,banana,laranja,uva])
// Índice 2: laranja (do array: [maçã,banana,laranja,uva])
// Índice 3: uva (do array: [maçã,banana,laranja,uva])

// Com Arrow Function (mais conciso):
console.log("\nCom Arrow Function:");
frutas.forEach(fruta => console.log(fruta.toUpperCase()));
// Saída:
// MAÇÃ
// BANANA
// LARANJA
// UVA