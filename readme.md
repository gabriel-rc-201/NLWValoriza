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
