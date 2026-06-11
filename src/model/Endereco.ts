export class Endereco {
    private cep: string;
    private logradouro: string;
    private bairro: string;
    private estado: string;
    private ddd: string;

    constructor(cep: string, logradouro: string, bairro: string, estado: string, ddd: string) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.estado = estado;
        this.ddd = ddd;
    }

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string): void {
        this.cep = cep;
    }

    public getLogradouro(): string {
        return this.logradouro;
    }

    public setLogradouro(logradouro: string): void {
        this.logradouro = logradouro;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getDdd(): string {
        return this.ddd;
    }

    public setDdd(ddd: string): void {
        this.ddd = ddd;
    }

    public toString(): string {
        return `CEP: ${this.cep}
        Logradouro: ${this.logradouro}
        Bairro: ${this.bairro}
        Estado: ${this.estado}
        DDD: ${this.ddd}`;
    }
}