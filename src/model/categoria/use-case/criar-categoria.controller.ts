import { Request, Response } from "express"
import { criarCategoriaUseCase } from "./criar-categoria/criar-categoria.use-case";
import { listarTodosUseCase } from "./lista-todos/lista-todos.use-case";
import { UploadUseCase } from "./upload.use-case";

export class CriarCategoriaController {

    constructor(
        private criaCategoriaUseCase: criarCategoriaUseCase,
        private listarTodosUseCase: listarTodosUseCase,
        private uploadUseCase: UploadUseCase,
    ) { }

    criar(req: Request, res: Response) {
        const { nome, descricao } = req.body;
        this.criaCategoriaUseCase.execult({ nome, descricao });
        res.status(200).send();
    };

    listarTodos(req: Request, res: Response) {
        return res.status(200).json(this.listarTodosUseCase.execult());
    };

    upload(req: Request, res: Response): Response {
        const { file } = req;
        this.uploadUseCase.execult(file);
        return res.status(200).send();
    };

}

