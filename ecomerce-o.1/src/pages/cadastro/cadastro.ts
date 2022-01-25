import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import { Usuarios } from '../../models/usuarios';
import { UserProvider } from '../../providers/user/user';

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
    private menu : MenuController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public alertCtrl: AlertController
    
    ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CadastroPage');
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

  cadastrar(){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present();

    let usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      //confirmarSenha: this.confirmarSenha
    }

    this.userProvider.cadastro(usuario).then(_data => {
      loader.dismiss();
      this.showAlert('Sucesso', 'Cadastro realizado com sucesso!');
    }).catch(_error => {
      loader.dismiss()
      this.showAlert('Erro', 'Não foi possível realizar seu cadastro, entre em contato com o administrador do sistema.');
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
