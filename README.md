
<h1 align="center"> EventFlow-API</h1>

<div align="center">

![test](https://github.com/guilhiz/EventFlow-API/assets/109693663/ca5eb774-e40e-4d49-8aa2-027fdf230827) 

</div>


## Descrição

EventFlow é uma aplicação avançada de gerenciamento de eventos que oferece recursos abrangentes e soluções sofisticadas para organizadores e participantes. Com recursos como autenticação segura do usuário, inscrição em eventos (online ou presenciais), seleção de hospedagem, pagamento de ingressos, testes de integração com cobertura de 95%, armazenamento em banco de dados SQL e arquitetura em camadas, o EventFlow garante uma experiência excepcional em todos os aspectos do gerenciamento de eventos.


## :gear: Funcionalidades

- Autenticação do usuário utilizando JWT.
- Inscrição para eventos (online ou presenciais).
- Para eventos presenciais, o usuário pode escolher entre hospedagem com ou sem acomodação.
- Seleção de hotel e quartos.
- Pagamento do ingresso do evento.
- Testes de integração com 95% de cobertura de linhas.
- Uso de factories com faker-js para mockar dados nos testes.
- Armazenamento de dados em um banco de dados SQL (PostgreSQL).
- Arquitetura em camadas (controllers, middlewares, services, etc.).
- Tratamento de erros e implementação do padrão Repository.
- Validação de todas as entradas contra esquemas usando um middleware.
- Reforço da segurança com o uso da biblioteca reflect-metadata.


## :robot: Tecnologias Utilizadas

- [Node.js](https://nodejs.org/pt-br/)
- [Express.js](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Dotenv-cli](https://www.npmjs.com/package/dotenv-cli)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [PostgreSQL](https://www.postgresql.org/)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Faker.js](https://github.com/faker-js/faker)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Joi](https://www.npmjs.com/package/joi)


## Como executar o projeto em modo de desenvolvimento

1. Clone este repositório
2. Instale as dependências com `npm install`
3. Crie um banco de dados PostgreSQL com o nome que desejar
4. Configure o arquivo `.env.development` usando o arquivo .env.example 
5. Execute todas as migrações

```bash
npm run dev:migration:run
```

6. Popule o banco de dados com informações iniciais

```bash
npm run dev:seed
```

7. Execute o back-end em modo de desenvolvimento:

```bash
npm run dev
```

## Como executar os testes

1. Siga os passos da seção anterior
1. Configure o arquivo `.env.test` usando o arquivo .env.example 
1. Execute todas as migrações

```bash
npm run migration:run
```

4. Run test:

```bash
npm run test
```


