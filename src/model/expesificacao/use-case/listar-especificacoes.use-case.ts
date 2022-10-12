import { IEspecificacaoRepositoryInterface } from "../repository/repository-interface/especificacoes-repositori.interface.ts";

export class ListarEspecificacoesUseCase {
    constructor(private listarEspecificacoes: IEspecificacaoRepositoryInterface) { }

    execult() {
        const all = this.listarEspecificacoes.findAll();
        return all
    }

}