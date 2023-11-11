try {
    let numero1 = 10;
    let numero2 = 0;
    console.log("Informe o primeiro número:");
    console.log(numero1);
    console.log("Informe o segundo número:");
    console.log(numero2);

    if (numero2 === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
    
      let resultado = numero1 / numero2;
      console.log(`Resultado da divisão: ${resultado}`);
    } catch (erro) {
      console.error(`Erro: ${erro.message}`);
    } finally {
      console.log("O código foi executado.");
    }

console.log("------------------<(caso de numero2 != 0)>----------------------")

try {
    let numero1 = 10;
    let numero2 = 2;
    console.log("Informe o primeiro número:");
    console.log(numero1);
    console.log("Informe o segundo número:");
    console.log(numero2);

    if (numero2 === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
    
      let resultado = numero1 / numero2;
      console.log(`Resultado da divisão: ${resultado}`);
    } catch (erro) {
      console.error(`Erro: ${erro.message}`);
    } finally {
      console.log("O código foi re-executado.");
    }