// server.js - Aula 06: Customer, Order, Arquivo de Configurações e Encriptação de Senha
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const bodyParser = require('body-parser');
const { createCustomer, createOrder } = require('./model');
const config = require('./config'); // Arquivo de configurações

// Usando middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Rota para criar um cliente
app.post('/customer', async (req, res) => {
    const { nome, email, senha } = req.body;

    // Encriptando a senha
    bcrypt.hash(senha, 10, async (err, hashedPassword) => {
        if (err) return res.status(500).send("Erro ao encriptar a senha.");

        // Criando o cliente com a senha encriptada
        try {
            const customer = await createCustomer(nome, email, hashedPassword);
            res.status(201).send(customer);
        } catch (err) {
            res.status(500).send("Erro ao criar cliente.");
        }
    });
});

// Rota para criar um pedido
app.post('/order', async (req, res) => {
    const { customerId, produtoId, quantidade } = req.body;
    try {
        const order = await createOrder(customerId, produtoId, quantidade);
        res.status(201).send(order);
    } catch (err) {
        res.status(500).send("Erro ao criar pedido.");
    }
});

// Iniciando o servidor
app.listen(config.PORT, () => {
    console.log(`Servidor rodando na porta ${config.PORT}`);
});

