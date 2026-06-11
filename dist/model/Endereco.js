"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    cep;
    logradouro;
    bairro;
    estado;
    ddd;
    constructor(cep, logradouro, bairro, estado, ddd) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.estado = estado;
        this.ddd = ddd;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getLogradouro() {
        return this.logradouro;
    }
    setLogradouro(logradouro) {
        this.logradouro = logradouro;
    }
    getBairro() {
        return this.bairro;
    }
    setBairro(bairro) {
        this.bairro = bairro;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getDdd() {
        return this.ddd;
    }
    setDdd(ddd) {
        this.ddd = ddd;
    }
    toString() {
        return `CEP: ${this.cep}
        Logradouro: ${this.logradouro}
        Bairro: ${this.bairro}
        Estado: ${this.estado}
        DDD: ${this.ddd}`;
    }
}
exports.Endereco = Endereco;
