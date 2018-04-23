import { Injectable } from '@angular/core';

/*
 * Este servicio simula conexiones al servidor con Promesas, tiene las funciones basicas que se
 * implementarian con servicios rest
 */
@Injectable()
export class MascotasService {
  private mascotas: Mascota[];

  constructor() {
    this.mascotas = [{
      id: 1,
      nombre: 'Pepa',
      fechaNacimiento: '01/01/2014',
      descripcion: 'Pepa Pig'
    },
    {
      id: 2,
      nombre: 'George',
      fechaNacimiento: '01/01/2015',
      descripcion: 'George Pig'
    }
    ];
  }

  getMascotas(): Promise<Mascota[]> {
    return Promise.resolve(this.mascotas);
  }

  guardarMascota(m: Mascota): Promise<Mascota> {
    // estamos simulando las validaciones desde el servidor
    const errors: any = {};
    if (!m.fechaNacimiento) {
      errors.fechaNacimiento = 'Debe especificar la fecha de nacimiento';
    }
    if (!m.nombre) {
      errors.nombre = 'Debe especificar el nombre de la mascota';
    }
    if (!m.descripcion) {
      errors.descripcion = 'Debe especificar la descripcion de la mascota';
    }

    if (Object.keys(errors).length > 0) {
      return Promise.reject(errors);
    } else {
      return Promise.resolve(this.guardarMascotaInternal(m));
    }
  }

  private guardarMascotaInternal(m: Mascota): Mascota {
    if (!m.id) {
      m.id = this.mascotas.length + 1;
      this.mascotas.push(m);
    } else {
      const index = this.mascotas.findIndex(x => m.id === x.id);
      if (index >= 0) {
        this.mascotas[index] = m;
      }
    }
    return m;
  }

  eliminarMascota(m: Mascota): Promise<Mascota> {
    return Promise.resolve(this.eliminarMascotaInternal(m));

  }

  private eliminarMascotaInternal(m: Mascota): Mascota {
    const index = this.mascotas.findIndex(x => m.id === x.id);
    if (index >= 0) {
      this.mascotas.splice(index, 1);
      return;
    }
  }
}

export interface Mascota {
  id: number;
  nombre: string;
  fechaNacimiento: string;
  descripcion: string;
}
