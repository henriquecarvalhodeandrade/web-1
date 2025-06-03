let planetas = ["Mercúrio", "Vênus", "Terra", "Marte"];

console.log("Primeiro planeta:", planetas[0]); // Saída: Mercúrio
console.log("Terceiro planeta:", planetas[2]); // Saída: Terra
console.log("Último planeta:", planetas[planetas.length - 1]); // Saída: Marte (usando a propriedade length)

// Acessar um índice inexistente retorna undefined
console.log("Índice 10:", planetas[10]); // Saída: undefined