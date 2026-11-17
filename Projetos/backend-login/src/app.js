
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
 
app.use(cors());
app.use(express.json());
app.use(authRoutes);
 
// Rota de teste para saber se backend esta vivo
app.get('/', (req, res) => res.json({ msg: "Backend rodando na rota principal" }));
 
const authMiddleware = require('./middlewares/authMiddleware');
 
 
app.get('/api/perfil', authMiddleware, (req, res) => res.json({ mgs: "Você está logado", id: req.usuarioId }));
 
 
module.exports = app;