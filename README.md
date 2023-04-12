## Observações
  A aplicação consome dados de um banco de dados PostgreSql, por tanto é nescessário a presença do mesmo, seja de forma local ou por meio de conteiner docker em execução no momento de configurar o banco, adicionar a seed e executar a aplicação.
## Instalação

```bash
$ npm install
```

## Configurando o banco
Altere as informações do arquivo .env, na linha 7, para as especificações do banco a ser utilizado, como nome do usuario, senha e porta.

Execute o seguinte comando:
```bash
$ npx prisma migrate dev
```
Ao fim deste comando a base de dados e tabelas devem ser contruidas e uma conta deverá ser adicionada por meio de um arquivo seed.

Obs: Caso durante a execução da aplicação a conta não estiver disponível, digite o seguinte comando para adiciona-la.

```bash
$ npx prisma db seed
```
## Executando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Informações sobre implementação

A aplicação foi desenvolvida seguindo o padrão do nest para criação de modulos, com uma mudança no agrupamento de todos os modulos em uma pasta modules.