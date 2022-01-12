import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DemandasProvider } from '../../providers/demandas/demandas';

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
  itemArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public demandasProvider: DemandasProvider
    
    ) {
      this.demandasProvider.listarTodosFS().subscribe(_data => {
        console.log(_data);
        this.itemArr = _data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheDemandasPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

}
