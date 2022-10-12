import { Categoria } from "../../categoria.model";

export interface ICreateCategoryDTO {
    nome: string;
    descricao: string;
}

export interface ICategoryRepositoryInterface {
    findAll(): Categoria[];
    findByName(nome: string): Categoria | undefined;
    creat(data: ICreateCategoryDTO): void;
}