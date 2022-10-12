import { Request, Response } from "express"
import { criarCategoriaUseCase } from "./criar-categoria/criar-categoria.use-case";
import { listarTodosUseCase } from "./lista-todos/lista-todos.use-case";

export class CriarCategoriaController {

    constructor(
        private criaCategoriaUseCase: criarCategoriaUseCase,
        private listarTodosUseCase: listarTodosUseCase
    ) { }

    criar(req: Request, res: Response) {
        const { nome, descricao } = req.body;
        this.criaCategoriaUseCase.execult({ nome, descricao });
        res.status(200).send();
    };

    listarTodos(req: Request, res: Response) {
        return res.status(200).json(this.listarTodosUseCase.execult());
    }
}

