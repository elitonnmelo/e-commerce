import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormasDePagamentoPage } from './formas-de-pagamento';

@NgModule({
  declarations: [
    FormasDePagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormasDePagamentoPage),
  ],
})
export class FormasDePagamentoPageModule {}
