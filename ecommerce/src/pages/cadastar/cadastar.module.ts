import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastarPage } from './cadastar';

@NgModule({
  declarations: [
    CadastarPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastarPage),
  ],
})
export class CadastarPageModule {}
