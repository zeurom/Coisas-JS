class Editor {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }
}

class TextEditor extends Editor {
    constructor() {
        super();
        this.lines = [];
    }

    insertLine(lineNumber, text) {
        if (lineNumber < 1 || lineNumber > this.lines.length + 1) {
            console.log("Número de linha inválido.");
            return;
        }

        this.lines.splice(lineNumber - 1, 0, text);
        this.notify({ type: 'insert', lineNumber, text });
    }

    removeLine(lineNumber) {
        if (lineNumber < 1 || lineNumber > this.lines.length) {
            console.log("Número de linha inválido.");
            return;
        }

        const removedLine = this.lines.splice(lineNumber - 1, 1)[0];
        this.notify({ type: 'remove', lineNumber, text: removedLine });
    }

    displayContent() {
        console.log("Conteúdo do TextEditor:");
        this.lines.forEach((line, index) => console.log(`${index + 1}. ${line}`));
    }
}

class Observer {
    update(event) {
    }
}

class OpenObserver extends Observer {
    update(event) {
        if (event.type === 'open') {
            console.log("TextEditor foi aberto!");
        }
    }
}

class SaveObserver extends Observer {
    update(event) {
        if (event.type === 'save') {
            console.log("TextEditor foi salvo!");
        }
    }
}

async function main() {
    const textEditor = new TextEditor();

    // Adiciona observadores
    const openObserver = new OpenObserver();
    const saveObserver = new SaveObserver();
    textEditor.addObserver(openObserver);
    textEditor.addObserver(saveObserver);

    textEditor.notify({ type: 'open' });

    let lineNumber = 1;
    while (true) {
        const userInput = await prompt(`Digite a linha ${lineNumber} (ou "EOF" para encerrar): `);

        if (userInput.toUpperCase() === 'EOF') {
            break;
        }

        textEditor.insertLine(lineNumber, userInput);
        lineNumber++;
    }

    textEditor.notify({ type: 'save' });

    textEditor.displayContent();
}

function prompt(question) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        readline.question(question, answer => {
            readline.close();
            resolve(answer);
        });
    });
}

main();
