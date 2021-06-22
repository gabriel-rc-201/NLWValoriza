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

### Regras

- Cadastro de Usuário
  - [ ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
  - [ ] Não é permitido cadastrar usuário sem e-mail
- Cadastro de TAG
  - [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome
  - [ ] Não é permitido cadastrar tag sem nome
  - [ ] Não é permitido o cadastro por usuários que não sejam administradores
- Cadastro de elogíos
  - [ ] Não é permitido um usuário cadastrar um elogío para si
  - [ ] Não é permitido cadastrar elogios para usuários invalidos
  - [ ] O usuário precisa estar autenticado na aplicação

### Fluxo de dados da API

Alem das regras de negócios entendi melhor como funciona o fluxo de dados da aplicação

- server -> CONTROLLER -> SERVICE -> Repositories -> BD

### Interface dos dados no typescript

```ts
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}
```

**como usar:**
