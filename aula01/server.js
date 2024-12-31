// server.js - Aula 01

const express = require('express');  // Importando o express
const app = express();  // Criando o app do express
const port = process.env.PORT || 3000;  // Definindo a porta (com fallback para 3000)

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  // Enviando o arquivo HTML como resposta
});

// Normalizando a porta
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);  // Exibindo uma mensagem quando o servidor for iniciado
});

// Gerenciando erros do servidor
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log do erro
  res.status(500).send('Algo deu errado!');  // Resposta em caso de erro
});

