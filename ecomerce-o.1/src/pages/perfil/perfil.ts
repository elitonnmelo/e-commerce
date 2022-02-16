import { Component, ViewChild  } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';
import { FirebaseStorageProvider } from '../../providers/firebase-storage/firebase-storage';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  @ViewChild('fileUserPhoto') fileUserPhoto;
  
  item = new User();
  foto = 'assets/imgs/user.png';
  isUploaded = false;

  items = [
    'Meu carrinho',
    'Favoritos',
    'Meus pedidos',
    'Meus serviços',
    'Minhas demandas',
    'Dados da conta',
    'Endereços para entrega',
    'Formas de pagamento'
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage,
    public firebaseStorageProvider: FirebaseStorageProvider,
    public userProvider: UserProvider,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
    
    ) {
  }
  itemSelected(item: string) {
    console.log("Item selecionado", item);
    if (item == "Dados da conta"){
      const modal = this.modalCtrl.create('DadosDaContaPage');
      modal.present();
    }
    if (item == "Formas de pagamento"){
      const modal = this.modalCtrl.create('FormasDePagamentoPage');
      modal.present();
    }
    if (item == "Meu carrinho"){
      this.navCtrl.push('CarrinhoPage');
    }
    if (item == "Meus pedidos"){
      this.navCtrl.push('MeusPage');
    }
    if (item == "Favoritos"){
      this.navCtrl.push('FavoritosPage');
    }
    if (item == "Endereços para entrega"){
      const modal = this.modalCtrl.create('EndereçosPage');
      modal.present();
    }
    if (item == "Minhas demandas"){
      this.navCtrl.push('MinhasDemandasPage');
    }
    
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');

    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new User(_user);
        console.log(this.item.id);

        if(this.item.id !== '') {
          const path = '/user/' + this.item.id + '/foto.jpg';
          this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
            this.foto = _data;
          }).catch(error => {
            console.log(error)
          });
        }

      })
    }) 

  }
  
  escolherFoto() {
    this.fileUserPhoto.nativeElement.click();
  }

  logout(){
    this.userProvider.removeLocal().then(_data => {
      this. navCtrl.setRoot('LoginPage'); 
    })
  }


  processWebImage($event){
    this.firebaseStorageProvider.processWebImage($event, (imageBase64, w, h) => {
      this.foto = imageBase64;
      this.isUploaded = true;
    });
  }

  salvar() {
    if(this.isUploaded) {
      this.firebaseStorageProvider.uploadImageStorage(this.foto, '/user/' + this.item.id + '/foto.jpg');
    }
  }

}
