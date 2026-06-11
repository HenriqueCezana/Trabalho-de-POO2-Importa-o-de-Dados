import { Endereco } from "./model/Endereco";
import { PessoaJuridica } from "./model/PessoaJuridica";
import { ApiService } from "./services/ApiService";
import { RepositorioPessoaJuridica } from "./repositorio/RepositorioPessoaJuridica";

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function importarEmpresas(): Promise<RepositorioPessoaJuridica> {

    const repositorio = new RepositorioPessoaJuridica();

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

        const dadosEmpresa = await ApiService.consultarCNPJ(cnpj);

        console.log("Empresa encontrada.");

        console.log(`Consultando CEP ${dadosEmpresa.cep}`);

        const dadosEndereco = await ApiService.consultarCEP(
            dadosEmpresa.cep.replace(".", "").replace("-", "")
        );

        const endereco = new Endereco(
            dadosEndereco.cep,
            dadosEndereco.logradouro,
            dadosEndereco.bairro,
            dadosEndereco.uf,
            dadosEndereco.ddd
        );

        const empresa = new PessoaJuridica(
            dadosEmpresa.cnpj,
            dadosEmpresa.nome,
            dadosEmpresa.email || "Não informado",
            dadosEmpresa.telefone || "Não informado",
            endereco
        );

        repositorio.adicionar(empresa);

        console.log("Empresa adicionada ao repositório.\n");

        console.log("Aguardando 21 segundos...\n");
        await delay(21000);

    } catch (erro) {
        console.log(`Erro ao importar empresa ${cnpj}:`);
        console.log(erro);
        console.log();

    }
}

    return repositorio;
}


async function listarEmpresas(repositorio: RepositorioPessoaJuridica): Promise<void> {

    console.log("\n=================================");
    console.log("EMPRESAS CADASTRADAS");
    console.log("=================================\n");

    repositorio.listar().forEach((empresa, indice) => {
        console.log(`EMPRESA ${indice + 1}`);
        console.log(empresa.toString());
        console.log("---------------------------------\n");
    });
}

async function testarErros(): Promise<void> {

    console.log("\n=================================");
    console.log("TESTES DE ERRO");
    console.log("=================================\n");

    try {
        console.log("Teste: CNPJ com letras");
        await ApiService.consultarCNPJ("12ABC345678901");
    } catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }

    await delay(21000);

    try {
        console.log("Teste: CNPJ com poucos dígitos");
        await ApiService.consultarCNPJ("12345");
    } catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }

    await delay(21000);

    try {
        console.log("Teste: CNPJ inexistente");
        await ApiService.consultarCNPJ("12345678900123");
    } catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }

    try {
        console.log("Teste: CEP inválido");
        await ApiService.consultarCEP("ABC123");
    } catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }

    try {
        console.log("Teste: CEP inexistente");
        await ApiService.consultarCEP("99999999");
    } catch (erro) {
        console.log("Erro:");
        console.log(erro);
        console.log();
    }
}

async function OrganizarSaida(): Promise<void> {

    try {
        const repositorio = await importarEmpresas();

        await listarEmpresas(repositorio);

        await testarErros();

    } catch (erro) {
        console.log("Erro geral da aplicação:");
        console.log(erro);

    }

}

OrganizarSaida();