const pessoas = [
    { nome: 'Bruno', idade: 30, profissao: 'Arqueologio', cidade: 'Belo Horizonte'},
    { nome: 'Bruna', idade: 45, profissao: 'Juiza', cidade: 'São Paulo'},
    { nome: 'Bernado', idade: 23, profissao: 'Medico', cidade: 'Recife'},
    { nome: 'Brenda', idade: 52, profissao: 'Escritora', cidade: 'Salvador'}
];
console.log("===================") 
console.log("for...in") 
console.log("===================") 

for (const indice in pessoas) {
const pessoa = pessoas[indice];
console.log(`
Nome: ${pessoa.nome}
Idade: ${pessoa.idade}
Profissão: ${pessoa.profissao}
Cidade: ${pessoa.cidade}
====================================
`);
}

console.log("===================") 
console.log("for...of")
console.log("===================") 

for (const pessoa of pessoas) {
console.log(`
Nome: ${pessoa.nome}
Idade: ${pessoa.idade}
Profissão: ${pessoa.profissao}
Cidade: ${pessoa.cidade}
====================================
`);
}