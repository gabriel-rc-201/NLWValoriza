# NLWValoriza

O NLWValoriza é o projeto da Next Level Week 06

Aqui no Readme eu vou colocar o que aprendi de novo nessa semana tão intensa

## Dia 01

### Adicionar o typescript como dependencia de desenvolvimento

```sh
yarn add typescript -D
```

### Iniciar o typescript pro node poder entender ele

```sh
yarn tsc --init
```

### Adicionar dependencia de tipos:

`yarn add @types/<nodme da lib que requer a dependencia> -D`

### Rodar aplicações em typescript com o node sem ficar criando arquivos duplicados

```sh
yarn add ts-node-dev -D
```

Pra ele funcionar de forma mais automatizada coloca o seguinte código no `package.json`

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
```

com esse código ele vai rodar a aplicação com `yarn dev`

Por fim tbm modificamos o `tsconfig.json` setando `"strict": false`

## Dia 2

### Migrations

Migrations servem para podermos manter o nosso banco de dados em atualizado junto com os dos nossos coleguinhas

**criar:** `yarn typeorm migration:create -n <nome da migration>`
**excluir:** `yarn typeorm migration:revert`, exclui a ultima migration criada
**rodar** `yarn typeorm migration:run`,

### Entidades no JS

Aqui, quanto a essa parte aprendi mais como vou cirar as entidades pela aplicação

**ciar:** `yarn typeorm entity:create -n <nome da entidade>`

### ormconfig.json

ele vai servir para o ORM, ele quem faz a ponte entre o banco de dados e aplicação

```json
{
  "type": "sqlite",
  "database": "src/database/database.sqlite",
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}
```

### Regras

- Cadastro de Usuário
  - [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
  - [x] Não é permitido cadastrar usuário sem e-mail
- Cadastro de TAG
  - [x] Não é permitido cadastrar tag sem nome
  - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
  - [x] Não é permitido o cadastro por usuários que não sejam administradores
- Cadastro de elogíos
  - [ ] Não é permitido um usuário cadastrar um elogío para si
  - [ ] Não é permitido cadastrar elogios para usuários invalidos
  - [ ] O usuário precisa estar autenticado na aplicação

### Fluxo de dados da API

Alem das regras de negócios entendi melhor como funciona o fluxo de dados da aplicação

> SERVER -> CONTROLLER -> SERVICE -> REPOSITORIES -> BD

### Interface dos dados no typescript

```ts
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}
```

**como usar:** na chamada da função a gente pode usar com uma dessestruturação

```ts
function async execute({ name, email, admin }: IUserRequest)
```

## Dia 3

### tratar erros usando middleware

> SERVER -> ROUTES -> CONTROLLER -> SERVICE (throw new Error)

Os erros são gerados na camada de service e a resposta deles é emvida para a camada que está acima, a camada de Controller lá nós tratariamos o nosso erro usando `try catch` mas assim ficaria muito grande e ficaria muito massante ficar fazendo isso em projeto grande então para evitar isso a gente tratou os erros na camada de server com um middleware com o seguinte bloco de código:

```ts
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: "error",
    message: "internal Server Error",
  });
});
```

### Ordem de criação

1. `migration`
2. `Entidade`
3. `Repositório`
4. `Service`
5. `Controller`

## Dia 4
