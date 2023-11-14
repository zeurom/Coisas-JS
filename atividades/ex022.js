// Interface para o sanduíche
class Sanduiche {
    getDescricao() {
        return "Sanduíche";
    }

    getCusto() {
        return 0.0;
    }
}

// Implementação da classe concreta FrangoAssado
class FrangoAssado extends Sanduiche {
    getDescricao() {
        return "Sanduíche de Frango Assado";
    }

    getCusto() {
        return 4.50;
    }
}

// Decorator para o pepperoni
class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.99;
    }
}

// Decorator para o queijo mussarela ralado
class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 2.00;
    }
}

// Decorator para o bacon
class Bacon extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ", Bacon";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.50;
    }
}

// Cliente
const sanduicheBase = new FrangoAssado();
const sanduicheDecorado = new Bacon(new QueijoMussarelaRalado(new Pepperoni(sanduicheBase)));

console.log(sanduicheDecorado.getDescricao() + " custa $" + sanduicheDecorado.getCusto().toFixed(2));
