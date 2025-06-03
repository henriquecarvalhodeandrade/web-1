function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.fazerSom = function() {
    console.log(this.nome + " faz um som genérico.");
};

// Função construtora para Gato
function Gato(nome, cor) {
    Animal.call(this, nome); // Chama o construtor de Animal para definir 'nome' na instância de Gato
    this.cor = cor;
}

// Configurando a herança:
// 1. Faça o prototype de Gato ser um novo objeto cujo protótipo é Animal.prototype
Gato.prototype = Object.create(Animal.prototype);

// 2. Restaure a propriedade 'constructor' do Gato.prototype para apontar para Gato
Gato.prototype.constructor = Gato;

// Adicionando métodos específicos para Gato
Gato.prototype.miar = function() {
    console.log(this.nome + " diz: Miau!");
};

// Sobrescrevendo um método herdado (Polimorfismo)
Gato.prototype.fazerSom = function() {
    console.log(this.nome + " mia alto!");
};


let felix = new Gato("Felix", "Preto");
felix.fazerSom(); // Saída: Felix mia alto! (método sobrescrito de Gato)
felix.miar();     // Saída: Felix diz: Miau! (método de Gato)

// Verificando a cadeia de protótipos
console.log(felix instanceof Gato);    // Saída: true
console.log(felix instanceof Animal);  // Saída: true
console.log(Object.getPrototypeOf(felix) === Gato.prototype); // true
console.log(Object.getPrototypeOf(Gato.prototype) === Animal.prototype); // true