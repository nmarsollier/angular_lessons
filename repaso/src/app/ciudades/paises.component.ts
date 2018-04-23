import { CiudadesService, Pais } from './ciudades.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {
  paises: Pais[];
  pais: string;

  constructor(private ciudadesService: CiudadesService, private router: Router) { }

  ngOnInit() {
    // Los paises se cargan en forma asincrona en ngOnInit
    this.ciudadesService.getPaises().then(d => this.paises = d);
  }
}