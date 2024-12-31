// productController.js

// Função para listar todos os produtos
const getAllProducts = (req, res) => {
    // Aqui você consultaria o banco de dados, por enquanto simula a resposta.
    const products = [
        { id: 1, name: "Produto 1", description: "Descrição do Produto 1", price: 100 },
        { id: 2, name: "Produto 2", description: "Descrição do Produto 2", price: 200 }
    ];
    res.json(products); // Retorna os produtos no formato JSON
};

// Função para criar um novo produto
const createProduct = (req, res) => {
    const { name, description, price } = req.body;
    // Lógica para salvar no banco de dados (simulação)
    const newProduct = { id: Date.now(), name, description, price };
    // Simula um "insert" no banco
    res.status(201).json(newProduct); // Retorna o novo produto criado
};

// Exporte as funções
module.exports = { getAllProducts, createProduct };

