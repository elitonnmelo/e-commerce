import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritosPage } from './favoritos';

@NgModule({
  declarations: [
    FavoritosPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritosPage),
  ],
})
export class FavoritosPageModule {}
