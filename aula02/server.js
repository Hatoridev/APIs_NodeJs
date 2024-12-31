// server.js - Aula 02

const express = require('express');
const app = require('./app');  // Importando o servidor de outro arquivo
const port = process.env.PORT || 3000;

// Inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

