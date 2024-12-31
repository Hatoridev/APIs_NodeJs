# Aula 05 - Atualizando Produto, Excluindo e Validações

Nesta aula, aprendemos a implementar a atualização e exclusão de produtos, além de realizar validações nos dados. Também exploramos o uso de repositórios e a implementação de funções assíncronas com `async/await`.

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
   - **PUT** `/api/products/:id`  
     Atualiza um produto existente pelo ID.
   - **DELETE** `/api/products/:id`  
     Exclui um produto pelo ID.
   - **GET** `/api/products/:id`  
     Retorna um produto específico pelo ID.

---

## Para Que Serve Cada Arquivo?

- **`server.js`**:  
  Contém a configuração do servidor e as rotas da API para atualização e exclusão de produtos.

- **`productController.js`**:  
  Implementa as funções para criar, listar, atualizar e excluir produtos.

- **`database.js`**:  
  Gerencia a conexão com o banco de dados SQLite e contém a criação da tabela `products`.  
  Inclui um comentário sobre como a implementação seria no MongoDB.

- **`index.html`**:  
  Página HTML simples com uma interface para interagir com a API de produtos.

- **`styles.css`**:  
  Arquivo CSS para estilizar o `index.html`.

---

## Estrutura do Banco de Dados

O banco de dados foi implementado com SQLite e contém uma tabela chamada `products` para armazenar os produtos (id, nome, descrição, preço e tags).

**No MongoDB**:
- No MongoDB, a tabela seria substituída por uma coleção chamada `products`, utilizando o Mongoose para a modelagem e as operações de `create()`, `find()`, `findByIdAndUpdate()` e `findByIdAndDelete()`.

Confira no arquivo `database.js` o comentário detalhado sobre como a configuração seria feita no MongoDB.
