// src/controllers/InscricaoController.js
const InscricaoModel = require("../models/InscricaoModel");

// POST /inscricoes — criar uma inscrição
function store(req, res) {
const { eventoId, participanteId } = req.body;

if (!eventoId || !participanteId) {
return res
.status(400)
.json({ erro: "eventoId e participanteId são obrigatórios" });
}

const resultado = InscricaoModel.criar(
parseInt(eventoId),
parseInt(participanteId),
);

// Se o resultado tem a propriedade "erro", algo deu errado
if (resultado.erro) {
return res.status(400).json(resultado);
}

res.status(201).json(resultado);
}

// GET /inscricoes — listar todas
function index(req, res) {
    // Model defines listarTodas, not listar; use correct function name
    const inscricoes = InscricaoModel.listarTodas();
    res.json(inscricoes);
}

// GET /inscricoes/evento/:eventoId — listar inscrições de um evento
function listarPorEvento(req, res) {
const eventoId = parseInt(req.params.eventoId);

const inscricoes = InscricaoModel.listarPorEvento(eventoId);

res.json(inscricoes);
}

// PATCH /inscricoes/:id/cancelar — cancelar uma inscrição
function cancelar(req, res) {
const id = parseInt(req.params.id);

const inscricao = InscricaoModel.cancelar(id);

// Se retornar null, responda 404
if (!inscricao) {
return res.status(404).json({ erro: "Inscrição não encontrada" });
}

// Se retornar a inscrição, responda com ela
res.json(inscricao);
}

module.exports = { store, index, listarPorEvento, cancelar };