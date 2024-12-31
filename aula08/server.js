const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const db = require("./database");

const app = express();
app.use(bodyParser.json());

// Função para gerar tokens JWT
const generateToken = (user) => {
    const accessToken = jwt.sign({ id: user.id, email: user.email }, "chave_secreta", { expiresIn: "15m" });
    const refreshToken = jwt.sign({ id: user.id, email: user.email }, "chave_secreta_refresh", { expiresIn: "7d" });
    return { accessToken, refreshToken };
};

// Rota de autenticação
app.post("/auth", (req, res) => {
    const { email, senha } = req.body;
    db.get("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha], (err, user) => {
        if (err) return res.status(500).json({ error: "Erro no servidor." });
        if (!user) return res.status(401).json({ error: "Credenciais inválidas." });

        const tokens = generateToken(user);
        res.json(tokens);
    });
});

// Rota para gerar novo token de acesso com refresh token
app.post("/refresh", (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(400).json({ error: "Refresh token não fornecido." });

    try {
        const decoded = jwt.verify(refreshToken, "chave_secreta_refresh");
        const newTokens = generateToken(decoded);
        res.json(newTokens);
    } catch {
        res.status(401).json({ error: "Refresh token inválido ou expirado." });
    }
});

// Rota protegida (autorização)
app.get("/dados", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Token não fornecido." });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "chave_secreta");
        res.json({ message: "Dados acessados com sucesso!", user: decoded });
    } catch {
        res.status(401).json({ error: "Token inválido ou expirado." });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

