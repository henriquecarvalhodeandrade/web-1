// Classe base (poderia ser uma classe abstrata em outras linguagens)
class FormaGeometrica {
    constructor(nome) {
        this.nome = nome;
    }

    // Método que se espera ser implementado pelas subclasses
    calcularArea() {
        // Em JavaScript, não há erro se não implementado, apenas não fará nada específico
        console.warn(`Método calcularArea() não implementado para ${this.nome}`);
        return 0;
    }

    descrever() {
        console.log(`Eu sou uma forma geométrica chamada: ${this.nome}`);
    }
}

class Retangulo extends FormaGeometrica {
    constructor(largura, altura) {
        super("Retângulo"); // Chama o construtor da classe pai
        this.largura = largura;
        this.altura = altura;
    }

    // Sobrescrevendo o método calcularArea (Polimorfismo)
    calcularArea() {
        const area = this.largura * this.altura;
        console.log(`Área do ${this.nome}: ${area}`);
        return area;
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super("Círculo");
        this.raio = raio;
    }

    // Sobrescrevendo o método calcularArea (Polimorfismo)
    calcularArea() {
        const area = Math.PI * this.raio * this.raio;
        console.log(`Área do ${this.nome}: ${area.toFixed(2)}`);
        return area;
    }
}

class Triangulo extends FormaGeometrica {
    constructor(base, altura) {
        super("Triângulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        const area = (this.base * this.altura) / 2;
        console.log(`Área do ${this.nome}: ${area}`);
        return area;
    }
}


// Criando um array de diferentes formas
const formas = [
    new Retangulo(10, 5),
    new Circulo(7),
    new Triangulo(8, 6),
    new FormaGeometrica("Forma Desconhecida") // Para mostrar o comportamento da classe base
];

console.log("\n--- Calculando Áreas das Formas (Polimorfismo) ---");
// Iterando e chamando o mesmo método em objetos de diferentes classes
formas.forEach(forma => {
    forma.descrever();
    forma.calcularArea(); // Cada objeto executa sua própria versão de calcularArea()
    console.log("---");
});