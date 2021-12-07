import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusPage } from './meus';

@NgModule({
  declarations: [
    MeusPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusPage),
  ],
})
export class MeusPageModule {}
