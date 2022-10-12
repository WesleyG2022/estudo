import { Especificacoes } from "../../especificacoes.model";

export interface ICreatEespecificacoesDTO {
    nome: string;
    descricao: string;
}

export interface IEspecificacaoRepositoryInterface {
    findAll(): Especificacoes[];
    findByName(nome: string): Especificacoes | undefined;
    creat(data: ICreatEespecificacoesDTO): void;
}