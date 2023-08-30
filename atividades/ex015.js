function SemParametros() {
    console.log("Sem parâmetros");
}
SemParametros(); 

function ComParametros(nome) {
    console.log(`Uso de um parâmetro nome -> ${nome}`);
}
ComParametros("exempplo(Zé)"); 

const ArrowComParametro = (nome) => `Usando uma arrow function -> ${nome}`;
console.log(ArrowComParametro("exemplo(Zezé)")); 