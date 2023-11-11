function Carro(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
  
    this.acelerar = function(velocidade) {
      this.velocidadeAtual += velocidade;
      console.log(`O ${this.modelo} acelerou para ${this.velocidadeAtual} km/h.`);
    };
  
    this.frear = function() {
      this.velocidadeAtual = 0;
      console.log(`O ${this.modelo} parou.`);
    };
  
    // Método para pintar o carro
    this.pintar = function(novaCor) {
      this.cor = novaCor;
      console.log(`O ${this.modelo} foi pintado de ${this.cor}.`);
    };
  }
  
  let meuCarro = new Carro('celta', 'vinho');
  
  // Demonstrando as ações
  meuCarro.acelerar(60);
  meuCarro.frear();
  meuCarro.pintar('vermelho');

  console.log("----------------------------------------");

function ContaBancaria(numeroConta, titular) {
    this.numeroConta = numeroConta;
    this.saldo = 0;
    this.titular = titular;
  
    this.depositar = function(valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado na conta ${this.numeroConta}. Novo saldo: ${this.saldo}`);
    };
  
    this.sacar = function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado na conta ${this.numeroConta}. Novo saldo: ${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente na conta ${this.numeroConta}.`);
      }
    };
  
    this.consultarSaldo = function() {
      console.log(`Saldo atual na conta ${this.numeroConta}: ${this.saldo}`);
    };
  }
  

  let minhaConta = new ContaBancaria('123456', 'brenno');
  
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  minhaConta.consultarSaldo();
  