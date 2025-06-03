// Expressão de função (anônima) atribuída à variável 'calcularSoma'
const calcularSoma = function(a, b) {
    return a + b;
};

// Chamando a função através da variável
let resultadoSoma = calcularSoma(5, 3);
console.log("A soma é:", resultadoSoma); // Saída: A soma é: 8

// Também pode ser uma função nomeada (menos comum neste contexto)
const multiplicar = function fazerMultiplicacao(x, y) {
    return x * y;
};
let resultadoMultiplicacao = multiplicar(4, 6);
console.log("A multiplicação é:", resultadoMultiplicacao); // Saída: A multiplicação é: 24