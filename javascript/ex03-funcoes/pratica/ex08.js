// Não são "Hoisted" (Içadas) como as Declarações de Funções:
// Ao contrário das declarações de funções ( function minhaFuncao() {} ), as expressões de funções não são completamente movidas para o topo do seu escopo. Apenas a declaração da variável (se usar var) é içada, mas a atribuição da função à variável não. Se usar let ou const, a variável também é içada, mas fica na "Temporal Dead Zone" até a linha de atribuição ser alcançada.

// Exemplo com var (hoisting da variável, mas não da atribuição da função):
// console.log(multiplicarVar(2, 3)); // ERRO! multiplicarVar is not a function (é undefined neste ponto)
var multiplicarVar = function(x, y) {
  return x * y;
};
console.log("Depois da atribuição (var):", multiplicarVar(2, 3)); // Saída: 6

// Exemplo com let (Temporal Dead Zone):
// console.log(dividirLet(10, 2)); // ERRO! Cannot access 'dividirLet' before initialization
let dividirLet = function(a, b) {
    return a / b;
};
console.log("Depois da atribuição (let):", dividirLet(10, 2)); // Saída: 5

// Declaração de função (é hoisted):
console.log("Declaração de função (subtrair):", subtrair(7, 2)); // Saída: 5
function subtrair(a, b) {
    return a - b;
}