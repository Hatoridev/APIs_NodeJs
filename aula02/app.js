// app.js - Aula 02

const express = require('express');
const app = express();

// Configurando middleware para servir arquivos estáticos
app.use(express.static('public'));

// Configuração de uma rota simples
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Iniciando o CRUD REST (ainda sem funcionalidades completas)
app.get('/api/products', (req, res) => {
    res.json({ message: "Lista de produtos (ainda não implementado)" });
});

module.exports = app;

