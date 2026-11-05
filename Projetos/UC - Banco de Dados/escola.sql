CREATE DATABASE escola; 

USE escola;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    curso VARCHAR(50),
)

INSERT INTO alunos (nome, idade, curso) VALUES
('Maria', 20, 'Administração'),
('João', 22, 'Engenharia'),
('Ana', 19, 'Direito');

SELECT * FROM alunos WHERE curso = 'Administração';

-- 1. DDL: ALTER TABLE (mudar a estrutura da tabela) --
--- Adicionar  uma coluna --

ALTER TABLE livro ADD COLUMN ano_publicacao INT;

-- Mudar o tipo ou as regras de uma coluna --
ALTER TABLE livro MODIFY COLUMN titulo VARCHAR(200) NOT NULL;

-- Renomear uma coluna (nome antigo, nome novo, tipo)  -- 

ALTER TABLE livro CHANGE COLUMN num_paginas paginas INT;

-- .. e voltar ao nome original 

ALTER TABLE livro CHANGE COLUMN paginas num_paginas INT;

-- Remover uma coluna (os dados dela somem juntos) -- 

ALTER TABLE livro DROP COLUMN ano_publicacao;

-- 2. DML: UPDATE (mudar os dados que ja exisem) --
-- PRIMEIRO: Confere quem vai ser alterado

SELECT * FROM livro WHERE isbn = '978-85-000-0001-1';
