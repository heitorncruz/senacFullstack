const bcrypt = require('bcryptjs');
const db = require('../config/database');
const generateToken = require('../utils/generateToken');
 
//CADASTRAR
exports.cadastrar = async (req, res) => {
 
    const { nome, email, senha } = req.body;
 
    if (!nome || !email || !senha) return res.status(400).json({ msg: "Preencha todos os campos!!!" });
 
    // 1 - Verifica se email ja existe
    const [existe] = await db.query('SELECT id FROM usuarios WHERE email = ?', [email]);
 
    if (existe.length > 0) return res.status(400).json({ msg: "Email já cadastrado!!!" });
 
    //2 - Criptografar senha
    const senhaHash = await bcrypt.hash(senha, 10);
 
    //3 - salva no banco
   db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senhaHash]);
 
   res.status(201).json({ msg: `Usuário ${nome} cadastrado com sucesso!`});
   
};
 
//LOGIN
exports.login = async (req, res) => {
 
    const { email, senha } = req.body;
 
    if (!email || !senha) return res.status(400).json({ msg: "Preencha todos os campos !"});
 
    // 1 - Busca Usuário
    const [rows] =  await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    const usuario = rows[0];
 
    // if (!usuario) return res.status(400).json({ msg: "usuario ou Senha incorretos!"});
 
    // 2 - Comparar a senha
    const senhaOk = await bcrypt.compare(senha, usuario.senha);
 
    if (!senhaOk || !usuario) return res.status(400).json({ msg: "E-mail ou Senha inválidos!"});
 
    // 3 - Gerar token
    const token = generateToken(usuario.id);
 
    res.status(201).json({
        msg: "Login ok",
        token,
        usuario: {  id: usuario.id,
                    nome: usuario.nome,
                    Email: usuario.email}
    });
 
};
 
 
// requisição simulada do fronend
// this.login(
//     {
//         body: {
//             email: 'isaque@gmail.com',
//             senha: '123456'
//         }
//     },
//     {
//         status: codigo => ({ json: dados => console.log(codigo, dados) })
//     }
// );
 
