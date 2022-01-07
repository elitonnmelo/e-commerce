import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Cartao } from '../../models/cartao';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { CartaoProvider } from '../../providers/cartao/cartao';

@IonicPage()
@Component({
  selector: 'page-add-cartao',
  templateUrl: 'add-cartao.html',
})
export class AddCartaoPage {
  titulo = ''; 
  item = new Cartao();
  itemID = undefined;
  id: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private storage: Storage,
    public userProvider: UserProvider,
    public cartaoProvider: CartaoProvider,
    public afs: AngularFirestore

    
    ) {

      const itemID = this.navParams.get('itemID');
      const item = this.navParams.get('item');
      console.log(itemID);

      if(itemID) {
        
        this.item = item;
        this.itemID = itemID;
        this.titulo = 'Atualizar';

      } else {
        this.itemID = undefined;
        this.item = new Cartao();
        this.titulo = 'Inserir';
      }
  }


  fechar() {
    this.viewCtrl.dismiss();
  }

  salvar() {
    console.log(this.item);
    if(this.itemID) { //atualizar
      this.cartaoProvider.atualizarFS(this.itemID, this.item).then(_ => {
        this.presentTost('Cartão atualizado com sucesso');
        this.viewCtrl.dismiss();
      })
    } else { //inserir
      this.cartaoProvider.inserirFS(this.item).then(_ =>{
        this.presentTost('Cartão adicionado com sucesso');
        this.navCtrl.pop();
      });
    }


  }
  excluir() {

    const confirm = this.alertCtrl.create({
      title: 'Excluir?',
      message: 'Tem certeza que deseja excluir este cartão?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.cartaoProvider.removerFS(this.itemID)
              .then(_ => {
                console.log('Ok');
                this.viewCtrl.dismiss();
                
              })
              .catch(error => {
                console.log('Erro', error);
              })
          }
        }
      ]
    });
    confirm.present();
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
