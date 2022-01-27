import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { CartaoProvider } from '../../providers/cartao/cartao';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';



@IonicPage()
@Component({
  selector: 'page-formas-de-pagamento',
  templateUrl: 'formas-de-pagamento.html',
})
export class FormasDePagamentoPage {
  itemArr = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public cartaoProvider: CartaoProvider,
    public userProvider: UserProvider,
    
    ) {
      this.userProvider.lerLocal().then(_userId => {
        this.userProvider.byIdFS(_userId).take(1).subscribe(_data => {
          const _user = new User(_data);
          console.log('user', _user);

          this.cartaoProvider.listarFS(_user.id).subscribe(_data => {
            console.log(_data);
            this.itemArr = _data;
          })
        })
      })
  }

  addItem() {
    const modal = this.modalCtrl.create('AddCartaoPage');
    modal.present();
  }
  usarBoleto(){
    console.log("O metodo de pagamento utilizado foi boleto")
  }
  selecionarCartao( _item){
    const itemID = _item.key;
    const item = _item.value;
    //console.log(itemID, item);
    var valor = item;
    var valorID = itemID;
    console.log(valor, valorID);
    this.viewCtrl.dismiss();
    this.presentTost('Cartão selecionado!');
    
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

  editItem(_item) {
    const itemID = _item.key;
    const item = _item.value;

    const modal = this.modalCtrl.create('AddCartaoPage', { itemID: itemID, item: item } );
    modal.present();
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

}

