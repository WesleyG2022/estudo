import { ICategoryRepositoryInterface } from "../../repository/repository-interface/categoriarepositori.interface.ts";


interface IRequest {
    nome: string;
    descricao: string;
}

export class criarCategoriaUseCase {

    constructor(private categoriaRepository: ICategoryRepositoryInterface) {

    };
    execult(data: IRequest): void {
        const validNome = this.categoriaRepository.findByName(data.nome);
        try {
            if (!validNome) {
                this.categoriaRepository.creat({
                    nome: data.nome,
                    descricao: data.descricao
                });
            };

        } catch {
            throw new Error("Essa categoria já existe!");
        }
    }
};
