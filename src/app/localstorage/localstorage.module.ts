import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstoragePipe } from './localstorage.pipe';
import { LocalstorageService } from './localstorage.service';

@NgModule({
  declarations: [
    LocalstoragePipe
  ],
  exports: [
    LocalstoragePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LocalstorageService
  ]
})
export class LocalstorageModule { }
