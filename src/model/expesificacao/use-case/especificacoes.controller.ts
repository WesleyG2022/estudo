import { CriarEspecificacoesUseCase } from "./criar-especificacoes.use-case";
import { Request, Response } from "express"


export class EspecificacoesController {
    constructor(private criarEspecificacoesUseCase: CriarEspecificacoesUseCase) { }

    criar(req: Request, res: Response) {
        const { nome, descricao } = req.body;
        this.criarEspecificacoesUseCase.execult({ nome, descricao })
        res.status(200).send();
    };
}