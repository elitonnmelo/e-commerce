import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheDemandasPage } from './detalhe-demandas';

@NgModule({
  declarations: [
    DetalheDemandasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheDemandasPage),
  ],
})
export class DetalheDemandasPageModule {}
