import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { HolaMundoModule } from './holaMundo/holaMundo.module';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HolaMundoModule);
