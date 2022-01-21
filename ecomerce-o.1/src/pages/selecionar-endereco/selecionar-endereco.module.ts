import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionarEnderecoPage } from './selecionar-endereco';

@NgModule({
  declarations: [
    SelecionarEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionarEnderecoPage),
  ],
})
export class SelecionarEnderecoPageModule {}
