# Aula 06 - Customer, Order, Arquivo de Configurações e Encriptação de Senha

Nesta aula, aprendemos a implementar funcionalidades relacionadas ao gerenciamento de clientes (customers) e pedidos (orders). Além disso, adicionamos o arquivo de configurações e implementamos a encriptação de senhas usando o `bcrypt`.

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
   - **POST** `/api/customers`  
     Cria um novo cliente.
   - **GET** `/api/customers/:id`  
     Retorna as informações de um cliente específico pelo ID.
   - **POST** `/api/orders`  
     Cria um novo pedido.
   - **GET** `/api/orders/:id`  
     Retorna um pedido específico pelo ID.

---

## Para Que Serve Cada Arquivo?

- **`server.js`**:  
  Contém a configuração do servidor e as rotas da API para gerenciar clientes e pedidos.

- **`customerController.js`**:  
  Define as funções para criar e listar clientes.

- **`orderController.js`**:  
  Define as funções para criar e listar pedidos.

- **`config.js`**:  
  Arquivo de configurações que contém informações sensíveis, como a chave secreta para autenticação JWT.

- **`database.js`**:  
  Gerencia a conexão com o banco de dados SQLite e contém a criação das tabelas `customers` e `orders`.  
  Inclui um comentário sobre como a implementação seria no MongoDB.

- **`index.html`**:  
  Página HTML simples com uma interface para interagir com a API de clientes e pedidos.

- **`styles.css`**:  
  Arquivo CSS para estilizar o `index.html`.

---

## Estrutura do Banco de Dados

O banco de dados foi implementado com SQLite, contendo as tabelas `customers` (para clientes) e `orders` (para pedidos).

**No MongoDB**:
- No MongoDB, a tabela `customers` seria substituída por uma coleção chamada `customers`, e `orders` seria substituída por uma coleção chamada `orders`.  
- O Mongoose seria utilizado para modelar essas coleções e realizar operações como `create()`, `find()` e `findById()`.

Confira no arquivo `database.js` o comentário detalhado sobre como a implementação seria feita no MongoDB.
