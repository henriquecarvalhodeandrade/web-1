
class Conta {
    constructor(numero, agencia, saldo) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    calcularTaxa() {
        return 0;
    }

    exibirInfo() {
        return `Conta Nº: ${this.numero}, Agência: ${this.agencia}, Saldo: R$ ${this.saldo.toFixed(2)}, Taxa: R$ ${this.calcularTaxa().toFixed(2)}`;
    }
}

class Corrente extends Conta {
    calcularTaxa() {
        return this.saldo * 0.07;
    }

    exibirInfo() {
        return `Corrente -> ${super.exibirInfo()}`;
    }
}

class Poupanca extends Conta {
    calcularTaxa() {
        return 5.00;
    }

    exibirInfo() {
        return `Poupança -> ${super.exibirInfo()}`;
    }
}

class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.enderecos = [];
        this.contas = [];
    }

    adicionarConta(conta) {
        this.contas.push(conta);
    }

    exibirContas() {
        console.log(`\nCliente: ${this.nome}`);
        this.contas.forEach((conta, index) => {
            console.log(`  [Conta ${index + 1}] ${conta.exibirInfo()}`);
        });
    }
}

class Banco {
    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    listarClientes() {
        console.log("=== Lista de Clientes e Contas ===");
        this.clientes.forEach(cliente => {
            cliente.exibirContas();
        });
    }
}

const banco = new Banco();

const cliente1 = new Cliente("Maria");
const cliente2 = new Cliente("João");
const cliente3 = new Cliente("Ana");

const conta1 = new Corrente(1001, "001", 1000);
const conta2 = new Poupanca(1002, "001", 2000);
const conta3 = new Corrente(1003, "002", 500);
const conta4 = new Poupanca(1004, "002", 3000);

cliente1.adicionarConta(conta1);
cliente1.adicionarConta(conta2);
cliente2.adicionarConta(conta3);
cliente3.adicionarConta(conta4);

banco.adicionarCliente(cliente1);
banco.adicionarCliente(cliente2);
banco.adicionarCliente(cliente3);

banco.listarClientes();
