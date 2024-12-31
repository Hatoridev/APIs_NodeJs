// Importando o banco de dados SQLite
const db = require('./database');

// Função para criar um novo produto
exports.createProduct = (req, res) => {
    const { name, description, price, slug, tag } = req.body;

    // Inserir no banco de dados (SQLite)
    db.run('INSERT INTO products (name, description, price, slug, tag) VALUES (?, ?, ?, ?, ?)', [name, description, price, slug, tag], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, description, price, slug, tag });
    });

    // Comentário: No MongoDB, seria algo como:
    // Product.create({ name, description, price, slug, tag })
    //    .then(product => res.status(201).json(product))
    //    .catch(err => res.status(500).json({ error: err.message }));
};

// Função para listar todos os produtos
exports.getAllProducts = (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });

    // Comentário: No MongoDB, seria algo como:
    // Product.find().then(products => res.status(200).json(products))
    //    .catch(err => res.status(500).json({ error: err.message }));
};

