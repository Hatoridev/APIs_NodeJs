# Aula 07 - Enviando E-mail, Upload de Imagem, Autenticação e Recuperando Dados

## Como Rodar no Termux

1. Instale as dependências:  
   ```bash
   npm install
   ```  

2. Inicie o servidor:  
   ```bash
   node server.js
   ```  

3. Acesse as rotas disponíveis:  
   - **POST** `/auth` - Autentica um usuário com e-mail e senha.  
   - **GET** `/customer/:email` - Retorna os dados de um cliente com base no e-mail.

## Estrutura dos Arquivos

- **`server.js`**: Define o servidor, configura as rotas e implementa as funcionalidades principais.  
- **`model.js`**: Gerencia o banco de dados SQLite, incluindo a criação da tabela e a interação com os dados.  
- **`index.html`**: Interface simples para exibir informações sobre as rotas e funcionalidades da aula.  
- **`styles.css`**: Estilização básica para a interface HTML.
