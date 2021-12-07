import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoPage } from './carrinho';

@NgModule({
  declarations: [
    CarrinhoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoPage),
  ],
})
export class CarrinhoPageModule {}
