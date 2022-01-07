import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { EnderecosProvider } from '../../providers/enderecos/enderecos';

/**
 * Generated class for the EndereçosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endereços',
  templateUrl: 'endereços.html',
})
export class EndereçosPage {
  itemArr = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public enderecoProvider: EnderecosProvider
    
    ) {
      this.enderecoProvider.listarFS().subscribe(_data => {
        console.log(_data);
        this.itemArr = _data;
      })
  }

  addItem() {
    const modal = this.modalCtrl.create('AddEnderecoPage');
    modal.present();
  }

  editItem(_item) {
    const itemID = _item.key;
    const item = _item.value;

    const modal = this.modalCtrl.create('AddEnderecoPage', { itemID: itemID, item: item } );
    modal.present();
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndereçosPage');
  }
  /*addEndereco(){
    const modal = this.modalCtrl.create('AddEnderecoPage');
    modal.present();
  }*/
  usarEndereco(){

  }
  

}
