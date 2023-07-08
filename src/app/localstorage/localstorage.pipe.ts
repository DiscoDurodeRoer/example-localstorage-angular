import { Pipe, PipeTransform } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Pipe({
  name: 'localstorage'
})
export class LocalstoragePipe implements PipeTransform {

  constructor(private localstorageService: LocalstorageService){}

  // Obtenemos el valor del item dada la clave que nos pasen
  transform(key: string) {
    return this.localstorageService.getItem(key);
  }

}
