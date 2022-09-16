import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Thor','Ironman'];
  borrado: string = '';

  borrar():void{
    this.borrado = this.heroes.shift() || '';
  }

}
