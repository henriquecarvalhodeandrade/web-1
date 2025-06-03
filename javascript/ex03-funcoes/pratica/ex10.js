// Úteis como Argumentos para Outras Funções (Callbacks):
// Expressões de funções são frequentemente usadas como "callbacks" – funções passadas como argumentos para outras funções, para serem executadas posteriormente.

function processarArray(arr, callback) {
    let resultados = [];
    for (let i = 0; i < arr.length; i++) {
      resultados.push(callback(arr[i]));
    }
    return resultados;
}

let numeros = [1, 2, 3, 4];

// Usando uma expressão de função anônima como callback
let dobrados = processarArray(numeros, function(numero) {
    return numero * 2;
});
console.log("Números dobrados:", dobrados); // Saída: [ 2, 4, 6, 8 ]

// Usando uma arrow function (que também é uma expressão de função) como callback
let triplicados = processarArray(numeros, item => item * 3);
console.log("Números triplicados:", triplicados); // Saída: [ 3, 6, 9, 12 ]