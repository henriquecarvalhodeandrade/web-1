class ContaBancaria {
    #saldo; // Campo privado (ES2022+)

    constructor(saldoInicial = 0) {
        if (saldoInicial < 0) {
            this.#saldo = 0;
            console.warn("Saldo inicial não pode ser negativo. Iniciado com 0.");
        } else {
            this.#saldo = saldoInicial;
        }
        console.log(`Conta criada com saldo: R$${this.#saldo.toFixed(2)}`);
    }

    // Método público para depositar (abstrai como o saldo é aumentado)
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
        } else {
            console.error("Valor de depósito inválido.");
        }
    }

    // Método público para sacar (abstrai como o saldo é diminuído e verifica fundos)
    sacar(valor) {
        if (valor <= 0) {
            console.error("Valor de saque inválido.");
            return false;
        }
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
            return true;
        } else {
            console.warn(`Saldo insuficiente para sacar R$${valor.toFixed(2)}. Saldo atual: R$${this.#saldo.toFixed(2)}`);
            return false;
        }
    }

  // Método público para obter o saldo (getter - abstrai o acesso direto ao atributo)
    getSaldo() {
        console.log(`Consulta de saldo: R$${this.#saldo.toFixed(2)}`);
        return this.#saldo;
    }
}

// Criando e usando objetos da classe ContaBancaria
console.log("--- Conta Corrente ---");
const minhaConta = new ContaBancaria(100); // Saldo inicial de R$100
minhaConta.depositar(50);
minhaConta.sacar(30);
minhaConta.sacar(150); // Tentativa de sacar mais do que o saldo
minhaConta.getSaldo();

// Tentativa de acessar o saldo diretamente (não funciona com #saldo)
// console.log(minhaConta.#saldo); // Isso geraria um erro de sintaxe ou de acesso

console.log("\n--- Conta Poupança ---");
const poupanca = new ContaBancaria(); // Saldo inicial 0
poupanca.depositar(200);
poupanca.getSaldo();