# Etapa 4 - Criação do Banco de Dados
 
## Objetivo
 
Nesta atividade, você irá criar a estrutura inicial do banco de dados do sistema de cadastro e login utilizando a extensão **Database Client** no Visual Studio Code.
 
Ao final da atividade, o sistema terá um banco de dados e uma tabela para armazenar informações dos usuários cadastrados.
 
---
 
## Competências Desenvolvidas
 
- Conectar o VS Code ao MySQL.
- Utilizar a extensão Database Client.
- Executar scripts SQL.
- Criar bancos de dados e tabelas.
- Verificar estruturas de bancos de dados relacionais.
 
---
 
## Pré-requisitos
 
Antes de iniciar a atividade, certifique-se de que possui:
 
- XAMPP instalado;
- Serviço MySQL funcionando;
- Visual Studio Code instalado;
- Extensão Database Client instalada no VS Code;
- Projeto organizado com a pasta `sql`;
- Arquivo `init.sql` criado na pasta `sql`.
 
---
 
## Desenvolvimento da Atividade
 
### Passo 1 - Iniciar o MySQL
 
1. Abra o XAMPP Control Panel.
2. Inicie o serviço MySQL.
3. Aguarde até que o serviço esteja ativo.
 
---
 
### Passo 2 - Abrir o Projeto
 
1. Abra o Visual Studio Code.
2. Abra a pasta do projeto.
3. Verifique se a extensão Database Client está instalada.
 
---
 
### Passo 3 - Criar a Conexão
 
1. Abra o painel da extensão Database Client.
2. Clique em **Create Connection**.
3. Selecione **MySQL**.
4. Informe os dados da conexão:
 
- Host: localhost
- Porta: 3306
- Usuário: root
- Senha: (deixe em branco, caso utilize a configuração padrão do XAMPP)
 
5. Salve a conexão.
6. Teste a conexão com o banco.
 
---
 
### Passo 4 - Executar o Script
 
Nesta etapa, deverá ser criado um banco de dados para armazenar as informações dos usuários cadastrados no sistema.
 
#### Banco de Dados
 
- Nome: `sistema_login`
 
#### Tabela
 
- Nome: `usuarios`
 
#### Campos da Tabela
 
- `id` → Identificador único do usuário.
- `nome` → Nome completo do usuário.
- `email` → Endereço de e-mail do usuário.
- `senha` → Senha do usuário (armazenada de forma segura).
- `criadoEm` → Data e hora de criação do cadastro.
 
#### Regras da Tabela
 
- O campo `id` deve ser a chave primária.
- O campo `id` deve ser gerado automaticamente a cada novo registro.
- O campo `nome` é obrigatório.
- O campo `email` é obrigatório e não pode ser duplicado.
- O campo `senha` é obrigatório.
- O campo `criadoEm` deve receber automaticamente a data e hora de criação do registro.
 
Após a execução do script, atualize a conexão no Database Client e verifique se o banco de dados e a tabela foram criados corretamente
 
---
 
### Passo 5 - Verificar a Estrutura
 
Após a execução:
 
1. Atualize a árvore de bancos no Database Client.
2. Localize o banco de dados criado.
3. Expanda suas tabelas.
4. Verifique se a tabela de usuários foi criada corretamente.
 
---
 
### Passo 6 - Validar a Criação
 
Confira se:
 
- O banco de dados existe.
- A tabela de usuários foi criada.
- Todos os campos estão presentes.
- A chave primária foi configurada.
- O identificador automático está funcionando corretamente.
 
---