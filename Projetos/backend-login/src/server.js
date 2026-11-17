
require('dotenv').config();
const app = require('./app');
const db = require('./config/database');
 
const PORT = process.env.SERVER_PORT || 3000;
 
db.query('SELECT 1').then(() => {
    console.log('👌 MySQL conectado');
    app.listen(PORT, () => console.log(`✅ Servidor rodando em http://localhost:${PORT}`));
})
.catch(err => console.error('❌ Erro MySQL: ', err.message));