# Trabalho-de-POO2-Importa-o-de-Dados
Importação de dados: Uso de APIs externas aplicando conceitos de programação assíncrona

Trabalho desenvolvido na disciplina de POO2 do curso de Sistemas para Internet - 3º Período


Orientações:

1 - Criar as classes concretas PessoaJuridica e Endereco em Typescript:

- Endereco:
Atributos - cep, logradouro, bairro, estado, ddd;
Métodos - get, set e toString.

- PessoaJuridica:
Atributos - cnpj, razaoSocial, email, telefone e endereco (referência para uma instância de Endereco);
Métodos - get, set e toString.


2 - Criar uma classe RepositorioPessoaJuridica, simulando um repositório em memória:

- Atributo - listaPessoaJuridica: Array<PessoaJuridica>;
- Métodos - adicionar(empresa: PessoaJuridica): boolean e listar(): Array<PessoaJuridica>;


3 - Criar um teste das classes do sistema (index.ts) que utilize os conceitos estudados de Promise, Async, Await, Resolve e Reject.

- Usar o comando fetch, a fim de receber dados no formato JSON via URI dos webservices, primeiramente de ReceitaWS e depois de ViaCep, lembrando-se de realizar o tratamento dos possíveis erros/exceções:

- Primeiramente, a aplicação deve usar o webservice ReceitaWS para recuperar os dados de 7 (sete) empresas brasileiras através dos seus CNPJs (pesquise por CNPJs de empresas de diferentes estados para realizar os testes);

- Depois, usando o dado retornado para o campo CEP de cada empresa, deve ser acionado o webservice ViaCep, a fim de consultar os dados do endereço de cada empresa;

- Usando os dados obtidos dos webservices, devem ser instanciados os objetos das classes Endereco e PessoaJuridica;

- Deve ser criado um objeto de RepositorioPessoaJuridica e adicionar nele os 7 objetos instanciados a partir dos dados obtidos dos webservices;

- Também devem ser implementadas consultas aos webservices (ReceitaWS e ViaCep) que explorem possíveis erros nas APIs, como por exemplo:

- consulta a um CNPJ usando um formato inválido (menor/maior quantidade de dígitos e/ou com letras);

- consulta a um CNPJ inexistente (por exemplo, 12345678900123);

- consulta a um CEP usando um formato inválido.

- Finalizando, deve usar os objetos inseridos na listaPessoaJuridca de RepositorioPessoaJuridica para implementar um forEach que execute o método toString() daqueles objetos.

Ao realizar os testes da sua aplicação, observe se os possíveis erros que devem ser explorados durante a realização de requisições às APIs estão sendo tratados e emitindo mensagens adequadas no console.


Referências:

https://developer.mozilla.org/pt-BR/docs/Web/API/Response

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function

https://www.codecademy.com/resources/docs/typescript/promises