import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CiudadesService {
    constructor(private http: Http) { }

    // Obtiene las ciudades en forma asincrona, devuelve una promesa
    getCiudades(pais: string): Promise<Ciudad[]> {
        const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${pais}&radius=200&limit=10`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Ciudad[])
            .catch(this.handleError);
    }

    // Obtiene la lista de paises en forma asincrona, devuelve una promesa
    getPaises(): Promise<Pais[]> {
        const url = 'https://restcountries.eu/rest/v2/all';
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Pais[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

export interface Ciudad {
    country: string;
    city: string;
    region: string;
}

export interface Pais {
    name: string;
    capital: string;
    alpha2Code: string;
    alpha3Code: string;
}
