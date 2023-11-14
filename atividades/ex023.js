class Galinha {
    cacareja() {
        console.log("Cocó!");
    }

    voa() {
        console.log("Galinha não pode voar.");
    }
}

class Pato {
    grasna() {
        console.log("Quack!");
    }

    voa() {
        console.log("Pato pode voar.");
    }
}

class AdaptadorPato extends Galinha {
    constructor(pato) {
        super();
        this.pato = pato;
    }

    cacareja() {
        this.pato.grasna();
    }

    voa() {
        this.pato.voa();
    }
}

const galinhaNormal = new Galinha();
galinhaNormal.cacareja();
galinhaNormal.voa(); 

const patoNormal = new Pato();
patoNormal.grasna();
patoNormal.voa();

const galinhaAdaptada = new AdaptadorPato(patoNormal);
galinhaAdaptada.cacareja(); 
galinhaAdaptada.voa(); 