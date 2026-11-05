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
 