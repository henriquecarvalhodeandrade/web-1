const animalPrototipo = {
    fazerSom: function() {
        console.log("Som genérico");
    },
    andar: function() {
        console.log(this.nome + " está andando.");
    }
};

const cachorro = Object.create(animalPrototipo);
cachorro.nome = "Bob"; // Adiciona propriedade diretamente ao objeto 'cachorro'
cachorro.latir = function() { // Adiciona método diretamente ao objeto 'cachorro'
    console.log("Au au!");
};

cachorro.andar();    // Saída: Bob está andando. (herdado de animalPrototipo)
cachorro.fazerSom(); // Saída: Som genérico (herdado de animalPrototipo)
cachorro.latir();    // Saída: Au au! (próprio do objeto cachorro)

console.log(Object.getPrototypeOf(cachorro) === animalPrototipo); // Saída: true