class Computer {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }
    
    toString() {
        return `${this.type} - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

class PCFactory {
    createComputer(ram, hdd, cpu) {
        return new Computer(ram, hdd, cpu, "PC");
    }
}

class ServerFactory {
    createComputer(ram, hdd, cpu) {
        return new Computer(ram, hdd, cpu, "Server");
    }
}

class Client {
    constructor(computerFactory) {
        this.computerFactory = computerFactory;
    }

    createComputer(ram, hdd, cpu) {
        return this.computerFactory.createComputer(ram, hdd, cpu);
    }
}

const pcFactory = new PCFactory();
const serverFactory = new ServerFactory();

const client = new Client(pcFactory);
const pc = client.createComputer(8, 256, 3.0);
console.log(pc.toString());

client.computerFactory = serverFactory;
const server = client.createComputer(16, 512, 4.0);
console.log(server.toString());
