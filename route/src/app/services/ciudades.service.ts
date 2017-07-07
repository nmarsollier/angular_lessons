import { Injectable } from '@angular/core';

// Este hay que definirlo tambien en app.module.ts
@Injectable()
export class CiudadesService {
    getCiudades(): Ciudad[] {
        return [
            { id: 0, nombre: 'Definir Ciudad' },
            { id: 1, nombre: 'Mendoza' },
            { id: 2, nombre: 'Guaymallen' },
            { id: 3, nombre: 'Godoy Cruz' },
            { id: 4, nombre: 'Las Heras' },
            { id: 5, nombre: 'Maipu' }
        ];
    }

    getCiudadesAsync(): Promise<Ciudad[]> {
        return Promise.resolve( this.getCiudades() );
    }

    constructor() { }
}


export interface Ciudad {
    id: number;
    nombre: string;
}
