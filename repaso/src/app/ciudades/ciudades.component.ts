import { CiudadesService, Ciudad } from './ciudades.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest-call',
  templateUrl: './ciudades.component.html'
})
export class CiudadesComponent implements OnInit {
  ciudades: Ciudad[];
  codigoPais: string;
  detalles: any;

  constructor(private ciudadesService: CiudadesService, private route: ActivatedRoute) { }

  ngOnInit() {

    // El pais se recupera como parametro, los parametros se definen en routes.ts
    // El servicio route.params, permite suscribirnos a eventos donde podemos recibir los parametros
    this.route.params.subscribe(params => {
      this.codigoPais = params['pais'];

      // Si el codigo de pais tiene un valor, buscamos las ciudades en forma asincrona
      if (this.codigoPais) {
        this.ciudadesService.getCiudades(this.codigoPais).then(d => this.ciudades = d);
      }
    });
  }
}
