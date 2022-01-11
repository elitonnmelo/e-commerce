import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MinhasDemandasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhas-demandas',
  templateUrl: 'minhas-demandas.html',
})
export class MinhasDemandasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasDemandasPage');
  }
  detalhesDemanda(){
    const modal = this.modalCtrl.create('DetalheDemandasPage');
    modal.present();
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  

}
