import { Produto } from './../../models/produto';
import { ProdutosProvider } from './../../providers/produtos/produtos';
import { Component, ViewChild } from '@angular/core';
import { IonicPage,  LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseStorageProvider } from '../../providers/firebase-storage/firebase-storage';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CadastarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastar',
  templateUrl: 'cadastar.html',
})
export class CadastarPage {

  @ViewChild('fileUserPhoto') fileUserPhoto;

  foto = '../../assets/imgs/foto-icone.png';
  item = new Produto();
  produtoID = undefined;
  isUploaded = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public afs: FirebaseStorageProvider,
    private storage: Storage
    

    ) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CadastrarPage');
  
    (_produtosID =>{
      this.produtosProvider.byId(_produtosID).subscribe(_produtos =>{
  
        this.item = new Produto();
        this.item.id = _produtosID
        this.item.nome = _produtos['nome']
        this.item.preco = _produtos['preco']
  
        const path = '/produdos/' + this.item.id + '/foto.jpg'
        this.afs.downloadImageStorage(path).then(_data => {
          console.log('foto', _data)
  
          this.foto = _data
        });
  
      })
    })
  }
  
    escolherFoto() {
      this.fileUserPhoto.nativeElement.click();
    }
  
    processWebImage($event){
      this.afs.processWebImage($event, (imageBase64, w, h) => {
        this.foto = imageBase64;
        this.isUploaded = true;
      });
    }
  
    salvar(){
        this.produtosProvider.inserir(this.item).then(_ => {
          if (this.isUploaded){
            this.afs.uploadImageStorage(this.foto, '/produtos/' + this.item.id + '/foto.jpg');
            console.log('salvar deu certo')
      }
          this.presentToast('Produto cadastrado com sucesso');
          this.navCtrl.setRoot('HomePage');
        });
    }
  
    presentToast(mensagem) {
      const toast = this.toastCtrl.create({
        message: mensagem,
        duration: 3000,
        showCloseButton : true,
        closeButtonText : 'ok'
      });
      toast.present();
    }

}
