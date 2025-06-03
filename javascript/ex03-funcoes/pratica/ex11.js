// Podem ser Definidas Condicionalmente:
// Como são atribuídas a variáveis, a definição de uma função pode depender de uma condição.

let operacao;
let deveSomar = true;

if (deveSomar) {
    operacao = function(a, b) { return a + b; };
} else {
    operacao = function(a, b) { return a - b; };
}

console.log("Resultado da operação (condicional):", operacao(10, 7)); // Saída: 17 (porque deveSomar é true)