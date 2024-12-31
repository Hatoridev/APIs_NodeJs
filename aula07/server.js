// server.js - Aula 07
const express = require('express');
const bodyParser = require('body-parser');
const { getCustomerByEmail, authenticateCustomer } = require('./model');

const app = express();
app.use(bodyParser.json());

// Rota para autenticação
app.post('/auth', async (req, res) => {
    const { email, senha } = req.body;
    try {
        const customer = await authenticateCustomer(email, senha);
        res.status(200).json({ message: 'Autenticação bem-sucedida', customer });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

// Rota para recuperar dados do cliente
app.get('/customer/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const customer = await getCustomerByEmail(email);
        if (!customer) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Inicializando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

