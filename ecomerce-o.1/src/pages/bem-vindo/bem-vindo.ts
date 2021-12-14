import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BemVindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bem-vindo',
  templateUrl: 'bem-vindo.html',
})
export class BemVindoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BemVindoPage');
  }
  cadastrar() {
    this.navCtrl.push('CadastroPage');
  }
  login() {
    this.navCtrl.push('LoginPage');
  }

}
