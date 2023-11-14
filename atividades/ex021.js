class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return new Veiculo(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        return `Veículo - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

class Aplicacao {
    static criarVeiculos() {
        const veiculos = [];
        for (let i = 0; i < 3; i++) {
            veiculos.push(new Veiculo(`Modelo${i}`, `Marca${i}`, `Cor${i}`, 4));
            veiculos.push(new Carro(`Modelo${i}`, `Marca${i}`, `Cor${i}`, 4, 2));
        }
        return veiculos;
    }

    static clonarVeiculos(veiculos) {
        const clones = [];
        for (const veiculo of veiculos) {
            clones.push(veiculo.clone());
        }
        return clones;
    }

    static imprimirRepresentacoes(clones) {
        for (const clone of clones) {
            console.log(clone.represent());
        }
    }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);
Aplicacao.imprimirRepresentacoes(clones);
