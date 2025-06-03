let nome = "Alice";
let numero = 123;
let ehValido = true;
let pessoa = { nome: "Bob", idade: 30 };
let numeros = [1, 2, 3];
let nulo = null;
let indefinido;

// typeof
console.log("typeof nome:", typeof nome);           // Saída: typeof nome: string
console.log("typeof numero:", typeof numero);         // Saída: typeof numero: number
console.log("typeof ehValido:", typeof ehValido);       // Saída: typeof ehValido: boolean
console.log("typeof pessoa:", typeof pessoa);         // Saída: typeof pessoa: object
console.log("typeof numeros:", typeof numeros);        // Saída: typeof numeros: object (arrays são objetos em JS)
console.log("typeof nulo:", typeof nulo);           // Saída: typeof nulo: object (isso é uma peculiaridade histórica do JS)
console.log("typeof indefinido:", typeof indefinido);   // Saída: typeof indefinido: undefined
console.log("typeof function(){}:", typeof function(){}); // Saída: typeof function(){}: function

// instanceof
class Carro {}
let meuCarro = new Carro();
let dataAtual = new Date();

console.log("meuCarro instanceof Carro:", meuCarro instanceof Carro); // Saída: meuCarro instanceof Carro: true
console.log("dataAtual instanceof Date:", dataAtual instanceof Date); // Saída: dataAtual instanceof Date: true
console.log("numeros instanceof Array:", numeros instanceof Array);  // Saída: numeros instanceof Array: true
console.log("pessoa instanceof Object:", pessoa instanceof Object);  // Saída: pessoa instanceof Object: true
console.log("meuCarro instanceof Object:", meuCarro instanceof Object); // Saída: true (quase tudo herda de Object)
console.log("nome instanceof String:", nome instanceof String);    // Saída: false (primitivas não são instâncias diretas)
let nomeObj = new String("Alice");
console.log("nomeObj instanceof String:", nomeObj instanceof String); // Saída: true