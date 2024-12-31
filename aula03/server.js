// server.js

const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Middleware para parser JSON
app.use(bodyParser.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados", err);
        return;
    }
    console.log("Conectado ao banco de dados SQLite");
});

// Criar tabela de produtos (apenas na primeira execução)
db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, description TEXT, price REAL)');

// Comentário para MongoDB:
// Se fosse utilizando MongoDB, a conexão seria feita com a biblioteca `mongoose`.

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/produtos', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Conectado ao MongoDB"))
//     .catch(err => console.log("Erro ao conectar ao MongoDB", err));

// Importar o controller
const productController = require('./productController');

// Rota para listar todos os produtos
app.get('/api/products', (req, res) => {
    // Para SQLite:
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows); // Retorna os produtos no formato JSON
    });

    // Comentário para MongoDB:
    // Para MongoDB, o código seria algo assim:
    // Product.find({}, (err, products) => {
    //     if (err) {
    //         return res.status(500).json({ error: err.message });
    //     }
    //     res.json(products); // Retorna os produtos no formato JSON
    // });
});

// Rota para criar um novo produto
app.post('/api/products', (req, res) => {
    const { name, description, price } = req.body;

    // Para SQLite:
    const query = `INSERT INTO products (name, description, price) VALUES (?, ?, ?)`;
    db.run(query, [name, description, price], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const newProduct = { id: this.lastID, name, description, price };
        res.status(201).json(newProduct); // Retorna o novo produto criado
    });

    // Comentário para MongoDB:
    // Para MongoDB, o código seria algo assim:
    // const newProduct = new Product({ name, description, price });
    // newProduct.save()
    //     .then(product => res.status(201).json(product))
    //     .catch(err => res.status(500).json({ error: err.message }));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

