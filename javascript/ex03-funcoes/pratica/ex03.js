// Arrow function com um parâmetro
const dobrar = (numero) => {
    return numero * 2;
};
console.log("O dobro de 5 é:", dobrar(5)); // Saída: O dobro de 5 é: 10

// Arrow function com um parâmetro (parênteses opcionais se for apenas um)
const triplicar = numero => numero * 3; // Retorno implícito
console.log("O triplo de 4 é:", triplicar(4)); // Saída: O triplo de 4 é: 12

// Arrow function com múltiplos parâmetros
const somarComArrow = (a, b) => a + b; // Retorno implícito
console.log("Soma com arrow (7+3):", somarComArrow(7, 3)); // Saída: Soma com arrow (7+3): 10

// Arrow function sem parâmetros
const dizerOi = () => console.log("Oi!");
dizerOi(); // Saída: Oi!

// Arrow function com corpo de múltiplas linhas (precisa de chaves e 'return' explícito)
const processarNumeros = (x, y) => {
    const somaTemp = x + y;
    const produtoTemp = x * y;
    return `Soma: ${somaTemp}, Produto: ${produtoTemp}`;
};
console.log(processarNumeros(2, 5)); // Saída: Soma: 7, Produto: 10