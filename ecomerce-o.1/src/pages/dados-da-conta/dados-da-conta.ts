import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { FirebaseStorageProvider } from '../../providers/firebase-storage/firebase-storage';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the DadosDaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-da-conta',
  templateUrl: 'dados-da-conta.html',
})
export class DadosDaContaPage {
  @ViewChild('fileUserPhoto') fileUserPhoto;

  item = new User();
  foto = '../../assets/imgs/user.png'
  isUploaded = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    public firebaseStorageProvider: FirebaseStorageProvider,
    public loadingCtrl: LoadingController ,
    public platform: Platform,
    public viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosDaContaPage');
    this.userProvider.lerLocal().then(_userId => {
      console.log('teste 0', _userId);
      this.userProvider.byId(_userId).subscribe(_user => {
        console.log('teste 3', _user);
        this.item = new User();
        this.item.id = _userId;
        this.item.nome = _user['nome'];
        this.item.email = _user['email'];
        console.log('teste 1');
        const path = '/user/' + this.item.id + '/foto.jpg';
        this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
          this.foto = _data;
          console.log('teste 2');

          //loader.dismiss();
        }).catch(error => {
          console.log('erro',error);
        })
      })
    })


  }

  salvar() {
    if(this.isUploaded){
      this.firebaseStorageProvider.uploadImageStorage(this.foto, '/user/' + this.item.id + '/foto.jpg');
    }
    
  }
  
  processWebImage($event){
    this.firebaseStorageProvider.processWebImage($event, (imageBase64, w, h) => {
      this.foto = imageBase64;
      this.isUploaded = true;
    });
  }

  escolherFoto() {
    const isMobile = this.platform.is('cordova');
    console.log('mobile', isMobile);
    
    if(isMobile) {
      this.abrirCelular();
    } else {
      this.abrirArquivos();
    }
  }
  abrirArquivos() {
    this.fileUserPhoto.nativeElement.click();
  }

  abrirCelular() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione',
      buttons: [
        {
          text: 'Câmera',
          role: 'destructive',
          handler: () => {
           // this.abrirCamera();
          }
        },{
          text: 'Galeria',
          handler: () => {
            //this.abrirGaleria();
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }




  //novo ate aqui
  fechar() {
    this.viewCtrl.dismiss();
  }




}
