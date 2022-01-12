import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { DemandasProvider } from '../../providers/demandas/demandas';

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
  itemArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public demandasProvider: DemandasProvider

    ) {
      this.demandasProvider.listarFS().subscribe(_data => {
        console.log(_data);
        this.itemArr = _data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasDemandasPage');
  }
  detalhesDemanda(){
    const modal = this.modalCtrl.create('DetalheDemandasPage');
    this.navCtrl.pop
    modal.present();
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  verDetalhes(){
    const modal = this.modalCtrl.create('DetalheDemandasPage');
    modal.present();
  }
  //FUNÇÕES DE TESTE
  
  addItem() {
    const modal = this.modalCtrl.create('AddDemandaPage');
    modal.present();
  }

  editItem(_item) {
    const itemID = _item.key;
    const item = _item.value;

    const modal = this.modalCtrl.create('AddDemandaPage', { itemID: itemID, item: item } );
    modal.present();
  }
  

}
