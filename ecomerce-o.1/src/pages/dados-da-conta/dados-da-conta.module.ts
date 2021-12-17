import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosDaContaPage } from './dados-da-conta';

@NgModule({
  declarations: [
    DadosDaContaPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosDaContaPage),
  ],
})
export class DadosDaContaPageModule {}
