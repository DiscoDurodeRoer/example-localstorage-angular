import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalstorageModule } from './localstorage/localstorage.module';
import { LocalstorageService } from './localstorage/localstorage.service';

// Seteo de prefijo
export function storageFactory(provider: LocalstorageService){
  return () => provider.setPrefix('test-storage-app:');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalstorageModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER, // Arranca al inicio
      useFactory: storageFactory, // Usa la funcion de arriba
      deps: [LocalstorageService], // Necesita el servicio localstorage
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
