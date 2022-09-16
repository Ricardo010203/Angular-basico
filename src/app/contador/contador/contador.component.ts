import { Component } from '@angular/core';


@Component({
    selector:'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>
    <h2>{{2*3}}</h2>
    <h3>la base es: <strong>{{base}}</strong></h3>
    <a>CONTADOR</a>

    <button (click)="acumulador(-base)">-{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumulador(base)">+{{base}}</button>
        
    `
})
export class ContadorComponent{
    titulo = 'Hola vengo del TypeS';
    numero: number = 100;
    base: number = 5;
  
    acumulador(valor:number){
      this.numero += valor;
    }

}