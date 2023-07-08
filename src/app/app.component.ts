import { Component } from '@angular/core';
import { LocalstorageService } from './localstorage/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private localstorage: LocalstorageService) {
    // Seteo de valores
    this.localstorage.setItem('clave1', 'Hola');
    this.localstorage.setItem('clave2', 'Mundo');
    this.localstorage.setItem('clave3', 10 + "");
    this.localstorage.setItem('clave4', JSON.stringify({ "prop1": "value1" }));
  }


}
