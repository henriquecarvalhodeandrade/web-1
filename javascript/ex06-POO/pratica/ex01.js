// Exemplo muito simples de classe em JavaScript (ES6)
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico de animal");
    }
}

class Cachorro extends Animal { // Herança
    constructor(nome, raca) {
        super(nome); // Chama o construtor da classe pai (Animal)
        this.raca = raca;
    }

    fazerSom() { // Polimorfismo (sobrescrita)
        console.log("Au au!");
    }

    buscar() {
        console.log(this.nome + " está buscando a bolinha!");
    }
}

let meuCachorro = new Cachorro("Rex", "Labrador");
console.log(meuCachorro.nome);       // Saída: Rex
meuCachorro.fazerSom();            // Saída: Au au!
meuCachorro.buscar();              // Saída: Rex está buscando a bolinha!

let animalGenerico = new Animal("Bicho");
animalGenerico.fazerSom();           // Saída: Som genérico de animal