import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { RESTLicencias } from '../interfaces/rest-licencias';

@Pipe({
  name: 'filterState'
})
export class FilterStatePipe implements PipeTransform {

  transform(value: any, selected: string){
    console.log(selected)
    if(selected){
      const valorfiltrado = value.filter((fila: any) => fila.gcbaLicenseStatus == selected)
      return valorfiltrado;
    } else {
      return value
    }
  }

}
