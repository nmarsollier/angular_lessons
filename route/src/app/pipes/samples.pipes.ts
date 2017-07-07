import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciudadNombreFilter',
  pure: false
})
export class CiudadNombreFilter implements PipeTransform {
  transform(values: any[], args: any[]): any {
    return values.filter(value => value && value.nombre && value.nombre.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }
}

@Pipe({
  name: 'capitalizeInverse'
})
export class CapitalizeInverseFilter implements PipeTransform {
  transform(value: string, args: any[]): any {
    if(!value) {
      return '';
    }
    return value[0].toLowerCase() + value.slice(1).toUpperCase();;
  }
}


