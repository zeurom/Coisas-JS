var nome, salario, idade, diploma;
nome = prompt("Informe seu nome: "); // Identifica como String
salario = parseFloat(prompt("Informe seu salario: "));
idade = parseInt(prompt("Informe sua idade: "));
diploma = prompt("Você tem diploma? (sim ou nao) ").toLowerCase() === 'sim';
console.log("------------------------------------------------")
console.log("Dados recebidos:")
console.log("1-", nome);
console.log("2-", salario);
console.log("3-", idade);
console.log("4-", diploma);
console.log("------------------------------------------------")
console.log("Demostração dos tipos pelo typeof:");
console.log(typeof nome);      
console.log(typeof salario, "float");  
console.log(typeof idade);     
console.log(typeof diploma);
console.log("------------------------------------------------")
console.log(`Explicaçao de cada um dos tipos:
1- nome: string pois é um texto.

2- salario: salario na maioria das vezes deve receber o tipo Float ja que existe numeros apos a virgula.

3- idade: idade deve ser marcada como Int ja que idade é algo inteiro.

4- Ter diploma: deve receber o Boolean ja que é uma pergunta que pode receber sim ou nao / true or false.`)
