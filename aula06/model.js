// model.js - Aula 06: Customer, Order, Arquivo de Configurações e Encriptação de Senha
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Função para criar um cliente
const createCustomer = (nome, email, senha) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?)`;
        db.run(sql, [nome, email, senha], function (err) {
            if (err) {
                return reject(err);
            }
            resolve({ id: this.lastID, nome, email });
        });
    });
};

// Função para criar um pedido
const createOrder = (customerId, produtoId, quantidade) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO pedidos (customer_id, produto_id, quantidade) VALUES (?, ?, ?)`;
        db.run(sql, [customerId, produtoId, quantidade], function (err) {
            if (err) {
                return reject(err);
            }
            resolve({ id: this.lastID, customerId, produtoId, quantidade });
        });
    });
};

/* 
    Comentário explicativo sobre como ficaria no MongoDB usando Mongoose:
    
    1. Para usar o MongoDB, seria necessário criar um esquema (schema) para "clientes" e "pedidos".
    2. Mongoose seria utilizado para modelar os dados.

    Exemplo de esquema e funções no MongoDB:

    const mongoose = require('mongoose');

    // Esquema para cliente
    const CustomerSchema = new mongoose.Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        senha: { type: String, required: true }
    });

    const Customer = mongoose.model('Customer', CustomerSchema);

    // Esquema para pedido
    const OrderSchema = new mongoose.Schema({
        customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
        produtoId: { type: String, required: true },
        quantidade: { type: Number, required: true }
    });

    const Order = mongoose.model('Order', OrderSchema);

    // Função para criar cliente no MongoDB
    const createCustomer = async (nome, email, senha) => {
        try {
            const customer = new Customer({ nome, email, senha });
            await customer.save();
            return customer;
        } catch (err) {
            throw err;
        }
    };

    // Função para criar pedido no MongoDB
    const createOrder = async (customerId, produtoId, quantidade) => {
        try {
            const order = new Order({ customerId, produtoId, quantidade });
            await order.save();
            return order;
        } catch (err) {
            throw err;
        }
    };
*/

module.exports = {
    createCustomer,
    createOrder
};

