import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MeusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus',
  templateUrl: 'meus.html',
})
export class MeusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusPage');
  }
  voltar(){
    this.navCtrl.setRoot(HomePage)
  }

  abrirDetalhes(){
    this.navCtrl.push('DetalhesProdutoPage');
  }

  Toast() {
    const toast = this.toastCtrl.create({
      message: 'Pedido adicionado ao carrinho',
      duration: 3000
    });
    toast.present();
  }

}
