class Animal {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
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

    interagir(){}

    exibirInfo(){
        return "O nome do animal é: ", this.nome," e sua idade é: ", this.idade 
    }
};