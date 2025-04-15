const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {
  connection.query('SELECT message FROM messages LIMIT 1', (err, results) => {
    if (err) {
      console.error('Error fetching message from database:', err);
      res.status(500).send('Error fetching message from database');
      return;
    }
    res.send(results[0].message);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
