import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FormasDePagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formas-de-pagamento',
  templateUrl: 'formas-de-pagamento.html',
})
export class FormasDePagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormasDePagamentoPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  addCartao(){
    const modal = this.modalCtrl.create('AddCartaoPage');
    modal.present();
  }
  usarCartao(){
    
  }

}
