import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDemandaPage } from './add-demanda';

@NgModule({
  declarations: [
    AddDemandaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDemandaPage),
  ],
})
export class AddDemandaPageModule {}
