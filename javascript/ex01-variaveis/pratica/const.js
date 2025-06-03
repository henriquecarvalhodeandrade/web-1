const PI = 3.14159;
console.log("Valor de PI:", PI); // Saída: Valor de PI: 3.14159

// PI = 3.14; // Erro: Assignment to constant variable.

if (true) {
    const MAX_USERS = 100;
    console.log("MAX_USERS dentro do bloco:", MAX_USERS); // Saída: MAX_USERS dentro do bloco: 100
}
// console.log(MAX_USERS); // Erro: MAX_USERS is not defined

// Importante: para objetos e arrays, const significa que a referência à variável é constante,
// não o conteúdo do objeto ou array.
const CONFIG = {
    url: "api.example.com",
    port: 8080
};
console.log("CONFIG inicial:", CONFIG); // Saída: CONFIG inicial: { url: 'api.example.com', port: 8080 }

CONFIG.port = 3000; // Isso é permitido! O objeto em si pode ser modificado.
console.log("CONFIG modificado:", CONFIG); // Saída: CONFIG modificado: { url: 'api.example.com', port: 3000 }

// CONFIG = {}; // Erro: Assignment to constant variable. (Não pode reatribuir a um novo objeto)

const CORES = ["vermelho", "verde"];
CORES.push("azul"); // Permitido
console.log("Cores:", CORES); // Saída: Cores: [ 'vermelho', 'verde', 'azul' ]
// CORES = ["amarelo"]; // Erro