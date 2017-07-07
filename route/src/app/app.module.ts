import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { routing } from './app.routes';
import { ComponentsComponent } from './components/components.component';
import { ServicesComponent } from './services/services.component';
import { AsyncServicesComponent } from './services/asyncservices.component';
import { CiudadesService } from './services/ciudades.service';
import { CiudadNombreFilter, CapitalizeInverseFilter } from './pipes/samples.pipes';
import { TruncatePipe } from 'angular-pipes/src/string/truncate.pipe';
import { OrderByPipe } from 'angular-pipes/src/array/order-by.pipe';
import { RoundPipe } from 'angular-pipes/src/math/round.pipe';
import { ComposicionComponent } from './composicion/composicion.component';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DirectivesComponent,
    ComponentsComponent,
    CiudadNombreFilter, CapitalizeInverseFilter,
    TruncatePipe,
    OrderByPipe,
    RoundPipe,
    ServicesComponent, AsyncServicesComponent, ComposicionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CiudadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
