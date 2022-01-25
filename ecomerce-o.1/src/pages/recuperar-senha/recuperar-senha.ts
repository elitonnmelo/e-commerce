import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-recuperar-senha',
  templateUrl: 'recuperar-senha.html',
})
export class RecuperarSenhaPage {
  email = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu : MenuController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecSenhaPage');
  }

  ionViewCanEnter() {
    this.userProvider.lerLocal().then(userID => {
      if (userID) {
        this.navCtrl.setRoot('FsxureiaPage')
      }
    });
  }

  ionViewDidEnter() {
    this.setVisibleMenu(false);
  }

  recuperar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present()

    this.userProvider.recuperarSenha(this.email).then(_data => {
      loader.dismiss()
      this.showAlert('Olá', 'Mandamos um email para você, abra-o para recuperar sua senha.');
    }).catch(_error => {
      loader.dismiss()
      this.showAlert('Erro', 'Não foi possível enviar o e-mail, entre em contato com o administrador do sistema.');
      
    });

  }

  showAlert(titulo, descricao) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: descricao,
      cssClass: 'alert',
      buttons: [
        {
          text: 'OK',
          cssClass: 'btn btn-ok',
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  setVisibleMenu(status=false){
    this.menu.enable(status);
    this.menu.swipeEnable(status);
  }
}
