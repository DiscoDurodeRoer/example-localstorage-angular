import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  // Prefijo para diferenciar valores entre aplicaciones
  private prefix: string;

  constructor() {
    this.prefix = '';
  }

  // Obtiene el item dada una clave (prefijo + clave)
  getItem(key: string){
    return localStorage.getItem(this.prefix + key);
  }

  // Setea el valor de un item dada una clave (prefijo + clave)
  setItem(key: string, value: string){
    return localStorage.setItem(this.prefix + key, value);
  }

  // Limpia todas las claves que empiezan por nuestro prefijo
  clear(){
    for (const key in localStorage) {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key);
      }
    }
  }

  // Setea el prefijo
  setPrefix(prefix: string) {
    this.prefix = prefix;
  }

}
