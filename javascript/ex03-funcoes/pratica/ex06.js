// Expressão de Função Anônima:
// A função não tem um nome próprio e é atribuída a uma variável. Este é o tipo mais comum de expressão de função.

const somar = function(a, b) {
    return a + b;
};

let resultado = somar(10, 5);
console.log("Resultado da soma (anônima):", resultado); // Saída: 15

// Outro exemplo:
const saudacao = function() {
    console.log("Olá da expressão de função!");
};
saudacao(); // Saída: Olá da expressão de função!