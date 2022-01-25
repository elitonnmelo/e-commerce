import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import {Storage} from "@ionic/storage";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email= '';
  senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu : MenuController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public alertCtrl: AlertController,
    public storage: Storage

    ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  ionViewCanEnter() {
    this.userProvider.lerLocal().then(userID => {
      if (userID) {
        this.navCtrl.setRoot('HomePage')
      }
    });
  }

  ionViewDidEnter() {
    this.setVisibleMenu(false);
  }

  cadastro() {
    this.navCtrl.push('CadastroPage');
  }

  esqueciSenha() {
    this.navCtrl.push('RecuperarSenhaPage');
  }

  entrar(){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present();

    
    this.userProvider.login(this.email, this.senha)
      .then(user => {
        loader.dismiss();
        console.log('sucesso');

        this.userProvider.salvarLocal(user.uid).then( _data => {
          this.setVisibleMenu(true);
          this.navCtrl.setRoot('HomePage');
        })
        
      }).catch(error => {
        loader.dismiss();
        console.log('error', error);
        this.showAlertErro();
      })
  }

  showAlertErro() {
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Erro, não foi possível realizar seu login. Por favor verificar seu e-mail e senha!',
      buttons: ['OK']
    });
    alert.present();
  }

  setVisibleMenu(status=false){
    this.menu.enable(status);
    this.menu.swipeEnable(status);
  }

}
 