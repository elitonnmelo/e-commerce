import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndereçosPage } from './endereços';

@NgModule({
  declarations: [
    EndereçosPage,
  ],
  imports: [
    IonicPageModule.forChild(EndereçosPage),
  ],
})
export class EndereçosPageModule {}
