[javascript-image]: https://img.shields.io/badge/javascript-red
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[cucumber-url]: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
[cypress-image]:https://img.shields.io/badge/cypress-10.3.1-beige
[cypress-url]:https://docs.cypress.io/guides/overview/why-cypress

# Project structure cypress + mocha + allure
[![JavaScript Version][javascript-image]][javascript-url]
[![Cypress Version][cypress-image]][cypress-url]

Estrutura do projeto:
```
./
│  ├── cypress/
│  │   ├── config/
│  │   ├── fixtures/
│  │   ├── e2e/
│  │   └── support/
│  │       ├── BookStore/
│  │       ├── Home/
│  │       ├── SignIn/
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

Assumimos que você possui NodeJS instalado (versão 14 ou superior) e que tenha executado o scaffolding do Cypress ou realizado clone deste projeto. Agora você pode executar seu projeto local.

## Abaixo segue alguns comandos a serem utilizados com o projeto:

Para executar o cypress em modo Test Runner, usando o aliase criado no arquivo package.json:
```
npm run cy:open
```

Para executar o cypress em modo headless, usando o aliase criado no arquivo package.json:
```
npm run cy:test
```

## Alternando execução entre ambientes

Por padrão os testes iram rodar usando a url de **prd** conforme arquivo "**index.js**" em *"./cypress/plugins"*. 

Os ambiente disponíveis são:
- dev
- qa
- stg
- prd

Para alterar em tempo de execução, adiciona o parâmetro "**version**" no terminal:

Unix/Linux
```
 ./node_modules/.bin/cypress run --env version=prd
```

Windows
```
 .\node_modules\.bin\cypress run --env version=prd
```

Para alterar o padrão vá até o arquivo "**index.js**" e altere a linha 32:
```
default: (...) --env version=prd
```

## Execução dos testes com Cypress Dashboard usando a máquina local como hosted

Para execução dos testes utilizando o Cypress Dashboard deve executar o comando abaixo via CLI:

```
.\node_modules\.bin\cypress run --record --parallel --key <record_key>
```
**[Configurar projeto para gravar](https://docs.cypress.io/guides/dashboard/projects#Setup)**.

## Alternando execução entre tags

Por padão os testes serão executados sem tag, mas pode ser executado via CLI utilizando da seguinte forma:

```
 ./node_modules/.bin/cypress run --env version=prd -e grepTags="@tag-test"
```

### Demais execuções via pipeline, será utilizado via gitHub Action.