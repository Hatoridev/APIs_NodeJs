// Importando a biblioteca SQLite
const sqlite3 = require('sqlite3').verbose();

// Criando e abrindo o banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados', err.message);
    } else {
        console.log('Banco de dados SQLite conectado');
    }
});

// Criando a tabela de produtos, se não existir
db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL,
    slug TEXT,
    tag TEXT
);`);

// Comentário: No MongoDB, você criaria um modelo, como:
 // const Product = mongoose.model('Product', new mongoose.Schema({
 //   name: String,
 //   description: String,
 //   price: Number,
 //   slug: String,
 //   tag: String
 // }));

module.exports = db;

