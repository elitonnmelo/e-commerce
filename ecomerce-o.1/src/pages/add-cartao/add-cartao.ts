import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddCartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cartao',
  templateUrl: 'add-cartao.html',
})
export class AddCartaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCartaoPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  addNovoCartao(){
    
  }

}
