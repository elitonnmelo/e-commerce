import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome= '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider,
    public alertCtrl: AlertController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  cadastrar(){

    let usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      //confirmarSenha: this.confirmarSenha
    }

    this.userProvider.cadastro(usuario);
    this.showAlert();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Cadastro realizado com sucesso!',
      buttons: [
        {
        text: 'OK',
          handler: data => {
            this.navCtrl.pop();
          }
      }]
    });
    alert.present();
  }

}
