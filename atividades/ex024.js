class OperationStrategy {
    execute(num1, num2) {
        throw new Error("O método execute deve ser implementado nas classes concretas.");
    }
}

class AdditionOperation extends OperationStrategy {
    execute(num1, num2) {
        return num1 + num2;
    }
}

class SubtractionOperation extends OperationStrategy {
    execute(num1, num2) {
        return num1 - num2;
    }
}

class MultiplicationOperation extends OperationStrategy {
    execute(num1, num2) {
        return num1 * num2;
    }
}

class Calculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(num1, num2) {
        return this.strategy.execute(num1, num2);
    }
}

console.log("Digite o primeiro número: 10");
console.log("Digite o segundo número: 3");
console.log("Digite a operação (+ para soma, - para subtração, * para multiplicação): +");

const num1 = 10;
const num2 = 3;
const operation = "+" ;

let strategy;

switch (operation) {
    case "+":
        strategy = new AdditionOperation();
        break;
    case "-":
        strategy = new SubtractionOperation();
        break;
    case "*":
        strategy = new MultiplicationOperation();
        break;
    default:
        console.log("Operação não suportada");
        break;
}

if (strategy) {
    const calculator = new Calculator(strategy);
    const result = calculator.calculate(num1, num2);
    console.log(`O resultado da operação é: ${result}`);
}
