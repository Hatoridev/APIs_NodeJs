const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./productController');
const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Criando o banco de dados SQLite
const db = require('./database');

// Rota para criar produto
app.post('/api/products', productController.createProduct);

// Rota para listar produtos
app.get('/api/products', productController.getAllProducts);

// Definindo a porta do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

