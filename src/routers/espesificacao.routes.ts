import { Router } from "express"
import { especificacoesRepository } from "../model/expesificacao/repository/expesificacao.repository";
import { CriarEspecificacoesUseCase } from "../model/expesificacao/use-case/criar-especificacoes.use-case";
import { EspecificacoesController } from "../model/expesificacao/use-case/especificacoes.controller";
import { ListarEspecificacoesUseCase } from "../model/expesificacao/use-case/listar-especificacoes.use-case";


const espesificacoesRoutes = Router();

const espesificacoesRepository = new especificacoesRepository();
const espesificacoesUseCase = new CriarEspecificacoesUseCase(espesificacoesRepository);
const listarEspecificacoesUseCase = new ListarEspecificacoesUseCase(espesificacoesRepository)
const espesificacoesController = new EspecificacoesController(espesificacoesUseCase, listarEspecificacoesUseCase);

espesificacoesRoutes.post('/', (req, res) => {
    return espesificacoesController.criar(req, res);
});

espesificacoesRoutes.get('/', (req, res) => {
    return espesificacoesController.Lista(req, res)
});

export { espesificacoesRoutes }