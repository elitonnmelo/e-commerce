import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';
import { FirebaseStorageProvider } from '../../providers/firebase-storage/firebase-storage';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage,
    public firebaseStorageProvider: FirebaseStorageProvider,
    public userProvider: UserProvider
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');

    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byId(_userId).subscribe(_user => {
        this.item = new User();
        this.item.id = _userId;
        this.item.nome = _user['nome'];
        this.item.email = _user['email'];


        const path = '/user/' + this.item.id + '/foto.jpg';
        this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
          this.foto = _data;

        });

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
