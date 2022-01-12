import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Demanda } from '../../models/demanda';
import { DemandasProvider } from '../../providers/demandas/demandas';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddDemandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-demanda',
  templateUrl: 'add-demanda.html',
})
export class AddDemandaPage {
  titulo = ''; 
  item = new Demanda();
  itemID = undefined;
  id: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private storage: Storage,
    public userProvider: UserProvider,
    public demandaProvider: DemandasProvider,
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
        this.item = new Demanda();
        this.titulo = 'Inserir';
      }
  }

  ionViewDidLoad() {

  }


  fechar() {
    this.viewCtrl.dismiss();
  }

  salvar() {
    if(this.itemID) { //atualizar
      this.demandaProvider.atualizarFS(this.itemID, this.item).then(_ => {
        this.presentTost('Endereço atualizado com sucesso');
        this.viewCtrl.dismiss();
      })
    } else { //inserir
      this.demandaProvider.inserirFS(this.item).then(_ =>{
        this.presentTost('Endereço adicionado com sucesso');
        this.navCtrl.pop();
      });
    }


  }
  excluir() {

    const confirm = this.alertCtrl.create({
      title: 'Excluir?',
      message: 'Tem certeza que deseja excluir este endereço?',
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
            this.demandaProvider.removerFS(this.itemID)
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
