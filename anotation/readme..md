# Angular Tour-of-Heroes

## ng builder
Compila todo nosso código para produção, converte arquivos TS em JS
SCSS em CSS, etc..

## ng Model
Two way data biding reflete tanto no html e no arquivo ts

## Conceito de service
Um tipo de classe que tem o conceito de singletons: Que são classes únicas de nossa aplicação,  uma vez que criamos essas classes por exemplo, ela pode serem compartilhadas entre os componentes, qualquer tipo de dados que quisermos adicionar ou persistir, regras de négocios, colocaremos dentro do service para ter essa responsabilidade e não o componente em si.

# Conceito de Observable
 Fases de um Observable:
  this.heroService.getHeroes().subscribe({
      (value)=> {

         console.log('Pegando valores ' + JSON.stringify(x, null, 2));

         },

       (err)=>{

        console.error('Somente se ocorrer erro: ' + err);
      },

      ()=> {
        console.log('feito');
       },
.subscribe queremos ser notificados quando ocorrer uma mudança no observable do HeroService

consultar documentação rxjs: https://rxjs.dev/guide/observable


# Operadores RXJS o coração do Angular
Operadores são funções e existem dois tipos: 
Pipeable Operators = operarodor de pipe
Creation Operators   operador de criação




# Adicionando um proxy
O que está sendo informado no arquivo proxy.conf.json é que se um frontend ocorrer uma chamada /api é informado um target(alvo) a ser executado.

{
  "/api":{
    "target": "http://localhost:3000",
    "secure": false
  }
}

Consultar: documentação do angular sobre proxy

Após isso, deve alterar o arquivo angular.json na seção "development" adicionando o seguinte trecho:
  "development": {
              "browserTarget": "heroes:build:development",
             ==> "proxyConfig": "src/proxy.conf.json"


# Informações básicas sobre uma consulta a API REST

Quando fazemos um GET:
/heroes

Quando fazemos um GET para pegar uma informação:
/heroes:id

Quando fazemos um POST:
/heroes

Quando fazemos um PUT:
/heroes:id

Quando fazemos um DELETE:
/heroes:id





