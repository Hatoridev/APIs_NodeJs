// model.js - Aula 07: Enviando E-mail, Upload de Imagem, Autenticação, Recuperando Dados
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Função para recuperar dados do cliente
const getCustomerByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM clientes WHERE email = ?`;
        db.get(sql, [email], (err, row) => {
            if (err) {
                return reject(err);
            }
            resolve(row);
        });
    });
};

// Função para autenticação (exemplo simples com verificação de email e senha)
const authenticateCustomer = (email, senha) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM clientes WHERE email = ? AND senha = ?`;
        db.get(sql, [email, senha], (err, row) => {
            if (err) {
                return reject(err);
            }
            if (row) {
                resolve(row);
            } else {
                reject(new Error('Credenciais inválidas'));
            }
        });
    });
};

/* 
    Comentário explicativo sobre como ficaria no MongoDB usando Mongoose:

    Para o MongoDB, a autenticação e recuperação de dados seriam feitas com Mongoose.

    Exemplo de função para recuperar cliente por e-mail no MongoDB:

    const Customer = require('./models/Customer'); // Modelo do cliente

    const getCustomerByEmail = async (email) => {
        try {
            const customer = await Customer.findOne({ email });
            return customer;
        } catch (err) {
            throw err;
        }
    };

    Exemplo de autenticação no MongoDB:

    const authenticateCustomer = async (email, senha) => {
        try {
            const customer = await Customer.findOne({ email, senha });
            if (!customer) {
                throw new Error('Credenciais inválidas');
            }
            return customer;
        } catch (err) {
            throw err;
        }
    };
*/

module.exports = {
    getCustomerByEmail,
    authenticateCustomer
};

