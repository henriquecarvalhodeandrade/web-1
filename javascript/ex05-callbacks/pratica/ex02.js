const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
  	return numero * 2;
});
console.log("Números dobrados (map):", numerosDobrados); // Saída: [ 2, 4, 6, 8, 10 ]
console.log("Array original (numeros):", numeros);     // Saída: [ 1, 2, 3, 4, 5 ] (não modificado)

const nomes = ["ana", "bruno", "carla"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes maiúsculos:", nomesMaiusculos); // Saída: [ 'ANA', 'BRUNO', 'CARLA' ]