// Expressão de Função Nomeada:
// A função tem um nome, que pode ser útil para depuração (debugging) ou para criar funções recursivas (funções que chamam a si mesmas). O nome da função é local ao escopo da própria função.

const fatorial = function calcularFatorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1); // Chamada recursiva usando o nome da função
    }
};

console.log("Fatorial de 5:", fatorial(5)); // Saída: 120
// console.log(calcularFatorial(5)); // Erro! calcularFatorial não está no escopo externo.