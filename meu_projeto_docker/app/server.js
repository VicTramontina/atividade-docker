const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Carregar as variáveis de ambiente
dotenv.config();

const app = express();
const port = 3000;

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,         // deve ser "db", conforme definido em .env e docker-compose.yml
  user: process.env.DB_USER,         // usuário definido no .env (não use "root")
  password: process.env.DB_PASSWORD, // senha definida no .env
  database: process.env.DB_NAME      // nome do banco de dados
});

// Tentar conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados com ID', connection.threadId);
});

app.get('/', (req, res) => {
  connection.query('SELECT "Hello, Docker + MySQL!" AS message', (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao consultar o banco de dados");
    }
    res.send(`<h1>${results[0].message}</h1>`);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
