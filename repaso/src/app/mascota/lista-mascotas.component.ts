import { EditarMascotaComponent } from './editar-mascota.component';
import { MascotasService, Mascota } from './mascotas.service';
import { Component, OnInit } from '@angular/core';

/*
 * Este componente muestra una lista de mascotas en el sistema
 */
@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html'
})
export class ListaMascotasComponent implements OnInit {
  private mascotas: Mascota[];
  private mascotaSeleccionada: Mascota;

  constructor(private mascotasService: MascotasService) {

  }

  // Cuando se initializa se cargan las mascotas del servidor
  ngOnInit() {
    this.updateMascotas();
  }

  // La seleccion de la mascota es basicamente asignar la propiedad de la mascota seleccionada
  seleccionarMascota(m: Mascota) {
    this.mascotaSeleccionada = m;
  }

  // Esto carga las mascotas del servidor
  updateMascotas() {
    this.mascotasService.getMascotas()
      .then(m => this.mascotas = m);
  }

  // Crear una nueva mascota, se crea el objeto vacio
  nuevaMascota() {
    this.mascotaSeleccionada = {
      id: undefined,
      nombre: '',
      fechaNacimiento: '',
      descripcion: ''
    }
  }
}
