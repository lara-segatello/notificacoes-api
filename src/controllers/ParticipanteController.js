const ParticipanteModel = require('../models/ParticipanteModel'); // importe o modelo

function index(req, res) {
    const lista = ParticipanteModel.listarTodos();
    res.json(lista);
}

function show(req, res) {
    const id = Number(req.params.id);
    const participante = ParticipanteModel.buscarPorId(id);
    if (!participante) {
        return res.status(404).json({ error: 'não encontrado' });
    }
    res.json(participante);
}

function store(req, res) {
    const { nome, email } = req.body || {};          // evita destructure de undefined
    if (!nome || !email) {
        return res.status(400).json({ error: 'nome e email são obrigatórios' });
    }
    const novo = ParticipanteModel.criar({ nome, email });
    res.status(201).json(novo);
}

function update(req, res) {
    const id = Number(req.params.id);
    const dados = req.body || {};
    const atualizado = ParticipanteModel.atualizar(id, dados);
    if (!atualizado) {
        return res.status(404).json({ error: 'não encontrado' });
    }
    res.json(atualizado);
}

function destroy(req, res) {
    const id = Number(req.params.id);
    const ok = ParticipanteModel.deletar(id);
    if (!ok) {
        return res.status(404).json({ error: 'não encontrado' });
    }
    res.status(204).end();
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};