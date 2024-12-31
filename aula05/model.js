const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Função para atualizar um produto
const updateProduct = async (id, data) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE produtos SET nome = ?, preco = ?, descricao = ? WHERE id = ?`;
    db.run(sql, [data.nome, data.preco, data.descricao, id], function (err) {
      if (err) {
        return reject(err);
      }
      resolve({ id, ...data });
    });
  });
};

// Função para excluir um produto
const deleteProduct = async (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM produtos WHERE id = ?`;
    db.run(sql, [id], function (err) {
      if (err) {
        return reject(err);
      }
      resolve({ message: 'Produto excluído com sucesso' });
    });
  });
};

// Função para pegar um produto pelo ID
const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM produtos WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
};

// Comentário explicativo sobre como ficaria no MongoDB:
// Para o MongoDB, as funções seriam implementadas da seguinte forma:

// Exemplo para atualização de produto usando Mongoose (MongoDB):
// const updateProduct = async (id, data) => {
//   try {
//     const product = await Product.findByIdAndUpdate(id, data, { new: true });
//     return product;
//   } catch (error) {
//     throw error;
//   }
// };

// Exemplo para exclusão de produto usando Mongoose (MongoDB):
// const deleteProduct = async (id) => {
//   try {
//     const product = await Product.findByIdAndDelete(id);
//     return { message: 'Produto excluído com sucesso' };
//   } catch (error) {
//     throw error;
//   }
// };

// Exemplo para obter um produto pelo ID usando Mongoose (MongoDB):
// const getProductById = async (id) => {
//   try {
//     const product = await Product.findById(id);
//     return product;
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  getProductById,
  updateProduct,
  deleteProduct
};

