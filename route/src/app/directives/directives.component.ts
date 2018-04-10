import { Component, OnInit } from '@angular/core';
import { ComposicionComponent } from '../composicion/composicion.component';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  ciudades: Ciudad[];

  sexos: Sexo[];

  mascota: Mascota;

  // Estilos css
  atributoEstilo = 'estiloBonito';
  aplicarEstiloBonito = true;
  mapasDeClases = {
    'estiloColor': true,
    'estiloGrande': false
  };
  colorFondo = 'red';
  estilosMapa = {
    'font-family': '"Roboto","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
    'font-size': '24px'
  };

  tiluloAComponer = 'Titulo inyectado';

  constructor() {
  }

  // OnInit es el lugar preferido para inicializar variables
  ngOnInit() {
    this.ciudades = [
      { id: 0, nombre: 'Definir Ciudad' },
      { id: 1, nombre: 'Mendoza' },
      { id: 2, nombre: 'Guaymallen' },
      { id: 3, nombre: 'Godoy Cruz' },
      { id: 4, nombre: 'Las Heras' },
      { id: 5, nombre: 'Maipu' }
    ];

    this.sexos = [
      { id: 0, nombre: 'Macho' },
      { id: 1, nombre: 'Hembra' }
    ];

    this.mascota = {
      nombre: '',
      fechaNacimiento: new Date(),
      ciudad: this.ciudades[0].id,
      sexo: null,
      perdida: false
    };
  }

  limpiarPorEvento() {
    this.mascota = {
      nombre: '',
      fechaNacimiento: new Date(),
      ciudad: this.ciudades[0].id,
      sexo: null,
      perdida: false
    };
  }
}

interface Ciudad {
  id: number;
  nombre: string;
}

interface Sexo {
  id: number;
  nombre: string;
}

interface Mascota {
  nombre: string;
  fechaNacimiento: Date;
  ciudad: number;
  sexo: Sexo;
  perdida: boolean;
}
