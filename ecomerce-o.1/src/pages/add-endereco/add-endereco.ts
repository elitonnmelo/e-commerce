import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddEnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-endereco',
  templateUrl: 'add-endereco.html',
})
export class AddEnderecoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEnderecoPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  addNovoEndereco(){
    
  }

}
