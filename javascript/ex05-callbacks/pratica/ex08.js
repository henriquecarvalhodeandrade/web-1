const valores = [10, 20, 30, 40, 50];

const somaTotal = valores.reduce(function(acumulador, valorAtual) {
	console.log(`Acumulador: ${acumulador}, Valor Atual: ${valorAtual}`);
	return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador
console.log("Soma total (reduce):", somaTotal); // Saída: 150
// Log interno:
// Acumulador: 0, Valor Atual: 10
// Acumulador: 10, Valor Atual: 20
// Acumulador: 30, Valor Atual: 30
// Acumulador: 60, Valor Atual: 40
// Acumulador: 100, Valor Atual: 50

// Concatenando strings de um array de objetos
const pessoas = [{ nome: "Alice" }, { nome: "Bob" }, { nome: "Charlie" }];
const listaNomes = pessoas.reduce((strAcumulada, pessoaAtual, indice) => {
  	return strAcumulada + (indice > 0 ? ", " : "") + pessoaAtual.nome;
}, "Pessoas: ");
console.log(listaNomes); // Saída: Pessoas: Alice, Bob, Charlie