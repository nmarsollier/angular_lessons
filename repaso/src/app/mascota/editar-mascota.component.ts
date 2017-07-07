import { Mascota, MascotasService } from './mascotas.service';
import { DatePickerPipe } from '../pipes/common-pipes.pipe';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';


@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html'
})
export class EditarMascotaComponent implements OnInit {
  
  // Define una propiedad del tag, como esta propiedad no quiero que se
  // bindee directamente con este formulario , vamos a crear una copia
  // del objeto bindeado, esto lo podemos hacer sobreescribieno los
  // getters y setters de la propiedad
  @Input()
  set mascota(m: Mascota) {
    this._mascota = m ? Object.assign({}, m) : undefined;
    this.errors = undefined;
  }
  get mascota() {
    return this._mascota;
  }

  // Este evento lo vamos a emitir cuando hayamos modificado alguna mascota
  @Output()
  onMascotaUpdate = new EventEmitter<any>();

  // este es el objeto que vamos a bindear en este formulario de edicion
  _mascota: Mascota;
  errors: any;
  
  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
  }

  // Se va a ejecutar cuando se le hace submit al form
  onSubmit() {
    this.mascotasService.guardarMascota(this._mascota).then(m => {
      this._mascota = undefined;
      this.onMascotaUpdate.emit();
    }, e=> {
      this.errors = e;
    });
  }

  // Cancel del formulario
  onCancel() {
    this._mascota = undefined;
  }

  // Elimia la mascota
  onDelete() {
    this.mascotasService.eliminarMascota(this._mascota).then(m => {
      this._mascota = undefined;
      this.onMascotaUpdate.emit();
    });
  }
}

