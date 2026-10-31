# 🚀 Projeto Backend Login com Node.js + MySQL + JWT
 
## Objetivo
 
Desenvolver uma API de autenticação utilizando:
 
- Node.js
- Express
- MySQL
- JWT (JSON Web Token)
- Bcrypt
- Dotenv
 
Ao final desta atividade, você será capaz de:
 
✅ Criar um servidor Node.js  
✅ Conectar ao MySQL  
✅ Cadastrar usuários  
✅ Realizar login  
✅ Gerar tokens JWT  
✅ Consumir a API com um Frontend simples
 
---
 
# 📁 Estrutura do Projeto
 
```text
backend-login/
├── .env
├── .gitignore
├── package.json
├── sql/
│   └── init.sql
├── public/
│   └── index.html
└── src/
    ├── server.js
    ├── app.js
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── authController.js
    ├── routes/
    │   └── authRoutes.js
    ├── middlewares/
    │   └── authMiddleware.js
    └── utils/
        └── generateToken.js
```
 
---
 
# Etapa 1 - Criar Projeto
 
Abra o terminal e execute:
 
```bash
mkdir backend-login
cd backend-login
 
mkdir public
mkdir sql
 
mkdir src
mkdir src/config
mkdir src/controllers
mkdir src/routes
mkdir src/middlewares
mkdir src/utils
 
npm init -y
```
 
---
