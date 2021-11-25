import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  openFilter(){
    this.navCtrl.push('FilterPage')
    //const modal = this.modalCtrl.create('FilterPage');
    //modal.present();
  
  }
  perfil(){
    this.navCtrl.push('PerfilPage')
  }

}
