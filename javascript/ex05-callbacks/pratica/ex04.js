const produtos = [
	{ id: 1, nome: "Caneta", preco: 2.50 },
	{ id: 2, nome: "Caderno", preco: 15.00 },
	{ id: 3, nome: "Lápis", preco: 1.00 },
	{ id: 4, nome: "Caderno", preco: 12.00 }
];

const cadernoEncontrado = produtos.find(function(produto) {
  	return produto.nome === "Caderno";
});
console.log("Caderno encontrado (find):", cadernoEncontrado);
// Saída: { id: 2, nome: 'Caderno', preco: 15 } (retorna o primeiro encontrado)

const precoMaiorQue20 = produtos.find(produto => produto.preco > 20);
console.log("Produto com preço > R$20:", precoMaiorQue20); // Saída: undefined