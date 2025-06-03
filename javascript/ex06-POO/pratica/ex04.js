// 1. Definindo uma função construtora
function Cachorro(nome, raca) {
    this.nome = nome;   // Propriedade da instância
    this.raca = raca;   // Propriedade da instância
}

// 2. Adicionando um método à propriedade 'prototype' da função Cachorro
//    Este método será compartilhado por todas as instâncias de Cachorro.
Cachorro.prototype.latir = function() {
    console.log(this.nome + " diz: Au au!");
};

Cachorro.prototype.sentar = function() {
    console.log(this.nome + " sentou.");
};

// 3. Criando instâncias (objetos) usando a função construtora
let rex = new Cachorro("Rex", "Labrador");
let bela = new Cachorro("Bela", "Poodle");

// 4. Chamando métodos
rex.latir();   // Saída: Rex diz: Au au!
bela.latir();  // Saída: Bela diz: Au au!
rex.sentar();  // Saída: Rex sentou.

// Como funciona o acesso a 'latir':
// - Quando rex.latir() é chamado:
//   1. JavaScript verifica se 'rex' tem uma propriedade 'latir'. Não tem.
//   2. JavaScript verifica o protótipo de 'rex'. O protótipo de 'rex' é Cachorro.prototype.
//   3. Cachorro.prototype TEM a propriedade 'latir'. Então, essa função é executada.
//      Dentro da função 'latir', 'this' se refere a 'rex'.

console.log(rex.nome); // 'nome' é uma propriedade direta de 'rex'

// Verificando o protótipo
console.log(Object.getPrototypeOf(rex) === Cachorro.prototype); // Saída: true
console.log(Object.getPrototypeOf(bela) === Cachorro.prototype); // Saída: true
console.log(Cachorro.prototype.constructor === Cachorro);      // Saída: true (o construtor do protótipo aponta de volta para a função)