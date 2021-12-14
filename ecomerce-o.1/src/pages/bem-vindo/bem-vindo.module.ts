import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BemVindoPage } from './bem-vindo';

@NgModule({
  declarations: [
    BemVindoPage,
  ],
  imports: [
    IonicPageModule.forChild(BemVindoPage),
  ],
})
export class BemVindoPageModule {}
