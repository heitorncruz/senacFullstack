# Atividade Prática: Testando um Middleware JWT Sem Express
 
## Objetivo
 
Nesta atividade vamos aprender como funciona um middleware de autenticação utilizando JWT (JSON Web Token).
 
Ao final da prática você será capaz de:
 
- Entender como um middleware funciona.
- Gerar um token JWT.
- Validar um token JWT.
- Simular uma requisição sem precisar criar rotas no Express.
- Entender o papel dos objetos `req`, `res` e `next`.
 
---
 
# Cenário
 
Imagine que uma API possui uma rota protegida.
 
Antes de permitir o acesso, o sistema precisa verificar se o usuário enviou um token válido.
 
Essa validação será feita pelo middleware abaixo.
 
---
 
# Passo 1 - Criar o Arquivo
 
Crie um arquivo chamado:
 
```text
testeMiddleware.js
```
 
---
 
# Passo 2 - Importar as Bibliotecas
 
Adicione o código:
 
```js
const jwt = require('jsonwebtoken');
require('dotenv').config();
```
 
---
 
## O que esse código faz?
 
### Linha 1
 
```js
const jwt = require('jsonwebtoken');
```
 
Importa a biblioteca responsável por:
 
- Criar tokens
- Validar tokens
- Ler informações dos tokens
 
---
 
### Linha 2
 
```js
require('dotenv').config();
```
 
Carrega as variáveis do arquivo:
 
```text
.env
```
 
Exemplo:
 
```env
JWT_SECRET=minha_chave_super_secreta
```
 
Essa chave será utilizada para:
 
- Criar tokens
- Validar tokens
 
---
 
# Passo 3 - Criar o Middleware
 
Adicione:
 
```js
exports.login = (req, res, next) => {
 
  const token = req.headers.authorization;
 
  if (!token) {
    return res.status(401).json({
      msg: 'Sem token'
    });
  }
 
  try {
 
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
 
    req.usuarioId = decoded.id;
 
    next();
 
  } catch (err) {
 
    return res.status(401).json({
      msg: 'Token inválido'
    });
 
  }
};
```
 
---
 
# Entendendo o Middleware
 
## Capturando o Token
 
```js
const token = req.headers.authorization;
```
 
Lê o token enviado no cabeçalho da requisição.
 
Exemplo:
 
```http
Authorization: abc123
```
 
---
 
## Verificando se o Token Existe
 
```js
if (!token)
```
 
Verifica se o token foi enviado.
 
Se não existir:
 
```js
return res.status(401).json({
  msg: 'Sem token'
});
```
 
---
 
## Status 401
 
```text
401 Unauthorized
```
 
Significa:
 
```text
Usuário não autenticado.
```
 
---
 
## Validando o Token
 
```js
jwt.verify(
  token,
  process.env.JWT_SECRET
);
```
 
Essa função verifica:
 
- Assinatura
- Integridade
- Validade
 
Se o token estiver alterado ou expirado, será gerado um erro.
 
---
 
## Salvando o ID do Usuário
 
```js
req.usuarioId = decoded.id;
```
 
Supondo:
 
```js
decoded = {
  id: 1
}
```
 
Resultado:
 
```js
req.usuarioId = 1;
```
 
Agora qualquer controller poderá saber quem está autenticado.
 
---
 
## Próxima Etapa
 
```js
next();
```
 
Permite que a execução continue.
 
Fluxo:
 
```text
Middleware
 ↓
next()
 ↓
Controller
```
 
---
 
# Passo 4 - Gerar um Token de Teste
 
Adicione:
 
```js
const tokenTeste = jwt.sign(
  { id: 1 },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
```
 
---
 
## O que esse código faz?
 
Cria um token contendo:
 
```js
{
  id: 1
}
```
 
---
 
## expiresIn
 
```js
{ expiresIn: '1h' }
```
 
Significa:
 
```text
O token será válido por 1 hora.
```
 
---
 
# Passo 5 - Simular uma Requisição
 
Adicione:
 
```js
const requisicaoTeste = {
  headers: {
    authorization: tokenTeste
  }
};
```
 
---
 
## O que estamos simulando?
 
Em uma aplicação real:
 
```http
GET /perfil
 
Authorization: eyJhbGc...
```
 
O Express criaria automaticamente:
 
```js
req.headers.authorization
```
 
Como não estamos usando Express agora, criamos esse objeto manualmente.
 
---
 
# Passo 6 - Simular o Objeto Response
 
Adicione:
 
```js
const respostaTeste = {
  status: codigo => ({
    json: dados =>
      console.log(
        'Resposta:',
        codigo,
        dados
      )
  })
};
```
 
---
 
## O que ele faz?
 
Simula:
 
```js
res.status().json()
```
 
Sem precisar iniciar um servidor.
 
Exemplo:
 
```js
res.status(401).json({
  msg: 'Sem token'
});
```
 
Saída:
 
```text
Resposta: 401 { msg: 'Sem token' }
```
 
---
 
# Passo 7 - Simular o next()
 
Adicione:
 
```js
const proximoPasso = () => {
  console.log(
    'Token válido. ID do usuário:',
    requisicaoTeste.usuarioId
  );
};
```
 
---
 
## O que ele faz?
 
Simula a próxima etapa da aplicação.
 
Em uma API real:
 
```text
Middleware
 ↓
Controller
```
 
Neste exemplo:
 
```text
Middleware
 ↓
proximoPasso()
```
 
---
 
# Passo 8 - Executar o Middleware
 
Adicione:
 
```js
exports.login(
  requisicaoTeste,
  respostaTeste,
  proximoPasso
);
```
 
---
 
## O que acontece?
 
O middleware receberá:
 
```js
req
```
 
↓
 
```js
requisicaoTeste
```
 
---
 
```js
res
```
 
↓
 
```js
respostaTeste
```
 
---
 
```js
next
```
 
↓
 
```js
proximoPasso
```
 
---
 
# Resultado Esperado
 
Se tudo estiver correto:
 
```text
Token válido. ID do usuário: 1
```
 
---
 
# Código Completo
 
```js
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
exports.login = (req, res, next) => {
 
  const token = req.headers.authorization;
 
  if (!token) {
    return res.status(401).json({
      msg: 'Sem token'
    });
  }
 
  try {
 
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
 
    req.usuarioId = decoded.id;
 
    next();
 
  } catch (err) {
 
    return res.status(401).json({
      msg: 'Token inválido'
    });
 
  }
};
 
const tokenTeste = jwt.sign(
  { id: 1 },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
 
const requisicaoTeste = {
  headers: {
    authorization: tokenTeste
  }
};
 
const respostaTeste = {
  status: codigo => ({
    json: dados =>
      console.log(
        'Resposta:',
        codigo,
        dados
      )
  })
};
 
const proximoPasso = () => {
  console.log(
    'Token válido. ID do usuário:',
    requisicaoTeste.usuarioId
  );
};
 
exports.login(
  requisicaoTeste,
  respostaTeste,
  proximoPasso
);
```
 
---
 
# Exercícios
 
## Exercício 1
 
Explique com suas palavras:
 
- O que é JWT?
- O que é um middleware?
- Para que serve o método `jwt.verify()`?
 
---
 
## Exercício 2
 
Altere:
 
```js
{ id: 1 }
```
 
para:
 
```js
{ id: 25 }
```
 
Execute novamente e anote o resultado.
 
---
 
## Exercício 3
 
Remova:
 
```js
authorization: tokenTeste
```
 
O que acontece?
 
Qual mensagem é exibida?
 
---
 
## Exercício 4
 
Troque:
 
```js
authorization: tokenTeste
```
 
por:
 
```js
authorization: 'abc123'
```
 
O que acontece?
 
Por que o middleware retorna erro?
 
---
 
## Exercício 5
 
Adicione ao token:
 
```js
{
  id: 1,
  nome: 'Isaque',
  perfil: 'admin'
}
```
 
Exiba essas informações no console após a validação do token.
 
---
 
# Desafio
 
Modifique o middleware para armazenar o objeto completo do usuário:
 
```js
req.usuario = decoded;
```
 
Depois exiba:
 
```js
console.log(req.usuario);
```
 
Analise a diferença entre armazenar:
 
```js
req.usuarioId
```
 
e
 
```js
req.usuario
```
 
e explique qual abordagem oferece mais informações para os controllers da aplicação.