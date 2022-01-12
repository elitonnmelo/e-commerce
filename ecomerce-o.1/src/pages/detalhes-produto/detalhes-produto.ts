import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalhesProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-produto',
  templateUrl: 'detalhes-produto.html',
})
export class DetalhesProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewcrtl: ViewController, public toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesProdutoPage');
  }

  fechar(){
    this.viewcrtl.dismiss();
  }

  Toast() {
    const toast = this.toastCtrl.create({
      message: 'Produto adicionado ao carrinho',
      duration: 3000
    });
    toast.present();
  }


}
