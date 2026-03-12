// src/app.js
const express = require("express");
const app = express();

// Middleware para ler JSON no body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rotas
const eventoRoutes = require("./routes/eventoRoutes");
const ParticipanteRoutes = require("./routes/ParticipanteRoutes");
const InscricaoRoutes = require("./routes/InscricaoRoutes");
// Usar rotas com prefixo
app.use("/eventos", eventoRoutes);
app.use("/participantes", ParticipanteRoutes);
app.use("/inscricoes",  InscricaoRoutes);
// Rota raiz (informativa)
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Notificações",
        rotas: {
            eventos: "/eventos",
            participantes:"/participantes",
            inscricoes: '/inscricoes'
        },
    });
});
module.exports = app;