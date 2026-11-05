const bcrypt = require('bcryptjs');
const database = require ('../config/database');
const generateToken = require('../utils/generateToken')

//Cadastrar

const cadastrar = async (req, res) => {

    const { nome, email, senha } = req.body

    if ( !nome || !email || !senha) return res.status(400).json({ msg: "Preencha todos os campos!!"});

    console.log(req.body)
};


// exemplo de dados enviados do front end
cadastrar ({
    body: {
        nome: "Heitor",
        email: "heitor@gmail.com",
        senha: "123456"
    }
});