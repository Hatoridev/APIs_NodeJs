# Aula 04 - Criando Produtos

## Objetivos da Aula

- Criar uma API simples para gerenciar produtos.
- Utilizar o banco de dados SQLite.
- Compreender como a estrutura seria semelhante usando o MongoDB.

## Como Rodar

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Para rodar o servidor:
    ```bash
    npm start
    ```

3. Acesse as rotas:
    - **POST** `/api/products` - Cria um novo produto
    - **GET** `/api/products` - Lista todos os produtos

## Como ficaria no MongoDB?

No MongoDB, teríamos um modelo de **Product** usando o Mongoose, e as funções de criar e listar produtos seriam implementadas com `Product.create()` e `Product.find()`. Veja o exemplo de código no arquivo `productController.js`.

## Estrutura de diretórios

- `productController.js`: Contém as funções para interagir com o banco de dados.
- `server.js`: Define o servidor e as rotas da API.
- `database.js`: Configura e gerencia a conexão com o banco de dados SQLite.

