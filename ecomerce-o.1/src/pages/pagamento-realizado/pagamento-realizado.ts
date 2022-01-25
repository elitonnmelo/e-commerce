import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PagamentoRealizadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagamento-realizado',
  templateUrl: 'pagamento-realizado.html',
})
export class PagamentoRealizadoPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewcrtl: ViewController,
    public toastCtrl: ToastController,) {
  }

  voltar(){
    this.navCtrl.setRoot(HomePage)
  }

}
