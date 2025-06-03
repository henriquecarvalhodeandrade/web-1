// 1- Faça uma função que retorne o valor de um parâmetro em graus Celsius para Fahremheit.

function conversor(grausCelsius) {
    return (grausCelsius * (9/5)) + 32;
}

// 2 - Faça uma função que retorne o fatorial de um numero passado por parametro

function fatorial(numero) {
    if (numero == 1 || numero == 0) {
        return 1
    }

    let aux = 1
    for (let i = numero; i > 1; i--) {
        aux *= i;
    }
    return aux; // Retorna o resultado
}

// Exemplo de uso:
console.log(conversor(5)); 
console.log(fatorial(5)); // Output: 120


