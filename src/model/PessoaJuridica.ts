import { Endereco } from "./Endereco";

export class PessoaJuridica {
    private cnpj: string;
    private razaoSocial: string;
    private email: string;
    private telefone: string;
    private endereco: Endereco;

    constructor(cnpj: string, razaoSocial: string, email: string, telefone: string, endereco: Endereco) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }

    public getRazaoSocial(): string {
        return this.razaoSocial;
    }

    public setRazaoSocial(razaoSocial: string): void {
        this.razaoSocial = razaoSocial;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getEndereco(): Endereco {
        return this.endereco;
    }

    public setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    public toString(): string {
        return `CNPJ: ${this.cnpj}
        Razão Social: ${this.razaoSocial}
        Email: ${this.email}
        Telefone: ${this.telefone}
        ${this.endereco.toString()}`;
    }
}