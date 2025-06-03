let val1 = 10;
let val2 = "10";
let val3 = 20;

// Igual a (==) - compara valores, faz coerção de tipo
console.log("val1 == val2 (10 == '10'):", val1 == val2); // Saída: true (string "10" é convertida para número 10)

// Estritamente igual a (===) - compara valores e tipos, sem coerção
console.log("val1 === val2 (10 === '10'):", val1 === val2); // Saída: false (número 10 não é do mesmo tipo que string "10")
console.log("val1 === 10 (10 === 10):", val1 === 10);     // Saída: true

// Diferente de (!=)
console.log("val1 != val3 (10 != 20):", val1 != val3); // Saída: true

// Estritamente diferente de (!==)
console.log("val1 !== val2 (10 !== '10'):", val1 !== val2); // Saída: true (tipos diferentes)
console.log("val1 !== 10 (10 !== 10):", val1 !== 10);     // Saída: false

// Maior que (>)
console.log("val3 > val1 (20 > 10):", val3 > val1); // Saída: true

// Menor que (<)
console.log("val1 < val3 (10 < 20):", val1 < val3); // Saída: true

// Maior ou igual a (>=)
console.log("val1 >= 10 (10 >= 10):", val1 >= 10);   // Saída: true
console.log("val3 >= val1 (20 >= 10):", val3 >= val1); // Saída: true

// Menor ou igual a (<=)
console.log("val1 <= 10 (10 <= 10):", val1 <= 10);   // Saída: true
console.log("val1 <= val3 (10 <= 20):", val1 <= val3); // Saída: true