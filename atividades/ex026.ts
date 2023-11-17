class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSecreta123";
  
    private constructor() {}
  
    public static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instance) {
        SistemaSeguranca.instance = new SistemaSeguranca();
      }
      return SistemaSeguranca.instance;
    }
  
    public acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
      } else {
        console.log("Acesso negado! Intruso detectado. *Sons de alarme*");
      }
    }
  }
  
  const sistemaSeguranca = SistemaSeguranca.getInstance();
  sistemaSeguranca.acessarBaseSecreta("senhaSecreta123");
  sistemaSeguranca.acessarBaseSecreta("senhaIncorreta456");