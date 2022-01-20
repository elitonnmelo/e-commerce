import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinalizarCompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finalizar-compra',
  templateUrl: 'finalizar-compra.html',
})
export class FinalizarCompraPage {

  parcelas='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarCompraPage');
  }

  abrirAltEndereco(){
    this.navCtrl.push('EndereçosPage');
  }

  abrirAltPagamento(){
    this.navCtrl.push('FormasDePagamentoPage');
  }

}
