const idades = [15, 22, 18, 30, 17, 45];

const adultos = idades.filter(function(idade) {
  	return idade >= 18;
});
console.log("Adultos (filter):", adultos); // Saída: [ 22, 18, 30, 45 ]
console.log("Array original (idades):", idades); // Saída: [ 15, 22, 18, 30, 17, 45 ]

const palavras = ["javascript", "é", "muito", "legal", "mesmo"];
const palavrasLongas = palavras.filter(palavra => palavra.length > 5);
console.log("Palavras longas:", palavrasLongas); // Saída: [ 'javascript', 'muito', 'legal' ]