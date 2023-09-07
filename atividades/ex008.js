let escolha;

function exibirMenu() {
    console.log(`Opções:
    1-push
    2-unshift
    3-pop
    4-shift
    5-splice
    6-foreach
    7-map
    8-filter
    9-reduce
    10-find
    0-sair`);

    const prompt = () => {
        const readlineSync = {
            question: (message) => {
                return eval(require('readline-sync').question(message));
            }
        };
        return readlineSync;
    };

    const readlineSync = prompt();
    escolha = parseInt(readlineSync.question('Qual operação você deseja realizar? '));
    executarEscolha();
}

function executarEscolha() {
    switch (escolha) {
        case 1:
            const puarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            puarray.push(11, 12, 13, 14, 15);
            console.log(puarray);
            break;
        case 2:
            const unarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            unarray.unshift(0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10);
            console.log(unarray);
            break;
        case 3:
        poparray = [1,2,3,4,5,6,7,8,9,10];
        poparray.pop();
        console.log(poparray);
        break;
    case 4:
        sharray = [1,2,3,4,5,6,7,8,9,10];
        sharray.shift();
        console.log(sharray)
        break;
    case 5:
        sparray = [1,2,3,4,5,6,7,8,9,10];
        sparray.splice(1,8)
        console.log(sparray)
        break;
    case 6:
        forarray = [1, 2, 3, 4, 5];
        forarray.forEach((elemento, indice, array) => {
            console.log(`Elemento: <${elemento}>, Indice: <${indice}>, Array:  [${array}]`);
            });
        break;
    case 7:
        console.log('diferente dos outros vamos fazer uma brincadeira para te explicar o .map()');
        const array_velha = [];

        for (let contador = 1; contador <= 3; contador++) {
            let recebido = Number(prompt(`variavel ${contador}: `));
                if (!isNaN(recebido)) {
                array_velha.push(recebido);
                } else {
                console.log(`Valor inválido para a variável ${contador}. Insira um número válido.`); contador--;
                }
                    }
        const array_nova = array_velha.map((recebido) => {
            if (recebido % 2 === 0) {
                const resultpar = recebido * 5;
                return (` <${recebido}> é par e multiplicado por 5 é igual a <${resultpar}>`);
            } else {
                const resultimpar = recebido + 5;
                return (` <${recebido}> é um numero impar e somado com 5 é igual a <${resultimpar}>`);
                    }
 }); 

console.log(array_velha);
console.log(array_nova);
        break;
    
    case 8:
        fiarray = [1,2,3,4,5];
        const evento = fiarray.filter(item => item % 2 !==0);
        console.log(evento)
        break;
        
    case 9:
        rearray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
const soma = rearray.reduce(function (resultado, item){
    return resultado + item;
},0);
console.log(soma);

const subtracao = rearray.reduce(function (resultado, item){
    return resultado - item;
},0);
console.log(subtracao)
        break;

        case 10:
            const findArray = [1, 2, 3, 4, 5];
            const busca = parseInt(prompt('Que número você gostaria de achar? '));
            const resultadoFind = findArray.find(elemento => elemento === busca);
            if (resultadoFind !== undefined) {
                console.log(`O número ${busca} foi encontrado no array.`);
            } else {
                console.log(`O número ${busca} não foi encontrado no array.`);
            }
            break;

        case 0:
            console.log('Saindo...');
            break;

        default:
            console.log('Opção inválida.');
            break;
    }
} while (escolha !== 0);