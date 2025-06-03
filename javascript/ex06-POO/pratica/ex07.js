class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }

    info() {
        console.log(`Marca: ${this.marca}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca); // Chama o construtor da classe pai (Veiculo)
        this.modelo = modelo;
    }

    info() { // Sobrescreve o método info
        super.info(); // Chama o método info da classe pai
        console.log(`Modelo: ${this.modelo}`);
    }
}

let meuCarro = new Carro("Ford", "Ka");
meuCarro.info();
// Saída:
// Marca: Ford
// Modelo: Ka

// Por baixo dos panos:
// Veiculo é uma função construtora.
// Veiculo.prototype contém o método info().
// Carro é uma função construtora.
// Carro.prototype tem Veiculo.prototype como seu protótipo.
// O método info() em Carro.prototype sobrescreve o de Veiculo.prototype.