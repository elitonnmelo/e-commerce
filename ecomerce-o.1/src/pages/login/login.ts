import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import {Storage} from "@ionic/storage";
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email= '';
  senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider,
    public alertCtrl: AlertController,
    public storage: Storage

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  cadastro() {
    this.navCtrl.push('CadastroPage');
  }

  esqueciSenha() {
    this.navCtrl.push('RecuperarSenhaPage');
  }
  entrar(){
    //this.navCtrl.push('HomePage');
    this.email;
    this.senha;
    this.userProvider.login(this.email, this.senha)
      .then(user => {
        console.log('sucesso');
        this.userProvider.salvarLocal(user.uid).then( _data => {
          this.navCtrl.setRoot(HomePage);
        })
        
      }).catch(error => {
        this.showAlertErro();
      })
  }
  showAlertErro() {
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Erro, não foi possível realizar seu login. Por favor verificas seu e-mail e senha!',
      buttons: ['OK']
    });
    alert.present();
  }


}
 