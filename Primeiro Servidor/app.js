const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1> TESTE DE SERVIDOR </h1>`)
})

app.get('/json', (req, res) => {
    res.json({title: "Meu Primeiro Server", online: true})
})

app.listen(3000, () => {
    console.log("Estou VIVO!")
})

