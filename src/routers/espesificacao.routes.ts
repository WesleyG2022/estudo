import { Router } from "express"
import { expesificacaoRepository } from "../model/expesificacao/repository/expesificacao.repository";
import { criarExpisificacao } from "../services/expesificacao-categoria.service";


const expesificacoesRoutes = Router();

const expesificacoesRepository = new expesificacaoRepository()

expesificacoesRoutes.post('/', (req, res) => {
    try {
        const { nome, descricao } = req.body;
        const creatCategoriService = new criarExpisificacao(expesificacoesRepository)
        creatCategoriService.execult({ nome, descricao });
        res.status(200).send();
    } catch (erro) {
        res.status(400).json({ erro: "Essa categoria já existe!" });
    }
});

expesificacoesRoutes.get('/', (req, res) => {
    const all = expesificacoesRepository.findAll()
    res.json(all)
});

export { expesificacoesRoutes }