import { Component, OnInit } from '@angular/core';
import { CiudadesService, Ciudad } from './ciudades.service'

@Component({
  selector: 'app-services',
  template: `
      Ciudades :
      <select [(ngModel)]="ciudad" >
        <option *ngFor="let item of ciudades" [value]="item.id" >{{item.nombre}}</option>
      </select> <br />`
})
export class ServicesComponent implements OnInit {
  ciudades: Ciudad[];

  ciudad: Ciudad;

  // Notar la inyeccion de dependencia, y tambien notar que si
  // pones private, entonces ese parametro es considerado una
  // propiedad del Componente, puede no ponerse, pero no seria parte
  // del objeto
  constructor(private ciudadService: CiudadesService) {
  }

  ngOnInit() {
    this.ciudades = this.ciudadService.getCiudades();
  }
}
