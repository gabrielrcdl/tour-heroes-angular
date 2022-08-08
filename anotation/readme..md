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
