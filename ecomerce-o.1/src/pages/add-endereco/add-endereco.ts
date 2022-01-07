import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Enderecos } from '../../models/enderecos';
import { EnderecosProvider } from '../../providers/enderecos/enderecos';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-add-endereco',
  templateUrl: 'add-endereco.html',
})
export class AddEnderecoPage {
  titulo = ''; 
  item = new Enderecos();
  itemID = undefined;
  id: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private storage: Storage,
    public userProvider: UserProvider,
    public enderecoProvider: EnderecosProvider,
    public afs: AngularFirestore

    
    ) {
      //pegar id do usuario
     



      //endereços
      const itemID = this.navParams.get('itemID');
      const item = this.navParams.get('item');
      console.log(itemID);

      if(itemID) {
        
        this.item = item;
        this.itemID = itemID;
        this.titulo = 'Atualizar';

      } else {
        this.itemID = undefined;
        this.item = new Enderecos();
        this.titulo = 'Inserir';
      }
  }

  

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AddEnderecoPage');
    this.storage.get('id').then((resolve) => {
      this.id = resolve;

      if(this.id) {
          
        this.item = this.item;
        this.itemID = this.id;
        this.titulo = 'Atualizar';

      } else {
        this.itemID = undefined;
        this.item = new Enderecos();
        this.titulo = 'Inserir';
      }
    })
  }
  salvar2(local: string){
    this.item.lat = parseFloat(this.item.lat + '');
    this.item.lng = parseFloat(this.item.lng + '');
    this.afs.firestore.doc('/enderecos').collection(this.id).
    if(this.id) { //atualizar
      this.enderecoProvider.atualizarFS(this.id, this.item).then(_ => {
        this.presentTost('Endereço atualizado com sucesso');
        this.viewCtrl.dismiss();
      })
    } else { //inserir
      this.enderecoProvider.inserirFS(this.item).then(_ =>{
        this.presentTost('Endereço adicionado com sucesso');
        this.viewCtrl.dismiss();
      });
    }
  }*/


  fechar() {
    this.viewCtrl.dismiss();
  }

  salvar() {
    console.log(this.item);
    this.item.lat = parseFloat(this.item.lat + '');
    this.item.lng = parseFloat(this.item.lng + '');
    if(this.itemID) { //atualizar
      this.enderecoProvider.atualizarFS(this.itemID, this.item).then(_ => {
        this.presentTost('Endereço atualizado com sucesso');
        this.viewCtrl.dismiss();
      })
    } else { //inserir
      this.enderecoProvider.inserirFS(this.item).then(_ =>{
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
            this.enderecoProvider.removerFS(this.itemID)
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
