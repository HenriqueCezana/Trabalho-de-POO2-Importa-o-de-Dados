export class ApiService {

public static async consultarCNPJ(cnpj: string): Promise<any> {

    return new Promise(async (resolve, reject) => {

        try {

            cnpj = cnpj.replace(/[^0-9]/g, "");

            if (cnpj.length !== 14) {
                reject("CNPJ inválido. O CNPJ deve conter exatamente 14 dígitos.");
                return;
            }

            const response = await fetch(
                `https://www.receitaws.com.br/v1/cnpj/${cnpj}`
            );

            if (!response.ok) {
                reject(`ReceitaWS: status HTTP ${response.status}`);
                return;
            }

            const dados = await response.json();

            if (dados.status === "ERROR") {
                reject(`ReceitaWS: ${dados.message}`);
                return;
            }

            resolve(dados);

        } catch (erro) {

            reject(`Erro ao consultar CNPJ: ${erro}`);

        }

    });

}

public static async consultarCEP(cep: string): Promise<any> {

    return new Promise(async (resolve, reject) => {

        try {

            if (cep.length !== 8) {
                reject("CEP inválido. O CEP deve conter exatamente 8 dígitos.");
                return;
            }

            const response = await fetch(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            if (!response.ok) {
                reject(`Erro ViaCEP: requisição inválida. Status ${response.status}`);
                return;
            }

            const dados = await response.json();

            if (dados.erro) {
                reject("CEP não encontrado.");
                return;
            }

            resolve(dados);

        } catch (erro) {

            reject(`Erro ao consultar CEP: ${erro}`);

        }

    });

}
}