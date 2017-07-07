import { Component, OnInit } from '@angular/core';
import { TruncatePipe } from 'angular-pipes/src/string/truncate.pipe'
import { OrderByPipe } from 'angular-pipes/src/array/order-by.pipe';
import { RoundPipe } from 'angular-pipes/src/math/round.pipe';

@Component( {
    selector: 'app-pipes',
    templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {
    ciudades: Ciudad[];

    sexos: Sexo[];

    mascota: Mascota;

    constructor() {
        this.ciudades = [
            { id: 0, nombre: 'Definir Ciudad' },
            { id: 1, nombre: 'Mendoza' },
            { id: 2, nombre: 'Guaymallen' },
            { id: 3, nombre: 'Godoy Cruz' },
            { id: 4, nombre: 'Las Heras' },
            { id: 5, nombre: 'Maipu' }
        ];

        this.sexos = [
            { id: 0, nombre: 'Macho' },
            { id: 1, nombre: 'Hembra' }
        ];

        this.mascota = {
            nombre: '',
            fechaNacimiento: new Date(),
            ciudad: this.ciudades[0],
            sexo: null,
            perdida: false,
            precio: 10
        };

    }

    ngOnInit() {
    }
}


interface Ciudad {
    id: number;
    nombre: string;
}

interface Sexo {
    id: number;
    nombre: string;
}

interface Mascota {
    nombre: string;
    fechaNacimiento: Date;
    ciudad: Ciudad;
    sexo: Sexo;
    perdida: boolean;
    precio: number;
}
