import { ICategoryRepositoryInterface } from "../../repository/repository-interface/categoriarepositori.interface.ts";

export class listarTodosUseCase {
    constructor(private categoriaRepository: ICategoryRepositoryInterface) {

    };
    execult() {
        const all = this.categoriaRepository.findAll();
        return all
    }
};