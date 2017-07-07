import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { CiudadesService } from './ciudades/ciudades.service';
import { PaisesComponent } from './ciudades/paises.component';
import { MascotasService } from './mascota/mascotas.service';
import { EditarMascotaComponent } from './mascota/editar-mascota.component';
import { ListaMascotasComponent } from './mascota/lista-mascotas.component';
import { DatePickerPipe } from './pipes/common-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditarMascotaComponent,
    ListaMascotasComponent,
    DatePickerPipe,
    CiudadesComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MascotasService, CiudadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
