
-- Criando o banco de dados "biblioteca"    
CREATE DATABASE biblioteca;

-- Escolhe o banco em que vamis travalhar / roda apenas a biblioteca 
USE biblioteca;

-- criando tabelas

CREATE TABLE editora (
    id_editora INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    rua VARCHAR(150),
    numero VARCHAR(10),
    cidade VARCHAR(100),
    uf char(2),
    cep CHAR(9),
    email VARCHAR(100)

);


CREATE TABLE autor (
    id_autor int AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE livro (
    isbn VARCHAR(17) PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    num_paginas INT,
    preco DECIMAL(10, 2),
    id_editora INT NOT NULL,
    FOREIGN KEY (id_editora) REFERENCES editora(id_editora)
);

CREATE TABLE copia (
    isbn VARCHAR(17),
    num_copia INT,
    data_aquisicao DATE,
    PRIMARY KEY (isbn, num_copia),
    FOREIGN KEY (isbn) REFERENCES livro(isbn)
);

CREATE TABLE livro_autor (
    isbn VARCHAR(17),
    id_autor INT,
    PRIMARY KEY (isbn, id_autor),
    FOREIGN KEY (isbn) REFERENCES livro(isbn),
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor)
);

CREATE TABLE autor_formacao (
    id_autor INT,
    formacao VARCHAR (80),
    PRIMARY KEY (id_autor, formacao),
    Foreign Key (id_autor) REFERENCES autor(id_autor)
);

SHOW TABLES;

DESCRIBE livro;



