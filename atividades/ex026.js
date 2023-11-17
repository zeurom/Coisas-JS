var SistemaSeguranca = /** @class */ (function () {
    function SistemaSeguranca() {
        this.senhaBaseSecreta = "senhaSecreta123";
    }
    SistemaSeguranca.getInstance = function () {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    };
    SistemaSeguranca.prototype.acessarBaseSecreta = function (senha) {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
        }
        else {
            console.log("Acesso negado! Intruso detectado. *Sons de alarme*");
        }
    };
    SistemaSeguranca.instance = null;
    return SistemaSeguranca;
}());
var sistemaSeguranca = SistemaSeguranca.getInstance();
sistemaSeguranca.acessarBaseSecreta("senhaSecreta123");
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta456");
