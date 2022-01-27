import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { EnderecosProvider } from '../../providers/enderecos/enderecos';

/*import {
  FormGroup,
  FormControl

} from '@angular/forms';
*/


@IonicPage()
@Component({
  selector: 'page-selecionar-endereco',
  templateUrl: 'selecionar-endereco.html',
})
export class SelecionarEnderecoPage {
  //langs;
  //langForm;
  itemArr = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public enderecoProvider: EnderecosProvider
    
    
    ) {
    /*this.langForm = new FormGroup({
      "langs": new FormControl({value: 'enderecoSelecionado'})
    });*/
    /*this.enderecoProvider.listarFS(_user.id).subscribe(_data => {
      console.log(_data);
      this.itemArr = _data;
    })*/
  }
  /*doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }*/ 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecionarEnderecoPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  usarEndereco(){
    this.viewCtrl.dismiss();
    this.presentTost('Endereço selecionado com sucesso');
    //console.log(enderecoSelecionado)

  }
  presentTost(mensagem) {
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'position',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
