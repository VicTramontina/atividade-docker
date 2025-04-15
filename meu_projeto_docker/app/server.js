const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = 3000;

// Criando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // Usando o nome do serviço "db" no Docker Compose
  user: process.env.DB_USER,      // Usuário do banco de dados
  password: process.env.DB_PASSWORD,  // Senha do banco de dados
  database: process.env.DB_NAME   // Nome do banco de dados
});

// Testando a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

app.get('/', (req, res) => {
  connection.query('SELECT "Hello, Docker + MySQL!" AS message', (err, results) => {
    if (err) throw err;
    res.send(`<h1>${results[0].message}</h1>`);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
