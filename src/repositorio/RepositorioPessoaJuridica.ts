import { PessoaJuridica } from "../model/PessoaJuridica";

export class RepositorioPessoaJuridica {

    private listaPessoaJuridica: PessoaJuridica[] = [];

    public adicionar(empresa: PessoaJuridica): boolean {
        this.listaPessoaJuridica.push(empresa);
        return true;
    }

    public listar(): PessoaJuridica[] {
        return this.listaPessoaJuridica;
    }
}