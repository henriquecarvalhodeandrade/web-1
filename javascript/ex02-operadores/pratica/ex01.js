// É possível utilizar alguns operadores aritméticos com strings, mas seu significado é específico. O sinal de adição, por exemplo, implica em concatenação de strings, como no exemplo abaixo com as respectivas saídas:

var x = 5 + 5
var y = "5" + 5
var z = "Hello" + 5

console.log("\n",x, y, z)

// A palavra reservada let

// É possível criar variáveis com a palavra reservada let. A diferença entre var e let é que var cria uma variável que pode ser acessada globalmente, e let permite apenas o acesso no escopo local.

let fruta = 'banana'

console.log(fruta)