
import { CiudadesComponent } from './ciudades/ciudades.component';
import { PaisesComponent } from './ciudades/paises.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMascotasComponent } from './mascota/lista-mascotas.component';


// Route Configuration
export const routes: Routes = [
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'ciudades/:pais', component: CiudadesComponent },
  { path: 'paises', component: PaisesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);