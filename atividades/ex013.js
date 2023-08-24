var num1, num2, operacao;
num1 = parseFloat(prompt("Informe o primeiro numero: "));
operacao = prompt("informe a operaçao: ")
num2 = parseFloat(prompt("Informe o segunda numero: "));
    switch (operacao) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        var divisao = num1 / num2;
        var resto = num1 % num2;
        console.log("Resultado da divisão:", divisao);
        console.log("Resto da divisão:", resto);
        break;
    default:
        console.log("Número inválido. Insira um número.");
        break;
}
    