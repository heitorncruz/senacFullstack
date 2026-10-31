const mysql = require ('mysql2');
require('dotenv').config();

//CRIAR UM PULL DE CONEXÃO COM O MySQL 

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }

    console.log('Conexão bem-sucedida ao banco de dados MySQL!');
    connection.release();
});

module.exports = pool.promise();