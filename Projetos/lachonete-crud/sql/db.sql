CREATE DATABASE IF NOT EXISTS lanchonete;

USE lanchonete;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(190) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    qtd INT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

)

SHOW TABLES;

DESCRIBE usuarios;
DESCRIBE produtos;

INSERT INTO usuarios (nome, email, senha) VALUES
('Heitor Gazola', 
'heitor.gazola@senac.br', 
'123456');

INSERT INTO produtos (nome, preco, qtd, categoria) VALUES
('Hamburguer', 
15.00, 
5, 
'Lanches');

SELECT * FROM usuarios;
SELECT * FROM produtos;
