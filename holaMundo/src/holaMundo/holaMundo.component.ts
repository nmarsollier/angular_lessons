import { Component } from '@angular/core';

@Component( {
    selector: 'hola-mundo',
    template: ` 
      <h1>
          {{ title }}
      </h1>
      <input [(ngModel)]="name" type="text" placeholder="Ingresa tu nombre">
      Hola {{ name }}
     `
})
export class HolaMundoComponent {
    title: string;
    name: string;

    constructor() {
        this.title = 'Hola mi mundo';
        this.name = 'Nestor';
    }

}
