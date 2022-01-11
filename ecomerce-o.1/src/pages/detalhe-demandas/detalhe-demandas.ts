import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalheDemandasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-demandas',
  templateUrl: 'detalhe-demandas.html',
})
export class DetalheDemandasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheDemandasPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

}
