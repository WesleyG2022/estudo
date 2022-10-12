import { CriarEspecificacoesUseCase } from "./criar-especificacoes.use-case";
import { Request, Response } from "express"
import { ListarEspecificacoesUseCase } from "./listar-especificacoes.use-case";

export class EspecificacoesController {
    constructor(
        private criarEspecificacoesUseCase: CriarEspecificacoesUseCase,
        private listarEspecificacoesUseCase: ListarEspecificacoesUseCase
    ) { }

    criar(req: Request, res: Response) {
        const { nome, descricao } = req.body;
        this.criarEspecificacoesUseCase.execult({ nome, descricao })
        res.status(200).send();
    };

    Lista(req: Request, res: Response) {
        return res.status(200).json(this.listarEspecificacoesUseCase.execult());
    };


}