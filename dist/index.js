"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_1 = require("./model/Endereco");
const PessoaJuridica_1 = require("./model/PessoaJuridica");
const ApiService_1 = require("./services/ApiService");
const RepositorioPessoaJuridica_1 = require("./repositorio/RepositorioPessoaJuridica");
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function importarEmpresas() {
    const repositorio = new RepositorioPessoaJuridica_1.RepositorioPessoaJuridica();
    const cnpjs = [
        // Banco do Brasil
        "00.000.000/0001-91",
        // Petrobras
        "33000167000101",
        // Google Brasil
        "06990590000123",
        // CEMIG
        "17155730000164",
        // WEG
        "84429695000111",
        // Sicredi
        "01181521000155",
        // Braskem
        "42150391000170"
    ];
    console.log("=================================");
    console.log("IMPORTANDO EMPRESAS");
    console.log("=================================\n");
    for (let i = 0; i < cnpjs.length; i++) {
        const cnpj = cnpjs[i];
        try {
            console.log(`Consultando CNPJ ${cnpj}`);
            const dadosEmpresa = await ApiService_1.ApiService.consultarCNPJ(cnpj);
            console.log("Empresa encontrada.");
            console.log(`Consultando CEP ${dadosEmpresa.cep}`);
            const dadosEndereco = await ApiService_1.ApiService.consultarCEP(dadosEmpresa.cep.replace(".", "").replace("-", ""));
            const endereco = new Endereco_1.Endereco(dadosEndereco.cep, dadosEndereco.logradouro, dadosEndereco.bairro, dadosEndereco.uf, dadosEndereco.ddd);
            const empresa = new PessoaJuridica_1.PessoaJuridica(dadosEmpresa.cnpj, dadosEmpresa.nome, dadosEmpresa.email || "Não informado", dadosEmpresa.telefone || "Não informado", endereco);
            repositorio.adicionar(empresa);
            console.log("Empresa adicionada ao repositório.\n");
            console.log("Aguardando 21 segundos...\n");
            await delay(21000);
        }
        catch (erro) {
            console.log(`Erro ao importar empresa ${cnpj}:`);
            console.log(erro);
            console.log();
        }
    }
    return repositorio;
}
async function listarEmpresas(repositorio) {
    console.log("\n=================================");
    console.log("EMPRESAS CADASTRADAS");
    console.log("=================================\n");
    repositorio.listar().forEach((empresa, indice) => {
        console.log(`EMPRESA ${indice + 1}`);
        console.log(empresa.toString());
        console.log("---------------------------------\n");
    });
}
async function testarErros() {
    console.log("\n=================================");
    console.log("TESTES DE ERRO");
    console.log("=================================\n");
    try {
        console.log("Teste: CNPJ com letras");
        await ApiService_1.ApiService.consultarCNPJ("12ABC345678901");
    }
    catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }
    await delay(21000);
    try {
        console.log("Teste: CNPJ com poucos dígitos");
        await ApiService_1.ApiService.consultarCNPJ("12345");
    }
    catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }
    await delay(21000);
    try {
        console.log("Teste: CNPJ inexistente");
        await ApiService_1.ApiService.consultarCNPJ("12345678900123");
    }
    catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }
    try {
        console.log("Teste: CEP inválido");
        await ApiService_1.ApiService.consultarCEP("ABC123");
    }
    catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }
    try {
        console.log("Teste: CEP inexistente");
        await ApiService_1.ApiService.consultarCEP("99999999");
    }
    catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }
}
async function OrganizarSaida() {
    try {
        const repositorio = await importarEmpresas();
        await listarEmpresas(repositorio);
        await testarErros();
    }
    catch (erro) {
        console.log("Erro geral da aplicação:");
        console.log(erro);
    }
}
OrganizarSaida();
