# Etapa 7 - Criar Controller de Autenticação
 
## Arquivo: `src/controllers/authController.js`
 
---
 
# Objetivo da Etapa
 
Nesta etapa vamos criar o **Controller de Autenticação** da aplicação.
 
O Controller é responsável por receber as requisições enviadas pelo cliente, processar as regras de negócio e retornar uma resposta.
 
Neste arquivo teremos duas funcionalidades principais:
 
## Cadastro de Usuário
 
Responsável por:
 
1. Receber os dados enviados pelo cliente
2. Validar os campos
3. Verificar se o e-mail já existe
4. Criptografar a senha
5. Salvar o usuário no banco
 
---
 
## Login de Usuário
 
Responsável por:
 
1. Receber e-mail e senha
2. Procurar o usuário no banco
3. Comparar a senha informada com a senha criptografada
4. Gerar um token JWT
5. Retornar os dados do usuário autenticado
 
---

# Etapa 7 - Criar Controller de Autenticação
 
## Arquivo: `src/controllers/authController.js`
 
---
 
# Objetivo da Etapa
 
Nesta etapa vamos criar o **Controller de Autenticação** da aplicação.
 
O Controller é responsável por receber as requisições enviadas pelo cliente, processar as regras de negócio e retornar uma resposta.
 
Neste arquivo teremos duas funcionalidades principais:
 
## Cadastro de Usuário
 
Responsável por:
 
1. Receber os dados enviados pelo cliente
2. Validar os campos
3. Verificar se o e-mail já existe
4. Criptografar a senha
5. Salvar o usuário no banco
 
---
 
## Login de Usuário
 
Responsável por:
 
1. Receber e-mail e senha
2. Procurar o usuário no banco
3. Comparar a senha informada com a senha criptografada
4. Gerar um token JWT
5. Retornar os dados do usuário autenticado
 
---
 
# Passo 1 - Importar as Dependências
 
```js
const bcrypt = require('bcryptjs');
const db = require('../config/database');
const generateToken = require('../utils/generateToken');
```
 
## O que cada linha faz?
 
### bcrypt
 
```js
const bcrypt = require('bcryptjs');
```
 
Importa a biblioteca responsável por criptografar senhas.
 
Principais funções:
 
```js
bcrypt.hash()
```
 
Cria um hash da senha.
 
```js
bcrypt.compare()
```
 
Compara uma senha digitada com um hash armazenado.
 
---
 
### db
 
```js
const db = require('../config/database');
```
 
Importa a conexão com o banco de dados MySQL.
 
Permite executar comandos SQL como:
 
```js
db.query()
```
 
---
 
### generateToken
 
```js
const generateToken = require('../utils/generateToken');
```
 
Importa a função criada na etapa anterior.
 
Essa função será utilizada para gerar o JWT após o login.
 
---
 # Passo 2 - Criar Função de Cadastro
 
```js
exports.cadastrar = async (req, res) => {
```
 
## O que faz?
 
Cria uma função chamada:
 
```js
cadastrar
```
 
que ficará disponível para outros arquivos utilizarem.
 
A palavra:
 
```js
async
```
 
permite utilizar:
 
```js
await
```
 
para esperar respostas do banco de dados.
 
---

# Passo 3 - Receber os Dados
 
```js
const { nome, email, senha } = req.body;
```
 
## O que está acontecendo?
 
Os dados enviados pelo cliente chegam através do:
 
```js
req.body
```
 
Exemplo:
 
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}
```
 
Após a desestruturação:
 
```js
nome = "João"
email = "joao@email.com"
senha = "123456"
```
 
---
 
# Passo 4 - Validar Campos
 
```js
if (!nome || !email || !senha)
```
 
## O que faz?
 
Verifica se algum campo está vazio.
 
Exemplo:
 
```json
{
  "nome": "João",
  "email": ""
}
```
 
Resultado:
 
```js
return res.status(400).json({
  msg: "Preencha tudo"
});
```
 
---
 
 # Etapa 7 - Criar Controller de Autenticação
 
## Arquivo: `src/controllers/authController.js`
 
---
 
# Objetivo da Etapa
 
Nesta etapa vamos criar o **Controller de Autenticação** da aplicação.
 
O Controller é responsável por receber as requisições enviadas pelo cliente, processar as regras de negócio e retornar uma resposta.
 
Neste arquivo teremos duas funcionalidades principais:
 
## Cadastro de Usuário
 
Responsável por:
 
1. Receber os dados enviados pelo cliente
2. Validar os campos
3. Verificar se o e-mail já existe
4. Criptografar a senha
5. Salvar o usuário no banco
 
---
 
## Login de Usuário
 
Responsável por:
 
1. Receber e-mail e senha
2. Procurar o usuário no banco
3. Comparar a senha informada com a senha criptografada
4. Gerar um token JWT
5. Retornar os dados do usuário autenticado
 
---
 
# Passo 1 - Importar as Dependências
 
```js
const bcrypt = require('bcryptjs');
const db = require('../config/database');
const generateToken = require('../utils/generateToken');
```
 
## O que cada linha faz?
 
### bcrypt
 
```js
const bcrypt = require('bcryptjs');
```
 
Importa a biblioteca responsável por criptografar senhas.
 
Principais funções:
 
```js
bcrypt.hash()
```
 
Cria um hash da senha.
 
```js
bcrypt.compare()
```
 
Compara uma senha digitada com um hash armazenado.
 
---
 
### db
 
```js
const db = require('../config/database');
```
 
Importa a conexão com o banco de dados MySQL.
 
Permite executar comandos SQL como:
 
```js
db.query()
```
 
---
 
### generateToken
 
```js
const generateToken = require('../utils/generateToken');
```
 
Importa a função criada na etapa anterior.
 
Essa função será utilizada para gerar o JWT após o login.
 
---
 
# Passo 2 - Criar Função de Cadastro
 
```js
exports.cadastrar = async (req, res) => {
```
 
## O que faz?
 
Cria uma função chamada:
 
```js
cadastrar
```
 
que ficará disponível para outros arquivos utilizarem.
 
A palavra:
 
```js
async
```
 
permite utilizar:
 
```js
await
```
 
para esperar respostas do banco de dados.
 
---
 
# Passo 3 - Receber os Dados
 
```js
const { nome, email, senha } = req.body;
```
 
## O que está acontecendo?
 
Os dados enviados pelo cliente chegam através do:
 
```js
req.body
```
 
Exemplo:
 
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}
```
 
Após a desestruturação:
 
```js
nome = "João"
email = "joao@email.com"
senha = "123456"
```
 
---
 
# Passo 4 - Validar Campos
 
```js
if (!nome || !email || !senha)
```
 
## O que faz?
 
Verifica se algum campo está vazio.
 
Exemplo:
 
```json
{
  "nome": "João",
  "email": ""
}
```
 
Resultado:
 
```js
return res.status(400).json({
  msg: "Preencha tudo"
});
```
---
# Etapa 7 - Criar Controller de Autenticação
 
## Arquivo: `src/controllers/authController.js`
 
---
 
# Objetivo da Etapa
 
Nesta etapa vamos criar o **Controller de Autenticação** da aplicação.
 
O Controller é responsável por receber as requisições enviadas pelo cliente, processar as regras de negócio e retornar uma resposta.
 
Neste arquivo teremos duas funcionalidades principais:
 
## Cadastro de Usuário
 
Responsável por:
 
1. Receber os dados enviados pelo cliente
2. Validar os campos
3. Verificar se o e-mail já existe
4. Criptografar a senha
5. Salvar o usuário no banco
 
---
 
## Login de Usuário
 
Responsável por:
 
1. Receber e-mail e senha
2. Procurar o usuário no banco
3. Comparar a senha informada com a senha criptografada
4. Gerar um token JWT
5. Retornar os dados do usuário autenticado
 
---
 
# Código Completo
 
```js
const bcrypt = require('bcryptjs');
const db = require('../config/database');
const generateToken = require('../utils/generateToken');
 
// CADASTRAR
exports.cadastrar = async (req, res) => {
  const { nome, email, senha } = req.body;
 
  if (!nome || !email || !senha) {
    return res.status(400).json({ msg: "Preencha tudo" });
  }
 
  // Verifica se email já existe
  const [existe] = await db.query(
    'SELECT id FROM usuarios WHERE email = ?',
    [email]
  );
 
  if (existe.length > 0) {
    return res.status(400).json({
      msg: "Email ja cadastrado"
    });
  }
 
  // Criptografa senha
  const senhaHash = await bcrypt.hash(senha, 10);
 
  // Salva usuário
  await db.query(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senhaHash]
  );
 
  res.status(201).json({
    msg: "Usuario cadastrado com sucesso"
  });
};
 
// LOGIN
exports.login = async (req, res) => {
  const { email, senha } = req.body;
 
  // Busca usuário
  const [rows] = await db.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email]
  );
 
  const usuario = rows[0];
 
  if (!usuario) {
    return res.status(400).json({
      msg: "Usuario nao encontrado"
    });
  }
 
  // Compara senha
  const senhaOk = await bcrypt.compare(
    senha,
    usuario.senha
  );
 
  if (!senhaOk) {
    return res.status(400).json({
      msg: "Senha incorreta"
    });
  }
 
  // Gera token
  const token = generateToken(usuario.id);
 
  res.json({
    msg: "Login ok",
    token,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    }
  });
};
```
 
---
 
# Passo 1 - Importar as Dependências
 
```js
const bcrypt = require('bcryptjs');
const db = require('../config/database');
const generateToken = require('../utils/generateToken');
```
 
## O que cada linha faz?
 
### bcrypt
 
```js
const bcrypt = require('bcryptjs');
```
 
Importa a biblioteca responsável por criptografar senhas.
 
Principais funções:
 
```js
bcrypt.hash()
```
 
Cria um hash da senha.
 
```js
bcrypt.compare()
```
 
Compara uma senha digitada com um hash armazenado.
 
---
 
### db
 
```js
const db = require('../config/database');
```
 
Importa a conexão com o banco de dados MySQL.
 
Permite executar comandos SQL como:
 
```js
db.query()
```
 
---
 
### generateToken
 
```js
const generateToken = require('../utils/generateToken');
```
 
Importa a função criada na etapa anterior.
 
Essa função será utilizada para gerar o JWT após o login.
 
---
 
# Passo 2 - Criar Função de Cadastro
 
```js
exports.cadastrar = async (req, res) => {
```
 
## O que faz?
 
Cria uma função chamada:
 
```js
cadastrar
```
 
que ficará disponível para outros arquivos utilizarem.
 
A palavra:
 
```js
async
```
 
permite utilizar:
 
```js
await
```
 
para esperar respostas do banco de dados.
 
---
 
# Passo 3 - Receber os Dados
 
```js
const { nome, email, senha } = req.body;
```
 
## O que está acontecendo?
 
Os dados enviados pelo cliente chegam através do:
 
```js
req.body
```
 
Exemplo:
 
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}
```
 
Após a desestruturação:
 
```js
nome = "João"
email = "joao@email.com"
senha = "123456"
```
 
---
 
# Passo 4 - Validar Campos
 
```js
if (!nome || !email || !senha)
```
 
## O que faz?
 
Verifica se algum campo está vazio.
 
Exemplo:
 
```json
{
  "nome": "João",
  "email": ""
}
```
 
Resultado:
 
```js
return res.status(400).json({
  msg: "Preencha tudo"
});
```
 
---
 
# Passo 5 - Verificar se o E-mail Já Existe
 
```js
const [existe] = await db.query(
  'SELECT id FROM usuarios WHERE email = ?',
  [email]
);
```
 
## SQL executado
 
```sql
SELECT id
FROM usuarios
WHERE email = 'joao@email.com';
```
 
---
 
## O que significa o `?`
 
Evita SQL Injection.
 
Forma incorreta:
 
```js
'SELECT * FROM usuarios WHERE email = ' + email
```
 
Forma correta:
 
```js
'SELECT * FROM usuarios WHERE email = ?'
```
 
---
 
# Passo 6 - Validar Resultado da Consulta
 
```js
if (existe.length > 0)
```
 
Se o banco retornar:
 
```js
[
  {
    id: 1
  }
]
```
 
significa que já existe um usuário com esse e-mail.
 
Resposta:
 
```js
return res.status(400).json({
  msg: "Email ja cadastrado"
});
```
 
---
 
# Passo 7 - Criptografar a Senha
 
```js
const senhaHash = await bcrypt.hash(
  senha,
  10
);
```
 
---
 
## Primeiro parâmetro
 
```js
senha
```
 
Senha digitada pelo usuário.
 
Exemplo:
 
```text
123456
```
 
---
 
## Segundo parâmetro
 
```js
10
```
 
Quantidade de rounds de criptografia.
 
Quanto maior o valor:
 
- Mais segura será a senha
- Mais processamento será necessário
 
---
 
## Resultado
 
Senha original:
 
```text
123456
```
 
Hash gerado:
 
```text
$2a$10$AbCdEfGhIjKlMnOpQrStUv
```
 
---
 
# Passo 8 - Salvar Usuário no Banco
 
```js
await db.query(
  'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
  [nome, email, senhaHash]
);
```
 
---
 
## SQL executado
 
```sql
INSERT INTO usuarios
(nome, email, senha)
VALUES
(
  'João',
  'joao@email.com',
  '$2a$10$AbCdEfGhIjKlMnOpQrStUv'
);
```
 
---
 
# Passo 9 - Retornar Sucesso
 
```js
res.status(201).json({
  msg: "Usuario cadastrado com sucesso"
});
```
 
---
 
## Status 201
 
Significa:
 
```text
Created
```
 
Ou seja:
 
```text
Recurso criado com sucesso.
```
 
---
 
# Passo 10 - Criar Função de Login
 
```js
exports.login = async (req, res) => {
```
 
Responsável por autenticar usuários.
 
---
 
# Passo 11 - Receber E-mail e Senha
 
```js
const { email, senha } = req.body;
```
 
Exemplo:
 
```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```
 
---
 
# Passo 12 - Procurar Usuário
 
```js
const [rows] = await db.query(
  'SELECT * FROM usuarios WHERE email = ?',
  [email]
);
```
 
---
 
## SQL executado
 
```sql
SELECT *
FROM usuarios
WHERE email = 'joao@email.com';
```
 
---
 
# Passo 13 - Obter Primeiro Resultado
 
```js
const usuario = rows[0];
```
 
Exemplo:
 
```js
[
  {
    id: 1,
    nome: "João",
    email: "joao@email.com",
    senha: "$2a$10$..."
  }
]
```
 
---
 
# Passo 14 - Verificar se o Usuário Existe
 
```js
if (!usuario)
```
 
Retorna:
 
```js
return res.status(400).json({
  msg: "Usuario nao encontrado"
});
```
 
---
 
# Passo 15 - Comparar Senha
 
```js
const senhaOk = await bcrypt.compare(
  senha,
  usuario.senha
);
```
 
---
 
## O que acontece?
 
Compara:
 
```text
123456
```
 
com
 
```text
$2a$10$AbCdEfGhIjKlMnOpQrStUv
```
 
---
 
## Retorno
 
```js
true
```
 
ou
 
```js
false
```
 
---
 
# Passo 16 - Validar Senha
 
```js
if (!senhaOk)
```
 
Retorna:
 
```js
return res.status(400).json({
  msg: "Senha incorreta"
});
```
 
---
 
# Passo 17 - Gerar Token JWT
 
```js
const token = generateToken(
  usuario.id
);
```
 
Exemplo:
 
```js
generateToken(1);
```
 
Resultado:
 
```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
 
---
 
# Passo 18 - Retornar Resposta do Login
 
```js
res.json({
  msg: "Login ok",
  token,
  usuario: {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email
  }
});
```
 
---
 
## Resposta enviada
 
```json
{
  "msg": "Login ok",
  "token": "eyJhbGc...",
  "usuario": {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com"
  }
}
```
 
---
 
# Fluxo Visual do Cadastro
 
```text
Cliente envia dados
        ↓
Controller recebe
        ↓
Valida campos
        ↓
Verifica email
        ↓
Criptografa senha
        ↓
Salva no banco
        ↓
Retorna sucesso
```
 
---
 
# Fluxo Visual do Login
 
```text
Cliente envia email e senha
          ↓
Controller recebe
          ↓
Busca usuário
          ↓
Compara senha
          ↓
Gera JWT
          ↓
Retorna token
          ↓
Cliente armazena token
          ↓
Envia token nas próximas requisições
```
 
---
 
# Exercícios Práticos
 
## Exercício 1
 
Explique com suas palavras o que faz:
 
```js
bcrypt.hash(senha, 10);
```
 
---
 
## Exercício 2
 
Qual a função do código abaixo?
 
```js
if (!nome || !email || !senha)
```
 
---
 
## Exercício 3
 
Complete:
 
```js
const token = ____________________;
```
 
---
 
## Exercício 4
 
Complete o SQL:
 
```sql
SELECT *
FROM usuarios
WHERE __________ = ?
```
 
---
 
## Exercício 5
 
Qual a diferença entre:
 
```js
bcrypt.hash()
```
 
e
 
```js
bcrypt.compare()
```
 
---
 
## Exercício 6
 
Explique por que não devemos armazenar senhas em texto puro no banco de dados.
 
---
 
## Exercício 7
 
Descreva o fluxo completo de login desde o envio do formulário até a geração do JWT.
 
---
 
# Gabarito
 
## Exercício 1
 
Criptografa a senha utilizando bcrypt com custo de processamento 10.
 
---
 
## Exercício 2
 
Verifica se algum campo obrigatório está vazio.
 
---
 
## Exercício 3
 
```js
generateToken(usuario.id)
```
 
---
 
## Exercício 4
 
```sql
email
```
 
---
 
## Exercício 5
 
```js
bcrypt.hash()
```
 
gera um hash criptografado.
 
```js
bcrypt.compare()
```
 
compara uma senha digitada com o hash salvo no banco.
 
---
 
## Exercício 6
 
Porque qualquer pessoa com acesso ao banco conseguiria visualizar todas as senhas dos usuários.
 
---
 
## Exercício 7
 
```text
1. Usuário envia email e senha.
2. Controller recebe os dados.
3. Sistema busca o usuário.
4. Sistema compara a senha.
5. Sistema gera o JWT.
6. Sistema retorna o token.
7. Cliente utiliza o token nas próximas requisições.
```
 
---
✅ Ao concluir esta etapa, o aluno será capaz de criar um sistema completo de cadastro e login utilizando Node.js, Express, MySQL, bcrypt para criptografia de senhas e JWT para autenticação.
 