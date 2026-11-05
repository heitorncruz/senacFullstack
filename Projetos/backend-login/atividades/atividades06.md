# Etapa 6 - Criar Gerador de Token
 
O arquivo generateToken.js tem a responsabilidade de criar um JWT (JSON Web Token).
 
Um JWT funciona como um "crachá digital" do usuário.
 
Após fazer login com sucesso, o sistema cria esse token e entrega para o navegador. Nas próximas requisições, o usuário envia esse token para provar que já está autenticado.
 
## Arquivo: src/utils/generateToken.js
 
```js
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
function generateToken(id) {
 
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn:  process.env.JWT_EXPIRES_IN}
    )
};
 
module.exports = generateToken;
 
// console.log("Token gerado: ", generateToken(1));
```
 
---