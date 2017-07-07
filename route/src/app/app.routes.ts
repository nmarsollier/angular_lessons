
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { AsyncServicesComponent } from './services/asyncservices.component';

// Route Configuration
export const routes: Routes = [
  { path: 'components', component: ComponentsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'asyncServices', component: AsyncServicesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);