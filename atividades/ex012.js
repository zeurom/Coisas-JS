var nota1, nota2, nota3;
nota1 = parseFloat(prompt("informe a primeira nota: "))
nota2 = parseFloat(prompt("informe a segunda nota: "))
nota3 = parseFloat(prompt("informe a terceira nota: "))
media = (nota1 + nota2 + nota3)/3

let resultado = media >= 7 ? "Aprovado!" : "Reprovado...";

console.log(`O aluno foi ${resultado} com média ${media.toFixed(1)}`);

console.log("SE REPROVADO RESPONDA")

var nota1 = parseFloat(prompt("Informe a primeira nota: "));
var nota2 = parseFloat(prompt("Informe a segunda nota: "));

var media = (nota1 + nota2) / 2;

var verificacao = media < 7 ? ((7 - media) * 2).toFixed(1) : 0;

var mensagem = media >= 7 ? "Aprovado!" : `Reprovado! Você precisa tirar pelo menos ${verificacao} na próxima prova para passar com média sete.`;
console.log(mensagem);