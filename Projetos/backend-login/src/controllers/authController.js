const bcrypt = require('bcryptjs');
const database = require('../config/database');
const generateToken = require('../utils/generateToken')

//Cadastrar

exports.cadastrar = async (req, res) => {

    const { nome, email, senha } = req.body

    if ( !nome || !email || !senha) return res.status(400).json({ msg: "Preencha todos os campos!!"});

    // Verifica se email já existe 
    const [existe] = await database.query('SELECT id FROM usuarios WHERE email = ?', [email] );

    if (existe.length > 0 ) return console.log("Email ja cadastrado");

    // Criptografia da senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // salva no banco

    database.query('INSERT INTO usuarios (nome, email, senha) VALUE (?, ?, ?)', [nome, email, senhaHash])

    console.log(senhaHash);
};


// exemplo de dados enviados do front end

this.cadastrar (
    {
        body: {
            nome: "Heitor",
            email: "1",
            senha: "147"
        }
    },

    {
        status: codigo => ({ json: dados => console.log (codigo, dados) })
    }


);

