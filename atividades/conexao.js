const mysql = require('mysql');

function conectarAoBanco() {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Senha',
    database: 'seu_banco_de_dados'  
  });

  connection.connect((err) => {
    if (err) {
      return `Erro ao conectar ao banco de dados: ${err.message}`;
    }

    connection.end();
    return 'Conexão bem sucedida!';
  });
}

const mensagemConexao = conectarAoBanco();
console.log(mensagemConexao);

