// Importando os pacotes necessários
const express = require('express');
const bodyParser = require('body-parser');
const { getProductById, updateProduct, deleteProduct } = require('./model');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rota para atualizar um produto
app.put('/produto/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await updateProduct(productId, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto.' });
  }
});

// Rota para excluir um produto
app.delete('/produto/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await deleteProduct(productId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o produto.' });
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

