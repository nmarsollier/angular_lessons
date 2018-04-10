import { Component, OnInit } from '@angular/core';

// Este hay que definirlo tambien en app.module.ts
@Component( {
    selector: 'app-components',
    template: `
         <BR>
        Valor de Prueba :

        <h1>{{ name }}</h1><br/>

        <img [src]="url" />
        <button (click)="resetName()" class="button">Volver a valor incial</button>
        <br>
        <input [(ngModel)]="name" type="text" placeholder="Hint del Valor">

        <BR><BR>
        <input #otroNombre type="text" placeholder="Otra forma de usar variable ">
        <button (click)="asignarName(otroNombre.value)" class="button">Asignar</button>
        `
})
export class ComponentsComponent implements OnInit {
    name: string;
    url = '/assets/login.png';

    constructor() {
        this.name = 'Valor inicial.';
    }

    ngOnInit() {
    }

    resetName() {
        this.name = 'Reset al valor inicial';
    }

    asignarName(name: string) {
      this.name = name;
    }
}
