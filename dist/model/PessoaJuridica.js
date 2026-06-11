"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
class PessoaJuridica {
    cnpj;
    razaoSocial;
    email;
    telefone;
    endereco;
    constructor(cnpj, razaoSocial, email, telefone, endereco) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    setRazaoSocial(razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    toString() {
        return `CNPJ: ${this.cnpj}
        Razão Social: ${this.razaoSocial}
        Email: ${this.email}
        Telefone: ${this.telefone}
        ${this.endereco.toString()}`;
    }
}
exports.PessoaJuridica = PessoaJuridica;
