const express = require('express');
const { Pool } = require('pg');
const app = express();

// Configurações de conexão com o banco de dados usando variáveis de ambiente
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.get('/', async (req, res) => {
  try {
    // Conecta ao banco e executa uma consulta simples
    const result = await pool.query("SELECT 'Hello, Docker + PostgreSQL!' AS message");
    res.send(`<h1>${result.rows[0].message}</h1>`);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error connecting to database');
  }
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
