import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the RecuperarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-senha',
  templateUrl: 'recuperar-senha.html',
})
export class RecuperarSenhaPage {
  email='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider,
    public alertCtrl: AlertController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarSenhaPage');
  }
  recuperar() {
    this.userProvider.recuperarSenha(this.email);
    this.showAlert();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Verifique sua caixa de e-mail para receber sua nova senha!',
      buttons: ['OK']
    });
    alert.present();
  }


}
