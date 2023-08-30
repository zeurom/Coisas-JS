const Banco = {
    conta: "12345",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
    buscarSaldo: function() {
        return `Saldo de R$ ${this.saldo}`;
    },
    deposito: function(valor) {
        this.saldo += valor;
        return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
    saque: function(valor) {
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
    buscarConta: function() {
        return `Conta: ${this.conta}`;
    }
};

console.log("Saldo atual:", Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log("Número da conta:", Banco.buscarConta());
