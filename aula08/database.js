// Configuração do banco de dados com SQLite
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

// Criação da tabela "usuarios"
db.serialize(() => {
    db.run(`
        CREATE TABLE usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL
        )
    `);

    db.run(`
        INSERT INTO usuarios (nome, email, senha)
        VALUES ('Joao', 'Joao@exemplo.com', '123456')
    `);
});

module.exports = db;

/* 
Como seria no MongoDB:

const mongoose = require("mongoose");

// Conexão com o MongoDB
mongoose.connect("mongodb://localhost:27017/meubanco", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao MongoDB!");
}).catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
});

// Modelo "Usuario" com Mongoose
const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
*/

