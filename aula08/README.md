# Aula 08 - Refresh Token, Autorização e Publicação da API

Nesta aula, implementamos as funcionalidades de refresh token e autorização utilizando JSON Web Tokens (JWT). Além disso, concluímos a API para pronta publicação.

---

## Como Rodar no Termux

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Inicie o servidor**:
   ```bash
   node server.js
   ```

3. **Acesse as rotas disponíveis**:
   - **POST** `/auth`  
     Gera tokens de acesso e refresh para autenticação.
   - **POST** `/refresh`  
     Gera um novo token de acesso utilizando o refresh token.
   - **GET** `/dados`  
     Retorna informações protegidas; requer um token JWT válido no cabeçalho de autorização.

---

## Para Que Serve Cada Arquivo?

- **`server.js`**:  
  Contém a configuração do servidor e a lógica para autenticação, refresh token e autorização.

- **`database.js`**:  
  Gerencia a conexão com o banco de dados SQLite e define a tabela `usuarios`. Inclui um comentário sobre como seria implementado no MongoDB.

- **`index.html`**:  
  Uma página HTML simples que exibe informações sobre as rotas da API.

- **`styles.css`**:  
  Arquivo CSS para estilizar o `index.html`.

---

## Estrutura do Banco de Dados

O banco de dados foi implementado utilizando SQLite, com uma tabela chamada `usuarios` para armazenar as informações dos usuários (id, nome, email e senha).

**No MongoDB**:
- Utilizaríamos o Mongoose para definir um modelo `Usuario`.
- As operações seriam realizadas com os métodos `create()` e `find()`.

Confira no arquivo `database.js` o comentário detalhado sobre como a configuração seria realizada no MongoDB.
```
