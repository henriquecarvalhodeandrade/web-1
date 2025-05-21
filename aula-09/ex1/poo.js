class Animal {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.cor = null;
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    interagir(){

    }
};

class Gato extends Animal {
    interagir(){
        console.log("Meoow!")
    }
};

class Cachorro extends Animal {
    interagir(){
        console.log("Woof!")
    }
};

function main(){
    let animal1 = new Animal();
    animal1.setNome('Macaco');
    animal1.setIdade('12');
    console.log("Nome: ", animal1.getNome());
    console.log("Idade: ", animal1.getIdade());

    let animal2 = new Animal();
    animal2.setNome('Girafa');
    animal2.setIdade('10');
    console.log("Nome: ", animal2.getNome());
    console.log("Idade: ", animal2.getIdade());

    let animal3 = new Animal();
    animal3.setNome('Leão');
    animal3.setIdade('15');
    console.log("Nome: ", animal3.getNome());
    console.log("Idade: ", animal3.getIdade());

    console.log(animal1);
    console.log(animal2);
    console.log(animal3);

    
    let cachorro1 = new Cachorro("Paçoca", "12")
    let gato1 = new Gato("Leite", "10")

    cachorro1.interagir()
    gato1.interagir()
}

main()