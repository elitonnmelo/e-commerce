import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { EnderecoECartao } from '../../models/enderecoecartao';
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
  enderecoCartao = new EnderecoECartao();
  itemArr = [];
  valor = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
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
  selecionarEndereco( _item){
    const itemID = _item.key;
    const item = _item.value;
    //console.log(itemID, item);
    this.valor = item;
    var valorID = itemID;
    console.log(this.valor, valorID);
    
    this.enderecoCartao = new EnderecoECartao() 
    this.enderecoCartao.rua = _item.value.rua;
    this.enderecoCartao.cidade = _item.cidade;
    this.enderecoCartao.complemento = item.complemento;
    this.enderecoCartao.numero = valorID.numero;
    this.enderecoCartao.bairro = item.bairro;
    console.log(EnderecoECartao)
    

    this.viewCtrl.dismiss();
    this.presentTost('Endereço selecionado!');
    
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  escolherEndereco(){
    const modal = this.modalCtrl.create('SelecionarEnderecoPage');
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndereçosPage');
    console.log(this.valor);
    
    
  }
  /*addEndereco(){
    const modal = this.modalCtrl.create('AddEnderecoPage');
    modal.present();
  }*/
  usarEndereco(){

  }
  presentTost(mensagem) {
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'position',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  

}
