const jwt = require('jsonwebtoken');
require('dotenv').config();
// const token = require('../utils/generateToken')

module.exports= (req, res, next) => {

    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer')) return res.status(401).json({msg: 'sem token!'});

    const token = authorization.slice(7)

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuarioId = decoded.id;
        next();
        
    } catch (error) {
        return res.status(401).json({msg: 'Token inválido!'})    
    }

    console.log("Token: ", token);
};

// // Requisição simulada com o token gerado do arquivo generateToken. 

// const requisicaoTeste = {
//     headers: {
//         authorization: token(1)
//     }
// };

// const respostaTeste = {
//     status: codigo => ({
//         json: dados => console.log('Resposta:', codigo, dados)
//     })
// };

// const proximoPasso = () => console.log('Token válido. Id do Usuário: ', requisicaoTeste.usuarioId)

// exports.login(requisicaoTeste, respostaTeste, proximoPasso)
