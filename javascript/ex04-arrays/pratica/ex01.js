// Array de números
let numeros = [10, 20, 30, 40, 50];
console.log("Array de números:", numeros);

// Array de strings
let frutas = ["maçã", "banana", "laranja"];
console.log("Array de frutas:", frutas);

// Array com tipos de dados mistos
let misto = [1, "texto", true, { nome: "Objeto" }, [10, 20]];
console.log("Array misto:", misto);

// Array vazio
let vazio = [];
console.log("Array vazio:", vazio);

let cores = new Array("vermelho", "verde", "azul");
console.log("Array de cores (com new Array):", cores);

let numerosDefinidos = new Array(1, 2, 3, 4, 5);
console.log("Array de números (com new Array):", numerosDefinidos);

// Cuidado: Se passar um único número para o construtor, ele cria um array com esse tamanho (posições vazias)
let arrayComTamanho = new Array(5); // Cria um array com 5 posições vazias
console.log("Array com tamanho definido:", arrayComTamanho);
console.log("Tamanho do arrayComTamanho:", arrayComTamanho.length); // Saída: 5