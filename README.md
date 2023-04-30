
<h1 align="center"> EventFlow-API</h1>

## Descrição

EventFlow é uma aplicação de gerenciamento de eventos White Label que permite a gestão de um único evento. A aplicação possui um cronômetro que libera o sistema na data de início do cadastro do evento. Os usuários podem se inscrever para o evento (online ou presencial), escolher as atividades disponíveis e emitir um certificado de participação após o evento.

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


