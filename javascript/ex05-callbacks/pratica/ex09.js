const numerosDesordenados = [10, 5, 100, 1, 25, 50];

// Ordem crescente
numerosDesordenados.sort(function(a, b) {
    return a - b;
});
console.log("Números ordenados (crescente):", numerosDesordenados); // Saída: [ 1, 5, 10, 25, 50, 100 ]

// Ordem decrescente
numerosDesordenados.sort((a, b) => b - a);
console.log("Números ordenados (decrescente):", numerosDesordenados); // Saída: [ 100, 50, 25, 10, 5, 1 ]

const itens = [
	{ nome: "Banana", preco: 3 },
	{ nome: "Maçã", preco: 5 },
	{ nome: "Laranja", preco: 2 }
];
// Ordenar por preço (crescente)
itens.sort((itemA, itemB) => itemA.preco - itemB.preco);
console.log("Itens ordenados por preço:", itens);
// Saída:
// [
//   { nome: 'Laranja', preco: 2 },
//   { nome: 'Banana', preco: 3 },
//   { nome: 'Maçã', preco: 5 }
// ]